import React, { useRef } from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const MagneticIcon = ({ href, children, hoverColor }) => {
  const iconRef = useRef(null);

  const handleMouseMove = (e) => {
    const icon = iconRef.current;
    const rect = icon.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    icon.style.transform = `translate(${x * 1}px, ${y * 1}px)`;
  };

  const handleMouseLeave = () => {
    const icon = iconRef.current;
    icon.style.transform = "translate(0, 0)";
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={iconRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`text-white hover:${hoverColor} transition-transform duration-300`}
    >
      {children}
    </a>
  );
};

const SocialIcons = () => {
  return (
    <div className="flex text-5xl justify-center space-x-6 py-4">
      <MagneticIcon
        href="https://www.linkedin.com/in/k%C3%ADr%C3%BCbh%C3%A3-v-b5a873292/"
        hoverColor="text-blue-500"
      >
        <FaLinkedin />
      </MagneticIcon>

      <MagneticIcon
        href="https://www.instagram.com/3._stardust_.7/"
        hoverColor="text-pink-500"
      >
        <FaInstagram />
      </MagneticIcon>

      <MagneticIcon
        href="https://github.com/3-stardust-7"
        hoverColor="text-emerald-400"
      >
        <FaGithub />
      </MagneticIcon>

      <MagneticIcon
        href="mailto:your-vkirubha7@gmail.com"
        hoverColor="text-red-300"
      >
        <FaEnvelope />
      </MagneticIcon>
    </div>
  );
};

export default SocialIcons;
