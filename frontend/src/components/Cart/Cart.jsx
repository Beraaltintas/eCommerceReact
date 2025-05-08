import React, { useContext } from "react";
import "./Cart.css"
import CartProgress from "./CartProgress";
import CartTAble from "./CartTable";
import CartCoupon from "./CartCoupon";
import CartTotals from "./CartTotals";
import { CartContext } from "../../context/CartProvider";



const Cart = () => {
    const { cartItems} = useContext(CartContext);
  return (
    <section className="cart-page">
      <div className="container">
        {cartItems.length > 0 ?         <div className="cart-page-wrapper">
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
        </div> : <h2>No Products!</h2> }

      </div>
    </section>
  );
};

export default Cart;
