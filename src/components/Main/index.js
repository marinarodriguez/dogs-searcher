import React from "react";
import "./styles.scss";
import DogList from "../DogList";
import { Route, Switch } from "react-router-dom";
import AddDog from "../AddDog";

const Main = props => {
  const {
    dataDogs,
    filter,
    handleFilter,
    handleDelete,
    isLoading,
    handleInputChange,
    newDog,
    handleAdd,
  } = props;
  return (
    <div className="main__container">
      <Switch>
        <Route
          exact
          path="/"
          render={routerProps => (
            <DogList
              dataDogs={dataDogs}
              filter={filter}
              isLoading={isLoading}
              handleFilter={handleFilter}
              handleDelete={handleDelete}
            />
          )}
        />
        <Route
          path="/adddog"
          render={routerProps => {
            return (
              <AddDog handleInputChange={handleInputChange} newDog={newDog} handleAdd={handleAdd} />
            );
          }}
        />
      </Switch>
    </div>
  );
};

export default Main;
