"use client";
import { useState } from "react";
import { SearchManufacturer } from "./";

const SearchBar = () => {
  const [manuFacturer, setManufacturer] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manuFacturer={manuFacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
