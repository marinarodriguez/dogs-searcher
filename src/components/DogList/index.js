import React from "react";
import "./styles.scss";
import DogCard from "../DogCard";
import PropTypes from "prop-types";

const DogList = props => {
  const { dataDogs, handleDelete, isLoading } = props;
  if (isLoading) {
    return <p className="doglist__loader"> loading... </p>;
  } else if (dataDogs.length === 0) {
    return (
      <p className="doglist__loader">
        {" "}
        No results found, try a different breed{" "}
      </p>
    );
  } else {
    return (
      <div className="doglist__container">
        <p className="doglist__results">{dataDogs.length} results found</p>
        <ul className="doglist">
          {dataDogs.map((dog, index) => {
            return (
              <li key={index}>
                <DogCard dog={dog} handleDelete={handleDelete} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

DogList.propTypes = {
  dataDogs: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDelete: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default DogList;
