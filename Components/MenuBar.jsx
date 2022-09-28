import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const MenuBar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 className="font-bold text-4xl">Capture</h1>
        </Link>
        <ul className=" hidden sm:flex">
          <li className="p-4 text-3xl">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 text-3xl">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4 text-3xl">
            <Link href="/portfolio">Work</Link>
          </li>
          <li className="p-4 text-3xl">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* mobile button */}
        <div
          onClick={handleMenu}
          className="block sm:hidden z-10 cursor-pointer"
        >
          {menu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
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
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/portfolio">Work</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
