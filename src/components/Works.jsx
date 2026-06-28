import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  live_link,
  source_code_link,
}) => {
  const [githubHovered, setGithubHovered] = useState(false);

  // Opens live site — used by the image area (excluding GitHub button) and the text section
  const openLiveSite = () => {
    if (live_link) window.open(live_link, "_blank");
  };

  // Opens GitHub source code
  const openSourceCode = (e) => {
    e.stopPropagation(); // prevent card click from also firing
    window.open(source_code_link, "_blank");
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* ── IMAGE SECTION (top half) ── */}
        <div
          className="relative w-full h-[230px] cursor-pointer group"
          onClick={openLiveSite}
        >
          {/* Project Screenshot */}
          <img
            src={image}
            alt={`${name} preview`}
            className={`w-full h-full object-cover rounded-2xl transition-all duration-300 ${
              githubHovered ? "blur-[3px] brightness-50" : ""
            }`}
            loading="lazy"
            decoding="async"
          />

          {/* GitHub Button — top-right corner */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              id="github-btn"
              onMouseEnter={() => setGithubHovered(true)}
              onMouseLeave={() => setGithubHovered(false)}
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="relative black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-white/40"
            >
              <img
                src={github}
                alt="source code"
                className={`transition-all duration-300 object-contain ${
                  githubHovered
                    ? "w-8 h-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
                    : "w-1/2 h-1/2"
                }`}
              />
            </div>
          </div>

          {/* "Source Code" label — appears on GitHub hover */}
          <div
            className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ${
              githubHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="bg-black/80 text-white text-sm font-semibold px-4 py-2 rounded-full tracking-widest uppercase border border-white/20 backdrop-blur-sm">
              Source Code
            </span>
          </div>

          {/* Hint overlay — appears on card hover (not github hover) */}
          <div
            className={`absolute inset-0 flex flex-col justify-end pb-3 px-3 pointer-events-none transition-all duration-300 ${
              githubHovered ? "opacity-0" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <div className="flex flex-col gap-1">
              <span className="bg-black/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide flex items-center gap-1.5 backdrop-blur-sm border border-white/20 w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Click to open live site
              </span>
              <span className="bg-black/80 text-white/80 text-xs font-medium px-3 py-1 rounded-full tracking-wide flex items-center gap-1.5 backdrop-blur-sm border border-white/10 w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                GitHub icon ↗ for source code
              </span>
            </div>
          </div>
        </div>

        {/* ── TEXT SECTION (bottom half) — clicking this also opens live site ── */}
        <div
          className="mt-5 cursor-pointer"
          onClick={openLiveSite}
        >
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my real-world work — all live and
          deployed. Click any card to visit the live site, or click the{" "}
          <span className="text-white font-medium">GitHub icon</span> to explore
          the source code.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
