// import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-800 text-white flex justify-center">
        <ul className=" block text-1xl sm:flex">
          <li className="p-4 text-2xl  hover:text-gray-500">
            <Link href="/">Home</Link>
          </li>

          <li className="p-4 text-2xl  hover:text-gray-500">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4 text-2xl  hover:text-gray-500">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div>
          <li className="p-4 text-2xl  hover:text-gray-500 flex justify-end text-end">
            <Link href="/#gallery">Gallery</Link>
          </li>
        </div>
      </div>
      <p className="text-center p-4 text-1xl font-bold/30 bg-gray-800 text-white">
        &copy; copy, All right reserved designed Mr Dominic 2022 |
        next/react-Landing Page
      </p>
    </footer>
  );
};

export default Footer;
