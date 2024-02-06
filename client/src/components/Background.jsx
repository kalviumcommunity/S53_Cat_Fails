import React from 'react'
import cat_1 from '../assets/Paw-1.png'
import cat_2 from '../assets/Paw-2.png'
import cat_3 from '../assets/Paw-3.png'
import '../App.css'

const Background = () => {
  return (
    <div className="back-parent">
        <img src={cat_1} alt="" />
        <img src={cat_2} alt="" />
        <img src={cat_3} alt="" />
        <img src={cat_1} alt=""/>
        <img src={cat_2} alt="" />
        <img src={cat_3} alt="" />
        <img src={cat_1} alt=""/>
        <img src={cat_2} alt="" />
        <img src={cat_3} alt="" />
    </div>
  )
}

export default Background