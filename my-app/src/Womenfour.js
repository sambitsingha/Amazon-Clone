import React from 'react'
import "./Womenfour.css"
import Products from './Product'
import Women1 from "./Images/Women4.1.webp"
import Women2 from "./Images/Women4.2.webp"
import Women3 from "./Images/Women4.3.webp"
function Womenfour() {
  return (
    <div className="womens-main-container">
      <div className='first-row'>
    <div className="main-first-container">
      <Products
        id="1001"
        title={
          " AKHILAM Women's Net Woven Design Saree With Unstitched Blouse Piece (AAVYA701_HV-Parent)"
        }
        price={"1,749"}
        image={Women1}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="1002"
        title={
          "SWORNOF Womens Kanjivaram Soft Silk Saree Patola saree With Blouse Piece"
        }
        price={"999"}
        image= {Women2}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="1003"
        title={
          "Womanista Women's Sequinned Kaftan Poly Crepe Sarees + Navy-Blue Lycra Shapewear Saree Petticoat"
        }
          price={"1,649"}
        image={Women3}
        rating={5}
      />
    </div>
    </div>
    </div>
  )
}

export default Womenfour
