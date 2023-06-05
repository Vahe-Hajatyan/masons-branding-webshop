import React, { useState } from "react";
import style from "../../scss/Modal.module.scss";

const Modal = React.memo(function Modal({ active, setActive, Rating }) {
  const [rating, setRating] = useState(0);
  const isRatingHandler = () => {
    Rating(rating);
    setActive(false);
  };
  return (
    <div
      className={`${style.modal} ${active ? style.active : ""} `}
      onClick={() => setActive(false)}
    >
      <div
        className={`${style.modalContent} ${
          active ? style.modalContentActive : ""
        } `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.rating}>
          <div className={style.ratingItems}>
            <input
              id="rating-5"
              className={style.ratingItem}
              type="radio"
              name="rating-item"
              value="5"
              onClick={() => setRating(5)}
            />
            <label for="rating-5" className={style.ratingLabel}></label>
            <input
              id="rating-4"
              className={style.ratingItem}
              type="radio"
              name="rating-item"
              value="4"
              onClick={() => setRating(4)}
            />
            <label for="rating-4" className={style.ratingLabel}></label>
            <input
              id="rating-3"
              className={style.ratingItem}
              type="radio"
              name="rating-item"
              value="3"
              onClick={() => setRating(3)}
            />
            <label for="rating-3" className={style.ratingLabel}></label>
            <input
              id="rating-2"
              className={style.ratingItem}
              type="radio"
              name="rating-item"
              value="2"
              onClick={() => setRating(2)}
            />
            <label for="rating-2" className={style.ratingLabel}></label>
            <input
              id="rating-1"
              className={style.ratingItem}
              type="radio"
              name="rating-item"
              value="1"
              onClick={() => setRating(1)}
            />
            <label for="rating-1" className={style.ratingLabel}></label>
          </div>
        </div>
        <button onClick={isRatingHandler}>отправить</button>
      </div>
    </div>
  );
});

export default Modal;
