import "../styles/quote.css";

function Quote() {
  return (
    <section className="quote" id="quote">
      <div className="container">

        <span className="section-tag">REQUEST A QUOTATION</span>

        <h2>Request a Quote</h2>

        <p className="section-description">
          Send us your requirements and our team will prepare a competitive quotation
          tailored to your project.
        </p>

        <form className="quote-form">

          <div className="row">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Company Name" />
          </div>

          <div className="row">
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Mobile Number" />
          </div>

          <div className="row">
            <input type="text" placeholder="Product or Service Required" />
            <input type="number" placeholder="Quantity" />
          </div>

          <div className="row">
            <input type="text" placeholder="Preferred Brand" />
            <input type="text" placeholder="Delivery City" />
          </div>


          <textarea
            rows="5"
            placeholder="Specifications / Additional Notes"
          ></textarea>

          <label className="upload">
            Attach File
            <input type="file" />
          </label>

          <button type="submit">
            Submit Enquiry
          </button>

        </form>

      </div>
    </section>
  );
}

export default Quote;