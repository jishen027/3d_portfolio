import React from "react";

import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My {"  "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500 ">
        <p>
          Here are some of the projects I have worked on. You can find more
          projects on click the link to check out.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project, index) => (
          <div className="lg:w-[400px] w-full" key={index}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl justify-center items-center flex flex-col">
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>

              <p className="mt-2 flex items-center gap-2">
                {project.description}
              </p>

              <div className="mt-5 flex items-center gap-2">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="blue-gradient_text"
                >
                  Check it out
                </Link>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-t-2 border-slate-500" />
      <CTA />
    </section>
  );
};

export default Projects;
