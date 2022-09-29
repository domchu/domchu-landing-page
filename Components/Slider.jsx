import React, { useState } from "react";
import Image from "next/image";
import { sliderData } from "./SliderData";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }
  return (
    <div id="gallery">
      <h1 className="text-center mb-2 text-4xl">Gallery</h1>
      <div className="slider">
        {sliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <div className="relative flex justify-center p-4 ">
                <BsArrowLeftSquareFill
                  onClick={prevSlide}
                  className="absolute top-[50%] left-[45px] text-white/70 cursor-pointer select-none z-[10]"
                  size={40}
                />
                {index === current && (
                  <Image
                    src={slide.image}
                    alt="/"
                    width="1440"
                    height="600"
                    objectFit="cover"
                  />
                )}
                <BsArrowRightSquareFill
                  onClick={nextSlide}
                  className="absolute top-[50%] right-[45px] text-white/70 cursor-pointer select-none z-[10]"
                  size={40}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
