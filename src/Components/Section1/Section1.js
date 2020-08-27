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
        <div className="intro-container" id="intro1">
          <h4>
            I'm a Frontend Developer with skills in multiple web technologies.
          </h4>
        </div>
        <div className="intro-container" id="intro2">
          <h4>Scroll down to view some of my projects.</h4>
        </div>
      </div>
    </div>
  );
};

export default Section1;
