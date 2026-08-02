import "../styles/whychoose.css";
import { useTranslation } from "react-i18next";

import {
  FaBoxes,
  FaHandshake,
  FaMoneyCheckAlt,
  FaComments,
  FaTools,
  FaMapMarkerAlt,
} from "react-icons/fa";

function WhyChoose() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FaBoxes />,
      title: t("why.items.supply.title"),
      text: t("why.items.supply.text"),
    },
    {
      icon: <FaHandshake />,
      title: t("why.items.sourcing.title"),
      text: t("why.items.sourcing.text"),
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: t("why.items.pricing.title"),
      text: t("why.items.pricing.text"),
    },
    {
      icon: <FaComments />,
      title: t("why.items.communication.title"),
      text: t("why.items.communication.text"),
    },
    {
      icon: <FaTools />,
      title: t("why.items.flexible.title"),
      text: t("why.items.flexible.text"),
    },
    {
      icon: <FaMapMarkerAlt />,
      title: t("why.items.coverage.title"),
      text: t("why.items.coverage.text"),
    },
  ];

  return (
    <section className="why" id="why">
      <div className="container">

        <span className="section-tag">
          {t("why.tag")}
        </span>

        <h2>{t("why.title")}</h2>

        <p className="section-description">
          {t("why.description")}
        </p>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>

              <div className="why-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;