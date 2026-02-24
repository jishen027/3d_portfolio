import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="relative w-full min-h-screen pt-40 px-8 md:px-24 pb-24 bg-[#F2F2F2]">
      {/* Header */}
      <div className="max-w-2xl mb-24">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] mb-6 opacity-40 text-black">
          [ Selected Works ]
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8 text-[#1A1A1A]">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-zinc-400">
            Projects.
          </span>
        </h1>
        <p className="text-zinc-500 font-light max-w-lg">
          A curated selection of applications focusing on creative interaction,
          robust cloud architecture, and intuitive user experiences.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="bg-[#F2F2F2] p-10 flex flex-col justify-between group hover:bg-black transition-all duration-500 min-h-[400px]"
          >
            {/* Card Top */}
            <div>
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-[10px] opacity-30 group-hover:text-white group-hover:opacity-100">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-zinc-300 group-hover:border-white transition-colors"
                  aria-label={`Open ${project.name}`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="group-hover:text-white text-black"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </Link>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-[#1A1A1A] group-hover:text-white">
                {project.name}
              </h3>
              <p className="text-sm font-light leading-relaxed text-zinc-500 group-hover:text-zinc-400 mb-8">
                {project.description}
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {(project.tech || []).map((t) => (
                <span
                  key={t}
                  className="text-[9px] font-mono uppercase tracking-widest px-2 py-1 border border-zinc-200 text-[#1A1A1A] group-hover:border-zinc-700 group-hover:text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Footer */}
      <hr className="border-t border-zinc-200 mt-16 mb-8" />
      <CTA />
    </section>

  );
};

export default Projects;
