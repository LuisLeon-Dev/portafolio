import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="about-me__title">About Me</h2>
      <p className="about-me__text">
        Passionate frontend developer with a strong focus on creating intuitive
        and visually appealing user interfaces. I specialize in building
        responsive, performance-optimized web applications using modern
        technologies such as React, Tailwind CSS, and Sass. With a keen eye for
        detail and a deep understanding of UI/UX principles, I enjoy translating
        designs into clean, efficient code. My goal is to craft seamless digital
        experiences that not only look great but also function flawlessly across
        all devices.
      </p>
      <p className="about-me__text">
        I'm always excited to take on new challenges and help bring creative
        ideas to life through code. Take a look at my projects and feel free to
        reach out if you're interested in collaborating on your next web
        development project!
      </p>
    </section>
  );
};

export default AboutMe;
