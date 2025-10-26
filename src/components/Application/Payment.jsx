import React from "react";
import { useNavigate } from "react-router-dom";
import Course from "../../assets/Application/Course.png";
import GooglePay from "../../assets/Application/Google Pay.svg";
import Paytm from "../../assets/Application/Paytm.svg";
import PhonePe from "../../assets/Application/PhonePe.png";
function Payment() {
  const navigate = useNavigate();
  return (
    <div className="application-payment">
      <h1>Payment Method</h1>
      <form>
        <div className="form-inputs">
          <div className="form-radio-container">
            <div className="form-radio-option">
              <input type="radio" name="paymentMethod" value="credit" />
              <div className="form-radio-option-container">
                <h2>UPI</h2>
                <div className="form-upi-container">
                  <p>Choose App</p>
                  <div className="form-upi-options">
                    <img src={GooglePay} alt="Google Pay Icon" />
                    <img src={Paytm} alt="Paytm Icon" />
                    <img src={PhonePe} alt="PhonePe Icon" />
                  </div>
                </div>
                <div className="form-upi-line">
                  <hr />
                  <span>or</span>
                  <hr />
                </div>
                <div className="form-upi-container">
                  <p>Please enter your UPI ID</p>
                  <div className="form-upi-input">
                    <input name="upiId" placeholder="Enter UPI ID" />
                    <button type="button" className="">
                      Verify
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-radio-option">
              <input type="radio" name="paymentMethod" value="credit" />
              <div className="form-radio-option-container">
                <h2>Debit / Credit Card</h2>
              </div>
            </div>
          </div>
          <div className="form-container">
            <div className="input-container">
              <label htmlFor="cardName">Name</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                placeholder="Name on card"
                autoComplete="cc-name"
                minLength="2"
                maxLength="50"
              />
            </div>
            <div className="input-container">
              <label htmlFor="cardNumber">Card Number</label>
              <div className="input-with-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="input-icon"
                >
                  <path
                    d="M17.5 4.375H2.5C2.15482 4.375 1.875 4.65482 1.875 5V15C1.875 15.3452 2.15482 15.625 2.5 15.625H17.5C17.8452 15.625 18.125 15.3452 18.125 15V5C18.125 4.65482 17.8452 4.375 17.5 4.375Z"
                    stroke="#BF9C00"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.1245 13.125H15.6245"
                    stroke="#BF9C00"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.37454 13.125H10.6245"
                    stroke="#BF9C00"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.87454 7.56653H18.1245"
                    stroke="#BF9C00"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="XXXX XXXX XXXX XXXX"
                  inputMode="numeric"
                  pattern="[0-9\s]{13,19}"
                  autoComplete="cc-number"
                  maxLength="19"
                />
              </div>
            </div>
            <div className="form-input-seperator">
              <div className="input-container">
                <label htmlFor="expiryDate">MM / YY</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM / YY"
                  inputMode="numeric"
                  pattern="(0[1-9]|1[0-2])\/\d{2}"
                  autoComplete="cc-exp"
                />
              </div>

              <div className="input-container">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="password"
                  id="cvv"
                  name="cvv"
                  placeholder="Security Code"
                  inputMode="numeric"
                  pattern="\d{3,4}"
                  autoComplete="cc-csc"
                  maxLength="4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-summary">
          <div className="form-summary-course">
            <h2>Courses</h2>
            <div className="form-summary-course-details">
              <img src={Course} alt="Course Image" />
              <div className="form-summary-course-details-text">
                <div className="form-summary-course-details-heading">
                  <p>
                    <span>Course by:</span> Artists name
                  </p>
                  <h3>Course Title</h3>
                </div>
                <p>₹ 00000.00</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="form-summary-course">
            <h2>Order Summery</h2>
            <div className="form-summary-price">
              <div className="form-summary-price-set">
                <p>Subtotal</p>
                <p>₹ 1,25,000.00</p>
              </div>
              <div className="form-summary-price-set">
                <p>Discount</p>
                <p>8%</p>
              </div>
              <hr />
              <div className="form-summary-price-set">
                <span>Total:</span>
                <h4>₹1,23,450.00</h4>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => navigate("/application/confirmation")}
          >
            Complete Payment
          </button>
        </div>
      </form>
    </div>
  );
}

export default Payment;
