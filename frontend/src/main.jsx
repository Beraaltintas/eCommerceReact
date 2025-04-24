import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import App from "./App.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import CartProvider from "./context/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <MainLayout>
          <App />
        </MainLayout>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
