import { BiSolidCategory, BiSolidParking } from "react-icons/bi";
import { toPersianNumbers } from "../utils/toPersianNumbers";
import { useCategories } from "../context/CategoriesContext";
import { useProducts } from "../context/ProductsContext";

function NumOfItems() {
  const categories = useCategories();
  const products = useProducts();

  return (
    <ul className="lg:mt-8 flex gap-x-4 lg:flex-col lg:gap-y-4 lg:gap-x-0 lg:justify-start tracking-wide">
      <li className="flex justify-between items-center rounded-lg bg-gradient-to-r from-primary-800 to-primary-400 px-4 py-3 text-white w-full">
        <div className="flex justify-center items-center">
          <BiSolidCategory className="text-white text-lg ml-2" />
          <span className="-mr-1 font-bold text-sm md:text-base">دسته بندی</span>
        </div>
        <span className="text-slate-800 flex justify-center items-center bg-white w-5 h-5 text-lg font-bold rounded-full p-3">
          {toPersianNumbers(categories.slice(1).length)}
        </span>
      </li>
      <li className="flex justify-between items-center rounded-lg bg-gradient-to-r from-primary-800 to-primary-400 px-4 py-3 text-white w-full">
        <div className="flex justify-center items-center">
          <BiSolidParking className="text-white text-lg ml-2" />
          <span className="-mr-1 font-bold text-sm md:text-base">محصول</span>
        </div>
        <span className="text-slate-800 flex justify-center items-center bg-white w-5 h-5 text-lg font-bold rounded-full p-3">
          {toPersianNumbers(products.length)}
        </span>
      </li>
    </ul>
  );
}

export default NumOfItems;
