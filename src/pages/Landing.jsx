import React from "react";
import Navbar from "../components/Navbar";
//import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Landing = () => {
  return (
    <>
      <div className="fixed z-100 ml-10">
        <Navbar />
      </div>
      <div className="bg-black w-full text-white min-h-screen flex lg:flex-col flex-row justify-center items-center">
        <div className="flex lg:flex-row flex-col">
          <div className="w-1/2 sm:ml-0 ml-20 z-50 lg:bg-none bg-black">
            <h1 className="mt-40 px-20  text-7xl font-bold animate-fade-in-up">
              Hey! I'm <span className="text-red-300">Kirubha</span>
            </h1>
            <p className="p-20 font-light text-2xl">
              A passionate web developer who loves crafting beautiful UIs.
              Skilled in React, Tailwind, and Supabase, with a growing interest
              in machine learning
            </p>
          </div>
          <div className="border-4 lg:ml-0 ml-36 z-20 w-116 h-116 border-white p-4 m-20 rounded-full">
            <div className="w-106 h-106  border-2 border-red-300 p-2 rounded-full">
              <img
                src="/me!!.jpg" // Correct path for Vite (in public folder)
                alt="Profile Pic"
                className="w-102  h-102 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
          <div className="absolute z-0 -top-50 -right-50 border-4 border-white p-4 rounded-full">
            <div className="border-2 border-red-300 p-4 rounded-full lg:w-200 lg:h-200">
              <img
                src="/bnw.jpg" // Correct path for Vite (in public folder)
                alt="Profile Pic"
                className="w-200 opacity-50 h-190 object-cover rounded-full"
              />
            </div>
          </div>

      
      </div>
    </>
  );
};

export default Landing;

{
  /* Hero Section */
}
{
  /* <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold animate-fade-in-up">
          👋 Hi, I'm <span className="text-blue-500">Your Name</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-md mx-auto">
          I'm a passionate <span className="text-blue-400">Web Developer</span>{" "}
          and
          <span className="text-blue-400"> ML Enthusiast</span> building
          exceptional digital experiences.
        </p>
        <div className="space-x-4 mt-4 animate-fade-in-up">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaTwitter size={30} />
          </a>
        </div>
      </div> */
}
