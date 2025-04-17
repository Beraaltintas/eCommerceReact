import "./CategoryItem.css";
const CategoriesItem = () => {
  return (
    <li className="category-item">
      <a href="#">
        <img
          src="img/categories/categories1.png"
          className="category-image"
          alt=""
        />
        <span className="category-title">Smartphone</span>
      </a>
    </li>
  );
};

export default CategoriesItem;
