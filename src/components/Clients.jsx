import React from "react";

export default function Clients() {
  const clients = ["Client1", "Client2", "Client3", "Client4"];

  return (
    <section id="clients" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4">Our Clients</h2>
        <div className="d-flex justify-content-center flex-wrap gap-3">
          {clients.map((c, i) => (
            <div key={i} className="p-3 border rounded">{c}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
