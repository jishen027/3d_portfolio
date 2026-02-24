import React from "react";
import { skills, experiences } from "../constants";
import CTA from "../components/CTA";

// Helper to derive a zero-padded index label
const padIndex = (i) => `0${i}`;

const About = () => {
  return (
    <section className="min-h-screen bg-surface text-foreground selection:bg-black selection:text-white">

      {/* Subtle background grid overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(26,26,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.03,
        }}
      />

      <div className="relative z-10 px-8 md:px-24 pt-36 pb-32">

        {/* ── Profile Intro ──────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-32">
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.4em] mb-6 opacity-40"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              [ Profile Overview ]
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-0">
              Hello, I am{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-zinc-400">
                Jeb Lee.
              </span>
            </h1>
          </div>
          <div className="flex items-center">
            <p className="text-base md:text-lg font-light leading-relaxed text-zinc-600">
              Software Engineer with a passion for building web applications. I
              specialize in front-end development and have experience working
              with modern frameworks like{" "}
              <span className="text-foreground font-medium underline decoration-zinc-300">
                React and Next.js
              </span>
              . I am also familiar with back-end technologies like Node.js and
              Express, as well as cloud services like Docker, Kubernetes, and
              AWS.
            </p>
          </div>
        </div>

        {/* ── Tech Stack Grid ────────────────────────────────────── */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-12 bg-foreground" />
            <h2
              className="text-xs uppercase tracking-[0.5em] font-bold"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Tech Stack
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-zinc-200 border border-zinc-200">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="bg-surface p-6 aspect-square flex flex-col justify-center items-center group hover:bg-foreground transition-colors duration-300"
              >
                <span
                  className="text-[10px] opacity-30 group-hover:opacity-60 group-hover:text-surface mb-3 uppercase tracking-tighter"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {padIndex(i + 1)}
                </span>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-8 h-8 object-contain mb-2 group-hover:invert transition-all duration-300"
                />
                <span className="text-[9px] font-bold uppercase tracking-widest text-center group-hover:text-surface leading-tight">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Experience Timeline ────────────────────────────────── */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px w-12 bg-foreground" />
            <h2
              className="text-xs uppercase tracking-[0.5em] font-bold"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Experience
            </h2>
          </div>

          <div>
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-10 pb-16 group last:pb-0">
                {/* Timeline vertical line */}
                {i < experiences.length - 1 && (
                  <div className="absolute left-[4px] top-3 bottom-0 w-px bg-zinc-200" />
                )}
                {/* Timeline dot */}
                <div className="absolute left-0 top-[10px] w-[9px] h-[9px] bg-surface border-2 border-foreground rounded-full z-10" />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight">{exp.title}</h3>
                    <p
                      className="text-xs font-medium opacity-40 uppercase tracking-widest mt-0.5"
                      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      {exp.company_name}
                    </p>
                  </div>
                  <div
                    className="text-[10px] opacity-40 mt-2 md:mt-0 px-3 py-1 border border-zinc-200 whitespace-nowrap"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {exp.date}
                  </div>
                </div>

                <ul className="space-y-1.5 mt-2">
                  {exp.points.map((point, j) => (
                    <li
                      key={j}
                      className="text-sm font-light leading-relaxed text-zinc-500 flex items-start gap-2"
                    >
                      <span className="opacity-30 mt-1 shrink-0">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA Footer ────────────────────────────────────────── */}
        <CTA />

      </div>
    </section>
  );
};

export default About;

