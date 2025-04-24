import React from "react";

const ReviewItem = () => {
  return (
    <li className="comment-item">
      <div className="comment-avatar">
        <img src="/img/avatars/avatar1.jpg" alt="" />
      </div>
      <div className="comment-text">
        <ul className="comment-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <div className="comment-meta">
          <strong>admin</strong>
          <span>-</span>
          <time>feb 23, 2025</time>
        </div>
        <div className="comment-desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            voluptatum cupiditate saepe sint reprehenderit magni tempora
            maiores, quas optio quasi itaque qui, incidunt illum quibusdam!
            Illum saepe iusto impedit eius.
          </p>
        </div>
      </div>
    </li>
  );
};

export default ReviewItem;
