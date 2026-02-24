import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center text-foreground">{text}</p>
    <Link to={link} className="neo-btn">
      {btnText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain invert" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <div className="mx-5 max-w-2xl py-5 px-8 text-center"
      style={{
        background: "rgba(242, 242, 242, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(26, 26, 26, 0.1)",
      }}
    >
      <h2
        className="text-xs uppercase tracking-[0.4em] mb-3 opacity-40"
        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
      >
        Hello, I am
      </h2>
      <p className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
        Jeb Lee
      </p>
      <p className="text-xs sm:text-sm font-light mt-2 opacity-60 leading-relaxed">
        A Software Engineer with a passion for 3D art &amp; Creative Coding
      </p>
    </div>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Built many projects and learned many things along the way"
      link="/projects"
      btnText="Check Them Out"
    />
  ),
  4: (
    <InfoBox
      text="Want to work together? Let's get in touch"
      link="/contact"
      btnText="Contact Me"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage];
};

export default HomeInfo;

