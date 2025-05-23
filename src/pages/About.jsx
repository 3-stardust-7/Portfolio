import React from "react";
import Navbar from "../components/Navbar";
import SocialIcons from "../components/Socialicons";
import Footer from "../components/Footer";

const About = () => {

  const educationData = [
    {
      year: "2023 - 2027",
      title: "Bachelor's Degree in Computer Science & Engineering",
      institution: "Government Model Engineering College",
      description: "Focused on web development",
    },
    {
      year: "2021 - 2023",
      title: "Higher Secondary School",
      institution: "Campion School",
      description: "Specialized in thenBio-Math stream with 95.4%",
    },
    {
      year: "2011 - 2021",
      title: "Secondary School",
      institution: "Campion School",
      description: "Completed 10th grade with 94.8%",
    },
  ];

  return (
    <>
      <div className=" fixed w-full z-100 ">
        <Navbar />
      </div>
      <div className="flex bg-black flex-col">
        <div className=" z-10 sm:mt-120 lg:mt-10 h-screen text-white p-20">
          <h1 className="text-5xl mt-0 font-bold py-10">
            My <span className="text-red-300">Bio</span>
          </h1>
          <p className=" text-2xl lg:w-1/2  font-light">
            Hey, I’m Kirubha. I’m from Salem, TN. Even so I’ve been living in
            Kochi for more than 10 years having completed my schooling at
            Campion School and am currently pursuing my BTech Degree in Computer
            Science at Model Engineering College.
            <br />
            <br /> Basically, I can’t say I’m an expert, but if being taught
            then I’m a great learner who would love to grasp new skills and
            techniques with utmost efforts. I’m always intrigued by knotty,
            brain teasing, complex problems and feel satiated when I finally
            solve them!
          </p>
          <div className="absolute z-0 -top-50 -right-50 border-4 border-white p-4 rounded-full">
            <div className="border-2 border-red-300 p-4 rounded-full lg:w-200 lg:h-200">
              <img
                src="/bnw.jpg" // Correct path for Vite (in public folder)
                alt="Profile Pic"
                className="w-200 opacity-30 h-190 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="bg-black pb-20">
          <SocialIcons />
        </div>

        <div className="text-5xl font-bold flex justify-center py-20">
          Tech Suite
        </div>
        <div className="text-3xl font-semibold flex justify-center">
          Frontend
        </div>
        <div className="flex flex-col items-center gap-4 mt-10 lg:flex-row lg:justify-center lg:gap-5 lg:p-10">
          <img
            src="https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react"
            alt="React"
          />
          <img
            src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            alt="React Native"
          />
          <img
            src="https://img.shields.io/badge/React_Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"
            alt="React Redux"
          />
          <img
            src="https://img.shields.io/badge/Vite-purple?style=for-the-badge&logo=vite"
            alt="Vite"
          />
          <img
            src="https://img.shields.io/badge/TailwindCSS-blue?style=for-the-badge&logo=tailwind-css"
            alt="TailwindCSS"
          />
          <img
            src="https://img.shields.io/badge/HTML-orange?style=for-the-badge&logo=html5"
            alt="HTML"
          />
          <img
            src="https://img.shields.io/badge/CSS-blue?style=for-the-badge&logo=css3"
            alt="CSS"
          />
          <img
            src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript"
            alt="JavaScript"
          />
        </div>
        <h2 className="text-3xl font-semibold mt-10 text-center">🛠️ Backend</h2>
        <div className="flex flex-col items-center gap-4 mt-4 lg:flex-row lg:justify-center lg:gap-5 lg:p-10">
          <img
            src="https://img.shields.io/badge/Supabase-green?style=for-the-badge&logo=supabase"
            alt="Supabase"
          />
          <img
            src="https://img.shields.io/badge/Firebase_Auth-orange?style=for-the-badge&logo=firebase"
            alt="Firebase Auth"
          />
        </div>
        <h2 className="text-3xl font-semibold mt-10 mb-  text-center">
          📚 Tools / Others
        </h2>
        <div className="flex flex-col items-center gap-4 mt-4 lg:flex-row lg:justify-center lg:gap-5 lg:p-10">
          <img
            src="https://img.shields.io/badge/Git-black?style=for-the-badge&logo=git"
            alt="Git"
          />
          <img
            src="https://img.shields.io/badge/Jupyter-orange?style=for-the-badge&logo=jupyter"
            alt="Jupyter"
          />
          <img
            src="https://img.shields.io/badge/MongoDB_Compass-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
            alt="MongoDB Compass"
          />
        </div>

        <div className=" bg-gradient-to-b from-black to-gray-500 lg:px-86 p-8">
          <h2 className="text-5xl  font-bold text-white mb-10 text-center">
            🎓 My Education Timeline
          </h2>
          <div className=" relative border-l-4 border-blue-500 ml-6">
            {educationData.map((item, index) => (
              <div key={index} className="mb-8 ml-6">
                {/* Node Indicator */}
                <div className="absolute w-4 h-4 bg-blue-300 rounded-full -left-2.5"></div>

                {/* Timeline Content */}
                <div className="bg-white p-6 my-14 shadow-lg rounded-2xl">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-gray-800 text-xl font-semilight py-4">
                    {item.institution}
                  </p>
                  <span className="text-md text-blue-500 bg-gray-300 rounded-2xl py-1 px-2 font-semibold">
                    {item.year}
                  </span>
                  <p className="mt-2 text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default About;
