import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


import {enUS, fr} from '../../translations'

import { Accordion } from 'react-bootstrap';

const Banner = () => {

  const [serviceSelected, setServiceSelected] = useState('Inquiry')

  const router = useRouter();

const { locale} = router;
const t = locale === 'en-US' ? enUS: fr

  const handleOnServiceSelect = (evt) => {
    setServiceSelected(evt.target.value)
  }

  const [name, setName] = useState('Bitcoin');
  const [nameTwo, setNameTwo] = useState('USD');

  //api data
  const [newData, setnewData] = useState([]);

  //converter hook
  const [conversionValue, setConversionValue] = useState('');
  const [coinSymbol, setcoinSymbol] = useState('BTC');
  const [cryptoQuantity, setcryptoQuantity] = useState(1);

  const [image, setImage] = useState(
    '/images/cryptocurrency/cryptocurrency2.png'
  );
  const [imageTwo, setImageTwo] = useState(
    '/images/cryptocurrency/cryptocurrency1.png'
  );

  const [clicked, setClicked] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [toggleStateTwo, setToggleStateTwo] = useState(false);

  const toggleTabOne = () => {
    setToggleState(!toggleState);
  };

  const toggleSelected = (cat, index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
    setName(cat.name);
    setImage(cat.image);
    setcoinSymbol(cat.symbol.toUpperCase());
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
