import React, { useState, useEffect } from "react";

import "./Section2.css";
import projects_json from "../Projects/projects";
import Tag from "./Tag";
import Project from "./Project";

const Section2 = () => {
  const [projects, setProjects] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(null);
  const [activeTech, setactiveTech] = useState();

  useEffect(() => {
    setProjects(projects_json);
    setFilteredProjects(projects_json);
  }, []);

  const tagSelect = (e) => {
    console.log(e.target.innerText.toLowerCase());
    let currActive = activeTech;
    let newActive = e.target.innerText.toLowerCase();

    if (currActive == newActive) {
      setactiveTech(null);
      setFilteredProjects(projects_json);
    } else {
      setactiveTech(newActive);
      let filterProjArr = projects.technologies[e.target.innerText];
      console.log(filterProjArr);

      const filtered = Object.keys(projects.names)
        .filter((key) => filterProjArr.includes(key))
        .reduce((obj, key) => {
          obj[key] = projects.names[key];
          return obj;
        }, {});

      setFilteredProjects(filtered);
      // console.log(filtered);
    }
  };
  return (
    <div className="section2-wrapper">
      <div id="section2-title">
        {/* {console.log(activeTech)} */}
        <h2>Projects</h2>
      </div>
      {projects !== null ? (
        <div id="projects">
          <div id="tags-container">
            {Object.keys(projects.technologies).map((technology, index) => {
              return (
                <Tag
                  key={index}
                  name={technology}
                  select={tagSelect}
                  activeTech={activeTech}
                />
              );
            })}
          </div>
          <div id="projects-container">
            {activeTech
              ?
              // console.log(filteredProjects)
              Object.keys(filteredProjects).map((project, index) => {
                  return (
                    <Project
                      key={index}
                      proj={filteredProjects[project]}
                      name={project}
                    />
                  );
                })
                : 
                Object.keys(projects.names).map((project, index) => {
                  return (
                    <Project
                      key={index}
                      proj={projects.names[project]}
                      name={project}
                    />
                  );
                })}
          </div>
        </div>
      ) : (
        <div>Loading Data...</div>
      )}
    </div>
  );
};

export default Section2;

{
  /* <a href={projects.projects.TRP.github}>
              {projects.projects.TRP.github}
            </a> */
}
