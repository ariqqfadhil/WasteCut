// src\pages\Blog.jsx

import React, { useState, useEffect } from 'react';
import blogData from '../data/dummy.json';
import BlogCard from '../components/cards/BlogCard';
import SkeletonCard from '../components/SkeletonCard';
import SearchBar from '../components/SearchBar';

function Blog({ onReadMore }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Tips & Tricks', 'Environment', 'Success Story', 'DIY'];

  // Simulasi loading data
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  // Filter berdasarkan kategori dan search query, lalu limit jika kategori All
  const getDisplayedPosts = () => {
    let posts = blogData.blogPosts;

    // Apply search filter
    if (searchQuery) {
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== 'All') {
      posts = posts.filter(post => post.category === selectedCategory);
    } else {
      // Limit to 2 per category when "All" is selected and no search
      if (!searchQuery) {
        posts = getLimitedPostsByCategory(posts, 2);
      }
    }

    return posts;
  };

  const displayedPosts = getDisplayedPosts();

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Header */}
      <header className="text-center mb-12 animate-slideDown">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Blog WasteCut</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Artikel, tips, dan cerita inspiratif seputar pengurangan sampah dan gaya hidup ramah lingkungan
        </p>
      </header>

      {/* Search Bar */}
      <SearchBar 
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Cari artikel berdasarkan judul, konten, atau penulis..."
      />

      {/* Category Filter */}
      <section className="mb-8 animate-fadeIn" aria-label="Filter artikel berdasarkan kategori">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              disabled={isLoading}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105'
              } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Results Count */}
      {!isLoading && (
        <div className="text-center mb-6 animate-fadeIn">
          <p className="text-gray-600 dark:text-gray-400">
            Menampilkan <span className="font-bold text-green-600 dark:text-green-400">{displayedPosts.length}</span> artikel
            {searchQuery && ` untuk "${searchQuery}"`}
            {selectedCategory === 'All' && !searchQuery && ' (maksimal 2 artikel per kategori)'}
          </p>
        </div>
      )}

      {/* Blog Posts Grid */}
      <section aria-label="Daftar artikel blog">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {isLoading ? (
            // Show skeleton cards while loading
            Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : (
            // Show actual blog posts
            displayedPosts.map((post, index) => (
              <div 
                key={post.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BlogCard post={post} onReadMore={onReadMore} />
              </div>
            ))
          )}
        </div>

        {/* Empty State */}
        {!isLoading && displayedPosts.length === 0 && (
          <div className="text-center py-12 animate-fadeIn">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">
              {searchQuery 
                ? `Tidak ada artikel yang ditemukan untuk "${searchQuery}"`
                : 'Tidak ada artikel di kategori ini.'
              }
            </p>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold mt-4 transition-colors duration-300"
              >
                Hapus pencarian
              </button>
            )}
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="mt-16 bg-gradient-to-r from-green-600 to-green-400 dark:from-green-800 dark:to-green-600 rounded-2xl p-8 text-white text-center animate-slideUp transition-colors duration-300">
        <h2 className="text-3xl font-bold mb-4">Berlangganan Newsletter</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Dapatkan artikel terbaru, tips, dan update tentang gerakan pengurangan sampah langsung ke email kamu!
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Masukkan email kamu"
            required
            className="flex-1 px-4 py-3 rounded-lg text-gray-800 dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
            aria-label="Email untuk newsletter"
          />
          <button 
            type="submit"
            className="bg-white text-green-600 dark:bg-gray-800 dark:text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}

// Helper function to limit posts by category
function getLimitedPostsByCategory(posts, limit) {
  const categoryCount = {};
  const result = [];
  
  posts.forEach(post => {
    if (!categoryCount[post.category]) {
      categoryCount[post.category] = 0;
    }
    if (categoryCount[post.category] < limit) {
      categoryCount[post.category]++;
      result.push(post);
    }
  });
  
  return result;
}

export default Blog;