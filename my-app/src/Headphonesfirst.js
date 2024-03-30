import React from 'react'
import "./Headphonesfirst.css"
import head1 from "./Images/head1.jpg"
import Products from './Product'
function Headphonesfirst() {
  return (
    <div>
      <div className="main-headphone-first-container">
        <Products
          id="601"
          title={
            "boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)"
          }
          price={"1,299"}
          image={head1}
          rating={4}
        />
      </div>
    </div>
  )
}

export default Headphonesfirst;
