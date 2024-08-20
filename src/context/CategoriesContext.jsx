import { createContext, useContext, useReducer, useEffect } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

export const CategoriesContext = createContext();
export const CategoriesDispatchContext = createContext();

const categoriesReducer = (categories, action) => {
  switch (action.type) {
    case "addCategory": {
      return [...categories, action.payload];
    }
    default: {
      throw new Error("unknown action " + action.type);
    }
  }
};

export default function CategoriesProvider({ children }) {
  const [storedCategories, setStoredCategories] = useLocalStorageState("categories", [
    {
      title: "لطفا یکی از دسته بندی ها را انتخاب نمایید",
      description: "لطفا یکی از دسته بندی ها را انتخاب نمایید",
    },
  ]);
  const [categoriesList, dispatch] = useReducer(categoriesReducer, storedCategories);


  useEffect(() => {
    setStoredCategories(categoriesList);
  }, [categoriesList, setStoredCategories]);

  return (
    <CategoriesContext.Provider value={categoriesList}>
      <CategoriesDispatchContext.Provider value={dispatch}>
        {children}
      </CategoriesDispatchContext.Provider>
    </CategoriesContext.Provider>
  );
}

export const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error(
      "CategoriesContext was used outside of a CategoriesProvider"
    );
  }
  return context;
};

export const useCategoriesDispatch = () => {
  const context = useContext(CategoriesDispatchContext);
  if (context === undefined) {
    throw new Error("CategoriesDispatchContext was used outside of a CategoriesProvider");
  }
  return context;
};
