import React, { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios'
import {BarLoader} from 'react-spinners'
import add from '../assets/add.png'
import { Link } from 'react-router-dom'

function Listings() {

  const [data, setData] = useState([])
  useEffect(()=>{
    setTimeout(()=>{
      axios.get("https://cat-cluster.onrender.com/listings")
    .then((data)=>{
      setData(data.data);
    }).catch((err)=>{
      console.log(err);
    })
    }, 1000)
  }, [])

  return (
    <>
    <div className='listings-grandParent'>
      <Link to='/listings/new' style={{textDecoration:"None", color:"Black"}}>
    <div className="newPost-btn">
      <img src={add} alt="" id='add'/>
    </div>
      </Link>
    {data.length == 0 ? (
      <BarLoader color='white'/>
      ) : (
        <div className="listings-parent">
      {data.map((e,i)=>{
        return (
          <Post listing={data[i]} key={i}/>
          )
        })}
  </div>
    )}
    </div>
    </>
  )
}

export default Listings;