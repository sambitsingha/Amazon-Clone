import React from "react";
import "./Boatwatch.css";
import Products from "./Product";
import boatone from "./Images/boatone.jpg";
import  boattwo from "./Images/boattwo.jpg";
import boatthree from "./Images/boatthree.jpg";


function Boatwatch() {
  return (
    <div className="boat-main-container">
      <div className="main-first-container">
        <Products
          id="301"
          title={
            " boAt Xtend Smart Watch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor, 5 ATM & 7 Days Battery(Pitch Black)"
          }
          price={"1,199"}
          image={boatone}
          rating={4}
        />
      </div>

      <div className="main-first-container">
        <Products
          id="302"
          title={
            " boAt Lunar Peak with 1.45 AMOLED Display, Advanced BT Calling, Always on Display, Cloud & Custom Watch Faces, in-Built Games, Stocks, SOS, IP67, Smart Watch for Men & Women(Black)"
          }
          price={"2,799"}
          image={boattwo}
          rating={4}
        />
      </div>

      <div className="main-first-container">
        <Products
          id="303"
          title={
            " boAt Flash Edition Smart Watch with Activity Tracker, Multiple Sports Modes, 1.3 Screen, 170+ Watch Faces, Sleep Monitor, Gesture, Camera & Music Control, IP68 & 7 Days Battery Life(Galaxy Blue)"
          }
          price={"999"}
          image={boatthree}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Boatwatch;
