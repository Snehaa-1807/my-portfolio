import React from "react";
import AboutImg from "../../assets/4957150.jpg";
import { IoArrowForward } from "react-icons/io5";


const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row gap-10 items-center justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-6 md:p-12"
    >
      {/* Image Section */}
      <div className="flex justify-center md:justify-start">
        <img className="h-64 md:h-80 object-contain" src={AboutImg} alt="About Sneha" />
      </div>

      {/* Text Section */}
      <div className="max-w-xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">About</h2>

        <div className="flex gap-3 py-4">
          <IoArrowForward size={30} className="mt-1" />
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">Frontend Developer</h1>
            <p className="text-sm md:text-md">
              I design responsive and interactive web interfaces using React, Tailwind CSS, and Material UI. 
              My goal is to deliver smooth, intuitive user experiences backed by modern UI practices.
            </p>
          </div>
        </div>

        <div className="flex gap-3 py-4">
          <IoArrowForward size={30} className="mt-1" />
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">Database Developer</h1>
            <p className="text-sm md:text-md">
              I work with MySQL and Firebase to design and manage scalable databases. 
              I ensure clean schema designs, optimized queries, and secure data handling.
            </p>
          </div>
        </div>

        <div className="flex gap-3 py-4">
          <IoArrowForward size={30} className="mt-1" />
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">Backend Developer</h1>
            <p className="text-sm md:text-md">
              I build RESTful APIs using Node.js and Express, integrating authentication, file uploads, and real-time communication. 
              Clean code and modular structure are my backend principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
