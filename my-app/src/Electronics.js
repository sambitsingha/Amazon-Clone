import React from "react";
import "./Electronics.css";
import laptops from "./Images/laptops.png";
import Smartwatches from "./Images/Smartwatches.png";
import Headphones from "./Images/Headphones.png";
import ComputerAcc from "./Images/ComputerAcc.png";
import Gaming from "./Images/Gaming.png";
import Cameras from "./Images/Cameras.png";
import Tablets from "./Images/Tablets.png";
import Homeaudio from "./Images/Homeaudio.png";
import { Link } from "react-router-dom";
import {motion} from  'framer-motion';

function Electronics() {
  return (
    <div className="main-electronics-categories">
      {/* First Row */}

      <div className="row">
        <Link to="/Laptops">
          <motion.img
           whileHover={{ scale: 1.1, borderRadius: '150px', boxShadow: "0px 0px 6px 6px  rgb(0,0,0,0.5)"}}
          className="categories-img" src={laptops} alt="Image 1" />
        </Link>

        <Link to="/Smartghadi">
          <motion.img 
          whileHover={{ scale: 1.1, borderRadius: '150px', boxShadow: "0px 0px 6px 6px  rgb(0,0,0,0.5)"}}
          className="categories-img" src={Smartwatches} alt="Image 2" />
        </Link>

        <Link to="/Headphones">
          <motion.img 
          whileHover={{ scale: 1.1, borderRadius: '150px', boxShadow: "0px 0px 6px 6px  rgb(0,0,0,0.5)"}}
          className="categories-img" src={Headphones} alt="Image 3" />
        </Link>

        <Link to="/Accessories">
        <motion.img
        whileHover={{ scale: 1.1, borderRadius: '150px', boxShadow: "0px 0px 6px 6px  rgb(0,0,0,0.5)"}}
        className="categories-img" src={ComputerAcc} alt="Image 4" />
        </Link>
      </div>
      {/* Second Row */}
      
      <div className="row">
        <Link to="/Gaming">
          <motion.img 
          whileHover={{ scale: 1.1, borderRadius: '150px', boxShadow: "0px 0px 6px 6px  rgb(0,0,0,0.5)"}}
          className="categories-img" src={Gaming} alt="Image 5" />
       </Link>

       <Link to="/Cameras">
       
          <motion.img
          whileHover={{ scale: 1.1, borderRadius: '150px', boxShadow: "0px 0px 6px 6px  rgb(0,0,0,0.5)"}}
          className="categories-img" src={Cameras} alt="Image 6" />
       </Link>

       <Link to="/Tablets">
          <motion.img
          whileHover={{ scale: 1.1, borderRadius: '150px', boxShadow: "0px 0px 6px 6px  rgb(0,0,0,0.5)"}}
           className="categories-img" src={Tablets} alt="Image 7 " />
       </Link>


       <Link to="/Homeaudio">
        <motion.img 
        whileHover={{ scale: 1.1, borderRadius: '150px', boxShadow: "0px 0px 6px 6px  rgb(0,0,0,0.5)"}}
        className="categories-img" src={Homeaudio} alt="Image 8" />
        </Link>
      </div>
    </div>
  );
}

export default Electronics;
