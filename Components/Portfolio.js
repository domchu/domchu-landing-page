import React from "react";
import Image from "next/image";
import nature1 from "../public/nature1.jpg";
import nature2 from "../public/nature2.jpg";
import nature3 from "../public/nature3.jpg";
import nature4 from "../public/nature4.jpg";
import nature5 from "../public/nature5.jpg";
import nature6 from "../public/nature6.jpg";

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
      </div>
    </div>
  );
};

export default Portfolio;
