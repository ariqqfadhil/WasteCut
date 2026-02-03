// src\components\SkeletonCard.jsx

import React from 'react';

function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="h-48 bg-gray-300"></div>
      
      {/* Content Skeleton */}
      <div className="p-6">
        {/* Title & Badge */}
        <div className="flex items-start justify-between mb-3">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded-full w-16"></div>
        </div>
        
        {/* Location */}
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>
        
        {/* Members */}
        <div className="h-4 bg-gray-300 rounded w-1/3 mb-4"></div>
        
        {/* Description */}
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-300 rounded w-full"></div>
          <div className="h-3 bg-gray-300 rounded w-full"></div>
          <div className="h-3 bg-gray-300 rounded w-2/3"></div>
        </div>
        
        {/* Tags */}
        <div className="flex gap-2 mb-4">
          <div className="h-6 bg-gray-300 rounded w-20"></div>
          <div className="h-6 bg-gray-300 rounded w-24"></div>
          <div className="h-6 bg-gray-300 rounded w-16"></div>
        </div>
        
        {/* Button */}
        <div className="h-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;