import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ilustration from "../../assets/ilustration.png";
import "./Hero.css";

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero__image__container">
        <img src={ilustration} alt="" className="hero__image" />
      </div>
      <div className="hero__info">
        <h3>Hi, I'm Luis</h3>
        <h1>
          Front<span>End</span> Developer!
        </h1>
        <p className="hero__text">
          Passionate about crafting clean, responsive, and user-friendly web
          experiences. Let’s bring your ideas to life with code!
        </p>
        <div className="socials">
          <a
            href="https://github.com/LuisLeon-Dev"
            target="_blank"
            className="socials__item"
          >
            <FontAwesomeIcon icon={faGithub} /> <p>GitHub</p>
          </a>
          <a
            href="https://www.linkedin.com/in/luis-le%C3%B3n-24a79b257/"
            target="_blank"
            className="socials__item"
          >
            <FontAwesomeIcon icon={faLinkedin} /> <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
