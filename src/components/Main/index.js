import React from "react";
import "./styles.scss";
import { Route, Switch } from "react-router-dom";
import AddDog from "../AddDog";
import Search from "../Search";
import EditDog from "../EditDog";

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
    getDog,
    handleEditDog
  } = props;
  return (
    <div className="main__container">
      <Switch>
        <Route
          exact
          path="/"
          render={routerProps => (
            <Search
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
        <Route
              path="/editdog/:id"
              render={routerProps => (
                <EditDog match={routerProps.match} handleEditDog={handleEditDog}  newDog={newDog} handleInputChange={handleInputChange}
                dogToEdit={getDog(routerProps.match.params.id)}
                  />
              )}
            />
      </Switch>
    </div>
  );
};

export default Main;
