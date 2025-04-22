import React, { useState } from 'react'
import "./Info.css";
const Info = () => {
  const [activeColor,setActiveColor] = useState("");
  const [activeValue, setActiveValue] = useState("");
  return (
    <div className="product-info">
                <h1 className="product-title">Ridley High Waist</h1>
                <div className="product-review">
                  <ul className="product-star">
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-half"></i></li>
                  </ul>
                  <span>2 reviews</span>
                </div>
                <div className="product-price">
                  <s className="old-price">$208.00</s>
                  <strong className="new-price">$100.00</strong>
                </div>
                <div className="product-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <form className="variations-form">
                    <div className="variations">
                      <div className="colors">
                        <div className="colors-label">
                          <span>Color</span>
                        </div>
                        <div className="colors-wrapper">

                          <div className={`color-wrapper ${activeColor ==='blue' ? 'active':''}`}
                          onClick={()=>{setActiveColor("blue")}}>
                            <label className="blue-color">
                              <input type="radio" name="product-color" />
                            </label>
                          </div>
                          <div className={`color-wrapper ${activeColor ==='red' ? 'active':''}`}
                          onClick={()=>{setActiveColor("red")}}>
                            <label className="red-color">
                              <input type="radio" name="product-color" />
                            </label>
                          </div>
                          <div className={`color-wrapper ${activeColor ==='green' ? 'active':''}`}
                          onClick={()=>{setActiveColor("green")}}>
                            <label className="green-color">
                              <input type="radio" name="product-color" />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="values">
                        <div className="values-label">
                          <span>Size</span>
                        </div>
                        <div className="values-list">
                          <span className={`xs ${activeValue === "xs" ?'active':""}`}
                          onClick={()=>setActiveValue("xs")}
                          >XS</span>
                          <span className={`s ${activeValue === "s" ?'active':""}`}
                          onClick={()=>setActiveValue("s")}
                          >S</span>
                          <span className={`m ${activeValue === "m" ?'active':""}`}
                          onClick={()=>setActiveValue("m")}
                          >M</span>
                          <span className={`l ${activeValue === "l" ?'active':""}`}
                          onClick={()=>setActiveValue("l")}>L</span>
                          <span className={`xl ${activeValue === "xl" ?'active':""}`}
                          onClick={()=>setActiveValue("xl")}>XL</span>
                        </div>
                      </div>
                      <div className="cart-button">
                        <input type="number" defaultValue="1" min="1" id="quantity"/>
                        <button className="btn btn-lg btn-primary" id="add-to-cart" type="button">
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
                      <a href="#">black</a>,
                      <a href="#">white</a>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default Info