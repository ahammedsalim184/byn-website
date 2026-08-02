import { useState } from "react";
import "../styles/quote.css";

function Quote() {
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
          message:
            "Thank you! Your quotation request has been submitted successfully. Our sales team will contact you shortly.",
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
          message: result.message || "Unable to send your enquiry.",
        });
      }

    } catch (err) {
      console.error(err);

      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }

    setLoading(false);
  };

  return (
    <section className="quote" id="quote">
      <div className="container">

        <span className="section-tag">REQUEST A QUOTATION</span>

        <h2>Request a Quote</h2>

        <p className="section-description">
          Send us your requirements and our team will prepare a competitive quotation
          tailored to your project.
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
          </div>

          <div className="row">
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
          </div>

          <div className="row">
            <input
              type="text"
              name="product"
              placeholder="Product or Service Required"
              value={formData.product}
              onChange={handleChange}
            />

            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <input
              type="text"
              name="brand"
              placeholder="Preferred Brand"
              value={formData.brand}
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              placeholder="Delivery City"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <textarea
            rows="5"
            name="notes"
            placeholder="Specifications / Additional Notes"
            value={formData.notes}
            onChange={handleChange}
          />

          <label className="upload">
            Attach File (Coming Soon)
            <input type="file" disabled />
          </label>

          <button type="submit" disabled={loading}>
            {loading ? "Sending Enquiry..." : "Submit Enquiry"}
          </button>

        </form>

      </div>
    </section>
  );
}

export default Quote;