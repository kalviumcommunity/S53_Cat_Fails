import React, { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios'
import {BarLoader} from 'react-spinners'

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