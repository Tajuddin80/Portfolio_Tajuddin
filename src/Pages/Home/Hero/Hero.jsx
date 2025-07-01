import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import heroPic from "../../../assets/img2.png";
import { Linkedin, Mail, Twitter, Github } from "lucide-react";
import Magnet from "../../../components/Magnet/Magnet";

import { Typewriter } from "react-simple-typewriter";
const Hero = () => {
  return (
    <section
      data-aos="fade-up"
      className="flex flex-col-reverse  md:flex-col-reverse lg:flex-row items-center justify-around min-h-[70vh] px-4 md:px-12 py-8 gap-6 md:gap-10 lg:gap-16"
    >
      {/* Text Section */}
      <div className=" text-center lg:text-left mt-4 lg:mt-0">
        <h3 className="text-2xl md:text-3xl poppins">Hi, I am</h3>
        <h1 className="text-4xl md:text-5xl font-bold poppins">Taj Uddin</h1>
        <h3 className="text-2xl md:text-3xl poppins">
          <Typewriter
            words={[
              "Full Stack Developer",
              "MERN Stack Enthusiast",
              "React & Node.js Specialist",
              "JavaScript Problem Solver",
              "Open Source Contributor",
              "Backend & API Designer",
              "Frontend UI Developer",
              "Tech Community Volunteer",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>

        <p className="text-lg leading-relaxed lora mt-4">
          I’m a{" "}
          <span className="font-semibold text-[#B63AFF]">
            final year B.Sc student
          </span>{" "}
          at
          <span className="font-semibold text-[#B63AFF]">
            {" "}
            Green University of Bangladesh
          </span>
          , aiming to become a
          <span className="font-semibold text-[#B63AFF]">
            {" "}
            Software Engineer
          </span>
          . I love building
          <span className="font-semibold"> modern</span>,
          <span className="font-semibold"> responsive</span> apps with
          <span className="font-semibold"> React</span>,
          <span className="font-semibold"> Node.js</span> &
          <span className="font-semibold"> MongoDB</span>.
        </p>

        {/* Social links */}
        <div className="flex justify-center lg:justify-start gap-4 mb-4 mt-4">
          <a
            href="https://www.linkedin.com/in/tajuddin80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-10 h-10 text-[#B63AFF] hover:text-white hover:bg-[#B63AFF] rounded p-1 transition" />
          </a>
          <a
            href="https://github.com/Tajuddin80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-10 h-10 text-[#B63AFF] hover:text-white hover:bg-[#B63AFF] rounded p-1 transition" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tajuddin.cse.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-10 h-10 text-[#B63AFF] hover:text-white hover:bg-[#B63AFF] rounded p-1 transition" />
          </a>

          <a
            href="https://x.com/TajuddinCSE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-10 h-10 text-[#B63AFF] hover:text-white hover:bg-[#B63AFF] rounded p-1 transition" />
          </a>
        </div>

        <Magnet padding={200} disabled={false} magnetStrength={20}>
          <button className="btn text-white bg-[#B63AFF] hover:bg-transparent border border-[#B63AFF] transition">
            Resume <IoCloudDownloadOutline />
          </button>
        </Magnet>
      </div>

      {/* Image Section */}
      <div className="flex justify-center lg:justify-end items-center w-full">
        <img
          src={heroPic}
          alt="Taj Uddin"
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[600px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
