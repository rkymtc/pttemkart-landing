'use client';

import React from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
  isActive: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isActive, onToggle }) => {
  return (
    <div>
      {/* Başlık Alanı */}
      <div
        className={`flex justify-between items-center p-4 rounded-md cursor-pointer transition-all duration-300 ${
          isActive ? 'bg-yellow-400 text-white' : 'bg-gray-100'
        }`}
        onClick={onToggle}
      >
        <h3 className={`font-semibold ${isActive ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
        <span
          className={`transition-transform transform ${
            isActive ? 'rotate-180 text-white' : 'text-gray-800'
          }`}
        >
          {isActive ? '-' : '+'}
        </span>
      </div>
      {/* İçerik Alanı */}
      {isActive && (
        <div className="p-4 bg-gray-50 text-gray-700 rounded-b-md">{content}</div>
      )}
    </div>
  );
};

export default AccordionItem;
