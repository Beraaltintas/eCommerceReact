import { message } from "antd";
import React, { useContext, useState } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../../context/CartProvider";

const CartCoupon = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false)
  const { cartItems, setCartItems } = useContext(CartContext);
  console.log(cartItems);

  const applyCoupon = async () => {
    if (couponCode.trim().length === 0) {
      return message.warning("Please Enter Coupon Code");
    }
    try {
      const res = await fetch(`${apiUrl}/api/coupons/code/${couponCode}`);
      if (!res.ok) {
        return message.error("Wrong Code");
      }
      const data = await res.json();
      const discountPercent = data.discountPercent;
      const updatedCartItems = cartItems.map((item) => {
        const updatePrice = item.price * (1 - discountPercent / 100);
        return { ...item, price: updatePrice };  
      });
      setCartItems(updatedCartItems);
      setCouponApplied(true);
      message.success("Coupon Applied");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="actions-wrapper">
      <div className="coupon">
        <input
          type="text"
          className="input-text"
          placeholder="Coupon code"
          onChange={(e) => setCouponCode(e.target.value)}
          value={couponCode}
        />
        <button
          type="button"
          className="btn btn-md"
          disabled={couponApplied}
          onClick={applyCoupon}
        >
          Apply Coupon
        </button>
      </div>
      <div className="update-cart">
        <button type="button" className="btn">
          Update cart
        </button>
      </div>
    </div>
  );
};

export default CartCoupon;
