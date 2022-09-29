import React from "react";
import Image from "next/image";
import { sliderData } from "./SliderData";

const Slider = ({ slides }) => {
  return (
    <div id="gallery">
      <h1>Gallery</h1>
      <div className="slider">
        {sliderData.map((slide, index) => {
          return (
            <Image src={slide.image} alt="/" width="1440px" height="600px" />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
