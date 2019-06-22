import React from 'react';
import "./styles.scss";
import Filter from '../Filter';
import DogCard from "../DogCard";

const DogList = (props) => {
    const { dataDogs, filter, handleFilter, handleDelete } = props 
    return ( <div className="doglist__container">
        <Filter filter={filter} handleFilter={handleFilter}  />
        <ul className="doglist">
            {dataDogs.map((dog, index) => {
                return (
                    <li key={index}><DogCard dog={dog} handleDelete={handleDelete}/></li>
            )
            })}
        </ul>
    </div> );
}
 
export default DogList;