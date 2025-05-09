import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  //console.log(cartItems.length);

  const addToCart = (cartItem) => {
    // setCartItems([...cartItems, product]); 1. yol
    setCartItems((prevCart) => [
      ...prevCart,
      { ...cartItem, quantity: cartItem.quantity ? cartItem.quantity : 1, },
    ]);
  };
  const removeFromCart = (itemId) => {
    const filteredCartItems = cartItems.filter((cartItem) => {
      return cartItem._id !== itemId;
    });
    setCartItems(filteredCartItems);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
CartProvider.propTypes = {
  children: PropTypes.node,
};
