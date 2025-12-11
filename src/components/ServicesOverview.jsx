import React from "react";

export default function ServicesOverview() {
  const services = [
    { title: "Engineering Services", desc: "Telecom network design & deployment." },
    { title: "IT Services", desc: "Data engineering, analytics, BI solutions." },
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          {services.map((s, i) => (
            <div key={i} className="col-md-6 mb-4">
              <div className="p-4 border rounded shadow-sm text-center h-100">
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
