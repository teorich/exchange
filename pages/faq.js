import React, { useState } from "react";
import { useRouter } from "next/router";
import PageBanner from "../components/Common/PageBanner";
import { enUS, fr } from "../translations";

const Faq = ({ data }) => {
  const [clicked, setClicked] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const router = useRouter();

  const { locale } = router;
  const t = locale === "en-US" ? enUS : fr;

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <PageBanner
        pageTitle={t.fraud_awareness}
        pageSubTitle={t.how_help_you_fraud}
      />

      <div className="faq-area ptb-100">
        <div className="container">
          <div className="faq-accordion">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={toggleState === 1 ? "nav-link active" : "nav-link"}
                  onClick={() => toggleTab(1)}
                  id="novis-direct-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#novis-direct"
                  type="button"
                  role="tab"
                  aria-controls="novis-direct"
                  aria-selected="true"
                >
                  <i className="bx bx-lock-open"></i>
                  {t.how_to_protect}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={toggleState === 3 ? "nav-link active" : "nav-link"}
                  onClick={() => toggleTab(3)}
                  id="orders-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#orders"
                  type="button"
                  role="tab"
                  aria-controls="orders"
                  aria-selected="false"
                >
                  <i className="bx bx-check-shield"></i>
                  {t.fraud_types}
                </button>
              </li>
            </ul>
            <div className="tab-content " id="myTabContent">
              <div
                className={
                  toggleState === 1
                    ? "active show tab-pane fade "
                    : "tab-pane fade"
                }
                id="novis-direct"
                role="tabpanel"
              >
                <div className="text-lg-start col-6 offset-2" id="accordionFaq">
                  <div className="text-lg-start">
                    <h2>Fraud Awareness</h2>

                    <h5>Protect Yourself from Fraud</h5>
                    <p>
                      Only use FerrariExchange to send money to friends and
                      family. Never send money to someone you have not met in
                      person.
                    </p>
                    <p>
                      Scammers sometimes encourage people to transfer money. Do
                      not transfer money to anyone who asks you to send them
                      money:
                    </p>
                  </div>
                  <div className="text-lg-start ">
                    <li>For an emergency situation you haven’t confirmed.</li>
                    <li>For an online purchase.</li>
                    <li>For anti‐virus protection.</li>
                    <li>For a deposit or payment on a rental property.</li>
                    <li>To claim lottery or prize winnings.</li>
                    <li>To pay taxes.</li>
                    <li>For a mystery shopping assignment.</li>
                    <li>For a job opportunity.</li>
                    <li>For a credit card or loan fee.</li>
                    <li>To resolve an immigration matter.</li>
                  </div>
                  <div className="mt-4">
                    <h6>
                      If you transfer money, the person you’re sending it to
                      gets the money quickly. After the money is paid, Ferrari
                      Exchange may not be able to give you a refund, even if you
                      are the victim of fraud, except under limited
                      circumstances.
                    </h6>
                    <p>
                      If you believe that you are the victim of fraud, call the
                      Ferrari Exchange Fraud Hotline at{" "}
                      <strong>+237 683 77 77 12</strong>.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  toggleState === 3
                    ? "active show tab-pane fade"
                    : "tab-pane fade"
                }
                id="orders"
                role="tabpanel"
              >
                <div className="text-lg-start col-6 offset-2" id="accordionFaq">
                  <div className="text-lg-start">
                    <h2>Fraud Types</h2>

                    <h5>
                      Fraudsters Gain Your Trust, and then Steal Your Money.
                    </h5>
                    <p>
                      They use any means to contact victims—telephone, snail
                      mail, email, and the Internet. They gain your trust and
                      when they have you hooked, they ask you for money; then
                      they take it and run. The scenarios they use to lure you
                      in change, constantly. But you can protect yourself and
                      your friends and family by arming yourself with knowledge
                      of the most common types of fraud.
                    </p>
                  </div>
                </div>
                <div className="accordion text-lg-start col-6 offset-2" id="accordionFaq3">
                  {data.slice(0, 10).map((data, index) => (
                    <div
                      key={index}
                      className="accordion-item"
                      onClick={() => toggle(index)}
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse13"
                        aria-expanded="true"
                        aria-controls="collapse13"
                      >
                        {data.question}
                        <span>
                          {clicked === index ? (
                            <i className="bx bx-chevron-up"></i>
                          ) : (
                            <i className="bx bx-chevron-down"></i>
                          )}
                        </span>
                      </button>
                      <div
                        id="collapse13"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionFaq3"
                      >
                        {clicked === index ? (
                          <div className="accordion-body">
                            <p>{data.answer}</p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Faq.defaultProps = {
  data: [
    {
      question: "Advanced Fees / Prepayment",
      answer:
        "You are asked to send money to pay a fee up front for a product or service ",
    },
    {
      question: "Mystery Shopping",
      answer:
        "You are contacted for an employment opportunity to send money using a money transfer service and evaluate the service",
    },
    {
      question: "Overpayment",
      answer:
        "You receive a check for an amount higher than the agreed-upon price and are asked to send back the excess funds using money transfer, but the check is fake",
    },
    {
      question: "Employment",
      answer:
        "You are asked to send money for a job opportunity you have accepted",
    },
    {
      question: "Lottery / Prize",
      answer:
        "You receive notification you have won a lottery/sweepstakes and need to send money to claim the prize",
    },
    {
      question: "Rental Property",
      answer:
        "You are interested in a rental property and asked to send money for reasons that seem legitimate, but the property is not real",
    },
    {
      question: "Emergency / Grandparents",
      answer:
        "You are asked to send money to a friend or family member for an emergency situation",
    },

    {
      question: "Internet Purchase",
      answer:
        "You are asked to send money to pay for a product, auction item or service advertised online",
    },

    {
      question: "Relationship",
      answer:
        "You meet someone online, develop a relationship with them, then you are asked to send money to them",
    },

    {
      question: "Fake Check",
      answer:
        "You receive a check and are asked to send a portion of the money back for what seems to be a legitimate reason, but the check is fake",
    },
  ],
};

export default Faq;
