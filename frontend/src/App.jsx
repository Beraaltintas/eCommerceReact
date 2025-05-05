import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import ContactPage from "./Pages/ContactPage";
import CartPage from "./Pages/CartPage";
import AuthPage from "./Pages/AuthPage";
import "./App.css";
import Auth from "./components/Auth/Auth";
import BlogPage from "./Pages/BlogPage";
import BlogDetailsPage from "./Pages/BlogDetailsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import AdminUserPage from "./Pages/Admin/UserPage";
import AdminUserSinglePage from "./Pages/Admin/UserSinglePage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/shop" element={<ShopPage/>}/>
      <Route path="/blog" element={<BlogPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/auth" element={<AuthPage/>}/>
      <Route path="/product/:id" element={<ProductDetailsPage/>}/>
      <Route path="/blog/:id" element={<BlogDetailsPage/>}/>
      <Route path = "/admin/*">
      <Route path="users" element={<AdminUserPage/>}/>
      <Route path="users/:_id" element={<AdminUserSinglePage/>}/>
      
      </Route>
      
    </Routes>
  );
}

export default App;
