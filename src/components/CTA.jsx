import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">Hava a project in mind? </p>
      <Link to="/contact" className="btn">
        Contact me
      </Link>
    </section>
  );
};

export default CTA;
