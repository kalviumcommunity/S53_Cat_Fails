import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

function Users() {
    const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://backend-cat-fails.vercel.app/users")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
  }, []);

  const userClick = (username) => {
    navigate(`/posts/${username}`);
  };

  return (
    <>
      <div className="flex">
        <span id="heading-2" style={{ color: "white" }}>
          Users
        </span>
      </div>
      <div className="users-parent flex">
        <center>

        <ul>
        {data.length == 0 ? (
          <BarLoader color="white" />
          ) : (
            <>
        {data.map((e, i) => {
            return (
                <li key={i}>
            <span id="user-post" onClick={()=>{userClick(e.username)}}>{e.username}</span>
          </li>
          );
        })}
        </>
    )}
        </ul>
        </center>
      </div>
    </>
  );
}

export default Users;
