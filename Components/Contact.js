import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1540px] m-auto p-4 h-screen bg-gray-700">
      <h1 className="text-2xl font-bold text-center p-4 text-white">
        Let's work together
      </h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border-shallow-lg p-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="border-shallow-lg p-3"
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          className="border-shallow-lg p-3 w-full my-2"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="border-shallow-lg p-3 w-full"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="border-shallow-lg p-3 w-full mt-4 text-white">
          Summit
        </button>
      </form>
    </div>
  );
};

export default Contact;
