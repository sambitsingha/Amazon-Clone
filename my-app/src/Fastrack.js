import React from 'react'
import "./Fastrack.css"
import Products from './Product'
import fastrackone from "./Images/fastrackone.webp"
import fastracktwo from "./Images/fastracktwo.webp"
import fastrackthree from "./Images/fastrackthree.webp"

function Fastrack() {
  return (
    <div className="fastrack-main-container">
    <div className="main-first-container">
      <Products
        id="501"
        title={
          " Fastrack Limitless Fs2 with 1.91 Super Ultravu Display|Bt Calling|Advanced ATS Chipset|Functional Crown|320X385 Pixel Resolution|100+ Sports Mode & Watchfaces|Calculator|Ip68 Smartwatch, Black"
        }
        price={"2,118"}
        image={fastrackone}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="502"
        title={
          " Fastrack FS1 Pro Smartwatch|1.96 Super AMOLED Arched Display with High Resolution of 410X502|Singlesync BT Calling|Nitrofast Charging|110+ Sports Modes|200+ Watchfaces"
        }
        price={"2,860"}
        image={fastracktwo}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="503"
        title={
          " Fastrack Limitless FS1+ Smartwatch|Biggest 2.0 UltraVU Display|950 Nits Brightness|SingleSync BT Calling|Nitro Fast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Day Battery - Jet Black"
        }
        price={"1,704"}
        image={fastrackthree}
        rating={4}
      />
    </div>
  </div>
  )
}

export default Fastrack
