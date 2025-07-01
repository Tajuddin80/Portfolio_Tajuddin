import React from "react";
import StorySection from "../StorySection/StorySection";

const AboutMe = () => {
  return (
    <>
      <div data-aos="fade-up" className="w-full ">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#B63AFF] poppins relative">
          <span className="inline-block animate-pulse">About Me</span>
        </h2>
      </div>

      <section className="flex flex-col md:flex-col lg:flex-row items-center justify-around px-4 md:px-5 py-5 gap-5 text-white">
        {/* Masonry first on md and smaller */}
        <div className="w-full md:w-full lg:w-5/12">
          <StorySection />
        </div>

        {/* Text */}
        <div className="w-full md:w-full lg:w-1/2 space-y-4 text-left lora">
          <p className="text-lg leading-relaxed">
            My{" "}
            <span className="font-semibold text-[#B63AFF]">
              programming journey
            </span>{" "}
            began during my college days when I tried to customize a simple HTML
            page for a project. That curiosity led me to explore the{" "}
            <span className="font-semibold">C language</span> — and I was
            instantly hooked! Motivated by this passion, I decided to pursue my
            dreams and began my{" "}
            <span className="font-semibold text-[#B63AFF]">
              B.Sc in Computer Science & Engineering at Green University of
              Bangladesh
            </span>
            , where I am currently in my{" "}
            <span className="font-semibold text-[#B63AFF]">final year</span>. My
            ultimate goal is to become a{" "}
            <span className="font-semibold text-[#B63AFF]">
              Software Engineer
            </span>{" "}
            and contribute to innovative solutions that make a positive impact.
          </p>

          <p className="text-lg leading-relaxed">
            Throughout this journey, I have immersed myself not only in
            technologies like <span className="font-semibold">JavaScript</span>,{" "}
            <span className="font-semibold">React</span>,{" "}
            <span className="font-semibold">Node.js</span>, and{" "}
            <span className="font-semibold">MongoDB</span>, but also developed a
            strong foundation in
            <span className="font-semibold text-[#B63AFF]">
              {" "}
              Structured Programming
            </span>
            ,
            <span className="font-semibold text-[#B63AFF]">
              {" "}
              Data Structure
            </span>
            ,
            <span className="font-semibold text-[#B63AFF]">
              {" "}
              Object-Oriented Programming (OOP)
            </span>
            ,<span className="font-semibold text-[#B63AFF]"> Algorithm</span>,
            <span className="font-semibold text-[#B63AFF]">
              {" "}
              Computer Networking
            </span>
            ,
            <span className="font-semibold text-[#B63AFF]">
              {" "}
              Artificial Intelligence
            </span>
            ,
            <span className="font-semibold text-[#B63AFF]">
              {" "}
              Cyber Security
            </span>
            , and
            <span className="font-semibold text-[#B63AFF]">
              {" "}
              Machine Learning
            </span>
            .
          </p>

          <p className="text-lg leading-relaxed">
            I thrive on creating{" "}
            <span className="font-semibold text-[#B63AFF]">
              modern, responsive, and efficient web applications
            </span>
            . Bringing ideas to life through clean code and thoughtful design is
            what excites me most. I love collaborating on projects that
            challenge my skills and help me grow as a developer.
          </p>

          <p className="text-lg leading-relaxed">
            Beyond coding, I’m passionate about{" "}
            <span className="font-semibold">playing badminton</span> — it keeps
            me active and sharp. I also enjoy{" "}
            <span className="font-semibold">
              traveling and exploring new places
            </span>
            , which inspires fresh ideas and perspectives in both life and work.
          </p>

          <p className="text-lg leading-relaxed">
            I’m always eager to learn new technologies, experiment with creative
            solutions, and contribute to meaningful projects. Let’s build
            something awesome together!
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
