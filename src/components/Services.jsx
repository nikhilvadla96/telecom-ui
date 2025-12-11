import React from "react";

export default function Services() {
  const services = [
    { title: "FTTH Design", desc: "Fiber network planning & deployment." },
    { title: "GIS Services", desc: "Geospatial mapping & automation." },
    { title: "Software Development", desc: "Custom digital solutions." },
    { title: "IT Consulting", desc: "Expert technical consulting." },
  ];

  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Our Services</h2>

        <div className="row">
          {services.map((s, idx) => (
            <div className="col-md-3 text-center" key={idx}>
              <div className="p-4 border rounded shadow-sm">
                <h5 className="fw-bold">{s.title}</h5>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
