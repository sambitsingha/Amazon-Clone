import React from 'react'
import "./Womentwo.css"
import Products from './Product'
import Women1 from "./Images/Women2.1.webp"
import Women2 from "./Images/Women2.2.webp"
import Women3 from "./Images/Women2.3.webp"
function Womentwo() {
  return (
    <div className="Tablets-main-container">
      <div className='first-row'>
    <div className="main-first-container">
      <Products
        id="801"
        title={
          " Bewakoof Official Disney Merchandise Women's Graphic Print Boyfriend Fit Half Sleeve Round Neck Cotton T-Shirt"
        }
        price={"449"}
        image={Women1}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="802"
        title={
          "VERO MODA Women's Polyester Regular Fit Top"
        }
        price={"780"}
        image= {Women2}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="803"
        title={
          "Bewakoof Women's Printed 100% Cotton T-Shirt - Boyfriend Fit, Round Neck, Half Sleeves"
        }
          price={"445"}
        image={Women3}
        rating={5}
      />
    </div>
    </div>
    </div>
  )
}

export default Womentwo
