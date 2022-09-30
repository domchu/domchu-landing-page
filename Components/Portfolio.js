import React from "react";
import Image from "next/image";
import nature1 from "../public/nature1.jpg";

const Portfolio = () => {
  return (
    <div>
      <h1>Travel Photos</h1>
      <div>
        <div>
          <Image
            src={nature1}
            alt="/"
            layout="responsive"
            width="650"
            height="450"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="/public/nature1.jpg"
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="/public/nature1.jpg"
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="/public/nature1.jpg"
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="/public/nature1.jpg"
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
