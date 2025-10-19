import React from "react";
import { useNavigate } from "react-router-dom";
import Course from "../../assets/Application/Course.png";

function Payment() {
  const navigate = useNavigate();
  return (
    <div className="application-payment">
      <h1>Payment Method</h1>
      <form>
        <div className="form-inputs">
          <div className="form-radio-container">
            <div className="form-radio-option">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M20.9395 10.6667C22.138 10.6667 23.2881 11.1159 23.2881 11.1159L22.915 13.3288C21.7977 12.6962 19.2554 12.5466 19.2549 13.7116C19.2549 14.8765 22.8984 15.1261 22.8984 17.8054C22.8984 20.3853 20.2106 21.3336 18.4287 21.3337C16.664 21.3337 15.503 20.7623 15.4814 20.7516L15.8691 18.4382C16.9383 19.3199 20.1777 19.5699 20.1777 18.1716C20.1775 16.7733 16.5664 16.7399 16.5664 14.0778C16.5666 11.2485 19.6437 10.6667 20.9395 10.6667ZM11.875 10.8513L7.7207 21.1559H5L2.73145 12.2028C3.10445 12.4333 3.49159 12.7043 3.875 13.0231C5.23555 14.1544 5.90874 15.495 6.16016 16.0944L6.28125 16.4118V16.4128L6.28027 16.4118L6.5752 17.9382L9.06445 10.8513H11.875ZM13.8721 21.1559H11.2607L12.8936 10.8513H15.5049L13.8721 21.1559ZM29.9092 10.8503L32 21.1559H29.6025L29.2969 19.6247H25.9775L25.4326 21.1559H22.7109L26.6055 11.6188C26.6055 11.6188 26.8413 10.8503 27.8105 10.8503H29.9092ZM26.7295 17.5104H28.873L28.1016 13.654L26.7295 17.5104Z"
                  fill="#2566AF"
                />
              </svg>
              <p>5795 **** **** ****</p>
              <p>John Doe</p> <p>04/25</p>
              <div className="form-radio-button">
                <input type="radio" name="paymentMethod" value="visa" />
              </div>
            </div>
            <div className="form-radio-option">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M20.3313 23.7849H11.6798V8.245H20.3315L20.3313 23.7849Z"
                  fill="#FF5F00"
                />
                <path
                  d="M12.2265 16.0132C12.2265 12.8609 13.7032 10.0529 16.0028 8.24322C14.2621 6.8714 12.1092 6.12686 9.89254 6.13014C4.43204 6.13014 0.00566101 10.5549 0.00566101 16.0132C0.00566101 21.4715 4.43204 25.8962 9.89254 25.8962C12.1093 25.8995 14.2623 25.155 16.003 23.7831C13.7036 21.9738 12.2265 19.1656 12.2265 16.0132Z"
                  fill="#EB001B"
                />
                <path
                  d="M32.0011 16.0132C32.0011 21.4715 27.5748 25.8962 22.1143 25.8962C19.8973 25.8995 17.7441 25.155 16.003 23.7831C18.3032 21.9735 19.78 19.1656 19.78 16.0132C19.78 12.8607 18.3032 10.0529 16.003 8.24322C17.744 6.87144 19.8972 6.12692 22.1141 6.13014C27.5746 6.13014 32.001 10.5549 32.001 16.0132"
                  fill="#F79E1B"
                />
              </svg>
              <p>5795 **** **** ****</p>
              <p>John Doe</p> <p>04/25</p>
              <div className="form-radio-button">
                <input type="radio" name="paymentMethod" value="mastercard" />
              </div>
            </div>
            <div className="form-radio-option">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M28 7H4C3.44772 7 3 7.44772 3 8V24C3 24.5523 3.44772 25 4 25H28C28.5523 25 29 24.5523 29 24V8C29 7.44772 28.5523 7 28 7Z"
                  stroke="#BF9C00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.9993 21H24.9993"
                  stroke="#BF9C00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.9993 21H16.9993"
                  stroke="#BF9C00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.99927 12.1066H28.9993"
                  stroke="#BF9C00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>New Payment Cards</p>
              <div className="form-radio-button">
                <input type="radio" name="paymentMethod" value="credit" />
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
          <div className="form-checkbox-container">
            <input type="checkbox" />
            <label>Remember this card</label>
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
