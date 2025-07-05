import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiDaisyui,
  SiFirebase,
  SiJsonwebtokens,
  SiExpress,
  SiMongodb,
  SiAxios,
  SiReactquery,
  SiFramer,
  SiSwiper,
  SiHtml5,
  SiReactrouter,
  SiDotenv,
} from "react-icons/si";
import { RiArrowRightSLine, RiAlertLine } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";
import { Link, useLoaderData, useNavigate } from "react-router";
import { useEffect } from "react";

const techIcons = {
  HTML: <SiHtml5 className="inline-block text-xl" />,
  React: <SiReact className="inline-block text-xl" />,
  "React Router": <SiReactrouter className="inline-block text-xl" />,
  Vite: <SiVite className="inline-block text-xl" />,
  "Tailwind CSS": <SiTailwindcss className="inline-block text-xl" />,
  DaisyUI: <SiDaisyui className="inline-block text-xl" />,
  Firebase: <SiFirebase className="inline-block text-xl" />,
  JWT: <SiJsonwebtokens className="inline-block text-xl" />,
  "Node.js": <SiReact className="inline-block text-xl" />,
  "Express.js": <SiExpress className="inline-block text-xl" />,
  MongoDB: <SiMongodb className="inline-block text-xl" />,
  Axios: <SiAxios className="inline-block text-xl" />,
  "React Query": <SiReactquery className="inline-block text-xl" />,
  "Framer Motion": <SiFramer className="inline-block text-xl" />,
  Swiper: <SiSwiper className="inline-block text-xl" />,
  SweetAlert2: <RiAlertLine className="inline-block text-xl" />,
  Dotenv: <SiDotenv className="inline-block text-xl" />,
  CORS: <BiTransfer className="inline-block text-xl" />,
};

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); // Or use "smooth" if you prefer
  }, []);
  const data = useLoaderData();

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/", { state: { scrollToProjects: true } });
  };

  return (
    <div className="bg-[#140719] text-white rounded-2xl shadow-xl p-6 space-y-10 w-[80vw] mx-auto px-4 sm:px-6 md:px-12 lora">
      {/* Title */}
      <div className="flex flex-col items-center">
        <button
          onClick={handleBack}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#B63AFF] text-white rounded-lg text-base md:text-lg font-bold poppins hover:bg-[#a12be0] hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md animate-pulse"
        >
          ← Back
        </button>

        <div className="mt-4 border-b-4 border-[#B63AFF] w-[90vw]"></div>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#B63AFF] poppins tracking-wide">
        {data.title}
      </h2>

      {/* Description */}
      <p className="leading-relaxed text-base sm:text-lg md:text-xl">
        {data.description}
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Frontend Features */}
        <section className="bg-[#1e0f2b] p-6 rounded-lg shadow-md border border-[#3b1a5a]">
          <h4 className="text-xl sm:text-2xl font-semibold text-[#B63AFF] mb-4 poppins">
            {data.frontendFeaturesTitle}
          </h4>
          <ul className="space-y-2 text-sm sm:text-base leading-relaxed">
            {data.frontendFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <RiArrowRightSLine className="text-[#B63AFF] animate-pulse" />
                {f}
              </li>
            ))}
          </ul>
        </section>

        {/* Backend Features */}
        <section className="bg-[#1e0f2b] p-6 rounded-lg shadow-md border border-[#3b1a5a]">
          <h4 className="text-xl sm:text-2xl font-semibold text-[#B63AFF] mb-4 poppins">
            {data.backendFeaturesTitle}
          </h4>
          <ul className="space-y-2 text-sm sm:text-base leading-relaxed">
            {data.backendFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <RiArrowRightSLine className="text-[#B63AFF] animate-pulse" />
                {f}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Technologies */}
      <section>
        <h4 className="text-xl sm:text-2xl font-semibold text-[#B63AFF] mb-6 poppins">
          Technologies
        </h4>
        <div className="flex flex-wrap gap-4">
          {data.techList.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-2 bg-[#B63AFF] hover:bg-transparent border hover:scale-105 transition transform rounded-full text-white px-3 py-1 text-sm sm:text-base font-semibold cursor-pointer shadow-lg"
              title={tech}
            >
              {techIcons[tech] || null}
              <span className="lora">{tech}</span>
            </span>
          ))}
        </div>
      </section>

      {/* Challenges Faced */}
      <section className="space-y-4">
        <h4 className="text-xl sm:text-2xl font-semibold text-[#B63AFF] poppins">
          Challenges Faced
        </h4>
        <ul className="space-y-2 text-sm sm:text-base leading-relaxed">
          {data.moreDetails.challengesFaced.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <RiArrowRightSLine className="text-[#B63AFF] animate-pulse" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Solutions */}
      <section className="space-y-4">
        <h4 className="text-xl sm:text-2xl font-semibold text-[#B63AFF] poppins">
          Solutions
        </h4>
        <ul className="space-y-2 text-sm sm:text-base leading-relaxed">
          {data.moreDetails.solutions.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <RiArrowRightSLine className="text-[#B63AFF] animate-pulse" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Future Improvements */}
      <section className="space-y-4">
        <h4 className="text-xl sm:text-2xl font-semibold text-[#B63AFF] poppins">
          Future Improvements
        </h4>
        <ul className="space-y-2 text-sm sm:text-base leading-relaxed">
          {data.moreDetails.futureImprovements.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <RiArrowRightSLine className="text-[#B63AFF] animate-pulse" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Links */}
      <div className="flex flex-wrap gap-6 pt-6">
        {data.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-2 bg-[#B63AFF] rounded-lg text-base font-semibold hover:bg-[#a12be0] transition shadow-xl cursor-pointer"
          >
            {link.label.toLowerCase().includes("github") ? (
              <FaGithub className="text-2xl" />
            ) : (
              <FaExternalLinkAlt className="text-2xl" />
            )}
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
