import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "#about", label: "About" },
    { to: "#education", label: "Education" },
    { to: "#skill", label: "Skill" },
    { to: "#experience", label: "Experience" },
    { to: "#projects", label: "Projects" },
    { to: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">My Portfolio</div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.to}>
              <a
                href={link.to}
                className="hover:text-blue-500 focus:text-blue-500 active:text-blue-700 transition duration-200 ease-in-out"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* GitHub Desktop */}
        <div className="hidden md:flex px-4 items-center">
          <a
            href="https://github.com/aakash10kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 bg-gray-800 text-white hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-600 px-4 py-2 rounded flex items-center transition duration-200 ease-in-out"
            title="GitHub"
          >
            <FaGithub size={20} className="mr-2" />
            GitHub
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4">
          <ul className="flex flex-col space-y-2 text-sm font-medium">
            {navLinks.map((link) => (
              <li
                key={link.to}
                className="hover:bg-gray-900 rounded-md transition"
              >
                <a
                  href={link.to}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:text-blue-500 focus:text-blue-500 active:text-blue-700 transition duration-200 ease-in-out"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="hover:bg-gray-900 rounded-md transition">
              <a
                href="https://github.com/aakash10kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-600 rounded flex items-center transition duration-200 ease-in-out"
                title="GitHub"
              >
                <FaGithub size={20} className="mr-2" />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
