import React from "react";
import styles from "./CategoryList.module.scss";
import UrlIcon from "../UrlIcons/UrlIcon";
import { ROUTES } from "../../routes/consts";
import { useNavigate, useParams, generatePath } from "react-router-dom";

const CategoryCard = ({ category }) => {
  if (!category) {
    return <p>No category data available</p>; // Handle case when business is undefined
  }
  const { name } = category;
  const navigate = useNavigate();
  const params = useParams();

  const categoryPath = generatePath(ROUTES.CATEGORY_PAGE, { category: name });
  //const activeCategory = params.category;

  return (
    <div className={styles.card} onClick={() => navigate(categoryPath)}>
      <UrlIcon
        url={category.url}
        style={{ width: 45, height: 45, backgroundColor: category.color }}
      />
      <p className={styles.name}>{name}</p>
    </div>
  );
};
export default CategoryCard;
