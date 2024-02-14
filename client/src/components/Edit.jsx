import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import backIcon from "../assets/back.png"

function Edit() {

  const navigate = useNavigate();
  const [data, setData] = useState({});
  const { id } = useParams();

  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const FormSubmitHandler = (formData) => {
    axios
    .put(`https://cat-cluster.onrender.com/listings/${data._id}`, formData)
      .then(() => {
        console.log("ADDED");
        navigate(`/listings/details/${data._id}`);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Some error occurred.");
      });
  };



  useEffect(() => {
    axios
    .get(`https://cat-cluster.onrender.com/listings/${data._id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setValue("user", res.data.user);
        setValue("title", res.data.title);
        setValue("link", res.data.link);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data === "Post not found..!") {
          toast.error("Post not found!");
        } else {
          toast.error("Server side error or wrong ID..!");
        }
      });
  }, [id, setValue]);

  return (
    <div className="form-parent">
      <form className="form" onSubmit={handleSubmit(FormSubmitHandler)}>
      <span id="form-head1">Edit Post</span>
      <span id="form-head2">Edit your post!</span>
        <FormControl fontWeight={800}>
          <FormLabel fontWeight={900} fontSize="1.8vmax" as='legend'>Username</FormLabel>
          <Input
            type="text"
            borderColor="black"
            {...register("user", {
              required: "Username is required"
            })}
          />
          <p className="err">{errors.user?.message}</p>
        </FormControl>
        <FormControl fontWeight={800}>
          <FormLabel fontWeight={900} fontSize="1.8vmax" as='legend'>Title</FormLabel>
          <Input
            type="text"
            borderColor="black"
            {...register("title", {
              required: "Title is required",
              maxLength:{ value: 40, message: "Max 40 Chars" }

            })}
          />
          <p className="err">{errors.title?.message}</p>
        </FormControl>
        <FormControl fontWeight={800}>
          <FormLabel fontWeight={900} fontSize="1.8vmax" as='legend'>Image Link</FormLabel>
          <Input
            type="text"
            borderColor="black"
            {...register("link", {
              required: "Provide a valid image url",
            })}
          />
          <p className="err">{errors.link?.message}</p>
        </FormControl>
        <div className="form-btns">
         <Link to='/listings' style={{textDecoration:"None", color:"Black"}}>
        <div className="span-div form-btn-back">
             <img src={backIcon} alt="" id="back"/>
           &nbsp;
             <span id="form-back">Back</span>
           </div>
         </Link>
       <button className="form-btn2" type="submit">
             Submit
       </button>
         </div>
      </form>
    </div>
  )
}

export default Edit