import MidBar from "../layout/MidBar";
import React from "react";
import CategoryList from "../layout/CategoryList";
import PopularBusiness from "../layout/PopularBusines";

const Home = () => {
  return (
    <>
      <MidBar />
      <CategoryList />
      <PopularBusiness />
    </>
  );
};

export default Home;
