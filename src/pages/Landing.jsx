import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      {/* Hero Section */}
      <div className="text-center space-y-4">
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
      </div>

      {/* About Me Section */}
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto mt-12 text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4">💡 About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I specialize in building modern, responsive web applications using
          <span className="text-blue-400"> React</span>, Tailwind CSS, and
          exploring the world of{" "}
          <span className="text-blue-400">Machine Learning</span>. I'm
          constantly learning and improving to create impactful projects.
        </p>
      </div>

      {/* CTA Section */}
      <div className="mt-12 animate-fade-in-up">
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl text-lg font-bold shadow-lg transition-all"
        >
          🚀 View My Projects
        </a>
      </div>
    </div>
  );
};

export default Landing;
