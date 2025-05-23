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
import ProductPage from "./Pages/Admin/Products/ProductPage";
import UpdateProductPage from "./Pages/Admin/Products/UpdateProductPage";
import CouponPage from "./Pages/Admin/Coupons/CouponPage";
import CreateCouponPage from "./Pages/Admin/Coupons/CreateCouponPage";
import UpdateCouponPage from "./Pages/Admin/Coupons/UpdateCouponPage";
import Success from "./Pages/Success";
import OrderPage from "./Pages/Admin/OrderPage";
import DashboardPage from "./Pages/Admin/DashboardPage";
import InformationsPage from "./Pages/Admin/Informations/InformationsPage";
import UpdateInformationPage from "./Pages/Admin/Informations/UpdateInformationPage";



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
      <Route path="/success" element={<Success />} />
      <Route path="/admin/*">
        <Route index element={<DashboardPage />} />
        <Route path="users" element={<UserPage />} />
        <Route path="users/:_id" element={<UserSinglePage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="products/update/:id" element={<UpdateProductPage />} />
        <Route path="coupons" element={<CouponPage />} />
        <Route path="coupons/create" element={<CreateCouponPage />} />
        <Route path="coupons/update/:id" element={<UpdateCouponPage />} />
        <Route path="orders" element={<OrderPage />} />
        <Route path="informations" element={<InformationsPage />} />
        <Route path="informations/update/:id" element={<UpdateInformationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
