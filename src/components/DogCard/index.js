import React from "react";
import './styles.scss';

const DogCard = props => {
  const { dog , handleDelete } = props;
  return (
    <div className="dog__card">
    
    <h2>{dog._id}</h2>
      <h2>{dog.name}</h2>
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age} years</p>
      <p>{dog.gender}</p>
      <p>{dog.location}</p>
      <button value={dog._id} onClick={handleDelete}>Borrar</button>
    </div>
  );
};

export default DogCard;
