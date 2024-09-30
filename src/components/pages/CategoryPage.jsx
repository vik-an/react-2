import React from "react";
import { useParams } from "react-router-dom";
import styles from "./CategoryPages.module.scss";
import VcategoryList from "../category/VerticalCategoryList";
import BusinessList from "../layout/BusinessList";

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <div className={styles.container}>
      <div>
        <VcategoryList />
      </div>
      <div className={styles.container2}>
        <p className={styles.title}>{category}</p>
        <div>
          <BusinessList category={category} />
        </div>
      </div>
    </div>
  );
};
export default CategoryPage;
