import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaAmazon,
  FaGoogle,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import { SiRedis, SiMongodb, SiMysql, SiExpress } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaCuttlefish } from "react-icons/fa6"; // Represents C/C++

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">Experience</h1>

      <div className="flex flex-wrap items-center justify-around">
        {/* Tech stack section */}
        <div className="flex flex-wrap md:w-2/5 gap-6 md:p-12 py-10 justify-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNodeJs color="#339933" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiExpress color="#ffffff" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#00758F" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCuttlefish color="#A8B9CC" size={50} title="C Language" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCuttlefish color="#00599C" size={50} title="C++" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#007396" size={50} />
          </span>
        </div>

        {/* Experience cards section */}
       {/*} <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaGoogle color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Web Developer Intern, CodeSoft</h2>
              <p className="text-sm leading-tight font-thin">
                June 2024 – Aug 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Developed responsive web pages using React and Tailwind CSS</li>
                <li>- Built real-time chat and authentication features using Firebase</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <RiNetflixFill color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">IoT Project, Smart Agriculture</h2>
              <p className="text-sm leading-tight font-thin">
                Jan 2024 – May 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Built smart irrigation and crop monitoring system using NodeMCU, DHT11</li>
                <li>- Integrated Telegram alerts and real-time weather data</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaAmazon color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">MERN Stack Developer, Freelance</h2>
              <p className="text-sm leading-tight font-thin">
                Feb 2024 – Present
              </p>
              <ul className="text-sm p-2">
                <li>- Developed full-stack product management dashboard</li>
                <li>- Integrated file uploads, user auth, and CRUD operations with MySQL</li>
              </ul>
            </span>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default Experience;
