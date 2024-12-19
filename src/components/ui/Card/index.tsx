'use client';

import { CardSectionProps } from '@/types/types';
import React from 'react';



const CardSection: React.FC<CardSectionProps> = ({ title, description, points, imageUrl, id }) => {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto p-6 space-y-6 md:space-y-0 md:space-x-8" >
      {/* Görsel */}
      <div className="relative flex-shrink-0 w-full md:w-1/2" data-aos="fade-right">
        <img src={imageUrl} alt="Visual" className="w-full h-auto object-cover" />
      </div>

      {/* Metin İçeriği */}
      <div className="w-full md:w-1/2 space-y-4 text-gray-700" data-aos="fade-left">
        <h2 className="text-3xl font-bold text-gray-900">{ title}</h2>
        <p className="text-base">{description}</p>
        
        <div className="space-y-4">
          {points.map((point, index) => ( 
            <div key={index} className="flex items-start space-x-4">
              {/* Icon */}
              <div className="flex items-center justify-center bg-yellow-400 rounded-full h-10 w-10">
                <span className="text-black text-lg">{point.icon}</span>
              </div>
              {/* Text */}
              <p className="text-gray-600">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
