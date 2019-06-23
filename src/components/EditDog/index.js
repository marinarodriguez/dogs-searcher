import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const EditDog = props => {
  const { handleInputChange, newDog, dogToEdit, handleEditDog, isDisabled } = props;
  if (!dogToEdit) {
    return <p>Loading</p>;
  } else {
    return (
      <div className="add-dog__container">
        <form className="form__add">
          <label className="label__add" htmlFor="name">
            {" "}
            name:
          </label>
          <input
            value={newDog.name}
            placeholder={dogToEdit.name}
            onChange={handleInputChange}
            className="input__add"
            id="name"
            name="name"
            type="text"
            required
          />
          <label className="label__add" htmlFor="age">
            {" "}
            age:{" "}
          </label>
          <input
            value={newDog.age}
            placeholder={dogToEdit.age}
            onChange={handleInputChange}
            className="input__add"
            id="age"
            name="age"
            type="number"
            required
          />
          <label className="label__add" htmlFor="gender">
            {" "}
            gender:{" "}
          </label>
          <select
            value={newDog.gender}
            onChange={handleInputChange}
            className="input__add select__add"
            id="gender"
            name="gender"
          >
            <option value="female">female</option>
            <option value="male">male</option>
          </select>
          <label className="label__add" htmlFor="breed">
            {" "}
            breed:{" "}
          </label>
          <input
            value={newDog.breed}
            placeholder={dogToEdit.breed}
            onChange={handleInputChange}
            className="input__add"
            id="breed"
            name="breed"
            type="text"
            required
          />
          <label className="label__add" htmlFor="location">
            {" "}
            location:
          </label>
          <input
            value={newDog.location}
            placeholder={dogToEdit.location}
            onChange={handleInputChange}
            className="input__add"
            id="location"
            name="location"
            type="text"
            required
          />
          <Link className="link__header" to={`/`}><button type="button" className="btn__add" value={dogToEdit._id} disabled={isDisabled} onClick={handleEditDog}>
            Edit Doggo
          </button>
          </Link>
        </form>
      </div>
    );
  }
};

export default EditDog;
