import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

const DogCard = props => {
  const { dog, handleDelete } = props;
  return (
    <div className="dog__card">
      <h2 className="dog__name">{dog.name}</h2>
      <div className="dog__info">
        <p>{dog.breed}</p>
        <p>{dog.age} years</p>
        <p>{dog.gender}</p>
        <p>
          <i className="fas fa-map-marker-alt location" /> {dog.location}
        </p>
      </div>
      <button
        className="btn__card delete"
        value={dog._id}
        onClick={handleDelete}
      >
        X
      </button>
    </div>
  );
};

DogCard.propTypes = {
  dog: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default DogCard;
