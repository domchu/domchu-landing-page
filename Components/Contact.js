import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Let's work together</h1>
      <form action="">
        <div>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <input type="text" placeholder="Subject" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button>Summit</button>
      </form>
    </div>
  );
};

export default Contact;
