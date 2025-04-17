import React from "react";
import Slider from "../src/components/Slider/Sliders";
import Categories from "../src/components/Categories/Categories";
import Products from "../src/components/Products/Products";
import Campaigns from "../src/components/Campaigns/Campaigns";
import Blogs from "../src/components/Blogs/Blogs";
import Brands from "../src/components/Brands/Brands";
import CampaignSingle from "../src/components/CampaignSingle/CampaignSingle";

const HomePage = () => {
  return (
    <React.Fragment>
      <Slider />
      <Categories />
      <Products />
      <Campaigns />
      <Products />
      <Blogs />
      <Brands />
      <CampaignSingle />
    </React.Fragment>
  );
};

export default HomePage;
