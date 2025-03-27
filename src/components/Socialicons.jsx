import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex justify-center space-x-6 py-4">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/k%C3%ADr%C3%BCbh%C3%A3-v-b5a873292/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl hover:text-blue-500 transition"
      >
        <FaLinkedin />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/3._stardust_.7/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl hover:text-pink-500 transition"
      >
        <FaInstagram />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/3-stardust-7"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl hover:text-emerald-400 transition"
      >
        <FaGithub />
      </a>

      {/* Mail */}
      <a
        href="mailto:your-vkirubha7@gmail.com"
        className="text-white text-3xl hover:text-red-300 transition"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialIcons;
