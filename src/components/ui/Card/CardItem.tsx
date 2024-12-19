'use client';

import React from 'react';

interface CardItemProps {
  imageUrl: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

const CardItem: React.FC<CardItemProps> = ({ imageUrl, title, subtitle, description }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-2 flex flex-col items-start text-left" data-aos="zoom-in">
      {/* Görsel */}

      <div className="relative w-full h-50">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />

      </div>
      {/* Başlık ve Açıklama */}
      {title && <h3 className="text-lg font-bold text-gray-800 my-3 leading-5 text-left">{title}</h3>}
      {description && <p className="text-gray-600 text-sm leading-5 mb-3">{description}</p>}


    </div>
  );
};

export default CardItem;
