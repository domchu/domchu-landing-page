import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const InstagramImage = ({ socialImg }) => {
  return (
    <div>
      <Image src={socialImg} alt="/" />
      {/* overlay */}
      <div />
      <p>
        <FaInstagram />
      </p>
    </div>
  );
};

export default InstagramImage;
