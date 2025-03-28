import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white bg-gradient-to-b from-black w-full p-8">
      <div className="ml-20 flex justify-self-start">
        {/* Logo or Brand Name */}
        <div className="">
          <img
            src="/k.png" // Correct path for Vite (in public folder)
            alt="Profile Pic"
            className="fixed z-100 w-18 h-18 top-4 left-10 object-cover rounded-full"
          />
          <a href="/" className="text-2xl px-20 font-bold">
            <em>Stardust</em>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-2xl font-light space-x-6">
          <a href="/" className="hover:text-red-300 transition">
            Home
          </a>
          <a href="/about" className="hover:text-red-300 transition">
            About
          </a>
          <a href="/projects" className="hover:text-red-300 transition">
            Projects
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none text-2xl absolute left-36 sm:top-4 sm:-right-120"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-black mt-4 text-white space-y-2 w-1/2 pt-4`}
      >
        <a href="/" className="block px-4 py-2 hover:bg-red-300 transition">
          Home
        </a>
        <a
          href="/about"
          className="block px-4 py-2 hover:bg-red-300 transition"
        >
          About
        </a>
        <a
          href="/projects"
          className="block px-4 py-2 hover:bg-red-300 transition"
        >
          Projects
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
