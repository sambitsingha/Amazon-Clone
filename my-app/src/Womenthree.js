import React from 'react'
import "./Womenthree.css"
import Products from './Product'
import Women1 from './Images/Women3.1.webp'
import Women2 from './Images/Women3.2.webp'
import Women3 from './Images/Women3.3.webp'
function Womenthree() {
  return (
    <div className="womens-main-container">
      <div className='first-row'>
    <div className="main-first-container">
      <Products
        id="901"
        title={
          " ZEYO Women's Cotton Heart Printed Night Suit Set of Shirt & Pyjama 5274"
        }
        price={"899"}
        image={Women1}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="902"
        title={
          "ZEYO Women's Cotton Dot Printed Night Suit Set of Top & Pyjama 5281"
        }
        price={"899"}
        image= {Women2}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="903"
        title={
          "ZEYO Women's Cotton Dot Printed Night Suit Set of Shirt & Pyjama 5242"
        }
          price={"899"}
        image={Women3}
        rating={5}
      />
    </div>
    </div>
    </div>
  )
}

export default Womenthree
