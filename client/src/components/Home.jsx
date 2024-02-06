import React from 'react'
import '../App.css'
import CatHome from '../assets/Cat_Home.png'
import Paw from '../assets/Paw-1.png'
import Link from '../assets/Link.png'
const Home = () => {
  return (
    <>
    <div className='home-parent-main'>
      <div className="home-parent">
        <div className="home-parent-part">
        <div className="home-part-1">
          <span id="home-span-1">Cat</span>
          <span id="home-span-2">Cluster</span>
          <span id="home-span-3">
          Laugh-out-loud cat moments for joyous feline enthusiasts worldwide.
          </span>
        </div>
        <div className="home-part-2">
          <img src={CatHome} alt="" id='home-cat'/>
        </div>
        </div>
        <div className="home-part-3">
          <button className="btn-1">
            Paw in!
            &nbsp;
            <img src={Paw} alt="" id="paw"/>
          </button>
          <button className="btn-2">
            FAQ
            &nbsp;
            <img src={Link} alt="" id="link"/>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home