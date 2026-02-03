// src\components\cards\CommunityCard.jsx

import React from 'react';

function CommunityCard({ community, onJoinClick }) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover-lift animate-slideUp transition-colors duration-300">
      {/* Community Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={community.image} 
          alt={`Foto komunitas ${community.name}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Community Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300 hover:text-green-600 dark:hover:text-green-400">
            {community.name}
          </h3>
          <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs px-3 py-1 rounded-full animate-scaleIn transition-colors duration-300">
            {community.category}
          </span>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3 transition-all duration-300 hover:text-green-600 dark:hover:text-green-400">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">{community.location}</span>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4 transition-all duration-300 hover:text-green-600 dark:hover:text-green-400">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          <span className="text-sm">{community.members} Members</span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {community.description}
        </p>

        {/* Activities Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {community.activities.slice(0, 3).map((activity, index) => (
            <span 
              key={index}
              className="bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs px-2 py-1 rounded transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-800 hover:scale-105 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {activity}
            </span>
          ))}
        </div>

        {/* Join Button */}
        <button 
          onClick={() => onJoinClick(community)}
          className="w-full bg-green-600 dark:bg-green-700 text-white py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-green-700 dark:hover:bg-green-600 hover:shadow-lg hover:scale-105"
        >
          Gabung Komunitas
        </button>
      </div>
    </article>
  );
}

export default CommunityCard;