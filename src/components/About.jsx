import "../styles/about.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop"
            alt="Warehouse and Commercial Supply"
          />
        </div>

        <div className="about-content">
          <span className="section-tag">ABOUT BYN</span>

          <h2>Your Trusted Trading & Supply Partner</h2>

          <p>
            BYN Trading and Contracting provides trading, sourcing,
            distribution, commercial supply, and project-support services
            across Riyadh and Saudi Arabia.
          </p>

          <p>
            We work with reliable suppliers to source quality products,
            compare specifications, and deliver solutions tailored to our
            customers' requirements.
          </p>

          <div className="mission-vision">

            <div className="card">
              <h3>Our Mission</h3>
              <p>
                To provide reliable products, equipment, materials, and
                sourcing solutions that support businesses and projects
                across Saudi Arabia.
              </p>
            </div>

            <div className="card">
              <h3>Our Vision</h3>
              <p>
                To become a trusted Saudi trading and supply company known
                for reliability, quality, commercial value, and long-term
                business relationships.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;