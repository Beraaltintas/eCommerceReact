import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header/Header";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Footer from "../components/Layout/Footer/Footer";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const { id: productId } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products/${productId}`);
        if (!response.ok) {
          throw new Error("Fetch error");
        }
        const data = await response.json();
        setSingleProduct(data);
      } catch (error) {
        console.log("Data error:", error);
      }
    };
    fetchSingleProduct();
  }, [apiUrl, productId]);

  return singleProduct ? (
    <ProductDetails singleProduct={singleProduct} setSingleProduct={setSingleProduct}/>
  ) : (
    <p>Product is not exisit</p>
  );
};

export default ProductDetailsPage;
