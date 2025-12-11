import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3 text-center">
      <p>© {new Date().getFullYear()} Logiciel — All Rights Reserved</p>
    </footer>
  );
}
