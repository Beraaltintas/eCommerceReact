import { message } from "antd";
import PropTypes from "prop-types";
import React, { useState } from "react";

const ReviewForm = ({ singleProduct, setSingleProduct }) => {
  const [rating, setRating] = useState(0);
  const handleRating = (e, newRating) => {
    e.preventDefault();
    setRating(newRating);
  };

  const [review, setReview] = useState("");
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!user){
      message.error("You must be logged in to post a review");
      return;
    }
    if(rating === 0){
      message.warning("Please select rating");
      return;
    }
    const formData = {
      reviews: [
        ...singleProduct.reviews,
        {
          text: review,
          rating: parseInt(rating),
          user: user.id || user._id,
        },
      ],
    };
    
    
    try {
      const res = await fetch(`${apiUrl}/api/products/${singleProduct._id}`,{
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if(!res.ok){
        message.error("Something Went Wrong");
        return;
      }
      const data = await res.json();
      setSingleProduct(data);
        
        setReview("");
        setRating(0);
        message.success("Comment is added successfully")
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      message.error("Something Went Wrong")
    }


  };
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <p className="comment-notes">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <span className="required">*</span>
      </p>
      <div className="comment-form-rating">
        <label>
          Your Rateing
          <span className="required">*</span>
        </label>
        <div className="stars">
          <a
            href="#"
            className={`star ${rating === 1 && "active"}`}
            onClick={(e) => {
              handleRating(e, 1);
            }}
          >
            <i className="bi bi-star-fill"></i>
          </a>
          <a
            href="#"
            className={`star ${rating === 2 && "active"}`}
            onClick={(e) => {
              handleRating(e, 2);
            }}
          >
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
          <a
            href="#"
            className={`star ${rating === 3 && "active"}`}
            onClick={(e) => {
              handleRating(e, 3);
            }}
          >
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
          <a
            href="#"
            className={`star ${rating === 4 && "active"}`}
            onClick={(e) => {
              handleRating(e, 4);
            }}
          >
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
          <a
            href="#"
            className={`star ${rating === 5 && "active"}`}
            onClick={(e) => {
              handleRating(e, 5);
            }}
          >
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
        </div>
      </div>
      <div className="comment-form-comment form-comment">
        <label htmlFor="comment">
          Your review <span className="required ">*</span>
        </label>
        <textarea
          id="comment"
          rows="10"
          cols="50"
          onChange={(e) => setReview(e.target.value)}
          value={review}
          required
        ></textarea>
      </div>

      <div className="comment-form-cookies">
        <input id="cookies" type="checkbox" />
        <label htmlFor="cookies">
          Save my name, email, and website in this browser for the next time I
          comment.<span className="required ">*</span>
        </label>
      </div>
      <div className="form-submit">
        <input type="submit" className="btn submit" defaultValue="Gönder" />
      </div>
    </form>
  );
};

export default ReviewForm;
ReviewForm.propTypes = {
  active: PropTypes.string,
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func,
};
