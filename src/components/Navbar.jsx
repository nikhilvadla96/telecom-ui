import React from "react";
import logo from '../assets/images/1000093557-removebg-preview.png'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        <a href="/"> <img src={logo} alt="Logiciel Logo" style={{ height: "70px" }} /></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#offerings">Offerings</a></li>
            <li className="nav-item"><a className="nav-link" href="#expertise">Expertise</a></li>
            <li className="nav-item"><a className="nav-link" href="#clients">Clients</a></li>
            <li className="nav-item"><a className="nav-link" href="#vision">Vision</a></li>
            <li className="nav-item"><a className="nav-link" href="#whyus">Why Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
