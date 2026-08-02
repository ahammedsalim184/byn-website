import "../styles/contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
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

          <form className="contact-form">

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="text"
              placeholder="Company Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
            />

            <input
              type="text"
              placeholder="Product or Service Required"
            />

            <textarea
              rows="6"
              placeholder="Tell us about your requirements..."
            ></textarea>

            <button type="submit">
              Send Enquiry
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;