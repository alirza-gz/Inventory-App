import { createContext, useContext, useEffect, useReducer } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

export const ProductsContext = createContext();
export const ProductsDispatchContext = createContext();

const productsReducer = (products, action) => {
  switch (action.type) {
    case "addProduct": {
      return [...products, action.payload];
    }
    case "deleteProduct": {
      return products.filter((product) => product.id !== action.payload);
    }
    case "editProduct": {
      const { newProduct, id } = action.payload;
      return products.map((product) =>
        product.id === id ? { ...product, ...newProduct } : product
      );
    }
    default: {
      throw new Error("unknown action " + action.type);
    }
  }
};

export default function ProductsProvider({ children }) {
  const [storedProducts, setStoredProducts] = useLocalStorageState(
    "products",
    []
  );
  const [productsList, dispatch] = useReducer(productsReducer, storedProducts);

  useEffect(() => {
    setStoredProducts(productsList);
  }, [productsList, setStoredProducts]);

  return (
    <ProductsContext.Provider value={productsList}>
      <ProductsDispatchContext.Provider value={dispatch}>
        {children}
      </ProductsDispatchContext.Provider>
    </ProductsContext.Provider>
  );
}

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("ProductsContext was used outside of a ProductsProvider");
  }
  return context;
};

export const useProductsDispatch = () => {
  const context = useContext(ProductsDispatchContext);
  if (context === undefined) {
    throw new Error(
      "ProductsDispatchContext was used outside of a ProductsProvider"
    );
  }
  return context;
};
