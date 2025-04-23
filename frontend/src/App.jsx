import React from "react";
import HomePage from "../Pages/HomePage";
import ShopPage from "../Pages/ShopPage";
import "./App.css";
import ContactPage from "../Pages/ContactPage";
import Auth from "./components/Auth/Auth";
import AuthPage from "../Pages/AuthPage";
import CartPage from "../Pages/CartPage";
import BlogPage from "../Pages/BlogPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage";

function App() {
  return (
    <React.Fragment>
      {/* <HomePage /> */}
      {/* <ShopPage/> */}
      {/* <ContactPage/> */}
      {/* <AuthPage/> */}
      <CartPage/>
      {/* <BlogPage/> */}
      {/* <BlogDetailsPage/> */}
      {/* <ProductDetailsPage/> */}
    </React.Fragment>
  );
}

export default App;
