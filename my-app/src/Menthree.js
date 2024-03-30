import React from 'react'
import "./Menthree.css"
import Products from './Product'
import Men1 from "./Images/Men3.1.webp"
import Men2 from "./Images/Men3.2.webp"
import Men3 from "./Images/Men3.3.webp"
function Menthree() {
  return (
    <div className="Tablets-main-container">
    <div className='first-row'>
  <div className="main-first-container">
    <Products
      id="1301"
      title={
        "Wear Your Opinion Official Marvel Merchandise: Captain America Printed Men's Half Sleeve Cotton Tshirt"
      }
      price={"599"}
      image={Men1}
      rating={5}
    />
  </div>

  <div className="main-first-container">
    <Products
      id="1302"
      title={
        "Bewakoof Men's Winter Soldier Sigil 100% Cotton T-Shirt - Regular Fit, Round Neck, Half Sleeves"
      }
      price={"509"}
      image= {Men2}
      rating={5}
    />
  </div>

  <div className="main-first-container">
    <Products
      id="1303"
      title={
        "The Souled Store Men Captain America: Shield Multicolored Printed T-Shirts"
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

export default Menthree
