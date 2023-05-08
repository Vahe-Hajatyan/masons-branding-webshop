import { useContext } from "react";
import { CarouselContext } from "../Carousel-context";
import "./Page.scss";

export const Page = ({ children }) => {
  const { width } = useContext(CarouselContext);
  return (
    <div
      className={"page__main_container"}
      style={{
        minWidth: `${width}px`,
        maxWidth: `${width}px`,
      }}
    >
      {children}
    </div>
  );
};
