import { Button, Result } from "antd";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";

const Success = () => {
  const { setCartItems } = useContext(CartContext);

  useEffect(() => {
    setCartItems([]);
  }, [setCartItems]);

  return (
    <div className="success-page">
      <div className="container">
        <Result
          status="success"
          title="Successfully Purchased"
          subTitle="Order Completed."
          extra={[
            <Link to={"/"} key="home">
              <Button type="primary">Home Page</Button>
            </Link>,
            <a href="/cart" key={"cart"}>
              <Button key="buy">Cart</Button>
            </a>,
          ]}
        />
      </div>
    </div>
  );
};

export default Success;
