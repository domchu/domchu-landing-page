import React from "react";

const Navbar = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* overlay */}
      <div className="absolute top-0 left-0 bottom-0 bg-black/10 z-[4]" />
      <div className="p-5 text-white z-[3] ml-[-10rem] mt-[-10]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 py-2 border">Books</button>
      </div>
    </div>
  );
};

export default Navbar;
