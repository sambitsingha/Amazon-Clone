import React from 'react'
import "./Men.css"
import { Link } from "react-router-dom";
import {motion} from  'framer-motion';
import Men1 from "./Images/Men1.png";
import Men2 from "./Images/Men2.png";
import Men3 from "./Images/Men3.png";
import Men4 from "./Images/Men4.png";
function Men() {
  return (
    <div className="main-women-categories">
    {/* First Row */}

    <div className="row">
      <Link to="/Menone">
        <motion.img
         whileHover={{ scale: 1.1, borderRadius: '150px', boxShadow: "0px 0px 6px 6px  rgb(0,0,0,0.5)"}}
        className="categories-img" src={Men1} alt="Image 1" />
      </Link>

      <Link to="/Mentwo">
        <motion.img 
        whileHover={{ scale: 1.1, borderRadius: '150px', boxShadow: "0px 0px 6px 6px  rgb(0,0,0,0.5)"}}
        className="categories-img" src={Men2} alt="Image 2" />
      </Link>

      <Link to="/Menthree">
        <motion.img 
        whileHover={{ scale: 1.1, borderRadius: '150px', boxShadow: "0px 0px 6px 6px  rgb(0,0,0,0.5)"}}
        className="categories-img" src={Men3} alt="Image 3" />
      </Link>

      <Link to="/Menfour">
      <motion.img
      whileHover={{ scale: 1.1, borderRadius: '150px', boxShadow: "0px 0px 6px 6px  rgb(0,0,0,0.5)"}}
      className="categories-img" src={Men4} alt="Image 4" />
      </Link>
    </div>
    </div>
  )
}

export default Men
