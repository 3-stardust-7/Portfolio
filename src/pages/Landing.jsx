import React from "react";
import Navbar from "../components/Navbar";
import SocialIcons from "../components/Socialicons";
import Marquee from "react-fast-marquee";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Typewriter from "../components/Typewriter";

import TiltGlowCard from "../components/TiltGlowCard";

//import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Landing = () => {
  return (
    <>
      <div className="fixed w-full z-100">
        <Navbar />
      </div>

      <div className="bg-black w-full text-white min-h-screen flex lg:flex-col flex-row justify-center items-center">
        <div className="flex lg:flex-row flex-col">
          <div className="w-1/2 sm:ml-0 ml-18 z-50 lg:bg-none bg-black">
            <h1 className="mt-40 px-20 text-7xl font-bold animate-fade-in-up">
              Hey! I'm <span className="text-red-300">Kirubha</span>
            </h1>
            <div className="flex flex-row px-20 py-10 font-light text-2xl">
           
              <Typewriter />
            </div>
            <p className="py-10 px-20 font-light text-2xl">
              A passionate web developer who loves crafting beautiful UIs.
              Skilled in React, Tailwind, and Supabase, with a growing interest
              in machine learning
            </p>
            <div className="bg-black sm:ml-0 ml-16 pb-20">
              <SocialIcons />
            </div>
          </div>
          <div className="border-4 lg:ml-0 ml-36 z-20 w-116 h-116 border-white p-4 m-20 rounded-full">
            <div className="w-106 h-106 border-2 border-red-300 p-2 rounded-full">
              <img
                src="/me!!.jpg"
                alt="Profile Pic"
                className="w-102 h-102 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="absolute z-0 -top-50 -right-50 border-4 border-white p-4 rounded-full">
          <div className="border-2 border-red-300 p-4 rounded-full lg:w-200 lg:h-200">
            <img
              src="/bnw.jpg"
              alt="Profile Pic"
              className="w-200 opacity-50 h-190 object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      <hr className="border-t-3 border-red-300 m-4 mx-8" />
      <div className="bg-black text-7xl font-bold text-white py-8">
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          <span className="mx-10">React</span>
          <span className="mx-10">Tailwind</span>
          <span className="mx-10">JavaScript</span>
          <span className="mx-10">Supabase</span>
          <span className="mx-10">Firebase</span>
          <span className="mx-10">Machine Learning</span>
        </Marquee>
      </div>
      <hr className="border-t-3 border-red-300 m-4 mx-8" />

      {/* Added TiltGlowCard here */}
      <div className="flex justify-center p-10 bg-black">
        <TiltGlowCard />
      </div>

      <div className="bg-black p-20">
        <Contact />
      </div>

      <div>
        <hr className="border-t-2 border-white" />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
