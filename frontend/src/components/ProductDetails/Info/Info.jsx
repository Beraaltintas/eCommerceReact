import React, { useContext, useRef, useState } from "react";
import "./Info.css";
import PropTypes from "prop-types";
import ProductDetails from "../ProductDetails";
import { CartContext } from "../../../context/CartProvider";

const Info = ({ singleProduct }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  const quantityRef = useRef();
  const [activeColor, setActiveColor] = useState(0);
  const [activeValue, setActiveValue] = useState(0);

  const originalPrice = singleProduct.price.current;
  const discountPercentage = singleProduct.price.discount;
  //indirimli fiyat hesaplama
  const discountedPrice = originalPrice - (originalPrice * discountPercentage) / 100;
  const filteredCart = cartItems.find((cartItem)=> cartItem._id === singleProduct._id
  )

  const handleColor = (e, newColor)=>{
    e.preventDefault();
    setActiveColor(newColor)
  }
  const handleSizes = (e, newSize)=>{
    e.preventDefault();
    setActiveValue(newSize)
  }
  

  return (
    <div className="product-info">
      <h1 className="product-title">{singleProduct.name}</h1>
      <div className="product-review">
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <span>2 reviews</span>
      </div>
      <div className="product-price">
        <s className="old-price">${originalPrice.toFixed(2)}</s>
        <strong className="new-price">${discountedPrice.toFixed(2)}</strong>
      </div>
      <div
        className="product-desc"
        dangerouslySetInnerHTML={{ __html: singleProduct.description }}>

        </div>

      <form className="variations-form">
        <div className="variations">
          <div className="colors">
            <div className="colors-label">
              <span>Color</span>
            </div>
            <div className="colors-wrapper">
              {singleProduct.colors.map((color, index) => (
                <div
                  className={`color-wrapper ${activeColor === index ?'active': ""}`}
                  key={index}
                  onClick={(e)=>handleColor(e, index)}
                >
                  <label style={{ backgroundColor: `${color}` }}>
                    <input type="radio" name="product-color" />
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="values">
            <div className="values-label">
              <span>Size</span>
            </div>
            <div className="values-list">
              {singleProduct.sizes.map((sizes, index) => (
                <span className={activeValue=== index? 'active': ''} key={index} onClick={(e)=>handleSizes(e, index)}>
                  {sizes.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
          <div className="cart-button">
            <input
              type="number"
              defaultValue="1"
              min="1"
              id="quantity"
              ref={quantityRef}
            />
            <button
              className="btn btn-lg btn-primary"
              id="add-to-cart"
              type="button"
              disabled= {filteredCart}
              onClick={() =>
                addToCart({
                  ...singleProduct,
                  price: discountedPrice,
                  quantity: parseInt(quantityRef.current.value),})
              }
            >
              Add to Cart
            </button>
          </div>
          <div className="product-extra-buttons">
            <a href="">
              <i className="bi bi-globe"></i>
              <span>Size Guide</span>
            </a>
            <a href="">
              <i className="bi bi-heart"></i>
              <span>Add To Wishlist</span>
            </a>
            <a href="">
              <i className="bi bi-share"></i>
              <span>Share This Product</span>
            </a>
          </div>
        </div>
      </form>
      <div className="divider"></div>
      <div className="product-meta">
        <div className="product-sku">
          <span>SKU:</span>
          <strong>BE45VGRT</strong>
        </div>
        <div className="product-categories">
          <span>Categories:</span>
          <strong>Pants, Women</strong>
        </div>
        <div className="product-tags">
          <strong>Tags:</strong>
          <a href="#" >black</a>,<a href="#">white</a>
        </div>
      </div>
    </div>
  );
};

export default Info;
Info.propTypes = {
  singleProduct: PropTypes.object,
};
