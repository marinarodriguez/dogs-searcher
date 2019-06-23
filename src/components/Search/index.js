import React from "react";
import "./styles.scss";
import Filter from "../Filter";
import DogList from "../DogList";
import PropTypes from 'prop-types';

const Search = props => {
  const { dataDogs, filter, handleFilter, handleDelete, isLoading } = props;
    return (
      <div className="doglist__container">
        <Filter filter={filter} handleFilter={handleFilter} />
        <DogList dataDogs={dataDogs} handleDelete={handleDelete} isLoading={isLoading} />
      </div>
    );
};

Search.propTypes = {
  dataDogs: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Search;
