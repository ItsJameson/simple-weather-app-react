import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";


const SearchCity = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (city) => {
    city = city.toLocaleLowerCase();

    return fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={5000}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default SearchCity;
