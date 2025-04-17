import "./Products.css";
import ProductItem from "./ProductItem";
import ProductsData from "../../data.json";
import "./Products.css";
import { useState } from "react";
import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

function NextBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--right" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}
NextBtn.prototype = {
  onClick: PropTypes.func,
};

function PrevBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--left" onClick={onClick}>
      <i className="bi bi-chevron-left"></i>
    </button>
  );
}
PrevBtn.prototype = {
  onClick: PropTypes.func,
};

const Products = () => {
  const [products] = useState(ProductsData);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    autoplaySpeed:3000,
    autoplay:true,
    responsive:[{
      breakpoint: 992,
      settings:{
        slidesToShow:2
      }
    },
    {
      breakpoint: 520,
      settings:{
        slidesToShow:1
      }
    }
  ]
  };

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Summer Collection New Morden Design</p>
        </div>

        <div className="product-wrapper product-carousel">
          
            <Slider {...sliderSettings}>
              {products.map((product) => (
                <ProductItem product={product} key={product.id} />
              ))}
            </Slider>
          
        </div>
      </div>
    </section>
  );
};

export default Products;
