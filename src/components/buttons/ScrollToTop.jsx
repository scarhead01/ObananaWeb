import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollToTop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unblock = navigate();

    window.scrollTo(0, 0);

    return () => {
      unblock();
    };
  }, [navigate]);

  return null;
};

export default ScrollToTop;
