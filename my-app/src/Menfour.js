import React from 'react'
import "./Menfour.css"
import Products from './Product'
import Men1 from "./Images/Men4.1.webp";
import Men2 from "./Images/Men4.2.webp";
import Men3 from "./Images/Men4.3.webp";
function Menfour() {
  return (
    <div className="Tablets-main-container">
    <div className='first-row'>
  <div className="main-first-container">
    <Products
      id="1501"
      title={
        "The Souled Store Men Official Star Wars: Useless to Resist White Printed Oversized T-Shirts"
      }
      price={"944"}
      image={Men1}
      rating={5}
    />
  </div>

  <div className="main-first-container">
    <Products
      id="1502"
      title={
        "The Souled Store|Official Star Wars: Stormtrooper's Helmet Mens and Boys Hoodies |Full Sleeve| Regular fit Graphic Printed| 60% Cotton 40% Polyester Black & White Color Men Hoodies"
      }
      price={"1,791"}
      image= {Men2}
      rating={5}
    />
  </div>

  <div className="main-first-container">
    <Products
      id="1503"
      title={
        "The Souled Store Men's Oversized Fit T-Shirt"
      }
        price={"839"}
      image={Men3}
      rating={5}
    />
  </div>
  </div>
  </div>
  )
}

export default Menfour
