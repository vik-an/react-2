import MidBar from "../layout/MidBar";
import React from "react";
import CategoryList from "../layout/CategoryList";
import PopularBusiness from "../layout/PopularBusines";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext.jsx";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <MidBar />
      <CategoryList />
      <div>
        {user ? (
          <PopularBusiness />
        ) : (
          <div>
            <h2>Recommended business</h2>
            <p>Please Log in and see the business you like</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
