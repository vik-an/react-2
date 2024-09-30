import { useParams } from "react-router-dom";
import React from "react";
//import CategoryList from "../modules/MidBar/CategoryList";

const SearchCategory = () => {
  const { category } = useParams();
  if (!category) {
    return <p>This category section is empty</p>; // Handle case when business is undefined
  }

  return <div>CATEGORY jeeee {category}</div>;
};
export default SearchCategory;
