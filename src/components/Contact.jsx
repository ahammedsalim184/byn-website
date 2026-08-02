import { useState } from "react";
import "../styles/contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Your enquiry has been sent successfully.");

        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          product: "",
          message: "",
        });
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">

        <span className="section-tag">CONTACT US</span>

        <h2>Get in Touch</h2>

        <p className="section-description">
          Contact BYN Trading & Contracting for product enquiries,
          quotations, project requirements and business partnerships.
        </p>

        <div className="contact-wrapper">

          <div className="contact-info">

            <div className="info-box">
              <FaPhoneAlt className="info-icon" />
              <div>
                <h3>Phone</h3>
                <p>+966 XX XXX XXXX</p>
              </div>
            </div>

            <div className="info-box">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>sales@byntrading.com</p>
              </div>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>Location</h3>
                <p>Riyadh, Saudi Arabia</p>
              </div>
            </div>

          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="product"
              placeholder="Product or Service Required"
              value={formData.product}
              onChange={handleChange}
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Enquiry"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;