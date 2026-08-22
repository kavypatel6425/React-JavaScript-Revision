import { useState } from "react";
import "../Styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navContainer">

        <button
          className="menuButton"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <div
          className={`navLinks ${
            isOpen ? "show" : ""
          }`}
        >
          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#services">Services</a>

          <a href="#projects">Projects</a>

          <a href="#team">Team</a>

          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;