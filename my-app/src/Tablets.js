import React from 'react'
import "./Tablets.css"
import Tablet1 from "./Images/Tablet1.jpg"
import Tablet2 from "./Images/Tablet2.jpg"
import Tablet3 from "./Images/Tablet3.jpg"
import Tablet4 from "./Images/Tablet4.jpg"
import Tablet5 from "./Images/Tablet5.jpg"
import Products from './Product'
function Tablets() {
  return (
    <div className="Tablets-main-container">
      <div className='first-row'>
    <div className="main-first-container">
      <Products
        id="701"
        title={
          " Apple iPad Air (5th Generation): with M1 chip, 27.69 cm (10.9″) Liquid Retina Display, 64GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life Blue"
        }
        price={"55,999"}
        image={Tablet1}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="702"
        title={
          "Samsung Galaxy Tab S8 | 27.81cm (11.0) LCD Display | 4nm Processor | 8,000 mAh Battery | Dolby Atmos Quad Speakers | Android 12.0 | 8GB+128GB | Wi-Fi | S Pen Support | Graphite"
        }
        price={"49,999"}
        image= {Tablet2}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="703"
        title={
          "Xiaomi Pad 6| Qualcomm Snapdragon 870| 144Hz Refresh Rate| 8GB, 256GB| 2.8K+ Display (11-inch/27.81cm)|1 Billion Colours| Dolby Vision Atmos| Quad Speakers| Wi-Fi| Gray"
        }
          price={"28,999"}
        image={Tablet3}
        rating={5}
      />
    </div>
    </div>

    <div className='second-row'>


    <div className="main-first-container">
      <Products
        id="704"
        title={
                "Apple iPad Pro 11″ (4th Generation): with M2 chip, Liquid Retina Display, 128GB, Wi-Fi 6E, 12MP front/12MP and 10MP Back Cameras, Face ID, All-Day Battery Life  Space Grey "
        }
        price={"79,900"}
        image={Tablet4}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="705"
        title={
          " Lenovo Tab M10 FHD 3rd Gen| 10.1 Inch (25.65 cm) | 4 GB RAM, 64 GB ROM| Wi-Fi | Full HD Display| Dual Speakers| Octa-Core Processor (Storm Grey)"
        }
        price={"10,999"}
        image={Tablet5}
        rating={4}
      />
    </div>
  </div>
  </div>
  )
}

export default Tablets
