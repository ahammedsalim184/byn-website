import "../styles/whychoose.css";
import {
  FaBoxes,
  FaHandshake,
  FaMoneyCheckAlt,
  FaComments,
  FaTools,
  FaMapMarkerAlt,
} from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaBoxes />,
      title: "Multi-Category Supply",
      text: "Source commercial equipment, machinery, electrical products, furniture and more from one trusted partner.",
    },
    {
      icon: <FaHandshake />,
      title: "Reliable Sourcing",
      text: "We work with dependable suppliers to deliver quality products that match your specifications.",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Competitive Pricing",
      text: "We compare suppliers and quotations to provide the best commercial value.",
    },
    {
      icon: <FaComments />,
      title: "Clear Communication",
      text: "Fast responses, transparent quotations and regular supply updates.",
    },
    {
      icon: <FaTools />,
      title: "Flexible Solutions",
      text: "Supporting one-time purchases, wholesale orders and project procurement.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Saudi Arabia Coverage",
      text: "Based in Riyadh and serving businesses across the Kingdom.",
    },
  ];

  return (
    <section className="why" id="why">
      <div className="container">


        <h2>Why Choose BYN Trading & Contracting?</h2>

        <p className="section-description">
          We deliver reliable sourcing, trusted partnerships and commercial
          solutions that help businesses succeed.
        </p>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>

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