import React from "react";
import { socialLinks } from "../constants";

const CTA = () => {
  return (
    <div className="pt-16 border-t border-zinc-200 text-center">
      <h3 className="text-3xl font-bold tracking-tighter mb-8">
        Have a project in mind?
      </h3>
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity group"
          >
            <img
              src={social.iconUrl}
              alt={social.name}
              className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-200"
            />
            <span
              className="text-[9px] uppercase tracking-[0.4em]"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CTA;
