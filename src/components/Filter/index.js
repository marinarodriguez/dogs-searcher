import React from "react";
import "./styles.scss";

const Filter = props => {
  const { filter, handleFilter } = props;
  return (
    <div className="filter__container">
      <form className="filter__form">
        <input
          type="text"
          className="filter__input"
          placeholder="yorkshire"
          value={filter}
          onChange={handleFilter}
          id="breed_searcher"
        />
        <label className="filter__label" htmlFor="breed_searcher" />
      </form>
    </div>
  );
};

export default Filter;
