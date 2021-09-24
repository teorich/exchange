import React, { useState, useEffect } from 'react';

const GoTop = () => {
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', toggleVisibility);

    return () => document.removeEventListener('scroll', toggleVisibility)
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setisVisible(true);
    } else {
      setisVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <div className="go-top bg-warning active" onClick={() => scrollToTop()}>
          <i className="bx bx-chevron-up"></i>
        </div>
      )}
    </>
  );
};

export default GoTop;
