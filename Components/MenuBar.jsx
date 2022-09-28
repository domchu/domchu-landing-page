import React from "react";
import Link from "next/link";

const MenuBar = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <h1>Capture</h1>
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/portfolio">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
