import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from '../../utils/ActiveLink';
import {enUS, fr} from '../../translations'

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const [currentLocale, setCurrentLocale] = useState('fr')

    
const router = useRouter();

const { locale, asPath } = router;
const t = locale === 'en-US' ? enUS: fr

useEffect(()=> {
setCurrentLocale(locale)
}, [])

const handleLanguageToggle = (evt) => {
  switch (evt.target.value) {
    case 'en-US':
      setCurrentLocale('en-US')
      router.push(asPath, asPath, {locale: 'en-US', scroll: false})
      break;
      case 'fr':
        setCurrentLocale('fr')
        router.push(asPath, asPath, {locale: 'fr', scroll: false})
      break;
  
    default:
      break;
  }
}

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  useEffect(() => {
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="raimo-responsive-nav">
          <div className="container">
            <div className="raimo-responsive-menu">
              <div onClick={() => toggleMenu()} className="hamburger-menu">
                {showMenu ? (
                  <i className="bx bx-x"></i>
                ) : (
                  <i className="bx bx-menu"></i>
                )}
              </div>
              <div className="logo">
                <Link href="/">
                  <a>
                    <img src="/images/logoF.png" alt="logo" />
                  </a>
                </Link>
              </div>

              <div className="responsive-others-option">
                <div className="d-flex align-items-center">
                  <div className="option-item">
                    <select className="form-select" value={currentLocale} onChange={handleLanguageToggle}>
                      <option value="en-US">English</option>
                      <option value="fr">French</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          className={
            showMenu
              ? 'show navbar navbar-expand-md navbar-light'
              : 'navbar navbar-expand-md navbar-light hide-menu '
          }
        >
          <div className="container">
            <Link href="/">
              <a className="navbar-brand">
                <img src="/images/logoF.png" alt="ferrariexchange" /> <br />
              </a>
            </Link>
            <div className="collapse navbar-collapse mean-menu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" activeClassName="active">
                    <a className=" nav-link">{t.home}</a>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link href="/about" activeClassName="active">
                    <a className="nav-link">{t.about_us}</a>
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link href="/faq" activeClassName="active">
                    <a className="nav-link">{t.fraud_awareness}</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" activeClassName="active">
                    <a className="nav-link">{t.contact_us}</a>
                  </Link>
                </li>
              </ul>
              <div className="others-option">
                <div className="d-flex align-items-center">
                  <div className="option-item">
                    <Link href="/trade" activeClassName="active">
                      <a className="default-btn bg-primary">
                        <i className="bx bx-transfer"></i>{t.take_action}
                      </a>
                    </Link>
                  </div>
                  <div className="option-item">
                    <select className="form-select" value={currentLocale} onChange={handleLanguageToggle}>
                      <option value="en-US">English</option>
                      <option value="fr">French</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
