import React from "react";
import style from "../scss/Footer.module.scss";
import logo from "../assets/logo.png";
import telegram from "../assets/telegram.png";
import insta from "../assets/insta.png";

const Footer = () => {
  return (
    <footer>
      <div className={style.footerBlock}>
        <div className={style.logoBlock}>
          <img src={logo} />
          <div className={style.linkBlock}>
            <a
              className={style.btn2}
              href="https://t.me/Midnight0w0"
              target="_blank"
            >
              <img src={telegram} />
            </a>
            <a
              className={style.btn2}
              href="https://www.instagram.com/vahehajatyan"
              target="_blank"
            >
              <img src={insta} />
            </a>
          </div>
        </div>
        <div className={style.pageBlock}>
          <h2>Страницы</h2>
          <p>Главная</p>
          <p>Футболки</p>
          <p>Штаны</p>
          <p>Кроссовки</p>
          <p>аксессуары</p>
        </div>
        <div className={style.pageBlock}>
          <h2>Контакты</h2>
          <a href="tel:+99(999)-999-99-99">+99(999)-999-99-99</a>
          <a href="mailto: hajatyanvahe@gmail.com">hajatyanvahe@gmail.com</a>
        </div>
      </div>
      <hr />
      <p className={style.copyright}>
        copyright © 2023 HooBank. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
