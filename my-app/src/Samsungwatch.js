import React from 'react'
import "./Samsungwatch.css"
import Products from './Product';
import samsungone from "./Images/samsungone.jpg";
import samsungtwo from "./Images/samsungtwo.jpg";
import samsungthree from "./Images/samsungthree.jpg";


function Samsungwatch() {
  return (
    <div className="samsung-main-container">
    <div className="main-first-container">
      <Products
        id="501"
        title={
          " Samsung Galaxy Watch4 Bluetooth(4.0 cm, Black, Compatible with Android only)"
        }
        price={"10,999"}
        image={samsungone}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="502"
        title={
          " Samsung Galaxy Watch4 Classic LTE (4.6cm, Black)"
        }
        price={"14,799"}
        image={samsungtwo}
        rating={4}
      />
    </div>

    <div className="main-first-container">
      <Products
        id="503"
        title={
          " Samsung Galaxy Watch4 Bluetooth(4.0 cm, Pink Gold, Compatible with Android only)"
        }
        price={"10,999"}
        image={samsungthree}
        rating={4}
      />
    </div>
  </div>
  );
}

export default Samsungwatch;
