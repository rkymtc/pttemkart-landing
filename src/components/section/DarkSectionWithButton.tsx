'use client';

import { DarkSectionProps } from '@/types/types';
import React from 'react';


const DarkSectionWithButton: React.FC<DarkSectionProps> = ({
  text,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="bg-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Metin Alanı */}
        <p className="text-white text-lg font-medium tracking-wider">
          {text}
        </p>

        {/* Buton */}
        <button
          onClick={onButtonClick}
          className="text-white border border-yellow-400 rounded-md px-6 py-2 text-sm font-semibold hover:bg-yellow-400 hover:text-black transition duration-300"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default DarkSectionWithButton;
