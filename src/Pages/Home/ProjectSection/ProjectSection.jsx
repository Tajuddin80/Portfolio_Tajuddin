import React from "react";

import projectDataArray from "../../../../public/projectDataArray.json";
import Project from "../Project/Project";
const ProjectSection = () => {
  return (
    <section
      id="projects"
      data-aos="fade-up"
      className=" flex flex-col  items-center justify-center px-4 md:px-12 py-12 gap-10  text-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#B63AFF] poppins relative">
        <span className="inline-block animate-pulse">My Projects</span>
      </h2>

      <div>
        {projectDataArray.map((project) => (
          <Project key={project.id} data={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
