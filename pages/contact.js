import React from "react";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";

const contact = () => {
  return (
    <div>
      <Navbar
        heading="Contact"
        message="Summit the form for more work and quotes"
      />
      <Contact />
    </div>
  );
};

export default contact;
