import React from 'react'
import "./Homeaudio.css"
import Homeaudio1 from "./Images/Homeaudio1.jpg"
import Homeaudio2 from "./Images/Homeaudio2.jpg"
import Homeaudio3 from "./Images/Homeaudio3.jpg"
import Homeaudio4 from "./Images/Homeaudio4.jpg"
import Homeaudio5 from "./Images/Homeaudio5.jpg"
import Products from './Product';
function Homeaudio() {
  return (
    <div className="homeaudio-main-container">

<div className='first-row'>
    <div className="main-first-container">
      <Products
        id="801"
        title={
          " boAt Stone 180 5W Bluetooth Speaker with Upto 10 Hours Playback, 1.75 Driver, IPX7 & TWS Feature(Blue)" 
        }
        price={"999"}
        image={Homeaudio1}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="802"
        title={
          "ZEBRONICS Zeb-Astra 20 Wireless BT v5.0 Portable Speaker with 10W RMS Output, TWS, 10H Backup Approx, Built in Rechargeable Battery FM Radio, AUX, mSD, USB, Call Function and Dual 52mm Drivers Multi"
        }
        price={"699"}
        image= {Homeaudio2}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="803"
        title={
          "Tacson S10 Mini Portable Wireless Bluetooth Speaker with Smart LED Light, for MP3 Music Player,connectivity SD Card, All Smartphone, Multicolor"
        }
          price={"321"}
        image={Homeaudio3}
        rating={2}
      />
    </div>
    </div>

    <div className='second-row'>

    <div className="main-first-container">
      <Products
        id="804"
        title={
                "boAt Stone 620 Bluetooth Speaker with 12W RMS Stereo Sound, 10HRS Playtime, TWS Feature, IPX4, Multi-Compatibility Mode(Black)"
        }
        price={"1,599"}
        image={Homeaudio4}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="805"
        title={
          " Zebronics ZEB-COUNTY 3W Wireless Bluetooth Portable Speaker With Supporting Carry Handle, USB, SD Card, AUX, FM & Call Function. (Black)"
        }
        price={"499"}
        image={Homeaudio5}
        rating={4}
      />
    </div>
  </div>
  </div>
  )
}

export default Homeaudio;
