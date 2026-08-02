import "../styles/about.css";
import { useTranslation } from "react-i18next";
import aboutImage from "../assets/images/espresso.webp";

function About() {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <img
            src={aboutImage}
            alt="BYN Commercial Supply Solutions"
          />
        </div>

        <div className="about-content">

          <span className="section-tag">
            {t("about.tag")}
          </span>

          <h2>{t("about.title")}</h2>

          <p>{t("about.description1")}</p>

          <p>{t("about.description2")}</p>

          <div className="mission-vision">

            <div className="card">
              <h3>{t("about.missionTitle")}</h3>

              <p>{t("about.mission")}</p>
            </div>

            <div className="card">
              <h3>{t("about.visionTitle")}</h3>

              <p>{t("about.vision")}</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;