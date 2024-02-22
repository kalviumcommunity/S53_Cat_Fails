import React, { useContext } from "react";
import "../App.css";
import Logo from "../assets/CatCluster-2.png";
import CatUser from "../assets/CatUser.png";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "./Context";
import { deleteCookie } from "../utils/cookies";
import { loginCheck } from "../utils/loginCheck";

const Navbar = () => {
  const navigate = useNavigate();
  const { login, setLogin } = useContext(AppContext);
  const logout = () => {
    deleteCookie("username");
    deleteCookie("auth-token");
    setLogin(loginCheck());
    navigate("/");
  };
  const loginBtn = () => {
    if (login) {
      return (
        <div className="span-div" onClick={logout}>
          <span id="login">Logout</span>
        </div>
      );
    } else {
      return (
        <Link to="/signup" style={{ textDecoration: "None", color: "Black" }}>
          <div className="span-div">
            <span id="login">Sign Up / Log-in</span>
          </div>
        </Link>
      );
    }
  };
  return (
    <div className="parent">
      <br />
      <br />
      <nav className="flex">
        <div className="nav-parent">
          <div className="logo flex">
            <Link to="/" style={{ textDecoration: "None", color: "Black" }}>
              <img src={Logo} alt="Cat Cluster" id="img-logo" />
            </Link>
          </div>
          <div className="options flex">
            <Link to="/faq" style={{ textDecoration: "None", color: "Black" }}>
              <div className="span-div">
                <span id="faq">FAQ</span>
              </div>
            </Link>
            {loginBtn()}
            {/* <img src={CatUser} alt="user-logo" id="img-user" /> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
