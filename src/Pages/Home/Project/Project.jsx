import React from "react";
import ImageScrollBox from "../../../components/ImageScrollBox/ImageScrollBox";
import {
  SiCss3,
  SiDaisyui,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiVite,
  SiAxios,
  SiFramer,
} from "react-icons/si";
import { RiAlertLine } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router";

const techListNameAndIcon = [
  { name: "React", icon: <SiReact /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "React Router", icon: <SiReactrouter /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "DaisyUI", icon: <SiDaisyui /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "JWT", icon: <SiJsonwebtokens /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Axios", icon: <SiAxios /> },
  { name: "Framer Motion", icon: <SiFramer /> },
  { name: "Lottie", icon: <FaCode /> },
  { name: "Swiper", icon: <FaCode /> },
  { name: "SweetAlert2", icon: <RiAlertLine /> },
  { name: "Dotenv", icon: <FaCode /> },
  { name: "CORS", icon: <BiTransfer /> },
];

const Project = ({ data }) => {
  const {
    id,
    title,
    images,
    description,
    frontendFeatures,
    backendFeatures,
    links,
    frontendFeaturesTitle,
    backendFeaturesTitle,
    techList,
  } = data;

  return (
    <div className="flex flex-col xl1360:flex-col xl:flex-row gap-8 py-3 md:p-6 bg-[#140719] rounded-2xl shadow-xl mb-10 md:mb-20">
      <div className="flex-1 xl1360:w-[95vw] xl1360:mx-auto">
        <ImageScrollBox images={images} />
      </div>

      <div className="flex-1 flex flex-col justify-center text-white space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#B63AFF] poppins">
          {title}
        </h2>
        <p className="text-sm md:text-base leading-relaxed lora">
          {description}
        </p>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 bg-[#1e0f2b] rounded-lg p-4">
            <h4 className="text-lg font-semibold text-[#B63AFF] mb-2 poppins">
              {frontendFeaturesTitle}
            </h4>
            <ul className="text-sm md:text-base space-y-1 lora">
              {frontendFeatures.map((item, index) => (
                <li key={index}>→ {item}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-[#1e0f2b] rounded-lg p-4">
            <h4 className="text-lg font-semibold text-[#B63AFF] mb-2 poppins">
              {backendFeaturesTitle}
            </h4>
            <ul className="text-sm md:text-base space-y-1 lora">
              {backendFeatures.map((item, index) => (
                <li key={index}>→ {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-2">
          {techList.map((tech) => {
            const match = techListNameAndIcon.find(
              (item) => item.name === tech
            );
            return match ? (
              <div
                key={match.name}
                className="flex items-center gap-1 bg-[#B63AFF] text-white px-3 py-1 rounded-full text-xs font-semibold poppins transform transition duration-300 hover:scale-105 hover:bg-[#a12be0] hover:text-[#140719]"
              >
                {match.icon}
                {match.name}
              </div>
            ) : null;
          })}
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#B63AFF] text-white font-bold rounded-lg poppins transition transform duration-300 hover:scale-105 hover:bg-[#a12be0] hover:text-[#140719]"
            >
              {link.label}
            </a>
          ))}
          <Link
            to={`/projectDetails/${id}`}
            className="px-4 py-2 bg-[#B63AFF] text-white font-bold rounded-lg poppins transition transform duration-300 hover:scale-105 hover:bg-[#a12be0] hover:text-[#140719]"
          >
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
