import React from 'react'
import "./Noiseone.css"
import noiseone from "./Images/noiseone.jpg";
import noisetwo from "./Images/noisetwo.jpg";


import noisethree from "./Images/noisethree.jpg";
import Products from './Product';


function Noiseone() {
  return (
    <div className="noise-main-container">
    <div className="main-first-container">
      <Products
        id="201"
        title={
          " Noise Pulse 2 Max 1.85 Display, Bluetooth Calling Smart Watch, 10 Days Battery, 550 NITS Brightness, Smart DND, 100 Sports Modes, Smartwatch for Men and Women (Jet Black)"
        }
        price={"1,199"}
        image={noiseone}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="202"
        title={
          " Noise Pulse Go Buzz Smart Watch with Advanced Bluetooth Calling, 1.69 TFT Display, SpO2, 100 Sports Mode with Auto Detection, Upto 7 Days Battery (2 Days with Heavy Calling) - Jet Black"
        }
        price={"1,299"}
        image={noisetwo}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="203"
        title={
          " Noise Newly Launched Quad Call 1.81 Display, Bluetooth Calling Smart Watch, AI Voice Assistance, 160+Hrs Battery Life, Metallic Build, in-Built Games, 100 Sports Modes, 100+ Watch Faces (Jet Black)"
          
        }
        price={"1,299"}
        image={noisethree}
        rating={4}
      />
    </div>
    </div>
  )
}

export default Noiseone;
