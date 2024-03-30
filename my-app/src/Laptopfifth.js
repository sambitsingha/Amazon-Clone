import React from 'react'
import "./Laptopfifth.css"
import laptopfifth from "./Images/laptopfifth.webp"
import Products from './Product'
function Laptopfifth() {
  return (
    <div>
      <div className="main-laptopfirst-container">
        <Products
          id="133"
          title={
            "MSI Modern 14, Intel 12th Gen. i7-1255U, 36CM FHD 60Hz Laptop (16GB/512GB NVMe SSD/Windows 11 Home/Intel Iris Xe Graphics/Classic Black/1.4Kg), C12M-459IN"
          }
          price={"54,831"}
          image={laptopfifth}
          rating={4}
        />
      </div>
    </div>
  )
}

export default Laptopfifth;
