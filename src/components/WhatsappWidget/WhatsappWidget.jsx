import whatsappIcon from '../WhatsappWidget/whatsappIcon.png';
import React, { useEffect, useState } from 'react';

const WhatsappWidget = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleClick = () => {
    window.open('https://wa.me/972508669944', '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="whatsapp-button"
      style={{
        position: 'fixed',
        bottom: `50px`,
        right: '50px',
        zIndex: '999',
        textAlign: 'right',
      }}
    >
      <button onClick={handleClick}
      style={{background:'none',border:'none'}}
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp Logo"
          style={{ width: '75px', height: '75px'}} // Adjust the dimensions as desired
        />
      </button>
    </div>
  );
};

export default WhatsappWidget;
