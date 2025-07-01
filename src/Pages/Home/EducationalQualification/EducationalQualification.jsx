import React from "react";

const EducationalQualification = () => {
  return (
    <section
      data-aos="fade-up"

      className="w-full bg-[#140719] text-white px-4 md:px-8 lg:px-16 md:py-10 py-5"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#B63AFF] poppins relative">
        <span className="inline-block animate-pulse">Qualification</span>
      </h2>

      {/* BSc Card */}
      <div className=" bg-[#1c0f2b] border border-[#B63AFF] rounded-xl shadow-lg p-6 min-h-[250px] transition  flex flex-col">
        <h3 className="text-2xl md:text-3xl font-semibold mb-2 poppins">
          BSc. in Computer Science & Engineering
        </h3>
        <p className="text-lg font-medium mb-1 lora">
          Green University of Bangladesh
        </p>
        <p className="text-base mb-2 lora">
          Duration: <span className="font-semibold">2022 - 2026</span>
        </p>
        <p className="text-base mb-2 lora">
          Core Courses:{" "}
          <span className="font-semibold">
            {" "}
            Structured Programming, Data Structures & Algorithms, Object
            Oriented Programming, Computer Architecture, Operating Systems,
            Database Systems, Computer Networks, Artificial Intelligence,
            Software Engineering, Cyber Security, Web Programming,
            Microprocessors & Microcontrollers.
          </span>{" "}
          and more.
        </p>
        <p className="text-base lora mt-auto">
          Currently in <span className="font-semibold">final year</span>.
        </p>
      </div>
    </section>
  );
};

export default EducationalQualification;
