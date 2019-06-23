import React from "react";
import "./styles.scss";
import Filter from "../Filter";
import DogList from "../DogList";

const Search = props => {
  const { dataDogs, filter, handleFilter, handleDelete, isLoading } = props;
    return (
      <div className="doglist__container">
        <Filter filter={filter} handleFilter={handleFilter} />
        <DogList dataDogs={dataDogs} handleDelete={handleDelete} isLoading={isLoading} />
      </div>
    );
};

export default Search;
