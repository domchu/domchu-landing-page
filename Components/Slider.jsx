import React from "react";
import { sliderData } from "./SliderData";

const Slider = ({ slides }) => {
  return (
    <div id="gallery">
      <h1>Gallery</h1>
      <div className="slider">
        {sliderData.map((slide, index) => {
          return <img src={slide.image} alt="gallery" />;
        })}
      </div>
    </div>
  );
};

export default Slider;
