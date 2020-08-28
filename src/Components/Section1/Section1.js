import React from "react";
import IainClimbing from "../Iains/IainClimbing";
import SunsetBackGround from "../../images/sunset-bg.png";
import RockBG from "../../images/rock-bg.png";

import "./Section1.css";

const Section1 = () => {
  return (
    <div className="section1-wrapper">
      <div className="background-container">
        <img id="background-container_img" src={SunsetBackGround} />
      </div>
      <div className="rock-container">
        <img id="rock-container_img" src={RockBG}></img>
      </div>
      <IainClimbing />
      <div id="intro-wrapper">
        <div id="intro-title">
          <h2>Iain McHugh</h2>
        </div>
      </div>
    </div>
  );
};

export default Section1;
