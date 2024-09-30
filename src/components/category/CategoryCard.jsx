import { useNavigate, generatePath, useParams } from "react-router-dom";
import classNames from "classnames";
import UrlIcon from "../UrlIcons/UrlIcon";
import { ROUTES } from "../../routes/consts";
import styles from "./CategoryCard.module.scss";

const CategoryCard = ({ category }) => {
  const { name } = category;
  const navigate = useNavigate();
  const params = useParams();

  const categoryPath = generatePath(ROUTES.CATEGORY_PAGE, { category: name });
  const activeCategory = params.category;

  return (
    <div
      className={classNames(
        styles.card,
        activeCategory === name && styles.active
      )}
      onClick={() => navigate(categoryPath)}
    >
      <UrlIcon
        url={category.url}
        style={{ width: 48, height: 48, backgroundColor: category.color }}
      />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default CategoryCard;
