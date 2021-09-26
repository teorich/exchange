import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { enUS, fr } from "../../translations";

import { Accordion } from "react-bootstrap";

const Banner = () => {
  const [source, setSource] = useState("Inquiry");
  const [destination, setDestination] = useState("");

  const router = useRouter();

  const { locale } = router;
  const t = locale === "en-US" ? enUS : fr;

  const handleOnSourceSelect = (evt) => {
    setSource(evt.target.value);
  };

  const handleOnDestinationSelect = (evt) => {
    setDestination(evt.target.value);
  };

 

  return (
    <>
      <div className="trade-cryptocurrency-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="trade-cryptocurrency-content">
                <h1>
                  <span>Exchange Bitcoin</span>
                  <span>for fiat money and much more</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis egnostrud exercitation ullamco.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 main-banner-box">
              <Accordion defaultActiveKey="0" className="bg-dark">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Send money</Accordion.Header>
                  <Accordion.Body>
                    <form>
                      <div className="form-group row mb-2">
                        <label
                          htmlFor="inputFrom"
                          className="col-sm-2 col-form-label text-white"
                        >
                          From
                        </label>
                        <div className="col-sm-10">
                          <select
                            onChange={handleOnSourceSelect}
                            value={source}
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option value="Inquiry">
                              Open this select menu
                            </option>
                            <option value="USA">USA</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="United kingdom">
                              United kingdom
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row mt-2">
                        <label
                          htmlFor="inputTo"
                          className="col-sm-2 col-form-label text-white"
                        >
                          To
                        </label>
                        <div className="col-sm-10">
                          <select
                            onChange={handleOnDestinationSelect}
                            value={destination}
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option value="Inquiry">
                              Open this select menu
                            </option>
                            <option value="USA">USA</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="United kingdom">
                              United kingdom
                            </option>
                          </select>
                        </div>
                      </div>

                      <a
                        href={`https://api.whatsapp.com/send?phone=+237683777712*&text=%20*I wish to send money From ${source} to ${destination}*`}
                        target="_blank"
                        className="coinbaseBtn"
                      >
                        <i className="bx bxs-hand-right"></i> Continue
                      </a>
                    </form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
