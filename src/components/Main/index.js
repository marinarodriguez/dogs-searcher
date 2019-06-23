import React from "react";
import "./styles.scss";
import { Route, Switch } from "react-router-dom";
import AddDog from "../AddDog";
import Search from "../Search";
import PropTypes from 'prop-types';

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
      </Switch>
    </div>
  );
};

Main.propTypes = {
  dataDogs: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  newDog: PropTypes.object.isRequired,
  handleAdd: PropTypes.func.isRequired
};


export default Main;
