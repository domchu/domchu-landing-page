import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const MenuBar = () => {
  const [menu, setMenu] = useState(false);

  //dark mode initialization
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleMenu = () => {
    setMenu(!menu);
  };

  //dark mode
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#000");
        setTextColor("#fff");
      } else {
        setColor("transparent");
        setTextColor("#fff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Capture
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className=" hidden sm:flex">
          <li className="p-4 text-2xl  hover:text-gray-500">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 text-2xl  hover:text-gray-500">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4 text-2xl  hover:text-gray-500">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4 text-2xl  hover:text-gray-500">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* mobile button */}
        <div
          onClick={handleMenu}
          className="block sm:hidden z-10 cursor-pointer"
        >
          {menu ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* mobile menu */}
        <div
          className={
            menu
              ? "sm:hidden absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute left-[-100%] top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleMenu}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleMenu}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              onClick={handleMenu}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/work">Work</Link>
            </li>
            <li
              onClick={handleMenu}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
