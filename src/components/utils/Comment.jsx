import React, { useState } from "react";
import style from "../../scss/Card.module.scss";
import Modal from "./Modal";
import avatarka from "../../assets/avatarka.png";
import sevMayka from "../../assets/sevmayka.png";
import spitakmayka from "../../assets/spitakmayka.png";
import dexinmayka from "../../assets/dexinmayka.png";
import CommentRating from "./CommentRating";

const Comment = () => {
  const [toggleInput, setToggleInput] = useState(false);
  const [modelActive, setModelActive] = useState(false);
  const [rating, setRating] = useState(null);
  console.log(rating);
  return (
    <>
      <div className={style.commentInput}>
        <h3>Отзывы</h3>
        {toggleInput ? (
          <div className={style.inputBlock}>
            <input placeholder="Введите отзыв" />
            <div className={style.buttonBlock}>
              <button onClick={() => setToggleInput(false)}>отмена</button>
              <button onClick={() => setModelActive(true)}>отправить</button>
            </div>
          </div>
        ) : (
          <button onClick={() => setToggleInput(true)}>Оставить отзыв</button>
        )}
        <Modal
          active={modelActive}
          setActive={setModelActive}
          Rating={setRating}
        />
      </div>
      <div className={style.commentItems}>
        <div className={style.commentItem}>
          <div className={style.commentFlex}>
            <div className={style.avatar}>
              <img src={avatarka} />
            </div>
            <div className={style.commentText}>
              <h4>Дмитрий Милен</h4>
              <CommentRating rating={4} />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor</p>
        </div>
        <div className={style.commentItem}>
          <div className={style.commentFlex}>
            <div className={style.avatar}>
              <img src={avatarka} />
            </div>
            <div className={style.commentText}>
              <h4>Дмитрий Милен</h4>
              <CommentRating rating={2} />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
            aenean enim, bibendum sed massa tellus in. In ultrices et egestas
            faucibus vestibulum in. Eget nunc leo, in pellentesque. Sed habitant
            a lectus velit neque. Sed in accumsan in dictum ac.
          </p>
        </div>
      </div>
      <div className={style.recommended}>
        <h3>Рекомендуем вам</h3>
        <div className={style.recommendedItems}>
          <div className={style.item}>
            <img src={sevMayka} />
            <h3>Футболка Черная</h3>
            <p>50$</p>
          </div>
          <div className={style.item}>
            <img src={spitakmayka} />
            <h3>Футболка Белая</h3>
            <p>20$</p>
          </div>
          <div className={style.item}>
            <img src={dexinmayka} />
            <h3>Желтый Худи</h3>
            <p>250$</p>
          </div>
          <div className={style.item}>
            <img src={sevMayka} />
            <h3>Футболка Черная</h3>
            <p>50$</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
