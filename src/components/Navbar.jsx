import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <a href="/" className="text-2xl px-20 font-bold">
          <em>Stardust</em>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex text-2xl font-light space-x-6">
          <a href="#about" className="hover:text-red-300 transition">
            About
          </a>
          <a href="#projects" className="hover:text-red-300 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-red-300 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button (Optional) */}
        <button className="md:hidden text-white focus:outline-none">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
