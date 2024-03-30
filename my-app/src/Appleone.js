import React from "react";
import "./Appleone.css";
import Smartwatchone from "./Images/Smartwatchone.jpg";
import Smartwatchtwo  from "./Images/Smartwatchtwo.jpg";
import Smartwatchthree from "./Images/Smartwatchthree.jpg";
import Products from "./Product";

function Appleone() {
  return (
    <div className="apple-main-container">
      <div className="main-first-container">
        <Products
          id="201"
          title={
            " Apple Watch SE (2nd Gen) [GPS 40 mm] Smart Watch w/Midnight Aluminium Case & Midnight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant"
          }
          price={"28,900"}
          image={Smartwatchone}
          rating={5}
        />
      </div>

      <div className="main-first-container">
        <Products
          id="202"
          title={
            " Apple Watch Series 9 [GPS 45mm] Smartwatch with Midnight Aluminum Case with Midnight Sport Loop One Size. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant"
          }
          price={"44,990"}
          image={Smartwatchtwo}
          rating={4}
        />
      </div>

      <div className="main-first-container">
        <Products
          id="203"
          title={
            " Apple Watch SE (2nd Gen) [GPS 44 mm] Smart Watch w/Starlight Aluminium Case & Starllight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant"
          }
          price={"29,999"}
          image={Smartwatchthree}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Appleone;
