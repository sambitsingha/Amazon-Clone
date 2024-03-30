import React from 'react'
import './Menone.css'
import Products from './Product'
import Men1 from "./Images/Men1.1.webp"
import Men2 from "./Images/Men1.2.webp"
import Men3 from "./Images/Men1.3.webp"

function Menone() {
  return (
    <div className="Tablets-main-container">
    <div className='first-row'>
  <div className="main-first-container">
    <Products
      id="1101"
      title={
        "CRAZYMONK Demon Slayer Tanjiro Kamado Anime Oversized T-Shirt"
      }
      price={"629"}
      image={Men1}
      rating={5}
    />
  </div>

  <div className="main-first-container">
    <Products
      id="1102"
      title={
        "CRAZYMONK Jujutsu Kaisen Ora Ora Gojo SatoruUnisex Anime Hoodie"
      }
      price={"799"}
      image= {Men2}
      rating={5}
    />
  </div>

  <div className="main-first-container">
    <Products
      id="1103"
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

export default Menone
