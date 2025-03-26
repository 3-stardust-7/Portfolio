import React from "react";
import Navbar from "../components/Navbar";

const About = () => {

  const educationData = [
    {
      year: "2023 - 2027",
      title: "Bachelor's Degree in Computer Science & Engineering",
      institution: "Government Model Engineering College",
      description: "Focused on web development, AI, and data science.",
    },
    {
      year: "2021 - 2023",
      title: "Higher Secondary School",
      institution: "Campion School",
      description: "Specialized in thenBio-Math stream 94.4%",
    },
    {
      year: "2011 - 2021",
      title: "Secondary School",
      institution: "Campion School",
      description: "Completed 10th grade with 94.4%",
    },
  ];

  return (
    <>
      <div className="fixed z-100 ml-10">
        <Navbar />
      </div>
      <div className="bg-black h-screen text-white p-20">
        <h1 className="text-5xl mt-20 font-bold py-10">My Bio</h1>
        <p className="text-2xl w-1/2 font-light">
          Hey, I’m Kirubha. I’m from Salem, TN. Even so I’ve been living in
          Kochi for more than 10 years having completed my schooling at Campion
          School and am currently pursuing my BTech Degree in Computer Science
          at Model Engineering College.
          <br />
          <br /> Basically, I can’t say I’m an expert, but if being taught then
          I’m a great learner who would love to grasp new skills and techniques
          with utmost efforts. I’m always intrigued by knotty, brain teasing,
          complex problems and feel satiated when I finally solve them!
        </p>
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

      <div className=" bg-black px-86 p-4">
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
                <p className="text-gray-800 text-xl font-semilight py-4">{item.institution}</p>
                <span className="text-md text-blue-500 bg-gray-200 rounded-2xl py-1 px-2 font-semibold relative -top-24 -right-156">
                  {item.year}
                </span>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
