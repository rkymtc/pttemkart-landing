'use client';

import React, { useState } from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import MobileSidebar from '../../navigation/Sidebar';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const closeMenu = () => setIsMenuOpen(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-white">
      <DesktopHeader />
      <MobileHeader
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      
      />
      {isMenuOpen && (
        <MobileSidebar
          closeMenu={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;