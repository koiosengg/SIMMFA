import React from "react";
import { Link } from "react-router-dom";

function Deadline() {
  return (
    <section className="home-deadline">
      <div className="home-deadline-heading">
        <h2>
          Upcoming <span>Application</span> Deadline
        </h2>
        <p>Secure your spot and begin your musical journey.</p>
      </div>
      <Link to="/" className="primary-button">
        Apply now
      </Link>
    </section>
  );
}

export default Deadline;
