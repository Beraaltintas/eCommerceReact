import "./Products.css";
import ProductItem from "./ProductItem";
import "./Products.css";
import { useEffect, useState } from "react";
import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { message } from "antd";

function NextBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--right" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}
NextBtn.propTypes = {
  onClick: PropTypes.func,
};

function PrevBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--left" onClick={onClick}>
      <i className="bi bi-chevron-left"></i>
    </button>
  );
}
PrevBtn.propTypes = {
  onClick: PropTypes.func,
};

const Products = () => {
  const [products, setProducts] = useState([]);

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          message.error("Data fetch Failed");
        }
        console.log(response);
      } catch (error) {
        console.log("Data error:", error);
      }
    };
    fetchProducts();
  }, [apiUrl]);
  
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
                <ProductItem productItem={product} key={product._id} />
              ))}
            </Slider>
          
        </div>
      </div>
    </section>
  );
};

export default Products;
