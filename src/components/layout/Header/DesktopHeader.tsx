'use client';

import React from 'react';
import Link from 'next/link';

const DesktopHeader = () => {

    return (
      <div className="hidden md:flex justify-between items-center py-6 px-8 w-full bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <img src="/assets/gifs/pttemlogo.gif" alt="Logo" className="h-14" />
        </div>

        <div className="flex items-center space-x-6">
          <Link href="#about" className="text-gray-700 hover:text-yellow-500 font-semibold">
            PTTEMKART NEDİR?
          </Link>
          <Link href="#online" className="text-gray-700 hover:text-yellow-500 font-semibold">
            ONLİNE İŞLEMLER
          </Link>
          <Link href="#locations" className="text-gray-700 hover:text-yellow-500 font-semibold">
            NERELERDE GEÇERLİDİR?
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-yellow-500 font-semibold">
            İLETİŞİM
          </Link>
        </div>
      </div>
    );
  };

export default DesktopHeader;
