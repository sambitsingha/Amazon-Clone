import React from "react";
import "./Laptopfirst.css";
import laptopfirst from "./Images/laptopfirst.jpg";
import IosShareIcon from "@mui/icons-material/IosShare";
import Products from "./Product";
function Laptopfirst() {
  return (
    <div className="main-laptopfirst-container">
      <Products
        id="131"
        title={
          " Dell 15 Laptop, Intel Core i5-1135G7 Processor/ 8GB/ 1TB+256GB FHD Display/Mobile Connect/Windows 11 + MSO 21/15 Month McAfee/Spill-Resistant Keyboard/Black/Thin & Light 1.69kg"
        }
        price={"44,990"}
        image={laptopfirst}
        rating={3}
      />
      
    </div>
  );
}

export default Laptopfirst;
