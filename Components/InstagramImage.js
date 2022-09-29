import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const InstagramImage = ({ socialImg }) => {
  return (
    <div className="relative">
      <Image
        src={socialImg}
        alt="/"
        className="w-full h-full"
        layout="responsive"
      />
      {/* overlay */}
      <div className=" flex justify-center items-center absolute left-0 right-0 top-0 bottom-0 hover:bg-black/50 group">
        <p className="text-grey-300 hidden group-hover:block">
          <FaInstagram size={40} className="z-10 text-white" />
        </p>
      </div>
    </div>
  );
};

export default InstagramImage;
