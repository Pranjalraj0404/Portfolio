
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "../../data/portfolioData";

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about-me" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#03030c]/80 backdrop-blur-md py-4 border-b border-white/5 shadow-lg shadow-purple-500/5"
          : "bg-gradient-to-b from-[#03030c] via-[#03030c]/50 to-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold relative group">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:opacity-80 transition-opacity">
            {PERSONAL_INFO.name.split(" ")[0]}
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                activeSection === link.id ? "text-purple-400" : "text-gray-400"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#03030c]/95 backdrop-blur-xl border-b border-white/10 py-4 animate-fade-in-down">
          <div className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsMenuOpen(false);
                }}
                className={`text-lg font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-purple-400"
                    : "text-gray-400"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
