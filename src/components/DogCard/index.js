import React from "react";
import "./styles.scss";
import {Link} from "react-router-dom";

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
      <button className="btn__card delete" value={dog._id} onClick={handleDelete}>
        X
      </button>
      <Link to={`/editdog/${dog._id}`} className="btn__card edit">
        edit
      </Link>
    </div>
  );
};

export default DogCard;
