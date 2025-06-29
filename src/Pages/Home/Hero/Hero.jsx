import React from "react";
import heroPic from "../../../assets/img2.png";
import { Linkedin, Mail, Twitter } from "lucide-react"; 
import Magnet from "../../../components/Magnet/Magnet";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-around min-h-[80vh] px-4 md:px-12 py-8 gap-8">
      {/* Left content */}
      <div className="max-w-lg text-center md:text-left">
        <h3 className="text-2xl md:text-3xl">Hi, I am</h3>
        <h1 className="text-4xl md:text-5xl font-bold">Taj Uddin</h1>
        <h3 className="text-2xl md:text-3xl">Full Stack Developer</h3>
        <p className="py-4 md:py-6 text-base md:text-lg leading-relaxed">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>

        {/* Social links */}
        <div className="flex justify-center md:justify-start gap-4 mb-4">
          <a
            href="www.linkedin.com/in/tajuddin80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-10 h-10 text-[#B63AFF] hover:text-white hover:bg-[#B63AFF] rounded p-1 transition" />
          </a>
          <a href="mailto:tajuddin.cse.dev@gmail.com">
            <Mail className="w-10 h-10 text-[#B63AFF] hover:text-white hover:bg-[#B63AFF] rounded p-1 transition" />
          </a>
          <a href="https://x.com/TajuddinCSE" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-10 h-10 text-[#B63AFF] hover:text-white hover:bg-[#B63AFF] rounded p-1 transition" />
          </a>
        </div>
        <Magnet padding={500} disabled={false} magnetStrength={20}>
          <button className="btn text-white bg-[#B63AFF] hover:bg-transparent transition">
            Watch my Resume
          </button>
        </Magnet>
      </div>

      {/* Right image */}
      <div className="flex justify-center items-center w-full md:w-1/2">
        <img
          src={heroPic}
          alt="Taj Uddin"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
