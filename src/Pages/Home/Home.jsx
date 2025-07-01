import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUp } from "lucide-react";
import { Element } from "react-scroll";

import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import ExampleSkillsSection from "./ExampleSkillsSection/ExampleSkillsSection";
import ProjectSection from "./ProjectSection/ProjectSection";
import EducationalQualification from "./EducationalQualification/EducationalQualification";
import BootCamps from "./BootCamps/BootCamps";
import ContactMe from "./ContactMe/ContactMe";
import { useLocation, useNavigate } from "react-router";

const Home = () => {
  const location = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    if (location.state?.scrollToProjects) {
      const el = document.getElementById("projects");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
          navigate("/", { replace: true });
        }, 100);
      }
    }
  }, [location, navigate]);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Element name="home">
        <Hero />
      </Element>

      <Element name="aboutMe">
        <AboutMe />
      </Element>

      <Element name="mySkill">
        <ExampleSkillsSection />
      </Element>

      <Element name="qualifications">
        <EducationalQualification />
        <BootCamps />
      </Element>

      <Element name="projects">
        <ProjectSection />
      </Element>

      <Element name="contact">
        <ContactMe />
      </Element>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#B63AFF] text-white p-3 rounded-full shadow-[0_8px_30px_rgba(182,58,255,0.6)] animate-bounce hover:bg-[#a228e0] transition"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default Home;
