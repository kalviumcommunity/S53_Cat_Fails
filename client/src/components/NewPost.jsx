import React from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Button
} from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import axios from "axios"
import backIcon from "../assets/back.png"

function NewPost() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  console.log(watch())
  const FormSubmitHandler = (data)=>{
    axios.post("https://cat-cluster.onrender.com/listings",data).then(()=>{
      console.log("ADDED")
      navigate("/listings")
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className="form-parent">
      <form className="form" onSubmit={handleSubmit(FormSubmitHandler)}>
      <span id="form-head1">New Post</span>
      <span id="form-head2">Enter the following details!</span>
        <FormControl fontWeight={800}>
          <FormLabel fontWeight={900} fontSize="1.8vmax" as='legend'>Username</FormLabel>
          <Input
            type="text"
            borderColor="black"
            placeholder="imtero123"
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
            placeholder='Cat jumps off the ledge!'
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
            placeholder="https://media.tenor.com/awZIIzdbwPIAAAAM/cat-jumping.gif"
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
  );
}























// function NewPost() {
//   const navigate = useNavigate()
  // return (
  //   <>
  //     <form onSubmit={handleSubmit}>
  //       <div className='form-parent'>
  //   <div className='form-main'>
  //   <span id="form-head1">New Post</span>
  //     <span id="form-head2">Enter the following details!</span>
  //    <FormControl isRequired isInvalid={errors["user"]} fontWeight={900}>
  //         <FormLabel fontWeight={900} fontSize="1.8vmax" as='legend'>User</FormLabel>
  //         <Input
  //           name="user"
  //           type="text"
  //           borderColor="black"
  //           onChange={inputChange}
  //           placeholder="imtero123"
  //           />
  //         {errors["user"] ? (
  //           <FormErrorMessage>User Required</FormErrorMessage>
  //           ) : (
  //             <FormHelperText>Enter a your username!</FormHelperText>
  //             )}
  //       </FormControl>

  //       <FormControl isRequired isInvalid={errors["title"]} fontWeight={900}>
  //         <FormLabel fontWeight={900} fontSize="1.8vmax" as='legend'>Title</FormLabel>
  //         <Input
  //           name="title"
  //           type="text"
  //           borderColor="black"
  //           onChange={inputChange}
  //           placeholder='Cat jumps off the ledge!'
  //           />
  //         {errors["title"] ? (
  //           <FormErrorMessage>Title Required</FormErrorMessage>
  //           ) : (
  //             <FormHelperText>Enter title of your username!</FormHelperText>
  //             )}
  //       </FormControl>


  //       <FormControl isRequired isInvalid={errors["link"]} fontWeight={900}>
  //         <FormLabel fontWeight={900} fontSize="1.8vmax" as='legend'>Image/GIF Link</FormLabel>
  //         <Input
  //           name="link"
  //           type="text"
  //           borderColor="black"
  //           onChange={inputChange}
  //           placeholder="https://media.tenor.com/awZIIzdbwPIAAAAM/cat-jumping.gif"
  //           />
  //         {errors["Link"] ? (
  //           <FormErrorMessage>Image/GIF Requireed</FormErrorMessage>
  //           ) : (
  //             <FormHelperText>URL is required!</FormHelperText>
  //             )}
  //       </FormControl>
  //       <div className="form-btns">
  //       <Link to='/listings' style={{textDecoration:"None", color:"Black"}}>
  //       <div className="span-div form-btn-back">
  //           <img src={backIcon} alt="" id="back"/>
  //           &nbsp;
  //           <span id="form-back">Back</span>
  //         </div>
  //       </Link>
  //     <button className="form-btn2" type="submit">
  //           Submit
  //     </button>
  //       </div>
      
  //   </div>
  //   </div>
  //             </form>
              
  //             </>
  // );
// }

export default NewPost;