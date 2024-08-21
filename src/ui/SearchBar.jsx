import { BiSearchAlt } from "react-icons/bi";
import Input from "./Input";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function SearchBar({ filterField, defaultValue = "" }) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let value = searchParams.get(filterField);

    if (!value) {
      searchParams.set(filterField, defaultValue);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, filterField, defaultValue]);

  const value = searchParams.get(filterField) || defaultValue;

  const handleChange = (e) => {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <Input
      value={value}
      onChange={handleChange}
      name="search"
      placeHolder="جستجو"
    >
      <BiSearchAlt className="w-6 h-6 text-primary-600" />
    </Input>
  );
}

export default SearchBar;
