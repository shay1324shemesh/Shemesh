import React, { useState } from 'react';
import AccessibilityMenu from './AccessibilityMenu';

const AccessibilityWidget = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="accessibility-widget" onClick={toggleMenu}>
      <div className="accessibility-icon">
      </div>
      {isMenuOpen && <AccessibilityMenu />}
    </div>
  );
};

export default AccessibilityWidget;

        {/* <span className="material-icons">accessibility_new</span> */}

