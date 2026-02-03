// src\components\Loading.jsx

import React from 'react';

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-green-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-green-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        
        {/* Loading Text */}
        <p className="text-gray-600 font-semibold animate-pulse">Memuat...</p>
      </div>
    </div>
  );
}

export default Loading;