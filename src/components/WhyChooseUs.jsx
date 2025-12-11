import React from "react";

export default function WhyChooseUs() {
  const reasons = [
    "Innovation",
    "Ethical Practices",
    "Scalable Solutions",
    "Customer Focus",
  ];

  return (
    <section id="whyus" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Why Choose Us</h2>
        <div className="row text-center">
          {reasons.map((r, i) => (
            <div key={i} className="col-md-3 mb-3">
              <div className="p-4 border rounded shadow-sm">{r}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
