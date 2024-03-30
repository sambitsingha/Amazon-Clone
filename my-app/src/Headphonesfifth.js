import React from 'react'
import "./Headphonesfifth.css"
import Products from './Product'
import head5 from "./Images/head5.webp"
function Headphonesfifth() {
  return (
    <div>
    <div className="main-headphone-first-container">
      <Products
        id="701"
        title={
          "Wings Phantom Pro Earphones Gaming Earbuds with LED Battery Indicator, 50ms Low Latency, Bluetooth 5.3, 40 Hours Playtime, MEMs Mic, IPX4 Resist, 12mm Driver, 500mah case, Headphones, (Black TWS)"
        }
        price={"1,099"}
        image={head5}
        rating={4}
      />
    </div>
  </div>
  )
}

export default Headphonesfifth
