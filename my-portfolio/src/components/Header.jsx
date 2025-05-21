import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-black z-10 p-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center sm:block">
        <div className="flex justify-between items-center w-full sm:justify-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden sm:flex justify-center mt-4 gap-6 font-mono">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile dropdown */}
        {isOpen && (
          <nav className="flex flex-col items-center gap-4 mt-4 sm:hidden font-mono">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
