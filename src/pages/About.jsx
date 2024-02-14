import React from "react";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I am{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Jeb Lee
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500 ">
        <p>
          Software Engineer with a passion for building web applications. I
          specialize in front-end development and have experience working with
          modern frameworks like React and Next.js. I am also familiar with
          back-end technologies like Node.js and Express. as well as cloud
          services like Docker/Kubernetes and AWS.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div className="block-container w-20 h-20" key={index}>
              <div className="rounded-xl" key={index}>
                <div
                  key={index}
                  className="btn-front rounded-xl justify-center items-center flex flex-col  "
                >
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                  <p className="mt-3 text-sm font-semibold">{skill.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500 ">
          <p>
            I have worked with many companies and picked up many skills along
            the way.
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[80%] h-[80%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
              >
                <div className="text-black">
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <h4 className="text-black text-lg font-poppins font-semibold">
                    {experience.company}
                  </h4>
                  <p>{experience.description}</p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={index}
                      className="text-black text-sm font-poppins font-normal"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
