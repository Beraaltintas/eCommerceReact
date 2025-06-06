import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Search.css";
import { message, Spin } from "antd";
import { Link } from "react-router-dom";
const Search = ({ isSearchShow, setIsSearchShow }) => {
  const [searchResults, setSearchResults] = useState(null);

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleCloseModal = () => {
    setIsSearchShow(false);
    setSearchResults(null);
  };
  const [loading, setLoading] = useState(false)
  const handleSearch = async (e) => {
    setLoading(true);
    e.preventDefault();
    const productName = e.target[0].value;
    if (productName.trim().length === 0) {
      message.warning("Null Value Cannot Be Sent");
      return;
    }

    try {
      const res = await fetch(
        `${apiUrl}/api/products/search/${productName.trim()}`
      );
      if (!res.ok) {
        message.warning("Product Fetch Error");
        return;
      }
      const data = await res.json();
      setSearchResults(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className={`modal-search ${isSearchShow ? "show" : ""}`}>
      <div className="modal-wrapper">
        <h3 className="modal-title">Search For Product</h3>
        <p className="modal-text">
          Start typing to see products you are looking for.
        </p>
        <form action="" className="search-form" onSubmit={handleSearch}>
          <input type="text" placeholder="Search a product" />
          <button>
            <i className="bi bi-search"></i>
          </button>
        </form>
        <div className="search-results">
          <div className="search-heading">
            <h3>RESULTS FROM PRODUCT</h3>
          </div>
          <div
            className="results"
            style={{
              display: `${
                searchResults?.length === 0 || !searchResults ? "flex" : "grid"
              }`,
            }}
          >
            {!searchResults && (
              <i
                className="result-item"
                style={{
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                Search products
              </i>
            )}
            {searchResults?.length === 0 && (
              <a
                href="#"
                className="result-item"
                style={{
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                😔Aradığınız Ürün Bulunamadı😔
              </a>
            )}
            {searchResults?.length > 0 &&
              searchResults?.map((resultItem) => (
                <Spin spinning={loading}>
                  {" "}
                  <Link 
                    to={`product/${resultItem._id}`}
                    className="result-item"
                    key={resultItem._id}
                    
                  >
                    <img
                      src={resultItem.img[0]}
                      className="search-thumb"
                      alt=""
                    />
                    <div className="search-info">
                      <h4>{resultItem.name}</h4>
                      <span className="search-sku">SKU: PD0016</span>
                      <span className="search-price">
                        ${resultItem.price.current.toFixed(2)}
                      </span>
                    </div>
                    
                  </Link>
                </Spin>
              ))}
          </div>
        </div>
        <i
          className="bi bi-x-lg"
          id="close-search"
          onClick={handleCloseModal}
        ></i>
      </div>
      <div className="modal-overlay" onClick={handleCloseModal}></div>
    </div>
  );
};

export default Search;
Search.propTypes = {
  isSearchShow: PropTypes.bool,
  setIsSearchShow: PropTypes.func,
};
