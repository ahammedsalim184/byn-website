import "../styles/industries.css";
import { useTranslation } from "react-i18next";

import {
  FaHotel,
  FaStore,
  FaBuilding,
  FaIndustry,
  FaWarehouse,
  FaHardHat,
} from "react-icons/fa";

function Industries() {
  const { t } = useTranslation();

  const industries = [
    {
      icon: <FaHotel />,
      title: t("industries.items.hotel"),
    },
    {
      icon: <FaStore />,
      title: t("industries.items.restaurant"),
    },
    {
      icon: <FaHardHat />,
      title: t("industries.items.construction"),
    },
    {
      icon: <FaBuilding />,
      title: t("industries.items.office"),
    },
    {
      icon: <FaIndustry />,
      title: t("industries.items.industrial"),
    },
    {
      icon: <FaWarehouse />,
      title: t("industries.items.warehouse"),
    },
  ];

  return (
    <section className="industries" id="industries">
      <div className="container">

        <span className="section-tag">
          {t("industries.tag")}
        </span>

        <h2>{t("industries.title")}</h2>

        <p className="section-description">
          {t("industries.description")}
        </p>

        <div className="industry-grid">
          {industries.map((item) => (
            <div className="industry-card" key={item.title}>
              <div className="industry-icon" aria-hidden="true">
                {item.icon}
              </div>

              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Industries;