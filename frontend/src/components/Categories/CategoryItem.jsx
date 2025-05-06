import PropTypes from "prop-types";
import "./CategoryItem.css";
const CategoriesItem = ({ category }) => {
  return (
    <li className="category-item">
      <a href="#">
        <img src={category.img} className="category-image" alt="" />
        <span className="category-title">{category.name}</span>
      </a>
    </li>
  );
};

export default CategoriesItem;

CategoriesItem.propTypes = {
  category: PropTypes.object,
};
