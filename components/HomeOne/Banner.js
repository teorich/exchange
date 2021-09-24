import { useState} from 'react';
import { Accordion } from 'react-bootstrap';
import { useRouter } from 'next/router';


import {enUS, fr} from '../../translations'


const Banner = () => {

  const [serviceSelected, setServiceSelected] = useState('Inquiry')

  const router = useRouter();

const { locale} = router;
const t = locale === 'en-US' ? enUS: fr

  const handleOnServiceSelect = (evt) => {
    setServiceSelected(evt.target.value)
  }



  return (
    <>
      <div className="main-banner-area">
        <div className="container">
          <div className="main-banner-box">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Select services</Accordion.Header>
                <Accordion.Body>
                  <form>
                    <div className="mb-3">
                      <select
                      onChange={handleOnServiceSelect}
                      value={serviceSelected}
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value='Inquiry'>Open this select menu</option>
                        <option value='Exchange bitcoin for fiat' >Exchange bitcoin for fiat</option>
                        <option value='Send money'>Send money</option>
                        <option value='Buy bitcoin'>Buy bitcoin</option>
                      </select>
                    </div>
                    <a
                      href={`https://api.whatsapp.com/send?phone=+237683777712*&text=%20*${serviceSelected}*`}
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
                <h1>{t.send_receive_money}</h1>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 p-0">
              <div className="main-banner-image">
                <img src="/images/banner/banner-img1.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
        <div className="shape1">
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
        </div>
      </div>
    </>
  );
};

export default Banner;
