import React from "react";
import Image from "next/image";
import nature1 from "../public/nature1.jpg";
import nature2 from "../public/nature2.jpg";
import nature3 from "../public/nature3.jpg";
import nature4 from "../public/nature4.jpg";
import nature5 from "../public/nature5.jpg";
import nature6 from "../public/nature6.jpg";
import nature7 from "../public/nature7.jpg";
import nature8 from "../public/nature8.jpg";
import nature9 from "../public/nature9.jpg";
import nature10 from "../public/nature10.jpg";
import nature11 from "../public/nature11.jpg";
import nature12 from "../public/nature12.jpg";
import nature13 from "../public/nature13.jpg";
import nature14 from "../public/nature14.jpg";
import nature15 from "../public/nature15.jpg";
import nature16 from "../public/nature16.jpg";
import nature17 from "../public/nature17.jpg";
import nature18 from "../public/nature18.jpg";
import nature19 from "../public/nature19.jpg";
import nature20 from "../public/nature20.jpg";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">Travel Photos</h1>
      <div className="grid grid-row-none md:grid-cols-5 p-5 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
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
            src={nature2}
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={nature3}
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={nature4}
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={nature5}
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={nature6}
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={nature7}
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={nature8}
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={nature9}
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={nature10}
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={nature11}
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={nature12}
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={nature13}
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={nature14}
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={nature15}
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={nature16}
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={nature17}
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={nature18}
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={nature19}
            alt="/"
            layout="responsive"
            width="220"
            height="230"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={nature20}
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
