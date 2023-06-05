import React, { useState } from "react";
import style from "../scss/Card.module.scss";
import dexinmayka from "../assets/dexinmayka.png";
import Dropdown from "./utils/Dropdown";
import Count from "./utils/Count";
import Comment from "./utils/Comment";
const sizeItem = ["XS", "S", "M", "L", "XL", "XXL"];
const colorItem = ["желтый", "белый", "чорний"];

const Card = () => {
  const [favorites, setFavorites] = useState(false);

  const toggleSizeValue = (val) => {
    console.log(val);
  };

  const toggleColorValue = (val) => {
    console.log(val);
  };

  const countValue = (val) => {
    console.log(val);
  };
  // :(
  return (
    <section>
      <div className={style.cardBlack}>
        <div className={style.imgBlock}>
          <img src={dexinmayka} />
        </div>
        <div className={style.descriptionItem}>
          <h3 className={style.name}>Желтое худи</h3>
          <p className={style.teg}>худи, одежда</p>
          <p className={style.price}>250$</p>
          <Dropdown
            itemArr={sizeItem}
            toggleValue={toggleSizeValue}
            title="Размер"
          />
          <Dropdown
            itemArr={colorItem}
            toggleValue={toggleColorValue}
            title="Цвет"
            isColor
          />
          <Count countValue={countValue} />
          <div className={style.buy}>
            <button>В КОРЗИНУ</button>
            <div
              onClick={() => setFavorites(!favorites)}
              className={`${style.iconHeart} ${favorites ? style.active : ""}`}
            ></div>
          </div>
        </div>
      </div>
      <div className={style.description}>
        <h3>Описание</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor aenean
          enim, bibendum sed massa tellus in. In ultrices et egestas faucibus
          vestibulum in. Eget nunc leo, in pellentesque. Sed habitant a lectus
          velit neque. Sed in accumsan in dictum ac.
        </p>
      </div>
      <div className={style.commentBlock}>
        <Comment />
      </div>
    </section>
  );
};

export default Card;
