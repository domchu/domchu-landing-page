import React from "react";
import Navbar from "../Components/Navbar";
import Portfolio from "../Components/Portfolio";

const work = () => {
  return (
    <div>
      <Navbar
        heading="My Work"
        message="This is one of my recent work traveling the world"
      />
      <Portfolio />
    </div>
  );
};

export default work;
