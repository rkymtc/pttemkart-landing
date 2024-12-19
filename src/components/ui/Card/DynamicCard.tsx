'use client';

import React from 'react';

interface DynamicCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

const DynamicCard: React.FC<DynamicCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center flex flex-col items-center" data-aos="fade-down">
      {/* İkon */}
      {icon && (
        <div className="text-yellow-400 text-4xl mb-4">
          {icon}
        </div>
      )}
      {/* Başlık */}
      <h3 className="text-gray-800 font-bold text-lg mb-2">{title}</h3>
      {/* Açıklama */}
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default DynamicCard;
