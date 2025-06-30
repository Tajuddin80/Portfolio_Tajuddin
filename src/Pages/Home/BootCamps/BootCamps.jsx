import React from "react";

const BootCamps = () => {
  return (
    <section className="w-full bg-[#140719] text-white px-4 md:px-8 lg:px-16 py-10">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#B63AFF] poppins relative">
        <span className="inline-block animate-pulse">
          Bootcamps Joined
        </span>
      </h2>

        <div className=" bg-[#1c0f2b] border border-[#B63AFF] rounded-xl shadow-lg p-6 min-h-[250px] transition hover:bg-[#B63AFF] hover:text-[#140719] flex flex-col">
        <h3 className="text-2xl md:text-3xl font-semibold mb-2 poppins">
            Complete Web Development Bootcamp
          </h3>
          <p className="text-lg font-medium mb-1 lora">
            Programming Hero
          </p>
          <p className="text-base mb-2 lora">
            Duration: <span className="font-semibold">2024</span>
          </p>
          <p className="text-base mb-2 lora">
            Completed an intensive, project-based bootcamp covering both frontend and backend. Built multiple real-world web applications following modern industry practices.
          </p>
          <p className="text-base lora mt-auto">
            Tech stack: <span className="font-semibold">JavaScript, React, Node.js, Express, MongoDB, Firebase</span> + deployment & debugging tools.
          </p>
        </div>
    </section>
  );
};

export default BootCamps;
