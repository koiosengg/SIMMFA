import React from "react";
import { useNavigate } from "react-router-dom";

function Failed() {
  const navigate = useNavigate();

  return (
    <div className="application-confirmation">
      <p>
        Your payment could not be processed.
        <br />
        Please check your payment details or try again.
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="201"
        viewBox="0 0 200 201"
        fill="none"
      >
        <path
          d="M171.25 29.25C132.25 -9.75 68.25 -9.75 29.25 29.25C-9.75 68.25 -9.75 132.25 29.25 171.25C68.25 210.25 131.25 210.25 170.25 171.25C209.25 132.25 210.25 68.25 171.25 29.25ZM128.25 142.25L100.25 114.25L72.25 142.25L58.25 128.25L86.25 100.25L58.25 72.25L72.25 58.25L100.25 86.25L128.25 58.25L142.25 72.25L114.25 100.25L142.25 128.25L128.25 142.25Z"
          fill="#FF0000"
        />
      </svg>
      <h1>Oops! Something went wrong</h1>
      <div className="application-confirmation-buttons">
        <button className="contact-us" onClick={() => navigate("/contact")}>Contact Us</button>
        <button >Try Again</button>
      </div>
    </div>
  );
}

export default Failed;
