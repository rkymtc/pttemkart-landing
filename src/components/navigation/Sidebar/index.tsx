'use client';

import React from 'react';
import Link from 'next/link';

const MobileSidebar: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => {

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex"
      onClick={closeMenu}
    >
      <div
        className="w-3/4 bg-black h-full px-6 py-4 space-y-6 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <Link href="#about" className="text-white hover:text-yellow-500 font-semibold">
          PTTEMKART NEDİR?
        </Link>
        <Link href="#online" className="text-white hover:text-yellow-500 font-semibold">
          ONLİNE İŞLEMLER
        </Link>
        <Link href="#locations" className="text-white hover:text-yellow-500 font-semibold">
          NERELERDE GEÇERLİDİR?
        </Link>
        <Link href="#contact" className="text-white hover:text-yellow-500 font-semibold">
          İLETİŞİM
        </Link>
      </div>
    </div>
  );
};

export default MobileSidebar;
