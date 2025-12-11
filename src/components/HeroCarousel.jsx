import React from "react";
import slider1 from '../assets/images/logicial-carousal-slider1.jpg'
import slider2 from '../assets/images/logicial-carousal-slider2.jpg'
import slider3 from '../assets/images/logicial-carousal-slider3.jpg'

export default function HeroCarousel() {
  return (
    <div id="home" className="pt-5">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="slide1"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Elevating Infrastructure Solutions</h5>
              <p>High-quality FTTH designs from end to end.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="slide2"/>
            <div className="carousel-caption d-none d-md-block">
              <h2>Impeccable Solutions</h2>
              <p>We create innovative, disruptive technologies.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="slide3"/>
            <div className="carousel-caption d-none d-md-block">
              <h2>Elevating Infrastructure</h2>
              <p>Advanced geospatial & automation solutions.</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}
