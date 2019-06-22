import React from "react";
import "./styles.scss";

const DogCard = props => {
  const { dog, handleDelete } = props;
  return (
    <div className="dog__card">
      <h2>{dog.name}</h2>
      <p>{dog.breed}</p>
      <p>{dog.age} years</p>
      <p>{dog.gender}</p>
      <p>
        <i className="fas fa-map-marker-alt" /> {dog.location}
      </p>
      <button className="btn__card" value={dog._id} onClick={handleDelete}>
        X
      </button>
    </div>
  );
};

export default DogCard;
