import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';

const options = {
  loop: true,
  margin: 0,
  nav: false,
  mouseDrag: false,
  dots: false,
  autoplay: true,

  autoplaySpeed: 2000,
  autoplayTimeout: 3100,
  autoplayHoverPause: false,

  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 3,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
  },
};

const TopHeader = () => {
  const [newData, setnewData] = useState([]);
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  return (
    <>
      <div className="value-trade-area">
        <div className="container"></div>
      </div>
    </>
  );
};

export default TopHeader;
