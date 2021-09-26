import PageBanner from '../components/Common/PageBanner';

const Contact = () => {
  return (
    <>
      <PageBanner
        pageTitle="Contact Us"
        pageSubTitle="Contact us with your details & ready to start with us."
      />

      <div className="contact-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-12 col-md-12">
              <div className="contact-info">
                <h3>Contact Address:</h3>
                <p>
                  Contact us with your details & ready to start with us. Get In
                  Touch!
                </p>
                <ul className="contact-list">
                  <li>
                    <div className="icon">
                      <i className="bx bx-support"></i>
                    </div>
                    <p>
                      <a href="tel:+237683777712">+237 683 77 77 12</a>
                    </p>
                    <p>
                      <a href="tel:+4693873638">+1 469 387 3638</a>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="bx bx-globe"></i>
                    </div>
                    <p>
                      <a href="mailto:ferraiexchange@consultant.com">ferraiexchange@consultant.com</a>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="bx bx-map"></i>
                    </div>
                    <p>Limbe, Cameroon</p>
                  </li>
                </ul>
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
                    <a href="#" target="_blank" className="linkedin">
                      <i className="bx bxl-linkedin"></i>
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
            <div className="col-xl-8 col-lg-12 col-md-12">
              <div className="maps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15026.476498445918!2d9.18503392010968!3d4.020545500999431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10614aaa4805faaf%3A0xae7f25a896924e2f!2sLimbe!5e0!3m2!1sen!2scm!4v1630589628934!5m2!1sen!2scm"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
