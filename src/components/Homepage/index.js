import React from "react";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

const Homepage = props => {
  const { dataDogs, filter, handleFilter, handleDelete } = props;
  return (
    <div>
      <Header />
      <Main dataDogs={dataDogs} filter={filter} handleFilter={handleFilter} handleDelete={handleDelete}/>
      <Footer />
    </div>
  );
};

export default Homepage;
