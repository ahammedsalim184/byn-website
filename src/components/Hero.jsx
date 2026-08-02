import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/hero.css";

import hero1 from "../assets/images/hero1.jpg";



function Hero() {
  const images = [hero1];
  const [currentImage, setCurrentImage] = useState(0);
  const { t } = useTranslation();

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
          <h1>{t("hero.title")}</h1>

          <p>{t("hero.description")}</p>

          <div className="hero-buttons">
            <a href="#products" className="primary-btn">
              {t("hero.explore")}
            </a>

            <a href="#quote" className="secondary-btn">
              {t("hero.request")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;