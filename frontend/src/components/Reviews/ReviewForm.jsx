import React, { useState } from "react";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (e, newRating) => {
    e.preventDefault();
    setRating(newRating);
  };

  const [review, setReview] = useState("0");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      rating: rating,
      review: review,
    };
    console.log(formData);
    
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
