import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/quote.css";

function Quote() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    brand: "",
    city: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: t("quote.success"),
        });

        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          product: "",
          quantity: "",
          brand: "",
          city: "",
          notes: "",
        });

        setTimeout(() => {
          setStatus({
            type: "",
            message: "",
          });
        }, 6000);

      } else {
        setStatus({
          type: "error",
          message: result.message || t("quote.error"),
        });
      }

    } catch (err) {
      console.error(err);

      setStatus({
        type: "error",
        message: t("quote.error"),
      });
    }

    setLoading(false);
  };

  return (
    <section className="quote" id="quote">
      <div className="container">

        <span className="section-tag">
          {t("quote.tag")}
        </span>

        <h2>{t("quote.title")}</h2>

        <p className="section-description">
          {t("quote.description")}
        </p>

        {status.message && (
          <div className={`quote-message ${status.type}`}>
            {status.message}
          </div>
        )}

        <form className="quote-form" onSubmit={handleSubmit}>

          <div className="row">

            <input
              type="text"
              name="name"
              placeholder={t("quote.form.name")}
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="company"
              placeholder={t("quote.form.company")}
              value={formData.company}
              onChange={handleChange}
            />

          </div>

          <div className="row">

            <input
              type="email"
              name="email"
              placeholder={t("quote.form.email")}
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder={t("quote.form.phone")}
              value={formData.phone}
              onChange={handleChange}
            />

          </div>

          <div className="row">

            <input
              type="text"
              name="product"
              placeholder={t("quote.form.product")}
              value={formData.product}
              onChange={handleChange}
            />

            <input
              type="number"
              name="quantity"
              placeholder={t("quote.form.quantity")}
              value={formData.quantity}
              onChange={handleChange}
            />

          </div>

          <div className="row">

            <input
              type="text"
              name="brand"
              placeholder={t("quote.form.brand")}
              value={formData.brand}
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              placeholder={t("quote.form.city")}
              value={formData.city}
              onChange={handleChange}
            />

          </div>

          <textarea
            rows="5"
            name="notes"
            placeholder={t("quote.form.notes")}
            value={formData.notes}
            onChange={handleChange}
          />

          <label className="upload">
            {t("quote.form.attachment")}
            <input type="file" disabled />
          </label>

          <button type="submit" disabled={loading}>
            {loading
              ? t("quote.form.sending")
              : t("quote.form.submit")}
          </button>

        </form>

      </div>
    </section>
  );
}

export default Quote;