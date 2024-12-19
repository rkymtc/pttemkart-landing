'use client';

import React, { useState } from 'react';

const MobileHeader: React.FC<{
    isMenuOpen: boolean;
    toggleMenu: () => void;
 
  }> = ({ isMenuOpen, toggleMenu}) => {
    return (
      <div className="md:hidden flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-4">
        <img src="/assets/gifs/pttemlogo.gif" alt="Logo" className="h-6" />
        </div>
        <button onClick={toggleMenu} className="text-white text-2xl">
          <img
            src={`/assets/icons/${isMenuOpen ? 'menu' : 'menu'}.svg`}
            alt="Menu"
            className="w-6 h-6"
          />
        </button>
      </div>
    );
  };
  export default MobileHeader