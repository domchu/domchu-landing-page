import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* overlay */}
      <div className="absolute top-0 left-0 bottom-0 bg-black/70 z-[4]" />
      <div>
        <h2>heading</h2>
        <p>message</p>
        <button>Books</button>
      </div>
    </div>
  );
};

export default Navbar;
