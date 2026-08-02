import { useEffect, useState } from "react";
import "../styles/hero.css";

import hero1 from "../assets/images/hero1.jpg";



function Hero() {
  const images = [hero1];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="hero"
      id="hero"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      <div className="hero-content">
        <div className="hero-box">
          <h1>Trading, Contracting & Commercial Supply Solutions</h1>

          <p>
            BYN Trading and Contracting is your trusted sourcing and supply
            partner in Riyadh, Saudi Arabia. We provide commercial kitchen
            equipments, coffee machines, building materials, electrical products,
            furnitures, IT accessories, and much more.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="primary-btn">
              Explore Products
            </a>

            <a href="#quote" className="secondary-btn">
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;