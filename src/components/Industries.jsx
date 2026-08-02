import "../styles/industries.css";
import {
  FaHotel,
  FaStore,
  FaBuilding,
  FaIndustry,
  FaWarehouse,
  FaHardHat,
} from "react-icons/fa";

function Industries() {
  const industries = [
    {
      icon: <FaHotel />,
      title: "Hotels & Hospitality",
    },
    {
      icon: <FaStore />,
      title: "Restaurants & Cafés",
    },
    {
      icon: <FaHardHat />,
      title: "Construction Companies",
    },
    {
      icon: <FaBuilding />,
      title: "Commercial Offices",
    },
    {
      icon: <FaIndustry />,
      title: "Industrial Facilities",
    },
    {
      icon: <FaWarehouse />,
      title: "Warehouses & Retail",
    },
  ];

  return (
    <section className="industries" id="industries">
      <div className="container">

        <span className="section-tag">INDUSTRIES</span>

        <h2>Industries We Serve</h2>

        <p className="section-description">
          We proudly support businesses and projects across Saudi Arabia with
          reliable sourcing, supply, and contracting solutions.
        </p>

        <div className="industry-grid">
          {industries.map((item, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-icon">{item.icon}</div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Industries;