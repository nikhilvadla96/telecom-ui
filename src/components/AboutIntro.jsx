import React from "react";

export default function AboutIntro() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>About Us</h2>
            <p>
              We are a technology-driven solutions provider offering expertise in FTTH, GIS, engineering & digital transformation.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/assets/images/about.jpg" alt="About Us" className="img-fluid rounded"/>
          </div>
        </div>
      </div>
    </section>
  );
}
