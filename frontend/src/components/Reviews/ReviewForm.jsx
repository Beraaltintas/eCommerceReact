import React from "react";

const ReviewForm = () => {
  return (
    <form className="comment-form">
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
          <a href="#" className="star">
            <i className="bi bi-star-fill"></i>
          </a>
          <a href="#" className="star">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
          <a href="#" className="star">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
          <a href="#" className="star">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
          <a href="#" className="star">
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
        <textarea id="comment" rows="10" cols="50"></textarea>
      </div>
      <div className="comment-form-author form-comment">
        <label htmlFor="name">
          Name <span className="required ">*</span>
        </label>
        <input id="name" type="text" />
      </div>
      <div className="comment-form-email form-comment">
        <label htmlFor="email">
          Email<span className="required ">*</span>
        </label>
        <input id="email" type="email" />
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
