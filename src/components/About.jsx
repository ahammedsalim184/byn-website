import "../styles/about.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop"
            alt="Warehouse and Commercial Supply"
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