import React from "react";
import style from "../scss/Header.module.scss";
import logo from "../assets/logo.png";
import karzina from "../assets/karzina.png";
import izbrnie from "../assets/izbrnie.png";
const Header = () => {
  return (
    <header>
      <div className={style.headerBlock}>
        <div className={style.searchBlock}>
          <input placeholder="Поиск" className={style.search} />
          <button className={style.buttonSearch} alt="img" />
        </div>
        <div className={style.logoBlock}>
          <img src={logo} />
        </div>
        <div className={style.flexContainer}>
          <div className={style.item}>
            <button>RU</button>
          </div>
          <span className={style.line}></span>
          <div className={style.item}>
            <button>UA</button>
          </div>
          <div className={style.item}>
            <button>
              <img src={karzina} />
            </button>
          </div>
          <div className={style.item}>
            <button>
              <img src={izbrnie} />
            </button>
          </div>
        </div>
      </div>
      <div className={style.categories}>
        <ul>
          <li className={style.active}>Главная</li>
          <li>Футболки</li>
          <li>Штаны</li>
          <li>Кроссовки</li>
          <li>аксессуары</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
