import React from "react";
import StorySection from "../StorySection/StorySection";

const AboutMe = () => {
  return (
    <>
      <div className="w-full">
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
            I’m <span className="font-semibold">Taj Uddin</span>, a passionate{" "}
            <span className="font-semibold">Full Stack Web Developer</span>. I
            enjoy building modern, responsive, and efficient web applications
            using technologies like React, Node.js, and MongoDB.
          </p>

          <p className="text-lg leading-relaxed">
            My programming journey started in my college days when I tried to
            customize a simple HTML page for a college project and learned basic
            C language — and I was instantly hooked! Over time, I dived deeper
            into JavaScript, exploring both frontend and backend development,
            and building everything from small apps to full-fledged systems.
          </p>

          <p className="text-lg leading-relaxed">
            Apart from coding, I love{" "}
            <span className="font-semibold">playing badminton</span> and going
            on <span className="font-semibold">tours</span> to discover new
            places. These hobbies help me stay active and inspired, bringing
            fresh perspectives to my work.
          </p>

          <p className="text-lg leading-relaxed">
            I’m always excited to learn new technologies and take on challenging
            projects that push my skills to the next level!
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
