import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <FontAwesomeIcon icon={faCode} />
        <p className="logo__text">LuisLeon-Dev</p>
      </div>
      <ul className="nav__items">
        <li className="nav__item">About Me</li>
        <li className="nav__item">Skills</li>
        <li className="nav__item">Education</li>
        <li className="nav__item">Projects</li>
        <li className="nav__item nav__item--focus">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
