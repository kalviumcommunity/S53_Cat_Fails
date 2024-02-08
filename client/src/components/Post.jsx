import React, { useState } from "react";
import Moment from "../assets/Moment-1.gif";
import heart_1 from "../assets/heart-1.svg";
import heart_2 from "../assets/heart-2.svg";
import heart_3 from "../assets/heart-3.svg";
import comment_1 from "../assets/comment-1.svg";
import comment_2 from "../assets/comment-2.svg";
import comment_3 from "../assets/comment-3.svg";

function Post() {
  const [heartIcon, setHeartIcon] = useState(heart_2);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setHeartIcon(heart_1); // Change heart icon to heart_1 on click if not clicked
    } else {
      setHeartIcon(heart_2); // Change heart icon to heart_2 on click if clicked
    }
    setClicked(!clicked); // Toggle clicked state
  };

  const handleMouseEnter = () => {
    if (!clicked) {
      setHeartIcon(heart_3); // Change heart icon to heart_3 on hover if not clicked
    }
  };

  const handleMouseLeave = () => {
    if (!clicked) {
      setHeartIcon(heart_2); // Change heart icon back to heart_2 when not hovering if not clicked
    }
  };

  return (
    <div className="post-parent">
      <div className="post-main">
        <div className="post-pt">
          <img src={Moment} alt="Moment GIF" id="moment" draggable="false" />
          <div className="info flex">
            <span id="user">Tero</span>
            <span id="time">23rd Jan, 2003</span>
          </div>
          <div className="title">Cat Jumps up!</div>
          <div className="data flex">
            <div className="data-likes">
              <img
                id="hearticon"
                src={heartIcon}
                alt="Heart Icon"
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                draggable="false"
              />
              <span id="likes">23k</span>
            </div>
            <div className="data-comments">
              <img src={comment_1} alt="" id="commenticon" />
              <span id="comments">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
