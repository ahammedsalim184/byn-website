import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir =
      i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setMenuOpen(false);
  };

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
          <a href="#hero" onClick={() => setMenuOpen(false)}>
            {t("navbar.home")}
          </a>
        </li>

        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            {t("navbar.about")}
          </a>
        </li>

        <li>
          <a href="#products" onClick={() => setMenuOpen(false)}>
            {t("navbar.products")}
          </a>
        </li>

        <li>
          <a href="#industries" onClick={() => setMenuOpen(false)}>
            {t("navbar.industries")}
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            {t("navbar.contact")}
          </a>
        </li>

        {/* Mobile language switch */}
        <li className="mobile-language">
          <button
            onClick={() => changeLanguage("en")}
            className={i18n.language === "en" ? "active" : ""}
          >
            EN
          </button>

          <button
            onClick={() => changeLanguage("ar")}
            className={i18n.language === "ar" ? "active" : ""}
          >
            العربية
          </button>
        </li>
      </ul>

      <div className="nav-right">

        <div className="language-switcher">
          <button
            onClick={() => changeLanguage("en")}
            className={i18n.language === "en" ? "active" : ""}
          >
            EN
          </button>

          <button
            onClick={() => changeLanguage("ar")}
            className={i18n.language === "ar" ? "active" : ""}
          >
            العربية
          </button>
        </div>

        <a href="#quote" className="quote-btn">
          {t("navbar.quote")}
        </a>

      </div>
    </nav>
  );
}

export default Navbar;