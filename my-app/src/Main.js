import React from "react";
import imgL from "./Images/Wld.jpeg";
import wooden from "./Images/wooden.jpg";
import charger from "./Images/charger.jpeg";
import fossilgen6 from "./Images/fossil.jpeg";
import jblSpeaker from "./Images/jblSpeaker.jpeg";
import onePlus from "./Images/onePlus.jpeg";
import iphone13 from "./Images/iphone13.jpeg";
import airpodsPro from "./Images/airpodsPro.jpeg";
import womensfossil from "./Images/womensFossil.jpeg";
import Products from './Product.js';

import "./Main.css";
function Main() {
  return (
    <div className="main-cont">
      <div className="home-cont">
        <img className="home-img" src={imgL} alt="image home" />
        <div className="home-row">
          <Products
            id="121"
            title={
              "Relic by Fossil Women's Camila Quartz Watch, Gunmetal, Quartz Watch"
            }
            price={"17,866"}
            image={womensfossil}
            rating={3}
          />
          <Products
          id="122"
            title={
              "NOPLUS One Plus 65W Fast Warp Dash Charger Adapter With Type C Dash Fast Charging Cable For Oneplus"
            }
            price={"999"}
            image={charger}
            rating={4}
          />
          <Products
          id="123"
            title={"Fossil Gen 6 Digital Black Dial Men's Watch-FTW4063"}
            price={"11,998"}
            image={fossilgen6}
            rating={4}
          />
        </div>
        <div className="home-row">
          <Products
          id="124"
            title={
              "JBL Flip 6 Wireless Portable Bluetooth Speaker Pro Sound, Upto 12 Hours Playtime"
            }
            price={"11,998"}
            image={jblSpeaker}
            rating={3}
          />
          <Products
          id="125"
            title={"Apple iPhone 13 (128GB) - Pink"}
            price={"51,790"}
            image={iphone13}
            rating={4}
          />
          <Products
          id="126"
            title={"OnePlus 12 (Flowy Emerald, 16GB RAM, 512GB Storage)"}
            price={"69,999"}
            image={onePlus}
            rating={4}
          />
          <Products
          id="127"
            title={
              "Apple AirPods Pro (2nd Generation) with MagSafe Case (USB‑C) ​​​​​​​"
            }
            price={"23,990"}
            image={airpodsPro}
            rating={4}
          />
        </div>
        <div className="home-row">
          <Products
          id="128"
            title={"The steel bootle"}
            price={29.99}
            image={wooden}
            rating={3}
          />
          <Products
          id="129"
            title={
              "NOPLUS One Plus 65W Fast Warp Dash Charger Adapter With Type C Dash Fast Charging Cable For Oneplus"
            }
            price={999}
            image={charger}
            rating={4}
          />
          <Products
          id="130"
            title={"Fossil Gen 6 Digital Black Dial Men's Watch-FTW4063"}
            price={"11,998"}
            image={fossilgen6}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
