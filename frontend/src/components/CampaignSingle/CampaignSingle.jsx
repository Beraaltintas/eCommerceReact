import React from "react";
import "./CampaignSingle.css";
const CampaignSingle = () => {
  return (
    <section className="campaign-single">
      <div className="container">
        <div className="campaign-wrapper">
          <h2 className="campaign-single-title">New Season Sale</h2>
          <strong>40% OFF</strong>
          <span></span>
          <a href="#" className="btn btn-lg">
            Shop Now <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CampaignSingle;
