import React, {useEffect} from "react";
import CodeIcon from "@material-ui/icons/Code";
import SmartPhoneIcon from "@material-ui/icons/Smartphone";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";

const Project = (props) => {
  useEffect(()=>{
    console.log("HEllo");
  },[])
  return (
    <div id="project-container">
      <div>
        <img id="project-img" src={props.proj.logo} />
        <div id="project-overlay">
          <h2>{props.name}</h2>
          <h4>{props.proj.description}</h4>
          <h4>{props.proj.status}</h4>
          <div id="project-overlay_icons">
            <a href={props.proj.github} target="_blank">
              <CodeIcon fontSize="large" />
            </a>

            <a href={props.proj.live} target="_blank">
              {props.proj.desktopMobile ? (
                <DesktopWindowsIcon fontSize="large" />
              ) : (
                <SmartPhoneIcon fontSize="large" />
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
