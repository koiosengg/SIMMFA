import React, { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState();

  const faqData = [
    {
      question: "Can I enroll in multiple courses at once?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      question: "Do I need prior experience to join?",
      answer:
        "Not at all! We offer programs for beginners as well as advanced learners.",
    },
    {
      question: "Are certifications included?",
      answer:
        "Yes! We provide certifications after successful course completion.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-heading">
        <h2>Frequently Asked Questions</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Lobortis id sagittis amet
          ultrices urna netus. Ultrices viverra a.
        </p>
      </div>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-set ${activeIndex === index ? "active-faq" : ""}`}
          >
            <div className="faq-set-heading">
              <p>{item.question}</p>
              <button onClick={() => toggleFAQ(index)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M7 14H14M21 14H14M14 14V7M14 14V21"
                    stroke="#0B0200"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="faq-set-ans">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
