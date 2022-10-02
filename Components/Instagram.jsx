import React from "react";
import Img1 from "../public/Img1.jpg";
import Img2 from "../public/Img2.jpg";
import Img3 from "../public/Img3.jpg";
import Img4 from "../public/Img4.jpg";
import InstagramImage from "./InstagramImage";

const Instagram = () => {
  return (
    <div className="max-w-[1440px] max-auto text-center py-24 pl-14 flex justify-center flex-col">
      <p className="text-2xl font-bold ">Follow me on instagram</p>
      <p className="pb-4">@Capture</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4 items-center">
        <InstagramImage socialImg={Img1} />
        <InstagramImage socialImg={Img4} />
        <InstagramImage socialImg={Img2} />
        <InstagramImage socialImg={Img1} />
        <InstagramImage socialImg={Img3} />
        <InstagramImage socialImg={Img4} />
      </div>
    </div>
  );
};

export default Instagram;
