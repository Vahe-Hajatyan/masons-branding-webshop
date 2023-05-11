import React, { useEffect } from "react";
import model1 from "../assets/model-1.png";
import fon from "../assets/fon.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import shor1 from "../assets/shor1.png";
import shor2 from "../assets/shor2.png";
import mecMayka from "../assets/mecspitakmayka.png";
import exemple1 from "../assets/exemple1.png";
import exemple2 from "../assets/exemple2.png";
import iphone12 from "../assets/iphone12.png";
import telegram from "../assets/telegram.png";
import insta from "../assets/insta.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
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
              webshop
            </h1>
            <p>Высококачественная печать Брендирование одежды и аксессуаров</p>
            <button className={style.btn}>Каталог</button>
          </div>
          <div className={style.imgBlock}>
            <img src={model1} alt="img" />
          </div>
        </div>
      </div>
      <hr />
      <div className={style.ourServices}>
        <div className={style.ourServicesTitle}>
          <h1>
            Наши <span>услуги</span>
          </h1>
          <p>Главной деятельностью масонств</p>
        </div>
        <div className={style.services}>
          <div className={style.itemServices}>
            <img src={fon} alt="img" />
            <h3>
              Печать <br /> флекс/флок
              <br /> плёнкой
            </h3>
            <p>
              Качественная печать <br />
              При малых тиражах
            </p>
            <button>Подробней</button>
            <img className={style.icon} src={img1} alt="img" />
          </div>
          <div className={style.itemServices}>
            <img src={fon} alt="img" />
            <h3>
              Печать <br /> флекс/флок
              <br /> плёнкой
            </h3>
            <p>
              Качественная печать <br />
              При малых тиражах
            </p>
            <button>Подробней</button>
            <img className={style.icon} src={img2} alt="img" />
          </div>
          <div className={style.itemServices}>
            <img src={fon} alt="img" />
            <h3>
              Печать <br /> флекс/флок
              <br /> плёнкой
            </h3>
            <p>
              Качественная печать <br />
              При малых тиражах
            </p>
            <button>Подробней</button>
            <img className={style.icon} src={img3} alt="img" />
          </div>
          <div className={style.itemServices}>
            <img src={fon} alt="img" />
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
            <img src={fon} alt="img" />
            <h3>
              Печать <br /> флекс/флок
              <br /> плёнкой
            </h3>
            <p>
              Качественная печать <br />
              При малых тиражах
            </p>
            <button>Подробней</button>
            <img className={style.icon} src={img2} alt="img" />
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
            <img className={style.icon} src={img3} alt="img" />
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
            <img id="exemple" src={exemple1} alt="" />
          </CarouselCompound.Page>
          <CarouselCompound.Page>
            <img id="exemple" src={exemple2} alt="" />
          </CarouselCompound.Page>
          <CarouselCompound.Page>
            <img id="exemple" src={exemple1} alt="" />
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
          <CarouselCompound infinite oneSlide>
            <CarouselCompound.Page>
              <div className={style.stockBlock}>
                <div className={style.stockTextBlock}>
                  <h2>Русский корабль</h2>
                  <p>
                    Купи футболку и 10% с каждой покупки <br /> пойдёт на нуждый
                    ВСУ.
                  </p>
                  <button className={style.btn}>Каталог</button>
                </div>
                <img className={style.ImgBlock} src={mecMayka} alt="img" />
              </div>
            </CarouselCompound.Page>
            <CarouselCompound.Page>
              <div className={style.stockBlock}>
                <div className={style.stockTextBlock}>
                  <h2>Русский корабль</h2>
                  <p>
                    Купи футболку и 10% с каждой покупки <br /> пойдёт на нуждый
                    ВСУ.
                  </p>
                  <button className={style.btn}>Каталог</button>
                </div>
                <img className={style.ImgBlock} src={mecMayka} alt="img" />
              </div>
            </CarouselCompound.Page>
            <CarouselCompound.Page>
              <div className={style.stockBlock}>
                <div className={style.stockTextBlock}>
                  <h2>Русский корабль</h2>
                  <p>
                    Купи футболку и 10% с каждой покупки <br /> пойдёт на нуждый
                    ВСУ.
                  </p>
                  <button className={style.btn}>Каталог</button>
                </div>
                <img className={style.ImgBlock} src={mecMayka} alt="img" />
              </div>
            </CarouselCompound.Page>
          </CarouselCompound>
        </div>
      </div>
      <div>
        <div className={style.titleBlock}>
          <h2>
            Топ про<span>даж</span>
          </h2>
          <p>То, что вам нравиться</p>
        </div>
        <div className={style.categories}>
          <ul>
            <li className={style.active}>Футболки</li>
            <li>Штаны</li>
            <li>Кроссовки</li>
            <li>аксессуары</li>
          </ul>
        </div>
        <div className={style.topSellingBlock}>
          <div className={style.topSellingitem}>
            <img src={shor1} alt="img" />
            <p>Белая Футболка</p>
            <p>230₴</p>
          </div>
          <div className={style.topSellingitem}>
            <img src={shor2} alt="img" />
            <p>желтая худи</p>
            <p>230₴</p>
          </div>
          <div className={style.topSellingitem}>
            <img src={shor1} alt="img" />
            <p>Белая Футболка</p>
            <p>230₴</p>
          </div>
          <div className={style.topSellingitem}>
            <img src={shor2} alt="img" />
            <p>желтая худи</p>
            <p>230₴</p>
          </div>
        </div>
      </div>
      <div>
        <div className={style.titleBlock}>
          <h2>
            Ката<span>лог</span>
          </h2>
          <p>Выбирай всё что по душе</p>
        </div>
        <div className={`${style.topSellingBlock} ${style.catalogBlock}`}>
          <div className={`${style.topSellingitem} ${style.catalog}`}>
            <img src={shor2} alt="img" />
            <p>желтая худи</p>
            <p>230₴</p>
          </div>
          <div className={`${style.topSellingitem} ${style.catalog}`}>
            <img src={shor1} alt="img" />
            <p>Белая Футболка</p>
            <p>230₴</p>
          </div>
          <div className={`${style.topSellingitem} ${style.catalog}`}>
            <img src={shor2} alt="img" />
            <p>желтая худи</p>
            <p>230₴</p>
          </div>
          <div className={`${style.topSellingitem} ${style.catalog}`}>
            <img src={shor2} alt="img" />
            <p>желтая худи</p>
            <p>230₴</p>
          </div>
          <div className={`${style.topSellingitem} ${style.catalog}`}>
            <img src={shor1} alt="img" />
            <p>Белая Футболка</p>
            <p>230₴</p>
          </div>
          <div className={`${style.topSellingitem} ${style.catalog}`}>
            <img src={shor2} alt="img" />
            <p>желтая худи</p>
            <p>230₴</p>
          </div>
        </div>
      </div>
      <div>
        <div className={style.titleBlock}>
          <h2>
            От<span>зы</span>вы
          </h2>
          <p>
            Только посмотри что о нас говорит
            <br />
            твоя соседка
          </p>
        </div>
        <div className={style.reviewsBlock}>
          <CarouselCompound infinite oneSlide number3>
            <CarouselCompound.Page>
              <img id="iphoneBlock" src={iphone12} alt="img" />
            </CarouselCompound.Page>
            <CarouselCompound.Page>
              <img id="iphoneBlock" src={iphone12} alt="img" />
            </CarouselCompound.Page>
            <CarouselCompound.Page>
              <img id="iphoneBlock" src={iphone12} alt="img" />
            </CarouselCompound.Page>
          </CarouselCompound>
        </div>
      </div>
      <div className={style.videoBlock}>
        <div className={style.titleBlock}>
          <h2>
            Ещё есть <span>сомнения?</span>
          </h2>
          <p>Тогда посмотри это видео и сам всё поймёшь</p>
        </div>
        <div className={style.videoItem}>
          <iframe
            src="https://www.youtube.com/embed/2Vo0lhfE8Jo"
            title="YouTube video player"
            frameborder="0"
          ></iframe>
        </div>
      </div>
      <div>
        <div className={style.contactTitle}>
          <h2>
            Свяжитесь с <span>нами</span>
          </h2>
          <p>Это быстро и удобно</p>
        </div>
        <div className={style.contactUs}>
          <div className={style.formBlock}>
            <form>
              <input placeholder="Ваше имя" />
              <input placeholder="Email" />
              <input placeholder="Телефон" />
              <input placeholder="Примечание" />
              <button className={style.btn}>Отправить</button>
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
            </form>
          </div>
          <div className={style.mapBlock}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d37057.30819449146!2d-74.0207046889863!3d40.71374968469432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sam!4v1682898222923!5m2!1sru!2sam"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className={style.contactBlock}>
          <div className={style.contactItem}>
            <img src={icon1} />
            <p className={style.title}>График</p>
            <p>ПН-ПТ: 9:00 - 18:00</p>
          </div>
          <div className={style.contactItem}>
            <img src={icon2} />
            <p className={style.title}>Карта</p>
            <p>г. ереван ул. Название</p>
          </div>
          <div className={style.contactItem}>
            <img src={icon3} />
            <p className={style.title}>Контакты</p>
            <a href="tel:+99(999)-999-99-99">+99(999)-999-99-99</a>
            <br />
            <a href="mailto: hajatyanvahe@gmail.com">hajatyanvahe@gmail.com</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
