import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <section>
      <ul>
        <li className="skills__element">
          <p>HTML 5</p>
          <FontAwesomeIcon
            icon={faHtml5}
            size="3x"
            style={{ color: "#f06529" }}
          />
        </li>
        <li className="skills__element">
          <p>Css 3</p>
          <FontAwesomeIcon
            icon={faCss3}
            size="3x"
            style={{ color: "#2965f1" }}
          />
        </li>
        <li className="skills__element">
          <p>JavaScript</p>
          <FontAwesomeIcon icon={faJs} size="3x" style={{ color: "#F0DB4F" }} />
        </li>
        <li className="skills__element">
          <p>Sass</p>
          <FontAwesomeIcon
            icon={faSass}
            size="3x"
            style={{ color: "#CC6699" }}
          />
        </li>
        <li className="skills__element">
          <p>React</p>
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
