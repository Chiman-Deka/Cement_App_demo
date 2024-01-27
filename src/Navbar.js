// Login.js
import React from "react";
import Img_logo from "./images/amrit.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand mx-auto p-2" href="#">
          <img src={Img_logo} alt="" />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
