import React from "react";
import model1 from "../assets/model-1.png";
import style from "../scss/Home.module.scss";
const Home = () => {
  return (
    <div className={style.homeBlock}>
      <div className={style.container}>
        <div className={style.textBlock}>
          <h1>
            masons
            <br />
            <span>branding</span>
            <br />
            wordshop
          </h1>
          <p>Высококачественная печать Брендирование одежды и аксессуаров</p>
          <button>Каталог</button>
        </div>
        <div className={style.imgBlock}>
          <img src={model1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
