import React from "react";
import "../App.css";
import Logo from "../assets/CatCluster-2.png";
import CatUser from "../assets/CatUser.png";

const Navbar = () => {
  return (
    <div className="parent">
      <br /><br />
      <nav className="flex">
        <div className="nav-parent">
          <div className="logo flex">
            <img src={Logo} alt="Cat Cluster" id="img-logo" />
          </div>
          <div className="options flex">
          <div className="span-div">
            <span id="faq">FAQ</span>
          </div>
          <div className="span-div">
            <span id="login">Sign Up</span>
          </div>
            {/* <img src={CatUser} alt="user-logo" id="img-user" /> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
