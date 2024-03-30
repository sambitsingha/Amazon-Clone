import React from 'react'
import "./Mentwo.css"
import Products from './Product'
import Men1 from "./Images/Men2.1.webp";
import Men2 from "./Images/Men2.2.webp";
import Men3 from "./Images/Men2.3.webp";
function Mentwo() {
  return (
    <div className="Tablets-main-container">
    <div className='first-row'>
  <div className="main-first-container">
    <Products
      id="1201"
      title={
        "The Souled Store |Men & Boys Official Round Neck Iron Man First Flight | Half Sleeve Black Color 100% Cotton | Printed Drop Cut T-Shirts"
      }
      price={"681"}
      image={Men1}
      rating={5}
    />
  </div>

  <div className="main-first-container">
    <Products
      id="1202"
      title={
        "The Souled Store|Official Iron Man: Power Suit Mens and Boys Hoodies |Full Sleeve| Regular fit Graphic Printed| 60% Cotton 40% Polyester Black & Burgundy Hoodies"
      }
      price={"1,399"}
      image= {Men2}
      rating={5}
    />
  </div>

  <div className="main-first-container">
    <Products
      id="1203"
      title={
        "CRAZYMONK Naruto Madara Uchiha Anime Oversized T-Shirt"
      }
        price={"629"}
      image={Men3}
      rating={5}
    />
  </div>
  </div>
  </div>
  )
}

export default Mentwo
