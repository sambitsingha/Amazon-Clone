import React from 'react'
import "./Accessories.css"
import keyboard from "./Images/keyboard.webp"
import mouse from "./Images/mouse.jpg"
import { Link } from 'react-router-dom'
import Products from './Product'
import Mousepad from "./Images/Mousepad.webp"
import webcam from "./Images/webcam.jpg"
import bags from "./Images/bags.jpg"

function Accessories() {
  return (
    <div className="accessories-main-container">
      <div className='first-row'>
    <div className="main-first-container">
      <Products
        id="601"
        title={
          " Logitech Wave Keys Wireless Ergonomic Keyboard with Cushioned Palm Rest, Comfortable Natural Typing, Easy-Switch, Bluetooth, Logi Bolt Receiver, for Multi-OS, Windows/Mac - Graphite"
        }
        price={"5,402"}
        image={keyboard}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="602"
        title={
          " Logitech New Launch Speedy, 2.4GHz, Wireless Mouse, 6 Buttons, 800/1200/1600 DPI, High Precision, Comfortable & Ergonomic Design, Power Saving Mode, Works on Most Surface"
        }
        price={"595"}
        image= {mouse}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="603"
        title={
          " STRIFF Mpad Mouse Mat 230X190X3mm Gaming Mouse Pad, Non-Slip Rubber Base, Waterproof Surface, Premium-Textured, Compatible with Laser and Optical Mice(Universe Black)"
        }
          price={"99"}
        image={Mousepad}
        rating={4}
      />
    </div>
    </div>

    <div className='second-row'>

    <div className="main-first-container">
      <Products
        id="604"
        title={
                "Logitech C270 Digital HD Webcam with Widescreen HD Video Calling, HD Light Correction, Noise-Reducing Mic, for Skype, FaceTime, Hangouts, WebEx, PC/Mac/Laptop/MacBook/Tablet - (Black, HD 720p/30fps) "
        }
        price={"2,195"}
        image={webcam}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="605"
        title={
          " FUR JADEN 40L Weekender Travel Laptop Backpack with Anti Theft Pocket, Organizer, 15.6 Inch Padded Laptop Sleeve and Dual Handles"
        }
        price={"1,229"}
        image={bags}
        rating={4}
      />
    </div>
  </div>
  </div>
  )
}

export default Accessories;
