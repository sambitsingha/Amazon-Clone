import React from "react";
import "./Laptopthird.css";
import Products from "./Product";
import laptopthird from "./Images/laptopthird.jpg"
function Laptopthird() {
  return (
    <div>
      <div className="main-laptopfirst-container">
        <Products
          id="132"
          title={
            "Lenovo IdeaPad 3 11th Gen Intel Core i3 15.6 FHD Thin & Light Laptop(8GB/512GB SSD/Windows 11/Office 2021/2Yr Warranty/3months Xbox Game..."
          }
          price={"33,650"}
          image={laptopthird}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Laptopthird;
