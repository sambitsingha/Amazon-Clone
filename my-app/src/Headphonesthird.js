import React from 'react'
import "./Headphonesthird.css"
import head3 from "./Images/head3.webp"
import Products from './Product'
function Headphonesthird() {
  return (
    <div>
      <div className="main-headphone-first-container">
        <Products
          id="701"
          title={
            "Boult Audio Z40 True Wireless in Ear Earbuds with 60H Playtime, Zen™ ENC Mic, Low Latency Gaming, Type-C Fast Charging, Made in India, 10mm Rich Bass Drivers, IPX5, Bluetooth 5.3 Ear Buds TWS (Blue)"
          }
          price={"1,399"}
          image={head3}
          rating={3}
        />
      </div>
    </div>
  )
}

export default Headphonesthird
