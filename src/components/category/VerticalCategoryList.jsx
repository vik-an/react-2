import React from "react";
import styles from "./VerticalCategoryList.module.scss";
import CategoryCard from "./CategoryCard.jsx";
import { categories } from "../consts/Category.jsx";

const VcategoryList = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Categories</h3>
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  );
};
export default VcategoryList;
