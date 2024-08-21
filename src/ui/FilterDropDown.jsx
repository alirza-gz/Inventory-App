import { useSearchParams } from "react-router-dom";
import Select from "./Select";
import { useEffect } from "react";

function FilterDropDown({ options, filterField, defaultValue = "" }) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let value = searchParams.get(filterField);

    if (!value && options.length > 0) {
      value = defaultValue || options[0].value;
      searchParams.set(filterField, value);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, filterField, defaultValue, options]);

  const value = searchParams.get(filterField) || defaultValue;

  const handleChange = (e) => {
    const value = e.target.value;
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };

  return (
    <div className="w-full">
      <Select value={value} onChange={handleChange} options={options} />
    </div>
  );
}

export default FilterDropDown;
