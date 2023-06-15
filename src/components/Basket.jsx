import React, { useState } from "react";
import style from "../scss/Basket.module.scss";
import dexinmayka from "../assets/dexinmayka.png";
import Dropdown from "./utils/Dropdown";
import Count from "./utils/Count";

const sizeItem = ["XS", "S", "M", "L", "XL", "XXL"];
const colorItem = ["желтый", "белый", "чорний"];

const Basket = () => {
  const [order, setOrder] = useState(0);
  const [pay, setPay] = useState(0);
  const toggleSizeValue = (val) => {
    console.log(val);
  };
  const toggleColorValue = (val) => {
    console.log(val);
  };
  const countValue = (val) => {
    console.log(val);
  };
  return (
    <div className={style.basketBlock}>
      <div className={style.basketItems}>
        <h3>Корзина</h3>
        <div className={style.basketItem}>
          <img src={dexinmayka} />
          <div className={style.title}>
            <h4>Желтое худи Желтое худи</h4>
            <p>худи, одежда</p>
          </div>
          <div className={style.content}>
            <Dropdown
              itemArr={sizeItem}
              toggleValue={toggleSizeValue}
              title="Размер"
              isBasket
            />
            <Dropdown
              itemArr={colorItem}
              toggleValue={toggleColorValue}
              title="Цвет"
              isColor
              isBasket
            />
            <Count countValue={countValue} isBasket />
            <p className={style.price}>250$</p>
            <div className={style.btnBlock}>
              <button className={style.delete}></button>
            </div>
          </div>
        </div>
        <div className={style.basketItem}>
          <img src={dexinmayka} />
          <div className={style.title}>
            <h4>Желтое худи</h4>
            <p>худи, одежда</p>
          </div>
          <div className={style.content}>
            <Dropdown
              itemArr={sizeItem}
              toggleValue={toggleSizeValue}
              title="Размер"
              isBasket
            />
            <Dropdown
              itemArr={colorItem}
              toggleValue={toggleColorValue}
              title="Цвет"
              isColor
              isBasket
            />
            <Count countValue={countValue} isBasket />
            <p className={style.price}>250$</p>
            <div className={style.btnBlock}>
              <button className={style.delete}></button>
            </div>
          </div>
        </div>
        <div className={style.basketItem}>
          <img src={dexinmayka} />
          <div className={style.title}>
            <h4>Желтое худи</h4>
            <p>худи, одежда</p>
          </div>
          <div className={style.content}>
            <Dropdown
              itemArr={sizeItem}
              toggleValue={toggleSizeValue}
              title="Размер"
              isBasket
            />
            <Dropdown
              itemArr={colorItem}
              toggleValue={toggleColorValue}
              title="Цвет"
              isColor
              isBasket
            />
            <Count countValue={countValue} isBasket />
            <p className={style.price}>250$</p>
            <div className={style.btnBlock}>
              <button className={style.delete}></button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.checkoutBlock}>
        <h3 className={style.title}>Оформить заказ</h3>
        <div className={style.checkoutItem}>
          <div className={style.inputBlock}>
            <form>
              <input placeholder="Ваше имя" />
              <input placeholder="Email" />
              <input placeholder="Телефон" />
              <input placeholder="Город" />
              <input placeholder="Отделение" />
            </form>
          </div>
          <div className={style.orderBlock}>
            <div className={style.checkBox}>
              <div className={style.delivery}>
                <h3>Доставка</h3>
                <div className={style.checkBlock}>
                  <input
                    type="checkbox"
                    checked={order == 0}
                    onClick={() => setOrder(0)}
                  />
                  <span>Самовывоз</span>
                </div>
                <div className={style.checkBlock}>
                  <input
                    type="checkbox"
                    checked={order == 1}
                    onClick={() => setOrder(1)}
                  />
                  <span>Новая почта</span>
                </div>
              </div>
              <div className={style.pay}>
                <h3>Оплата</h3>
                <div className={style.checkBlock}>
                  <input
                    type="checkbox"
                    checked={pay == 0}
                    onClick={() => setPay(0)}
                  />
                  <span>Наложеный платёж</span>
                </div>
                <div className={style.checkBlock}>
                  <input
                    type="checkbox"
                    checked={pay == 1}
                    onClick={() => setPay(1)}
                  />
                  <span>Безналичный</span>
                </div>
              </div>
            </div>
            <div className={style.priceItems}>
              <div className={style.priceItem}>
                <p>Заказ:</p>
                <span>750$</span>
              </div>
              <div className={style.priceItem}>
                <p>Доставка:</p>
                <span>15$</span>
              </div>
              <div className={`${style.priceItem} ${style.totalPrice}`}>
                <p>Итого:</p>
                <span>765$</span>
              </div>
              <button className={style.sendBtn}>Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
