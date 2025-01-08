// LoadingScreen.js
import React, { useRef } from 'react';
import './css/loadingscreen.css'; // Import CSS for animations

const LoadingScreen = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <h1 className="loading-text text-6xl md:text-8xl font-bold text-white">Precission Products</h1>
      <div className="absolute bottom-8 left-8">
        <p className="text-white/60 text-sm">Manufacturing Company</p>
      </div>
      <div className="absolute bottom-8 right-8">
        <p className="text-white/60 text-sm">Est. 2000</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
