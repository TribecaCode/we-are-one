import React from "react";

const SearchForm = ({ klass, onSearch, keyword }) => {
  return (
    <form className={klass}>
      <div className="FiltersNavSearchInputContainer">
        <input
          onChange={onSearch}
          className="FiltersNavSearchInput"
          value={keyword || ""}
          placeholder="Search the guide"
          type="text"
        />
        <div className="FiltersNavSearchSubmit">
          <i className="fas fa-search" />
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
