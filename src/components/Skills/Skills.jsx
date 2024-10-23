import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <ul className="skills__elements">
        <li className="skills__element">
          HTML 5
          <FontAwesomeIcon
            icon={faHtml5}
            size="3x"
            style={{ color: "#f06529" }}
          />
        </li>
        <li className="skills__element">
          Css 3
          <FontAwesomeIcon
            icon={faCss3}
            size="3x"
            style={{ color: "#2965f1" }}
          />
        </li>
        <li className="skills__element">
          JavaScript
          <FontAwesomeIcon icon={faJs} size="3x" style={{ color: "#F0DB4F" }} />
        </li>
        <li className="skills__element">
          Sass
          <FontAwesomeIcon
            icon={faSass}
            size="3x"
            style={{ color: "#CC6699" }}
          />
        </li>
        <li className="skills__element">
          React
          <FontAwesomeIcon
            icon={faReact}
            size="3x"
            style={{ color: "#61DBFB" }}
          />
        </li>
      </ul>
    </section>
  );
};

export default Skills;
