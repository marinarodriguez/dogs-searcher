import React from "react";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import PropTypes from "prop-types";

const Homepage = props => {
  const {
    dataDogs,
    filter,
    handleFilter,
    handleDelete,
    isLoading,
    handleInputChange,
    newDog,
    handleAdd,
    isDisabled,
    getDog,
    handleEditDog
  } = props;
  return (
    <div>
      <Header />
      <Main
        dataDogs={dataDogs}
        filter={filter}
        handleFilter={handleFilter}
        handleDelete={handleDelete}
        isLoading={isLoading}
        handleInputChange={handleInputChange}
        newDog={newDog}
        handleAdd={handleAdd}
        isDisabled={isDisabled}
        getDog={getDog}
        handleEditDog={handleEditDog}
      />
      <Footer />
    </div>
  );
};

Homepage.propTypes = {
  dataDogs: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  newDog: PropTypes.object.isRequired,
  handleAdd: PropTypes.func.isRequired
};

export default Homepage;
