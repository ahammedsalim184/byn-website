import { useState } from "react";
import "../styles/contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

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
        alert(t("contact.success"));

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
      alert(t("contact.error"));
    }

    setLoading(false);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">

        <span className="section-tag">
          {t("contact.tag")}
        </span>

        <h2>{t("contact.title")}</h2>

        <p className="section-description">
          {t("contact.description")}
        </p>

        <div className="contact-wrapper">

          <div className="contact-info">

            <div className="info-box">
              <FaPhoneAlt className="info-icon" />
              <div>
                <h3>{t("contact.phone")}</h3>
                <p>+966 XX XXX XXXX</p>
              </div>
            </div>

            <div className="info-box">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>{t("contact.email")}</h3>
                <p>sales@byntrading.com</p>
              </div>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>{t("contact.location")}</h3>
                <p>{t("contact.locationValue")}</p>
              </div>
            </div>

          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder={t("contact.form.name")}
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="company"
              placeholder={t("contact.form.company")}
              value={formData.company}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder={t("contact.form.email")}
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder={t("contact.form.phone")}
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="product"
              placeholder={t("contact.form.product")}
              value={formData.product}
              onChange={handleChange}
            />

            <textarea
              rows="6"
              name="message"
              placeholder={t("contact.form.message")}
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading
                ? t("contact.form.sending")
                : t("contact.form.submit")}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;