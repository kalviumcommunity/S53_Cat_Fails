import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {BarLoader} from 'react-spinners'
import backIcon from "../assets/back.png";
import { Toaster, toast } from "sonner";


function CardDetails() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [data, setData] = useState({});
  console.log(data.link);

  useEffect(() => {
    axios
    .get(`https://cat-cluster.onrender.com/listings/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deletePost = () => {
    let result = confirm("Are you sure?");
    if (result) {
      try {
        toast.promise(
          axios
        .delete(`https://cat-cluster.onrender.com/listings/${data._id}`)
          , {
          loading: "Loading...",
          success: () => {
            return `Post has been deleted`;
          },
          error: "Error",
        })
            setTimeout(()=>{
              navigate("/listings");
            }, 1500)
      }catch(err){
        toast.error('Some error has occured!')
        console.log(err);
      }
    }
  };

const editPost = ()=>{
    navigate(`/listings/edit/${data._id}`)
}

  return (
    <>

<div className="cardDetails-parent flex">
<Toaster richColors position="top-right"/>
    {data.link == undefined ? (
      <BarLoader color='white'/>
      ) : (
        <div className="cardDetails-main flex">
            <div className="cardDetails-img">
                <img src={data.link} alt="" id="cardDetail-img"/>
            </div>
            <div className="cardDetails-text flex">
                <div className="details-user">
                    @{data.user}
                </div>
                <div className="details-title">
                    {data.title}
                </div>
            <div className="cardDetails-btns flex">
            <button className="edit-btn" type="submit" onClick={editPost}>
             Edit
       </button>
       <button className="delete-btn" type="submit" onClick={deletePost}>
             Delete
       </button>
       <Link to='/listings' style={{textDecoration:"None", color:"Black"}}>
        <div className="span-back form-btn-back">
             <img src={backIcon} alt="" id="back"/>
           &nbsp;
             <span id="form-back">Back</span>
           </div>
         </Link>
            </div>
            </div>
        </div>
      )}
      </div>
    </>
  )
}

export default CardDetails;
