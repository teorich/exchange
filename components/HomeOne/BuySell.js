import React from 'react';

const BuySell = ({ pt70 }) => {
  return (
    <>
      <div className={`buy-sell-cryptocurrency-area bg-image ${pt70}`}>
        <div className="container">
          <div className="section-title">
            <h2>How to Buy and Sell Cryptocurrency</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className=" col-lg-12 col-md-12">
              <div className="buy-sell-cryptocurrency-content">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <div className="single-buy-sell-box">
                      <div className="icon">
                        <img src="/images/icon/icon12.png" alt="image" />
                      </div>
                      <h3>Bank Transfers</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <div className="single-buy-sell-box">
                      <div className="icon">
                        <img src="/images/icon/icon13.png" alt="image" />
                      </div>
                      <h3>Online Wallets</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <div className="single-buy-sell-box">
                      <div className="icon">
                        <img src="/images/icon/icon14.png" alt="image" />
                      </div>
                      <h3>Cash Payment</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <div className="single-buy-sell-box">
                      <div className="icon">
                        <img src="/images/icon/icon15.png" alt="image" />
                      </div>
                      <h3>Debit/Credit Cards</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuySell;
