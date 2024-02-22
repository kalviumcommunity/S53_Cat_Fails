import React from "react";
import "../App.css";
import CatHome from "../assets/Cat_Home.png";
import Paw from "../assets/Paw-1.png";
import LinkIcon from "../assets/Link.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-parent-main">
        <div className="home-parent">
          <div className="home-parent-part">
            <div className="home-part-1">
              <span id="home-span-1">Cat</span>
              <span id="home-span-2">Cluster</span>
              <span id="home-span-3">
                Laugh-out-loud cat moments for joyous feline enthusiasts
                worldwide.
              </span>
            </div>
            <div className="home-part-2">
              <img src={CatHome} alt="" id="home-cat" />
            </div>
          </div>
          <div className="home-part-3">
            <Link
              to="/listings"
              style={{ textDecoration: "None", color: "Black" }}
            >
              <button className="btn-1">
                Paw in! &nbsp;
                <img src={Paw} alt="Paw" id="paw" />
              </button>
            </Link>
            <Link to="/faq" style={{ textDecoration: "None", color: "Black" }}>
              <button className="btn-2">
                FAQ &nbsp;
                <img src={LinkIcon} alt="Link" id="link" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;