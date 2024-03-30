import React from 'react'
import "./Women.css"
import { Link } from "react-router-dom";
import {motion} from  'framer-motion';
import Women1 from "./Images/Women1.png";
import Women2 from "./Images/Women2.png";
import Women3 from "./Images/Women3.png";
import Women4 from "./Images/Women4.png";

function Women() {
  return (
    <div className="main-women-categories">
    {/* First Row */}

    <div className="row">
      <Link to="/Womenone">
        <motion.img
         whileHover={{ scale: 1.1, borderRadius: '150px', boxShadow: "0px 0px 6px 6px  rgb(0,0,0,0.5)"}}
        className="categories-img" src={Women1} alt="Image 1" />
      </Link>

      <Link to="/Womentwo">
        <motion.img 
        whileHover={{ scale: 1.1, borderRadius: '150px', boxShadow: "0px 0px 6px 6px  rgb(0,0,0,0.5)"}}
        className="categories-img" src={Women2} alt="Image 2" />
      </Link>

      <Link to="/Womenthree">
        <motion.img 
        whileHover={{ scale: 1.1, borderRadius: '150px', boxShadow: "0px 0px 6px 6px  rgb(0,0,0,0.5)"}}
        className="categories-img" src={Women3} alt="Image 3" />
      </Link>

      <Link to="/Womenfour">
      <motion.img
      whileHover={{ scale: 1.1, borderRadius: '150px', boxShadow: "0px 0px 6px 6px  rgb(0,0,0,0.5)"}}
      className="categories-img" src={Women4} alt="Image 4" />
      </Link>
    </div>
    </div>
  )
}

export default Women
