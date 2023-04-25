import React, { useEffect } from "react";
import model1 from "../assets/model-1.png";
import fon from "../assets/fon.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import mecMayka from "../assets/mecspitakmayka.png";
import garments from "../assets/garments.png";
import style from "../scss/Home.module.scss";
import CarouselCompound from "./carousel";

const Home = () => {
  return (
    <>
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
            <p>
              Высококачественная печать <br /> Брендирование одежды и
              аксессуаров
            </p>
            <button className={style.btn}>Каталог</button>
          </div>
          <div className={style.imgBlock}>
            <img src={model1} />
          </div>
        </div>
      </div>
      <hr />
      <div className={style.ourServices}>
        <div>
          <h1>
            Наши <span>услуги</span>
          </h1>
          <p>Главной деятельностью масонств</p>
        </div>
        <div className={style.services}>
          <div className={style.itemServices}>
            <img src={fon} />
            <h3>
              Печать <br /> флекс/флок
              <br /> плёнкой
            </h3>
            <p>
              Качественная печать <br />
              При малых тиражах
            </p>
            <button>Подробней</button>
            <img className={style.icon} src={img1} />
          </div>
          <div className={style.itemServices}>
            <img src={fon} />
            <h3>
              Печать <br /> флекс/флок
              <br /> плёнкой
            </h3>
            <p>
              Качественная печать <br />
              При малых тиражах
            </p>
            <button>Подробней</button>
            <img className={style.icon} src={img2} />
          </div>
          <div className={style.itemServices}>
            <img src={fon} />
            <h3>
              Печать <br /> флекс/флок
              <br /> плёнкой
            </h3>
            <p>
              Качественная печать <br />
              При малых тиражах
            </p>
            <button>Подробней</button>
            <img className={style.icon} src={img3} />
          </div>
          <div className={style.itemServices}>
            <img src={fon} />
            <h3>
              Печать <br /> флекс/флок
              <br /> плёнкой
            </h3>
            <p>
              Качественная печать <br />
              При малых тиражах
            </p>
            <button>Подробней</button>
            <img className={style.icon} src={img1} />
          </div>
          <div className={style.itemServices}>
            <img src={fon} />
            <h3>
              Печать <br /> флекс/флок
              <br /> плёнкой
            </h3>
            <p>
              Качественная печать <br />
              При малых тиражах
            </p>
            <button>Подробней</button>
            <img className={style.icon} src={img2} />
          </div>
          <div className={style.itemServices}>
            <img src={fon} />
            <h3>
              Печать <br /> флекс/флок
              <br /> плёнкой
            </h3>
            <p>
              Качественная печать <br />
              При малых тиражах
            </p>
            <button>Подробней</button>
            <img className={style.icon} src={img3} />
          </div>
        </div>
      </div>
      <div>
        <div className={style.printExample}>
          <h2>
            <span>Пример</span> печати
          </h2>
          <p>Это может быть на тебе</p>
        </div>
        <CarouselCompound infinite>
          <CarouselCompound.Page>
            <img src={garments} alt="" />
          </CarouselCompound.Page>
          <CarouselCompound.Page>
            <img src={garments} alt="" />
          </CarouselCompound.Page>
          <CarouselCompound.Page>
            <img src={garments} alt="" />
          </CarouselCompound.Page>
        </CarouselCompound>
      </div>
      <div>
        <div className={style.stock}>
          <h2>
            <span>Акции</span> и предолжения
          </h2>
          <p>Успей урвать себе</p>
        </div>
        <div className={style.stockSlider}>
          <CarouselCompound infinite twoSlide>
            <CarouselCompound.Page>
              <div className={style.stockTextBlock}>
                <h2>Русский корабль</h2>
                <p>
                  Купи футболку и 10% с каждой покупки <br /> пойдёт на нуждый
                  ВСУ.
                </p>
                <button className={style.btn}>Каталог</button>
              </div>
              <img className={style.ImgBlock} src={mecMayka} />
            </CarouselCompound.Page>
            <CarouselCompound.Page>
              <div className={style.stockTextBlock}>
                <h2>Русский корабль</h2>
                <p>
                  Купи футболку и 10% с каждой покупки <br /> пойдёт на нуждый
                  ВСУ.
                </p>
                <button className={style.btn}>Каталог</button>
              </div>
              <img className={style.ImgBlock} src={mecMayka} />
            </CarouselCompound.Page>
            <CarouselCompound.Page>
              <div className={style.stockTextBlock}>
                <h2>Русский корабль</h2>
                <p>
                  Купи футболку и 10% с каждой покупки <br /> пойдёт на нуждый
                  ВСУ.
                </p>
                <button className={style.btn}>Каталог</button>
              </div>
              <img className={style.ImgBlock} src={mecMayka} />
            </CarouselCompound.Page>
          </CarouselCompound>
        </div>
      </div>
    </>
  );
};

export default Home;
