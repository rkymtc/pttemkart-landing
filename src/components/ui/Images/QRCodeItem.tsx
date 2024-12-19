'use client';

import React from 'react';

interface QRCodeItemProps {
  qrImage: string;
  storeImage: string;
  altText: string;
}

const QRCodeItem: React.FC<QRCodeItemProps> = ({ qrImage, storeImage, altText }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={qrImage} alt="QR Code" className="w-36 h-42 mb-2" />
    </div>
  );
};

export default QRCodeItem;
