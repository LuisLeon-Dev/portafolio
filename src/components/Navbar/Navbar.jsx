import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <FontAwesomeIcon icon={faCode} />
        <p className="logo__text">LuisLeon-Dev</p>
      </div>
      <ul className="nav__items">
        <li className="nav__item">
          <a href="#">About Me</a>
        </li>
        <li className="nav__item">
          <a href="#">Skills</a>
        </li>
        <li className="nav__item">
          <a href="#">Education</a>
        </li>
        <li className="nav__item">
          <a href="#">Projects</a>
        </li>
        <li className="nav__item nav__item--focus">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
