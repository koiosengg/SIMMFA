import React from "react";
import FAQ from "./FAQ";

function Contact() {
  return (
    <>
      <section className="contact-top">
        <div className="contact-top-heading">
          <h1>
            Get in touch with us.
            <br /> We're here to assist you.
          </h1>
          <div className="contact-top-socials">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
              >
                <path
                  d="M2.69841 14.3069L2.67794 8.04762H0V5.36508H2.67794V3.57672C2.67794 1.16315 4.17001 0 6.3194 0C7.34897 0 8.23384 0.0767832 8.49171 0.111102V2.63342L7.001 2.6341C5.83205 2.6341 5.60571 3.19052 5.60571 4.00704V5.36508H8.92648L8.03383 8.04762H5.60571V14.3069H2.69841Z"
                  fill="#F8F8F8"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clipPath="url(#clip0_403_20301)">
                  <path
                    d="M12.7474 1.49219H5.24912C3.17854 1.49219 1.5 3.16107 1.5 5.21975V12.6749C1.5 14.7335 3.17854 16.4024 5.24912 16.4024H12.7474C14.8179 16.4024 16.4965 14.7335 16.4965 12.6749V5.21975C16.4965 3.16107 14.8179 1.49219 12.7474 1.49219Z"
                    stroke="#F8F8F8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.9974 8.47823C12.0899 9.09868 11.9834 9.73234 11.6928 10.2891C11.4022 10.8458 10.9425 11.2973 10.379 11.5793C9.8155 11.8613 9.1769 11.9595 8.55405 11.8598C7.9312 11.7602 7.35581 11.4678 6.90973 11.0243C6.46364 10.5808 6.16957 10.0087 6.06935 9.3894C5.96912 8.77014 6.06784 8.13521 6.35147 7.57495C6.6351 7.01468 7.0892 6.5576 7.64916 6.26871C8.20913 5.97982 8.84646 5.87385 9.4705 5.96585C10.107 6.0597 10.6964 6.35461 11.1514 6.80702C11.6064 7.25943 11.903 7.84535 11.9974 8.47823Z"
                    stroke="#F8F8F8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <ellipse
                    cx="13.1211"
                    cy="4.84483"
                    rx="1.125"
                    ry="1.11827"
                    fill="#F8F8F8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_403_20301">
                    <rect width="17.9958" height="17.8923" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
              >
                <path
                  d="M14.2824 1.34127C13.7468 1.60952 13.2112 1.69894 12.5863 1.78836C13.2112 1.43069 13.6575 0.89418 13.836 0.178836C13.3005 0.536508 12.6756 0.715344 11.9615 0.89418C11.4259 0.357672 10.6225 0 9.81913 0C8.30163 0 6.96266 1.34127 6.96266 2.95079C6.96266 3.21905 6.96266 3.39788 7.05192 3.57672C4.64177 3.4873 2.41015 2.32487 0.981913 0.536508C0.714118 0.983598 0.624854 1.43069 0.624854 2.05661C0.624854 3.04021 1.16044 3.93439 1.96383 4.4709C1.5175 4.4709 1.07118 4.29207 0.624854 4.11323C0.624854 5.54392 1.60677 6.70635 2.94574 6.97461C2.67794 7.06402 2.41015 7.06402 2.14236 7.06402C1.96383 7.06402 1.7853 7.06402 1.60677 6.97461C1.96383 8.13704 3.035 9.03122 4.37398 9.03122C3.39206 9.83598 2.14236 10.2831 0.714118 10.2831C0.446324 10.2831 0.267794 10.2831 0 10.2831C1.33897 11.0878 2.85647 11.6243 4.46324 11.6243C9.81913 11.6243 12.7649 7.15344 12.7649 3.30847C12.7649 3.21905 12.7649 3.04021 12.7649 2.95079C13.3897 2.5037 13.9253 1.9672 14.2824 1.34127Z"
                  fill="#F8F8F8"
                />
              </svg>
            </a>
          </div>
        </div>
        <form className="contact-form">
          <div className="inputs-container">
            <input
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="name"
              spellCheck="false"
              aria-label="Full Name"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              autoComplete="email"
              spellCheck="false"
              aria-label="Email"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Contact Number"
              inputMode="numeric"
              autoComplete="tel"
              aria-label="Contact Number"
              maxLength="15"
            />

            <input
              type="text"
              name="courseInterestedIn"
              placeholder="Course Interested in"
              spellCheck="false"
              aria-label="Course Interested in"
            />

            <textarea
              name="message"
              placeholder="Message"
              spellCheck="false"
              aria-label="Message"
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="primary-button">
            Leave us a message
          </button>
        </form>
      </section>
      <section className="contact-bottom">
        <h2>
          We are always happy <br className="desktop" />
          to help you
        </h2>
        <div className="contact-bottom-container">
          <div className="contact-bottom-set">
            <div className="contact-bottom-set-heading">
              <h3>Mail us</h3>
              <span></span>
            </div>
            <div className="contact-bottom-set-info">
              <h4>help@info.com</h4>
              <p>
                Monday - Friday <br />6 am to 8 pm
              </p>
            </div>
          </div>
          <div className="contact-bottom-set">
            <div className="contact-bottom-set-heading">
              <h3>Call us</h3>
              <span></span>
            </div>
            <div className="contact-bottom-set-info">
              <h4>+91 98765 43210</h4>
              <p>
                Monday - Friday <br />6 am to 8 pm
              </p>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}

export default Contact;
