import React from "react";
import "./Headphones.css";
import topmost from "./Images/topmost.jpg";
import headphone1 from "./Images/headphone1.jpg";
import headphone2 from "./Images/headphone2.jpg";
import headphone3 from "./Images/headphone3.jpg";
import headphone4 from "./Images/headphone4.jpg";
import headphone5 from "./Images/headphone5.jpg";
import { Link } from "react-router-dom";

// import { Link } from 'react-router-dom';
function Headphones() {
  return (
    <div className="main-headphones-container">
      <div className="top-image-1">
        <img className="top-image" src={"topmost"} alt="laptop-img" />
      </div>

      <div className="image-row">
        <Link to="/Headphonesfirst">
        <div className="image-row-headphones">
          <img src={headphone1} alt="Image 1" className="image_1" />
        </div>
        </Link>

        <Link to="/Headphonessecond">
        <div className="image-row-headphones">
          <img src={headphone2} alt="Image 2" className="image_1" />
        </div>
        </Link>

        <Link to="/Headphonesthird">
        <div className="image-row-headphones">
          <img src={headphone3} alt="Image 3" className="image_1" />
        </div>
        </Link>

        <Link to="/Headphonesfourth">
        <div className="image-row-headphones">
          <img src={headphone4} alt="Image 4" className="image_1" />
        </div>
        </Link>

        <Link to="/Headphonesfifth">
        <div className="image-row-headphones">
          <img src={headphone5} alt="Image 5" className="image_1" />
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Headphones;
