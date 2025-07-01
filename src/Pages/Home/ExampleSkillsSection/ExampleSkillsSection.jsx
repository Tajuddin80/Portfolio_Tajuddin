import React from "react";
import Marquee from "react-fast-marquee";
import {
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiPostman,
  SiGit,
  SiPython,
  SiBootstrap
} from "react-icons/si";
import {
  FaJava,
  FaCode,
  FaProjectDiagram,
  FaDatabase,
  FaBrain
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";

// --- Skill groups ---
const frontendSkills = [
  { icon: <SiHtml5 />, label: "HTML5" },
  { icon: <SiCss3 />, label: "CSS3" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiReact />, label: "React" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <SiBootstrap />, label: "Bootstrap" },
  { icon: <TbBrandNextjs />, label: "Next.js" },
  { icon: <RiReactjsLine />, label: "React Router" }
];

const backendSkills = [
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiExpress />, label: "Express" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiFirebase />, label: "Firebase" },
  { icon: <SiPostman />, label: "Postman" }
];

const otherSkills = [
  { icon: <SiJsonwebtokens />, label: "JWT" },
  { icon: <SiGit />, label: "Git" },
  { icon: <SiPython />, label: "Python" },
  { icon: <FaJava />, label: "Java" },
  { icon: <FaCode />, label: "C" },
  { icon: <FaBrain />, label: "Algorithm" },
  { icon: <FaProjectDiagram />, label: "OOP" },
  { icon: <FaDatabase />, label: "Data Structure" }
];

// --- Reusable marquee row ---
const createRow = (skillsArray, dir = "left") => (
  <Marquee
    gradient={false}
    speed={40}
    direction={dir}
    pauseOnHover
    className="py-4"
  >
    {Array(2)
      .fill(skillsArray)
      .flat()
      .map((skill, idx) => (
        <div
          key={`${dir}-${idx}-${skill.label}`}
          className="flex flex-col items-center justify-center w-25 h-25 sm:w-30 sm:h-30 md:w-40 md:h-40 
                     bg-transparent border border-[#B63AFF] rounded-xl text-white mx-4 shadow-lg 
                     transition hover:bg-[#B63AFF] hover:text-[#140719] animate-pulse"
        >
          <div className="text-4xl sm:text-5xl md:text-6xl">{skill.icon}</div>
          <div className="mt-2 text-xs sm:text-sm md:text-base font-semibold">
            {skill.label}
          </div>
        </div>
      ))}
  </Marquee>
);

// --- Main component ---
const ExampleSkillsSection = () => (
  <div
   data-aos="fade-up"
    className="w-full min-h-screen bg-[#140719] flex flex-col justify-center px-4 sm:px-8 md:px-16 py-10 space-y-1"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-center text-[#B63AFF] poppins relative">
      <span className="inline-block animate-pulse">My Skills & Technologies</span>
    </h2>

    {/* Frontend */}
    {createRow(frontendSkills, "left")}

    {/* Backend */}
    {createRow(backendSkills, "right")}

    {/* Others */}
    {createRow(otherSkills, "left")}
  </div>
);

export default ExampleSkillsSection;
