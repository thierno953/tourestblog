import React from 'react'
import "./hero.css";
import Shap1 from "../../images/shape-1.png";
import Shap2 from "../../images/shape-2.png";
import Shap3 from "../../images/shape-3.png";
import Banner from "../../assets/tourest.png";

const Hero = () => {
  return (
    <main id="hero">
      <article>
        <section className="section hero">
          <div className="container">

            <img src={Shap1} style={{ width: "61", height: "61" }} alt="Vector Shape" className="shape shape-1" />

            <img src={Shap2} style={{ width: "56", height: "74" }} alt="Vector Shape" className="shape shape-2" />

            <img src={Shap3} style={{ width: "57", height: "72" }} alt="Vector Shape" className="shape shape-3" />

            <div className="hero-content">

              <p className="section-subtitle">Explore Your Travel</p>

              <h2 className="hero-title">Trusted Travel Agency</h2>

              <p className="hero-text">
                I travel not to go anywhere, but to go. I travel for travel's sake the great affair is to move.
              </p>

              <div className="btn-group">
                <a href="#" className="btn btn-primary">Contact Us</a>

                <a href="#" className="btn btn-outline">Learn More</a>
              </div>

            </div>

            <figure className="hero-banner">
              <img src={Banner} loading="lazy" alt="hero banner" style={{ width: "686", height: "812" }}
                className="w-100" />
            </figure>

          </div>
        </section>
      </article>
    </main>
  )
}

export default Hero
