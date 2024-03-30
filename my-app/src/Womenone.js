import React from 'react'
import "./Womenone.css"
import Products from './Product'
import Women1 from "./Images/Women1.1.webp"
import Women2 from "./Images/Women1.2.webp"
import Women3 from "./Images/Women1.3.webp"

function Womenone() {
  return (
    <div className="Tablets-main-container">
      <div className='first-row'>
    <div className="main-first-container">
      <Products
        id="801"
        title={
          " rangita Rayon Knee Length Printed Straight Kurti for Women | Kurta for Women"
        }
        price={"569"}
        image={Women1}
        rating={5}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="802"
        title={
          "GoSriKi Women's Cotton Blend Straight Embroidery Kurta with Pant & Dupatta"
        }
        price={"799"}
        image= {Women2}
        rating={5}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="803"
        title={
          "rangita Silk Calf Length Embroidered Anarkali Kurti for Women | Kurta for Women"
        }
          price={"1,139"}
        image={Women3}
        rating={5}
      />
    </div>
    </div>
    </div>
  )
}

export default Womenone
