import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function FilterDropDown({ options, filterField}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get(filterField) || options.at(0).value;

  function handleChange(e) {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="w-full">
      <Select value={filterValue} onChange={handleChange} options={options} />
    </div>
  );
}

export default FilterDropDown;
