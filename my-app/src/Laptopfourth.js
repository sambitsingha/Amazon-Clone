import React from 'react'
import "./Laptopfourth.css"
import laptopfourth from "./Images/laptopfourth.webp"
import Products from './Product'
function Laptopfourth() {
  return (
    <div>
      <div className="main-laptopfirst-container">
        <Products
          id="133"
          title={
            "HP 15s,11th Gen Intel Core i3-1115G4 8GB RAM/512GB SSD 15.6-inch(39.6 cm) Micro-Edge Anti-Glare FHD Laptop/Alexa Built-in/Win 11/Intel UHD Graphics/Dual Speakers/MS Office 2021/1.69 Kg, 15s-fq2673TU"
          }
          price={"37,000"}
          image={laptopfourth}
          rating={4}
        />
      </div>
    </div>
  )
}

export default Laptopfourth;
