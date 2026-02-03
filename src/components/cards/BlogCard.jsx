// src\components\cards\BlogCard.jsx

import React from 'react';

function BlogCard({ post, onReadMore }) {
  const formatDate = (dateString) => {
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  };

  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover-lift animate-slideUp transition-colors duration-300">
      {/* Post Image */}
      <div className="h-56 overflow-hidden cursor-pointer" onClick={() => onReadMore(post.id)}>
        <img 
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Post Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full font-semibold animate-scaleIn transition-colors duration-300">
            {post.category}
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm animate-fadeIn delay-100">{post.readTime} read</span>
        </div>

        {/* Title */}
        <h2 
          onClick={() => onReadMore(post.id)}
          className="text-2xl font-bold text-gray-800 dark:text-white mb-3 transition-colors duration-300 hover:text-green-600 dark:hover:text-green-400 cursor-pointer"
        >
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 transition-all duration-300 hover:scale-110">
              <span className="text-green-600 dark:text-green-400 font-bold text-sm">
                {post.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-white transition-colors duration-300 hover:text-green-600 dark:hover:text-green-400">
                {post.author}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{formatDate(post.date)}</p>
            </div>
          </div>

          {/* Read More Button */}
          <button 
            onClick={() => onReadMore(post.id)}
            className="text-green-600 dark:text-green-400 font-semibold transition-all duration-300 hover:text-green-700 dark:hover:text-green-300 hover:translate-x-2"
          >
            Baca →
          </button>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;