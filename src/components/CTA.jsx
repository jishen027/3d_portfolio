import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">Hava a project in mind? </p>
      {/* social medias */}
      <div className="flex flex-row justify-center space-x-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="cta-social"
          >
            <img
              className="w-8 h-8 object-contain"
              src={social.iconUrl}
              alt={social.name}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default CTA;
