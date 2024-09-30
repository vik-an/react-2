import React from "react";
import styles from "./CategoryList.module.scss";
import CategoryCard from "./CategoryCard.jsx";
import { categories } from "../consts/Category.jsx";

const CategoryList = () => {
  return (
    <div className={styles.box}>
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  );
};
export default CategoryList;
