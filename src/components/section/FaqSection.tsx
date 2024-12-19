import React from 'react'
import Accordion from '../ui/Accordion/Accordion'
import { accordionItems } from '@/utils/data/cardData'
import { FaqSectionProps } from '@/types/types'

const FaqSection: React.FC<FaqSectionProps> = ({

title,description}) => {
  return (
    <section className="py-8">
  {/* Başlık */}


  {title && (
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          {title}
        </h2>
      )}

      {/* Açıklama */}
      {description && (
        <p className="text-center mb-8 text-gray-600">
          {description.map((part, index) =>
            part.highlight ? (
              <span key={index} className="text-yellow-500 font-semibold">
                {part.text}
              </span>
            ) : (
              <span key={index}>{part.text}</span>
            )
          )}
        </p>
      )}
  {/* Accordion ve Görseller */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
    {/* Sol Kısım: Accordion */}
    <div data-aos="fade-right">
      <Accordion items={accordionItems} />
    </div>

    {/* Sağ Kısım: Üç Telefon Görseli */}
    <div className="flex justify-center items-center space-x-4">
      <img data-aos="zoom-in"
        src="/assets/images/iphone2.png"
        alt="Mobile Mockup"
        className="w-1/3 max-w-[120px] md:max-w-[180px] drop-shadow-md"
      />
      <img data-aos="zoom-in"
        src="/assets/images/iphone2.png"
        alt="Mobile Mockup"
        className="w-1/3 max-w-[120px] md:max-w-[180px] drop-shadow-md"
      />
      <img data-aos="zoom-in"
        src="/assets/images/iphone2.png"
        alt="Mobile Mockup"
        className="w-1/3 max-w-[120px] md:max-w-[180px] drop-shadow-md"
      />
    </div>
  </div>
</section>
  )
}

export default FaqSection