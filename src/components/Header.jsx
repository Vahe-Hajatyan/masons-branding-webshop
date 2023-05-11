import React, { useEffect, useState } from "react";
import style from "../scss/Header.module.scss";
import logo from "../assets/logo.png";
import karzina from "../assets/karzina.png";
import izbrnie from "../assets/izbrnie.png";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [pathHost, setPathHost] = useState(window.location.pathname);
  const size = document.body.offsetWidth;
  const resize = () => {
    if (size < 688) {
      setToggle(false);
    }
    return window.removeEventListener("resize", resize);
  };
  window.addEventListener("resize", resize);
  const path = () => {
    setTimeout(() => {
      setPathHost(window.location.pathname);
    }, 1);
  };
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
        <ul>
          <Link onClick={path} to="/">
            <li className={pathHost === "/" ? style.active : ""}>Главная</li>
          </Link>
          <Link onClick={path} to="/tshirt">
            <li className={pathHost === "/tshirt" ? style.active : ""}>
              Футболки
            </li>
          </Link>
          <Link onClick={path} to="/">
            <li>Штаны</li>
          </Link>
          <Link onClick={path} to="/">
            <li>Кроссовки</li>
          </Link>
          <Link onClick={path} to="/">
            <li>аксессуары</li>
          </Link>
          {toggle && (
            <>
              <Link onClick={path} to="/">
                <li>Корзина</li>
              </Link>
              <Link to="/">
                <li>Избранное</li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
