import React from 'react'
import "./Headphonessecond.css"
import Products from './Product'
import head2 from "./Images/head2.jpg"
function Headphonessecond() {
  return (
    <div>
      <div className="main-headphone-first-container">
        <Products
          id="701"
          title={
            "pTron Newly Launched Bassbuds B91 TWS Earbuds with 38ms Gaming Low Latency, AI-ENC Stereo Calls, 40Hrs Playtime, Dual HD Mic, in-Ear Bluetooth 5.3 Headphones, Fast Type-C Charging & IPX5 (Blue)"
          }
          price={"699"}
          image={head2}
          rating={3}
        />
      </div>
    </div>
  )
}

export default Headphonessecond;
