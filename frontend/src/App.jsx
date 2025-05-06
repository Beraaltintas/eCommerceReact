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
import UserPage from "./Pages/Admin/UserPage";
import UserSinglePage from "./Pages/Admin/UserSinglePage";
import CategoryPage from "./Pages/Admin/Categories/CategoryPage";
import UpdateCategoryPage from "./Pages/Admin/Categories/UpdateCategoryPage";
import CreateCategoryPage from "./Pages/Admin/Categories/CreateCategoryPage";
import CreateProductPage from "./Pages/Admin/Products/CreateProductPage";


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
      <Route path="users" element={<UserPage/>}/>
      <Route path="users/:_id" element={<UserSinglePage/>}/>
      <Route path="categories" element={<CategoryPage/>}/>
      <Route path="categories/update/:id" element={<UpdateCategoryPage/>}/>
      <Route path="categories/create" element={< CreateCategoryPage/>}/>
      <Route path="products/create" element={< CreateProductPage/>}/>
      
      </Route>
      
    </Routes>
  );
}

export default App;
