import React from "react";
import { useNavigate } from "react-router-dom";

function Details() {
  const navigate = useNavigate();

  return (
    <div className="application-details">
      <h1>Application Details</h1>
      <form>
        <div className="form-container">
          <div className="input-container">
            <label htmlFor="applicantName">Applicant Name</label>
            <input
              type="text"
              id="applicantName"
              name="applicantName"
              placeholder="Full name"
            />
          </div>
          <div className="input-container">
            <label htmlFor="applicantEmail">Applicant Email</label>
            <input
              type="email"
              id="applicantEmail"
              name="applicantEmail"
              placeholder="Email Address"
            />
          </div>
          <div className="input-container">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              placeholder="Contact number"
            />
          </div>
          <div className="input-container">
            <label htmlFor="courseType">Course Type</label>
            <select id="courseType" name="courseType" defaultValue="">
              <option value="" disabled>
                Course Type
              </option>
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="fullstack">Full Stack Development</option>
              <option value="uiux">UI/UX Design</option>
              <option value="mobile">Mobile App Development</option>
            </select>
          </div>
        </div>
        <button type="button" onClick={() => navigate("payment")}>
          Proceed to payment
        </button>
      </form>
    </div>
  );
}

export default Details;
