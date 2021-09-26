import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <ul className="social-links">
                  <li>
                    <a href="#" target="_blank" className="facebook">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" className="twitter">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" className="instagram">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>Resources</h3>
                <ul className="quick-links">
                  <li>
                    <Link href="/trade">Take action</Link>
                  </li>
                  <li>
                    <Link href="/faq">Fraud awareness</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Contact Info</h3>
                <ul className="footer-contact-info">
                  <li>Address: Limbe, Cameroon</li>
                  <li>
                    Email: <a href="mailto:ferraiexchange@consultant.com">ferraiexchange@consultant.com</a>
                  </li>
                  <li>
                    Phone: <a href="tel:+237683777712">+237 683 77 77 12</a>
                  </li>
                  <li>
                    Phone-2: <a href="tel:+4693873638">+1 469 387 3638</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <p>
              Copyright {new Date().getFullYear()} <strong>FerrariExchange</strong>. All Rights
              Reserved by{' '}
              <Link href="https://ferrariexchange.org/" target="_blank">
                FerrariExchange
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
