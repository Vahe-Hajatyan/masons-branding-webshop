import React, { useEffect, useState } from "react";
import style from "../scss/Header.module.scss";
import logo from "../assets/logo.png";
import karzina from "../assets/karzina.png";
import izbrnie from "../assets/izbrnie.png";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { Link } from "react-router-dom";
import Navigation from "./utils/Navigation";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const resize = () => {
    setToggle(false);
  };
  window.addEventListener("resize", resize);
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
        <div className={style.collapse}>
          <img onClick={() => setToggle(!toggle)} src={toggle ? close : menu} />
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
      <div className={toggle ? style.categoriesCollapse : style.categories}>
        <Navigation toggle={toggle} />
      </div>
    </header>
  );
};

export default Header;
