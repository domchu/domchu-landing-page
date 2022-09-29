import React from "react";
import Img1 from "../public/Img1.jpg";
import Img2 from "../public/Img2.jpg";
import Img3 from "../public/Img3.jpg";
import Img4 from "../public/Img4.jpg";
// import Img5 from "../public/Img5.jpg";
import InstagramImage from "./InstagramImage";

const Instagram = () => {
  return (
    <>
      <p>Follow me on instagram</p>
      <p>@Capture</p>
      <div>
        <InstagramImage socialImg={Img1} />
      </div>
    </>
  );
};

export default Instagram;
