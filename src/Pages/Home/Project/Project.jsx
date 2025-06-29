import React from "react";
import {
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import ImageScrollBox from "../../../components/ImageScrollBox/ImageScrollBox";

const techList = [
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "React", icon: <SiReact /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
];

const Project = ({ data }) => {
  const {
    title,
    images,
    description,
    frontendFeatures,
    backendFeatures,
    links,
    frontendFeaturesTitle,
    backendFeaturesTitle,
  } = data;

  return (
    <div className="flex flex-col md:flex-row gap-8  py-3 md:p-6 bg-[#140719] rounded-2xl shadow-xl mb-10">
      {/* Left: Image Scroll Box */}
      <div className="flex-1">
        <ImageScrollBox images={images} />
      </div>

      {/* Right: Project Details */}
      <div className="flex-1 flex flex-col justify-center text-white space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#B63AFF]">
          {title}
        </h2>
        <p className="text-sm md:text-base leading-relaxed">{description}</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 bg-[#1e0f2b] rounded-lg p-4">
            <h4 className="text-lg font-semibold text-[#B63AFF] mb-2">
              {frontendFeaturesTitle}
            </h4>
            <ul className="text-sm md:text-base space-y-1">
              {frontendFeatures.map((item, index) => (
                <li key={index}>→ {item}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-[#1e0f2b] rounded-lg p-4">
            <h4 className="text-lg font-semibold text-[#B63AFF] mb-2">
              {backendFeaturesTitle}
            </h4>
            <ul className="text-sm md:text-base space-y-1">
              {backendFeatures.map((item, index) => (
                <li key={index}>→ {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-2">
          {techList.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-1 bg-[#B63AFF] text-white px-3 py-1 rounded-full text-xs font-semibold transform transition duration-300 hover:scale-105 hover:bg-[#a12be0] hover:text-[#140719]"
            >
              {tech.icon}
              {tech.name}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#B63AFF] text-white font-bold rounded-lg transition transform duration-300 hover:scale-105 hover:bg-[#a12be0] hover:text-[#140719]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
