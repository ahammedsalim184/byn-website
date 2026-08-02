import "../styles/navbar.css";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav>
      <a href="#hero" className="logo">
        <img src={logo} alt="BYN Trading & Contracting" />
      </a>

      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#industries">Industries</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#quote" className="quote-btn">
        Request a Quote
      </a>
    </nav>
  );
}

export default Navbar;