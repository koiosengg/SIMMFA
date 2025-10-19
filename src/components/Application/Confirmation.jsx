import React from "react";
import { useNavigate } from "react-router-dom";

function Confirmation() {
  const navigate = useNavigate();

  return (
    <div className="application-confirmation">
      <p>
        Your payment has been received <br />
        Your admission is now confirmed.
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="240"
        height="240"
        viewBox="0 0 240 240"
        fill="none"
      >
        <path
          d="M120 20C65 20 20 65 20 120C20 175 65 220 120 220C175 220 220 175 220 120C220 65 175 20 120 20ZM162 103L114 151C110 155 104 155 100 151L78 129C74 125 74 119 78 115C82 111 88 111 92 115L107 130L148 89C152 85 158 85 162 89C166 93 166 99 162 103Z"
          fill="#008000"
        />
      </svg>
      <h1>You’re officially enrolled !!</h1>
      <button onClick={() => navigate("/")}>
        Go Back to Homepage
      </button>
    </div>
  );
}

export default Confirmation;
