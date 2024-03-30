import React from 'react'
import "./Gaming.css"
import Products from './Product'
import gaming1 from "./Images/gaming1.jpg"
import gaming2 from "./Images/gaming2.jpg"
import gaming3 from "./Images/gaming3.jpg"
import gaming4 from "./Images/gaming4.jpg"
import gaming5 from "./Images/gaming5.jpg"

function Gaming() {
  return (
    <div className="Gaming-main-container">
      <div className='first-row'>
    <div className="main-first-container">
      <Products
        id="801"
        title={
          "Dell G15 5520 Gaming Laptop, Intel i5-12500H, 16GB DDR5, 512GB SSD, NVIDIA RTX 3050 (4GB GDDR6), 15.6 (39.62cm) FHD 120Hz 250 nits Display, Backlit KB Orange, Win 11 + MSO'21, Dark Shadow Grey, 2.81kg "
        }
        price={"71,990"}
        image={gaming1}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="802"
        title={
          " ASUS TUF Gaming F15, 15.6 (39.62 cms) FHD 144Hz, Intel Core i5-11400H 11th Gen, RTX 3050 4GB Graphics, Gaming Laptop (8GB/512GB SSD/90WHrs Battery/Windows 11/Office 2021/Black/2.3 kg) FX506HC-HN089WS"
        }
        price={"59,490"}
        image={gaming2}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="803"
        title={
          " ASUS TUF Gaming F15, 15.6-inch (39.62 cms) FHD 144Hz, Intel Core i5-10300H 10th Gen, 4GB NVIDIA GeForce GTX 1650, Gaming Laptop (8GB/512GB SSD/Windows 11/Office H&S/Black/2.3 Kg), FX506LHB-HN355WS"
          
        }
        price={"53,300"}
        image={gaming3}
        rating={4}
      />
    </div>
    </div>

    <div className='second-row'>

    <div className="main-first-container">
      <Products
        id="804"
        title={
          " HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop (8GB RAM/512GB SSD/4GB Radeon RX5500M Graphics/B&O/Backlit KB/Win 11/MS Office/Xbox Game Pass),16-E0162ax"
          
        }
        price={"55,999"}
        image={gaming4}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="805"
        title={
          " HP Pavilion Gaming Latest AMD Ryzen 5 5600H Processor 15.6 (39.6cm) FHD Gaming Laptop (8GB/512GB SSD/Windows 11 Home/NVIDIA GeForce GTX 1650 4GB Graphics/B&O/Backlit KB/1.98 Kg), 15-ec2150AX"
          
        }
        price={"59,290."}
        image={gaming5}
        rating={4}
      />
    </div>
    </div>
    </div>
  )
}

export default Gaming
