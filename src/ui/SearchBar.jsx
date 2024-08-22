import { BiSearchAlt } from "react-icons/bi";
import Input from "./Input";
import { useSearchParams } from "react-router-dom";

function SearchBar({ filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get(filterField) || "";

  function handleChange(e) {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Input
      value={filterValue}
      onChange={handleChange}
      name="search"
      placeHolder="جستجو"
    >
      <BiSearchAlt className="w-6 h-6 text-primary-600" />
    </Input>
  );
}

export default SearchBar;
