import React from "react";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

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
      />
      <Footer />
    </div>
  );
};

export default Homepage;
