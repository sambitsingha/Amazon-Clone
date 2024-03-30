import React from "react";
import "./Laptopsecond.css";
import Products from "./Product";
import laptopsecond from "./Images/laptopsecond.jpg";
function Laptopsecond() {
  return (
    <div>
      <div className="main-laptopfirst-container">
        <Products
          id="133"
          title={
            "ASUS Vivobook 14, IntelCore i3-1215U 12th Gen, 14 (35.56 cm) FHD, Thin and Light Laptop (8 GB RAM/512GB SSD/Win11/Office 2021/Fingerprint/42WHr /Silver/1.40 kg), X1404ZA-NK322WS"
          }
          price={"40,990"}
          image={laptopsecond}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Laptopsecond;
