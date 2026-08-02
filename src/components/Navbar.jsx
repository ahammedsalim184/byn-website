import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <a href="#hero" className="logo">
        <img src={logo} alt="BYN Trading & Contracting" />
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <ul className={menuOpen ? "active" : ""}>
        <li>
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </li>
        <li>
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
        </li>
        <li>
          <a href="#industries" onClick={() => setMenuOpen(false)}>Industries</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>
      </ul>

      <a href="#quote" className="quote-btn">
        Request a Quote
      </a>
    </nav>
  );
}

export default Navbar;