import React from "react";
import './styles.scss';

const AddDog = props => {
  return (
    <div className="add-dog__container">
      <form className="form__add">
        <label className="label__add" htmlFor="name"> name:</label>
        <input className="input__add" id="name" name="name" type="text" required/>
        <label className="label__add"  htmlFor="age"> age: </label>
        <input className="input__add" id="age" name="age" type="number" required/>
        <label className="label__add"  htmlFor="gender"> gender: </label>
        <select className="input__add select__add" id="gender" name="gender" >
            <option value="female">female</option>
            <option value="male">male</option>
        </select>
        <label className="label__add"  htmlFor="breed"> breed:  </label>
        <input className="input__add" id="breed" name="breed" type="text" required/>
        <label className="label__add"  htmlFor="location"> location:</label>
        <input className="input__add" id="location" name="location" type="text" required/>
        <button className="btn__add">Add Doggo</button>
      </form>
    </div>
  );
};

export default AddDog;
