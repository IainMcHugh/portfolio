import React from "react";

import DescriptionIcon from "@material-ui/icons/Description";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

import "./Section3.css";

const Section3 = () => {
  return (
    <div className="section3-wrapper">
      <div id="contact-container">
        <a
          href="https://drive.google.com/file/d/1LIJUkG2MsZRAdKccne47pzFUu2PeursF/view?usp=sharing"
           target="_blank"
           className="contact"
        >
          <DescriptionIcon fontSize="large" />
        </a>
        <a href="https://www.linkedin.com/in/iain-mchugh/" target="_blank" className="contact">
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="mailto:iamchugh@tcd.ie?subject=Portfolio&body=Hi Iain," target="_blank" className="contact">
          <AlternateEmailIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
};

export default Section3;
