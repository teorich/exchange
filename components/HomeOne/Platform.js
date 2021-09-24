import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
// const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  nav: true,
  loop: true,
  margin: 30,
  dots: true,
  center: true,
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    "<i class='bx bx-left-arrow-alt'></i>",
    "<i class='bx bx-right-arrow-alt'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
      center: false,
    },
    992: {
      items: 2,
      center: false,
    },
    1200: {
      items: 2,
      center: true,
    },
  },
};

const Platform = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <div className="cryptocurrency-platform-area">
        <div className="container-fluid">
          <div className="section-title">
            <h2>The Most Trusted Cryptocurrency Platform</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Platform;
