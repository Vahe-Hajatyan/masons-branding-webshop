import { useEffect, useRef, useState, Children, cloneElement } from "react";
import style from "../../scss/Carousel.module.scss";
import { Page } from "./Page/Page";
import { CarouselContext } from "./Carousel-context";
import leftButton from "../../assets/left.png";
import rightButton from "../../assets/right.png";
import blackLeftButton from "../../assets/blackLeft.png";
import blackRightButton from "../../assets/blackRight.png";

const TRANSITION_DURATION = 300;

export const Carousel = ({ children, infinite, oneSlide, number3 }) => {
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(450);
  const [pages, setPages] = useState([]);
  const [clonesCount, setClonesCount] = useState({ head: 0, tail: 0 });
  const [transitionDuration, setTransitionDuration] = useState(400);

  const windowElRef = useRef();

  useEffect(() => {
    if (infinite) {
      setPages([
        cloneElement(children[Children.count(children) - 1]), // head: 1
        ...children,
        cloneElement(children[0]), // tail: 1
      ]);
      setClonesCount({ head: 1, tail: 1 });
      return;
    }
    setPages(children);
  }, [children, infinite]);

  useEffect(() => {
    const resizeHandler = () => {
      const windowElWidth = windowElRef.current.offsetWidth;
      // console.log("resized", windowElWidth);
      setWidth(windowElWidth);
      setOffset(-(clonesCount.head * width)); // to prevent wrong offset
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [clonesCount, width]);

  useEffect(() => {
    if (transitionDuration === 0) {
      setTimeout(() => {
        setTransitionDuration(TRANSITION_DURATION);
      }, TRANSITION_DURATION);
    }
  }, [transitionDuration]);

  useEffect(() => {
    if (!infinite) return;

    // с элемента 0 (clone) -> к предпоследнему (реальный)
    if (offset === 0) {
      setTimeout(() => {
        setTransitionDuration(0);
        setOffset(-(width * (pages.length - 1 - clonesCount.tail)));
      }, TRANSITION_DURATION);
      return;
    }
    // с элемента n (clone) -> к элементу 1 (реальный)
    if (offset === -(width * (pages.length - 1))) {
      setTimeout(() => {
        setTransitionDuration(0);
        setOffset(-(clonesCount.head * width));
      }, TRANSITION_DURATION);
      return;
    }
  }, [offset, infinite, pages, clonesCount, width]);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + width;
      return Math.min(newOffset, 0);
    });
  };
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - width;
      const maxOffset = -(width * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };
  return (
    <CarouselContext.Provider value={{ width }}>
      <div
        className={`${number3 ? style.slider_block_number3 : ""} ${
          oneSlide ? style.slider_block_oneSlide : ""
        } ${style.slider_block}`}
      >
        <div
          className={`${number3 ? style.button_block_number3 : ""} ${
            style.button_block
          }`}
        >
          <a onClick={handleLeftArrowClick}>
            <img src={oneSlide ? blackLeftButton : leftButton} />
          </a>
        </div>
        <div
          className={`${style.itemBlock} ${
            oneSlide
              ? number3
                ? style.itemBlock_number3
                : style.itemBlock_onePage
              : ""
          }`}
        >
          <div className={style.item}>
            <div
              className={`${style.container} ${
                oneSlide ? style.container_onePage : ""
              }`}
            >
              <div
                className={`${style.window} ${
                  oneSlide ? style.window_onePage : ""
                }`}
                ref={windowElRef}
              >
                <div
                  className={style.all_pages_container}
                  style={{
                    transform: `translateX(${offset}px)`,
                    transitionDuration: `${transitionDuration}ms`,
                  }}
                >
                  {pages}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${number3 ? style.button_block_number3 : ""} ${
            style.button_block
          }`}
        >
          <a onClick={handleRightArrowClick}>
            <img src={oneSlide ? blackRightButton : rightButton} />
          </a>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};
Carousel.Page = Page;
