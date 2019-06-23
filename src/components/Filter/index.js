import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

const Filter = props => {
  const { filter, handleFilter } = props;
  return (
    <div className="filter__container">
      <form className="filter__form">
        <input
          type="text"
          className="filter__input"
          placeholder="search breed"
          value={filter}
          onChange={handleFilter}
          id="breed_searcher"
        />
        <label className="filter__label" htmlFor="breed_searcher" />
      </form>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired
};

export default Filter;
