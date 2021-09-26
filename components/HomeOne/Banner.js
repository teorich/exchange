import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { useRouter } from "next/router";

import { enUS, fr } from "../../translations";

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
      <div className="main-banner-area">
        <video autoPlay muted loop className="video">
          <source src="/images/bwvid3.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className="main-banner-box">
            <Accordion defaultActiveKey="0" className="bg-dark">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Send money</Accordion.Header>
                <Accordion.Body>
                  <form>
                    <div className="form-group row mb-4">
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
                          <option value="Inquiry">Open this select menu</option>
                          <option value="USA">USA</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="United kingdom">United kingdom</option>
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
                          <option value="Inquiry">Open this select menu</option>
                          <option value="USA">USA</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="United kingdom">United kingdom</option>
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
            {/* <div className="currency-selection">
              <label>YOU PAY</label>
              <input
                type="text"
                value={cryptoQuantity}
                onChange={(e) => setcryptoQuantity(e.target.value)}
              />
              <div
                className={toggleState ? 'dropdown show' : 'dropdown'}
                onClick={() => toggleTabOne()}
              >
                <button
                  className="dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={image} alt="image" />
                  {name}

                  <span>
                    {toggleState ? (
                      <i className="bx bx-chevron-up"></i>
                    ) : (
                      <i className="bx bx-chevron-down"></i>
                    )}
                  </span>
                </button>
                <ul
                  className={
                    toggleState ? 'dropdown-menu show' : 'dropdown-menu'
                  }
                >
                  {newData.length > 0 &&
                    newData.map((data, index) => (
                      <li
                        key={index}
                        onClick={(e) => toggleSelected(data, index)}
                        value="watch"
                        className={
                          clicked === index ? 'option selected focus' : 'option'
                        }
                      >
                        <div className="coin-wrapper">
                          <img src={data.image} alt="image" />
                          <span className="coin-name"> {data.name} </span>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <ul className="features-list">
              <li>
                <div className="d-flex align-items-center">
                  <span className="first-span">
                    <i className="fas fa-minus"></i>
                    2.00 USD
                  </span>
                  <span className="second-span">TOTAL CARD FEES</span>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <span className="first-span">
                    <i className="fas fa-divide"></i>
                    47202
                  </span>
                  <span className="second-span">CONVERSION RATE</span>
                </div>
              </li>
            </ul>
            <div className="currency-selection">
              <label>YOU RECEIVE</label>
              <input
                type="text"
                value={conversionValue * cryptoQuantity}
                onChange={(e) => e}
              />
              <div className="dropdown">
                <button
                  className="dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={imageTwo} alt="image" /> {nameTwo}
                </button>
              </div>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=+237683777712*&text=%20*YOURMESSAGE*"
              target="_blank"
              className="coinbaseBtn"
            >
              <i className="bx bxs-hand-right"></i> Buy With Visa
            </a> */}
          </div>
          <div className="row align-items-center m-0">
            <div className="col-xl-5 col-lg-5 col-md-12 p-0">
              <div className="main-banner-content">
                <h1 className="text-white">{t.send_receive_money}</h1>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 p-0">
              <div className="main-banner-image">
                <img src="/images/banner/banner-img1.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="shape1">
          <img src="/images/shape/expbw.png" alt="image" width="146" height="124"/>
        </div>
        <div className="shape2">
          <img src="/images/shape/shape2.png" alt="image" />
        </div>
        <div className="shape3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape5">
          <img src="/images/shape/shape5.png" alt="image" />
        </div>
        <div className="shape9">
          <img src="/images/shape/bw3.png" alt="image" />
        </div> */}
      </div>
    </>
  );
};

export default Banner;
