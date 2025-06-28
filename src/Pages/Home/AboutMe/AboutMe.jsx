import React from "react";

const AboutMe = () => {
  return (
    <section className=" flex flex-col  items-center justify-center px-4 md:px-12 py-12 gap-10  text-white">
      
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#B63AFF] pb-5 border-b poppins">About Me</h2>
      {/* Left - text */}
      <div className="text-center lora">
        <p className="text-lg mb-4 leading-relaxed">
          I’m <span className="font-semibold">Taj Uddin</span>, a passionate <span className="font-semibold">Full Stack Web Developer</span>. 
          I enjoy building modern, responsive, and efficient web applications using technologies like React, Node.js, and MongoDB.
        </p>

        <p className="text-lg mb-4 leading-relaxed">
          My programming journey started in my college days when I tried to customize a simple HTML page for a college project and learned basic C language— 
          and I was instantly hooked! Over time, I dived deeper into JavaScript, exploring both frontend and backend 
          development, and building everything from small apps to full-fledged systems.
        </p>

        <p className="text-lg mb-4 leading-relaxed">
          Apart from coding, I love <span className="font-semibold">playing badminton</span> and going on <span className="font-semibold">tours</span> 
          to discover new places. These hobbies help me stay active and inspired, bringing fresh perspectives to my work.
        </p>

        <p className="text-lg leading-relaxed">
          I’m always excited to learn new technologies and take on challenging projects that push my skills to the next level!
        </p>
      </div>

    </section>
  );
};

export default AboutMe;
