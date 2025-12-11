import React from "react";

export default function Expertise() {
  const expertise = ["FTTH", "GIS", "Data Analytics", "Network Planning"];

  return (
    <section id="expertise" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Expertise</h2>
        <div className="row text-center">
          {expertise.map((e, i) => (
            <div key={i} className="col-md-3 mb-3">
              <div className="p-4 border rounded shadow-sm">{e}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
