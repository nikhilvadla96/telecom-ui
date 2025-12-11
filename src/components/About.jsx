import React, { useEffect } from "react";
import AOS from "aos";

export default function About() {
  useEffect(() => { AOS.init(); }, []);

  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6" data-aos="fade-right">
            <h2 className="fw-bold">About Us</h2>
            <p>
              We are a technology-driven solutions provider offering expertise in 
              FTTH, GIS, engineering & digital transformation.
            </p>
          </div>

          <div className="col-md-6" data-aos="fade-left">
            <img src="/assets/images/about.jpg" className="img-fluid rounded" alt="About" />
          </div>

        </div>
      </div>
    </section>
  );
}
