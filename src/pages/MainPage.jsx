import { useProducts } from "../context/ProductsContext";
import AddNewCategory from "../features/Categories/AddNewCategory";
import AddNewProduct from "../features/Products/AddNewProduct";
import FilterProducts from "../features/Products/FilterProducts";
import ProductsTable from "../features/Products/ProductsTable";
import { useLocation } from "react-router-dom";
import NumOfItems from "../ui/NumOfItems";
function MainPage() {
  const { search } = useLocation();
  const {
    sort: sortValue,
    search: searchValue,
    category: categoryValue,
  } = Object.fromEntries(new URLSearchParams(search));
  const products = useProducts();

  const filteredProducts = products
    .filter((product) => product.title.includes(searchValue))
    .sort((a, b) => {
      switch (sortValue) {
        case "latest":
          return new Date(b.createdAt) - new Date(a.createdAt);
        case "earliest":
          return new Date(a.createdAt) - new Date(b.createdAt);
        default:
          return 0;
      }
    })
    .filter((product) => {
      if (categoryValue === "ALL") {
        return true;
      }
      return product.category === categoryValue;
    });

  return (
    <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-6 lg:gap-y-0 container xl:max-w-screen-xl lg:px-8">
      <div className="flex-1 flex flex-col gap-y-6 bg-secondary-50 p-4 rounded-3xl">
        <div className="lg:hidden">
          <NumOfItems />
        </div>
        <AddNewCategory />
        <AddNewProduct />
      </div>
      <div className="flex-1 flex flex-col gap-y-4 bg-secondary-50 p-4 rounded-3xl max-h-[40rem] lg:max-w-[50%]">
        <FilterProducts />
        <ProductsTable products={filteredProducts} />
      </div>
    </div>
  );
}

export default MainPage;
