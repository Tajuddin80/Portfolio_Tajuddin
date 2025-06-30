import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUp } from "lucide-react";

import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import ExampleSkillsSection from "./ExampleSkillsSection/ExampleSkillsSection";
import ProjectSection from "./ProjectSection/ProjectSection";
import StorySection from "./StorySection/StorySection";
import EducationalQualification from "./EducationalQualification/EducationalQualification";
import BootCamps from "./BootCamps/BootCamps";
import ContactMe from "./ContactMe/ContactMe";

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <Hero />
      <AboutMe />
      <ExampleSkillsSection />
      <EducationalQualification />
      <BootCamps />
      <ProjectSection />
      <ContactMe />

      {/* Up Arrow Button with bounce + shadow */}
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
