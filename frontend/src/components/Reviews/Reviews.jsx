import React from "react";
import "./Reviews.css";
import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import PropsType from "prop-types";
const Reviews = ({active}) => {
  return (
    <div className={`tab-panel-reviews ${active}`}>
      <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
      <div className="comments">
        <ol className="comment-list">
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </ol>
      </div>

      <div className="review-form-wrapper">
        <h2>Add a Review</h2>
        <ReviewForm />
      </div>
    </div>
  );
};

export default Reviews;

Reviews.propsTypes = {
  active: PropsType.sring
}