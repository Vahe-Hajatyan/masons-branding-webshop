import { useContext } from "react";
import { CarouselContext } from "../Carousel-context";
import "./Page.css";

export const Page = ({ children }) => {
  const { width } = useContext(CarouselContext);
  // console.log(width);
  return (
    <div
      className="page__main-container"
      style={{
        minWidth: `${width}px`,
        maxWidth: `${width}px`,
      }}
    >
      {children}
    </div>
  );
};
