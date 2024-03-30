import React from 'react'
import "./Headphonesfourth.css"
import head4 from "./Images/head4.webp"
import Products from './Product'

function Headphonefourth() {
  return (
    <div>
    <div className="main-headphone-first-container">
      <Products
        id="701"
        title={
          "Wings Phantom Pro Earphones Gaming Earbuds with LED Battery Indicator, 50ms Low Latency, Bluetooth 5.3, 40 Hours Playtime, MEMs Mic, IPX4 Resist, 12mm Driver, 500mah case, Headphones, (Black TWS)"
        }
        price={"1,099"}
        image={head4}
        rating={4}
      />
    </div>
  </div>
  )
}

export default Headphonefourth
