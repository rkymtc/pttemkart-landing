'use client';

import React from 'react';

interface CustomVideoPlayerProps {
  videoUrl: string;
  poster?: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ videoUrl, poster }) => {
  return (
    <div className="relative w-full  mx-auto">
      <video
        src={videoUrl}
        controls
       
        className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
      />
      {/* Çerçeve Efekti */}
      <div className="absolute top-0 left-0 w-full h-full border-2 rounded-xl border-white pointer-events-none"></div>
    </div>
  );
};

export default CustomVideoPlayer;
