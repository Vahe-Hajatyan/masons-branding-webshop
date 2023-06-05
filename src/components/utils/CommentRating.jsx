import React from "react";
import style from "../../scss/Card.module.scss";

const CommentRating = ({ rating }) => {
  return (
    <div className={style.rating}>
      <div className={style.ratingItems}>
        <input
          id="Rating-5"
          className={`${style.ratingItem} ${
            rating == 5 ? style.activeRating : ""
          }`}
          type="radio"
        />
        <label for="Rating-5" className={style.ratingLabel}></label>
        <input
          id="Rating-4"
          className={`${style.ratingItem} ${
            rating == 4 ? style.activeRating : ""
          }`}
          type="radio"
        />
        <label for="Rating-4" className={style.ratingLabel}></label>
        <input
          id="Rating-3"
          className={`${style.ratingItem} ${
            rating == 3 ? style.activeRating : ""
          }`}
          type="radio"
        />
        <label for="Rating-3" className={style.ratingLabel}></label>
        <input
          id="Rating-2"
          className={`${style.ratingItem} ${
            rating == 2 ? style.activeRating : ""
          }`}
          type="radio"
        />
        <label for="Rating-2" className={style.ratingLabel}></label>
        <input
          id="Rating-1"
          className={`${style.ratingItem} ${
            rating == 1 ? style.activeRating : ""
          }`}
          type="radio"
        />
        <label for="Rating-1" className={style.ratingLabel}></label>
      </div>
    </div>
  );
};

export default CommentRating;
