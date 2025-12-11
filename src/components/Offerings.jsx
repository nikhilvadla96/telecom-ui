import React from "react";

export default function Offerings() {
  const offerings = [
    "GIS Data Conversion",
    "FTTH Planning & Design",
    "Permits & TCP",
    "As-Built Design & Drafting",
    "Pole Loading Analysis",
  ];

  return (
    <section id="offerings" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Our Offerings</h2>
        <div className="row">
          {offerings.map((o, i) => (
            <div key={i} className="col-md-4 mb-3">
              <div className="p-4 border rounded shadow-sm text-center h-100">
                <h5>{o}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
