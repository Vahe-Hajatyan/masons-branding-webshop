import React, { useEffect, useState } from "react";
import style from "../scss/Tshirt.module.scss";
import sevMayka from "../assets/sevmayka.png";
import spitakmayka from "../assets/spitakmayka.png";
import dexinmayka from "../assets/dexinmayka.png";
import minLeft from "../assets/minleft.png";
import minRight from "../assets/minright.png";
const Tshirt = () => {
  const [price, setPrice] = useState(true);
  return (
    <section>
      <div className={style.titleBlock}>
        <div className={style.title}>
          <h1>
            <span>Фут</span>болки
          </h1>
          <p>Любые размеры и формы</p>
        </div>
        <div className={style.sortBlock}>
          <p>Сртировака:</p>
          <button onClick={() => setPrice(!price)}>
            {price ? "ДЕШЕВЛЕ | Дорже" : "ДОРЖЕ | Дешевле"}
          </button>
        </div>
      </div>
      <div className={style.itemBlock}>
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
          <p>20$</p>
        </div>
        <div className={style.item}>
          <img src={sevMayka} />
          <h3>Футболка Черная</h3>
          <p>50$</p>
        </div>
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
      <div className={style.paginationBlock}>
        <img src={minLeft} />
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <img src={minRight} />
      </div>
    </section>
  );
};

export default Tshirt;
