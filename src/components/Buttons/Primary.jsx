import React from "react";
import { Link } from "react-router-dom";

function Primary({ text, toLink }) {
  return (
    <Link to={toLink} className="primary-button">
      {text}
    </Link>
  );
}

export default Primary;
