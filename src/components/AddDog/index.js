import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

const AddDog = props => {
  const { handleInputChange, newDog, handleAdd } = props;
  return (
    <div className="add-dog__container">
      <form className="form__add">
        <label className="label__add" htmlFor="name">
          {" "}
          name:
        </label>
        <input
          value={newDog.name}
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
          required
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
          onChange={handleInputChange}
          className="input__add"
          id="location"
          name="location"
          type="text"
          required="true"
        />
        <button type="button" className="btn__add" onClick={handleAdd}>
          Add Doggo
        </button>
      </form>
    </div>
  );
};

AddDog.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  newDog: PropTypes.object.isRequired,
  handleAdd: PropTypes.func.isRequired
};

export default AddDog;
