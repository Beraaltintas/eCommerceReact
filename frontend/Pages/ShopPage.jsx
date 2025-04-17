import React from "react";
import Categories from "../src/components/Categories/Categories";
import Products from "../src/components/Products/Products";
import CampaignSingle from "../src/components/CampaignSingle/CampaignSingle";

const ShopPage = () => {
  return (
    <React.Fragment>
      <Categories />
      <Products />
      <CampaignSingle />
      <Products />
    </React.Fragment>
  );
};

export default ShopPage;
