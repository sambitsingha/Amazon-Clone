import React from "react";
import "./Laptops.css";
import Laptops from "./Images/laptops1.png";
import Sublaptop1 from "./Images/Sublaptop1.png";
import Sublaptop2 from "./Images/Sublaptop2.png";
import Sublaptop3 from "./Images/Sublaptop3.png";
import Sublaptop4 from "./Images/Sublaptop4.png";
import Sublaptop5 from "./Images/Sublaptop5.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Laptop() {
  return (
    <div className="main-laptops-container">
      <div className="top-image-1">
        <img className="top-image" src={Laptops} alt="laptop-img" />
      </div>

      <div className="image-row">
        <Link to="/Laptopfirst">
          <div className="image-row-laptops">
            <img src={Sublaptop1} alt="Image 1" className="image_1" />
          </div>
        </Link>

        <Link to="/Laptopsecond">
          <div className="image-row-laptops">
            <img src={Sublaptop2} alt="Image 2" className="image_1" />
          </div>
        </Link>

        <Link to="/Laptopthird">
          <div className="image-row-laptops">
            <img src={Sublaptop3} alt="Image 3" className="image_1" />
          </div>
        </Link>

        <Link to="/Laptopfourth">
          <div className="image-row-laptops">
            <img src={Sublaptop4} alt="Image 4" className="image_1" />
          </div>
        </Link>

        <Link to="/Laptopfifth">
          <div className="image-row-laptops">
            <img src={Sublaptop5} alt="Image 5" className="image_1" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Laptop;
