import React, { useEffect, useState } from "react";
import Project from "../Project/Project";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projectDataArray.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load project data", err));
  }, []);

  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="flex flex-col items-center justify-center px-3 md:px-8 py-3 md:py-8 text-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center md:mb-7 mb-3 text-[#B63AFF] poppins relative">
        <span className="inline-block animate-pulse">My Projects</span>
      </h2>

      <div className="w-full mx-auto">
        {projects.map((project) => (
          <Project key={project.id} data={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
