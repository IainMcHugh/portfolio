import React, { useEffect } from "react";

const Tag = (props) => (
    <div
      id={props.activeTech == props.name.toLowerCase() ? "tag-active" : null}
      className="tag-container"
      onClick={(e) => props.select(e)}
    >
      <h4>{props.name}</h4>
    </div>
  );

export default Tag;
