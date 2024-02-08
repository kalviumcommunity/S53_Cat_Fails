import React from "react";
import "../App.css";
import Logo from "../assets/CatCluster-2.png";
import CatUser from "../assets/CatUser.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="parent">
      <br /><br />
      <nav className="flex">
        <div className="nav-parent">
          <div className="logo flex">
          <Link to='/' style={{textDecoration:"None", color:"Black"}}>
            <img src={Logo} alt="Cat Cluster" id="img-logo" />
            </Link>
          </div>
          <div className="options flex">
            <Link to='/faq' style={{textDecoration:"None", color:"Black"}}>
          <div className="span-div">
            <span id="faq">FAQ</span>
          </div>
            </Link>
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
