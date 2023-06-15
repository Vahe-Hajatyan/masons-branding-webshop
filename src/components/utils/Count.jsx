import React, { useState } from "react";
import style from "../../scss/Card.module.scss";

const Dropdown = ({ countValue, isBasket }) => {
  const [count, setCount] = useState(1);
  const onPlusCount = () => {
    if (count < 99) {
      setCount(count + 1);
    }
  };
  const onMinusCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  countValue(count);
  return (
    <div
      className={`${style.dropdown} ${isBasket ? style.dropdownBasket : ""}`}
    >
      <p>
        {!isBasket && "Количество:"}
        <button className={`${style.dropBtn} ${style.dropBtn2}`}>
          <div className={style.count}>
            <p onClick={onMinusCount}>-</p>
            {count}
            <p onClick={onPlusCount}>+</p>
          </div>
        </button>
      </p>
    </div>
  );
};

export default Dropdown;
