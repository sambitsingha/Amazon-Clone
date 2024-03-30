import React from 'react'
import "./Cameras.css"
import Camera1 from "./Images/Camera1.jpg"
import Camera2 from "./Images/Camera2.jpg"
import Camera3 from "./Images/Camera3.jpg"
import Camera4 from "./Images/Camera4.jpg"
import Camera5 from "./Images/Camera5.jpg"

import Products from './Product'

function Cameras() {
  return (
    <div className="cameras-main-container">
      <div className='first-row'>
    <div className="main-first-container">
      <Products
        id="701"
        title={
          " Sony Alpha ILCE-7M4K Full-Frame Hybrid Camera 33MP Interchangeable-Lens Mirrorless Camera with 28-70mm Digital Zoom Lens (4K 60P Video Recording, Real-Time Eye AF for Humans, Birds, Animals) - Black"
        }
        price={"2,30,989"}
        image={Camera1}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="702"
        title={
          "Sony Alpha ILCE-7M4K Full-Frame Hybrid Camera 33MP Interchangeable-Lens Mirrorless Camera with 28-70mm Digital Zoom Lens (4K 60P Video Recording, Real-Time Eye AF for Humans, Birds, Animals) - Black"
        }
        price={"2,30,989"}
        image= {Camera2}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="703"
        title={
          " Sigma 150-600 Mm F/5-6.3 Dg Os HSM Contemporary Lens for Canon Cameras (745101, Black)"
        }
          price={"95,990"}
        image={Camera3}
        rating={5}
      />
    </div>
    </div>

    <div className='second-row'>

    <div className="main-first-container">
      <Products
        id="704"
        title={
                "Logitech C270 Digital HD Webcam with Widescreen HD Video Calling, HD Light Correction, Noise-Reducing Mic, for Skype, FaceTime, Hangouts, WebEx, PC/Mac/Laptop/MacBook/Tablet - (Black, HD 720p/30fps) "
        }
        price={"5,950"}
        image={Camera4}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="705"
        title={
          " IZI Mini X Nano Fly More Combo 4K Camera Drone UHD 20MP, CMOS,4KM Live Video, 93-min Flight Time, GPS, 3-Axis Gimbal, 10+Flight Modes, 3xSmart Battery, Fast Tri-Charger, Under 249g UAV - 1 Yr Warranty"
        }
        price={"43,999"}
        image={Camera5}
        rating={4}
      />
    </div>
  </div>
  </div>
  )
}

export default Cameras
