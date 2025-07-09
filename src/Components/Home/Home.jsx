import React from "react";
import avatarImg from "../../assets/e8c19a9c-d42c-4bbb-8b31-48412efca26b.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-rose-300 flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 space-y-4">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          I'm <span className="font-semibold">Sneha Narwaria</span>, a B.Tech student specializing in the
          Internet of Things at MITS Gwalior. I'm passionate about building smart systems
          that blend hardware and software—from IoT-based solutions to full-stack web
          applications. I enjoy solving real-world problems through technology and
          continuous learning.
        </p>
        <button
          onClick={() => document.getElementById("Footer")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-5 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#f43f5e]"
        >
          Contact Me
        </button>
      </div>
      <div>
        <img className="w-64 md:w-96" src={avatarImg} alt="Sneha Narwaria Avatar" />
      </div>
    </div>
  );
};

export default Home;
