import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../../scss/Header.module.scss";

const Navigation = ({ toggle = false }) => {
  // in the future it will work through redux
  const [pathHost, setPathHost] = useState(window.location.pathname);
  const path = () => {
    setTimeout(() => {
      setPathHost(window.location.pathname);
    }, 1);
  };
  return (
    <ul>
      <Link onClick={path} to="/">
        <li className={pathHost === "/" ? style.active : ""}>Главная</li>
      </Link>
      <Link onClick={path} to="/tshirt">
        <li className={pathHost === "/tshirt" ? style.active : ""}>Футболки</li>
      </Link>
      <Link onClick={path} to="/trousers">
        <li className={pathHost === "/trousers" ? style.active : ""}>Штаны</li>
      </Link>
      <Link onClick={path} to="/sneakers">
        <li className={pathHost === "/sneakers" ? style.active : ""}>
          Кроссовки
        </li>
      </Link>
      <Link onClick={path} to="/accessories">
        <li className={pathHost === "/accessories" ? style.active : ""}>
          Аксессуары
        </li>
      </Link>
      {toggle && (
        <>
          <hr />
          <Link onClick={path} to="/sign-in">
            <li className={pathHost === "/sign-in" ? style.active : ""}>
              Sign in
            </li>
          </Link>
          <Link onClick={path} to="/sign-up">
            <li className={pathHost === "/sign-up" ? style.active : ""}>
              Sign up
            </li>
          </Link>
          <hr />
          <Link onClick={path} to="/basket">
            <li className={pathHost === "/basket" ? style.active : ""}>
              Корзина
            </li>
          </Link>
          <Link to="/favorite">
            <li>Избранное</li>
          </Link>
        </>
      )}
    </ul>
  );
};

export default Navigation;
