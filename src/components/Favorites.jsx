import React from "react";
import style from "../scss/Favorites.module.scss";
import sevMayka from "../assets/sevmayka.png";
import spitakmayka from "../assets/spitakmayka.png";
import dexinmayka from "../assets/dexinmayka.png";
const Favorites = () => {
  return (
    <div>
      <div className={style.title}>
        <h3>Избранное</h3>
      </div>
      <div className={style.items}>
        <div className={style.item}>
          <img src={sevMayka} />
          <h3>Футболка Черная Футболка ЧернаяФутболка Черная</h3>
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
  );
};

export default Favorites;
