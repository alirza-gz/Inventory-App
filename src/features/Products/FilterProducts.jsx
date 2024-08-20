import { useCategories } from "../../context/CategoriesContext";
import FilterDropDown from "../../ui/FilterDropDown";
import SearchBar from "../../ui/SearchBar";

const sortOptions = [
  {
    label: "مرتب سازی بر اساس تاریخ ایجاد",
    value: "All",
  },
  {
    label: "جدید ترین",
    value: "latest",
  },
  {
    label: "قدیمی ترین",
    value: "earliest",
  },
];

function FilterProducts() {
  const categories = useCategories();
  const transformedCategories = categories.slice(1).map((category) => ({
    label: category.title,
    value: category.title,
  }));
  const categoriesOptions = [
    {
      label: "مرتب سازی بر اساس دسته بندی",
      value: "ALL",
    },
    ...transformedCategories,
  ];
  return (
    <div className="border-b-2 border-secondary-100 pb-8">
      <div className="flex flex-col gap-y-6">
        <div className="flex justify-between items-center gap-x-3 w-full">
          <SearchBar filterField="search" />
          <FilterDropDown filterField="sort" options={sortOptions} />
        </div>
        <div className="flex justify-between items-center">
          <FilterDropDown filterField="category" options={categoriesOptions} />
        </div>
      </div>
    </div>
  );
}

export default FilterProducts;
