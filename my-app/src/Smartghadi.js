import React from 'react'
import "./Smartghadi.css"
import Smartwatches from './Images/Smartwatches.jpg'
import brandone  from './Images/brandone.jpg'
import brandtwo from './Images/brandtwo.jpg'
import brandthree from './Images/brandthree.jpg'
import brandfour from './Images/brandfour.jpg'
import brandfive from './Images/brandfive.jpg'
import { Link } from 'react-router-dom'

function Smartghadi() {
  return (
    <div className="main-Smartwatches-container">
    <div className="top-image-1">
      <img className="top-image" src={Smartwatches} alt="smartwatch-img" />
    </div>

    <div className="image-row">
    <Link to="/Appleone">
        <div className="image-row-Smartwatches">
          <img src={brandone} alt="Image 1" className="image_1" />
        </div>
      </Link>

     
      <Link to="/Noiseone">
        <div className="image-row-Smartwatches">
          <img src={brandtwo} alt="Image 2" className="image_1" />
        </div>
      </Link>

      <Link to="/Boatwatch">
        <div className="image-row-Smartwatches">
          <img src={brandthree} alt="Image 3" className="image_1" />
        </div>
      </Link>

      <Link to="/Samsungwatch">
      <div className="image-row-Smartwatches">
        <img src={brandfour} alt="Image 4" className="image_1" />
      </div>
      </Link>

      <Link to="/Fastrack">
      <div className="image-row-Smartwatches">
        <img src={brandfive} alt="Image 5" className="image_1" />
      </div>
     </Link>
    </div>
  </div>
  )
}

export default Smartghadi;
