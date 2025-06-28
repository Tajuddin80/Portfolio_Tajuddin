import React from "react";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import ImageScrollBox from "../../components/ImageScrollBox/ImageScrollBox";
import Project from "./Project/Project";
import projectDataArray from "../../../public/projectDataArray.json";
const Home = () => {
  return (
    <>
      <Hero></Hero>
      <AboutMe></AboutMe>
  <section className=" flex flex-col  items-center justify-center px-4 md:px-12 py-12 gap-10  text-white">
      <h2 className="text-4xl md:text-5xl text-center font-bold mb-4 text-[#B63AFF] pb-5 border-b poppins">
        My Projects
      </h2>
      <div>
        {projectDataArray.map((project) => (
          <Project key={project.id} data={project} />
        ))}
      </div>
    
      </section>
    </>
  );
};

export default Home;
