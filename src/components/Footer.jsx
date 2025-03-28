import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo / Name */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold">
              <em>Stardust</em>
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Crafting elegant solutions with code.
            </p>
          </div>

          <p className="text-md flex justify-center text-gray-400 mt-4">
            📍 Based in Kochi, India
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-red-300 hover:bg-red-500 text-black px-4 py-1 rounded-lg m-4"
          >
            ↑ Back to Top
          </button>

          {/* Social Icons */}
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://github.com/3-stardust-7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-300 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/k%C3%ADr%C3%BCbh%C3%A3-v-b5a873292/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-300 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:your-vkirubha7@gmail.com"
              className="hover:text-red-300 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t-2 border-gray-600 my-6" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Stardust. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
