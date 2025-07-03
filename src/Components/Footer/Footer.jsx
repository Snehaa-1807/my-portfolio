import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl space-y-2">
        <li className="flex gap-2 items-center">
          <MdOutlineEmail size={20} />
          <a
            href="mailto:snehanarwaria2@gmail.com"
            className="hover:underline"
          >
            snehanarwaria2@gmail.com
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/sneha-narwaria-18a56b291"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/sneha-narwaria-18a56b291
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/Snehaa-1807"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/Snehaa-1807
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
