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
} from "react-icons/si";
import {
  FaJava,
  FaCode,
  FaProjectDiagram,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";

// Skill groups
const frontendSkills = [
  { icon: <SiHtml5 />, label: "HTML5" },
  { icon: <SiCss3 />, label: "CSS3" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiReact />, label: "React" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
];

const backendSkills = [
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiExpress />, label: "Express" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiFirebase />, label: "Firebase" },
  { icon: <SiPostman />, label: "Postman" },
];

const otherSkills = [
  { icon: <SiJsonwebtokens />, label: "JWT" },
  { icon: <SiGit />, label: "Git" },
  { icon: <SiPython />, label: "Python" },
  { icon: <FaJava />, label: "Java" },
  { icon: <FaCode />, label: "C" },
  { icon: <FaBrain />, label: "Algorithm" },
  { icon: <FaProjectDiagram />, label: "OOP" },
  { icon: <FaDatabase />, label: "Data Structure" },
];

// Reusable marquee row
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
          className="flex flex-col items-center justify-center w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 
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

const ExampleSkillsSection = () => (
  <div className="w-full min-h-screen bg-[#140719] flex flex-col justify-center px-4 sm:px-8 md:px-16 py-10 space-y-10">
    {/* Main Title */}
    <h2 className="text-4xl md:text-5xl font-bold text-center text-[#B63AFF] poppins relative">
      <span className="inline-block animate-pulse">My Skills & Technologies</span>
    </h2>

    {/* Frontend */}
    <div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-[#B63AFF] mb-3 relative">
        <span className="inline-block animate-bounce">Frontend</span>
      </h3>
      {createRow(frontendSkills, "left")}
    </div>

    {/* Backend */}
    <div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-[#B63AFF] mb-3 relative">
        <span className="inline-block animate-bounce">Backend</span>
      </h3>
      {createRow(backendSkills, "right")}
    </div>

    {/* Others */}
    <div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-[#B63AFF] mb-3 relative">
        <span className="inline-block animate-bounce">Auth, Data Structure & Others</span>
      </h3>
      {createRow(otherSkills, "left")}
    </div>
  </div>
);

export default ExampleSkillsSection;
