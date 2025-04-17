import React from "react";
import "./Cart.css"
import CartProgress from "./CartProgress";
import CartTAble from "./CartTable";
import CartCoupon from "./CartCoupon";
import CartTotals from "./CartTotals";



const Cart = () => {
  return (
    <section className="cart-page">
      <div className="container">
        <div className="cart-page-wrapper">
          <form className="cart-form">
            <CartProgress/>
            <div className="shop-table-wrapper">
              <CartTAble/>
              <CartCoupon/>
            </div>
          </form>
          <div className="cart-colleterals">
            <CartTotals/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
