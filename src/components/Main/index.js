import React from "react";
import "./styles.scss";
import DogList from "../DogList";
import { Route, Switch } from "react-router-dom";
import AddDog from "../AddDog";

const Main = props => {
  const { dataDogs, filter, handleFilter, handleDelete } = props;
  return (
    <div className="main__container">
      <Switch>
        <Route exact path="/" render={routerProps => <DogList dataDogs={dataDogs} filter={filter} handleFilter={handleFilter} handleDelete={handleDelete}/>} />
        <Route
          path="/adddog"
          render={routerProps => {
            return <AddDog />;
          }}
        />
      </Switch>
    </div>
  );
};

export default Main;
