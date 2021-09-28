import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { enUS, fr } from "../../translations";

import { Accordion } from "react-bootstrap";

const Banner = () => {
  const [source, setSource] = useState("Inquiry");
  const [destination, setDestination] = useState("");
  const [otherSource, setOtherSource] = useState();
  const [otherDestination, setOrtherDestination] = useState();

  const router = useRouter();

  const { locale } = router;
  const t = locale === "en-US" ? enUS : fr;

  const handleOnSourceSelect = (evt) => {
    setSource(evt.target.value);
  };

  const handleOnDestinationSelect = (evt) => {
    setDestination(evt.target.value);
  };

  const handleOnOtherSourceSelect = (evt) => {
    setOtherSource(evt.target.value);
  };

  const handleOnOtherDestinationSelect = (evt) => {
    setOrtherDestination(evt.target.value);
  };

 

  return (
    <>
      <div className="trade-cryptocurrency-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 ptb-100">
              <div className="trade-cryptocurrency-content ptb-70">
                <h1>
                  {t.send_receive_money}
                </h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 main-banner-box">
              <Accordion defaultActiveKey="0" className="bg-dark">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{t.send_money}</Accordion.Header>
                  <Accordion.Body>
                    <form>
                      <div className="form-group row mb-2">
                        <label
                          htmlFor="inputFrom"
                          className="col-sm-2 col-form-label text-white"
                        >
                          {t.from}
                        </label>
                        <div className="col-sm-10">
                          <select
                            onChange={handleOnSourceSelect}
                            value={source}
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option value="Inquiry">
                              {t.select_option}
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
                         {t.to}
                        </label>
                        <div className="col-sm-10">
                          <select
                            onChange={handleOnDestinationSelect}
                            value={destination}
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option value="Inquiry">
                              {t.select_option}
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
                        className="coinbaseBtn bg-primary"
                      >
                        <i className="bx bxs-hand-right"></i> {t.continue}
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
