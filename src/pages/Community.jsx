// src\pages\Community.jsx

import React, { useState, useEffect } from 'react';
import communityData from '../data/dummy.json';
import CommunityCard from '../components/cards/CommunityCard';
import SkeletonCard from '../components/SkeletonCard';
import SearchBar from '../components/SearchBar';
import Toast from '../components/Toast';

function Community() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState(null);

  const categories = ['All', 'Urban', 'Coastal', 'Community', 'Education'];

  // Simulasi loading data
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  // Filter berdasarkan kategori dan search query
  const filteredCommunities = communityData.communities
    .filter(community => selectedCategory === 'All' || community.category === selectedCategory)
    .filter(community => 
      community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      community.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      community.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleJoinClick = (community) => {
    setSelectedCommunity(community);
    setShowJoinForm(true);
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Header */}
      <header className="text-center mb-12 animate-slideDown">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Komunitas WasteCut</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Temukan dan bergabung dengan komunitas peduli lingkungan di sekitar Anda. 
          Bersama kita lebih kuat dalam menjaga bumi!
        </p>
      </header>

      {/* Search Bar */}
      <SearchBar 
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Cari komunitas berdasarkan nama, lokasi, atau deskripsi..."
      />

      {/* Category Filter */}
      <section className="mb-8 animate-fadeIn" aria-label="Filter komunitas berdasarkan kategori">
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
            Menampilkan <span className="font-bold text-green-600 dark:text-green-400">{filteredCommunities.length}</span> komunitas
            {searchQuery && ` untuk "${searchQuery}"`}
          </p>
        </div>
      )}

      {/* Communities Grid */}
      <section aria-label="Daftar komunitas">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Show skeleton cards while loading
            Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : (
            // Show actual communities
            filteredCommunities.map((community, index) => (
              <div 
                key={community.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CommunityCard 
                  community={community}
                  onJoinClick={handleJoinClick}
                />
              </div>
            ))
          )}
        </div>

        {/* Empty State */}
        {!isLoading && filteredCommunities.length === 0 && (
          <div className="text-center py-12 animate-fadeIn">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">
              {searchQuery 
                ? `Tidak ada komunitas yang ditemukan untuk "${searchQuery}"`
                : 'Tidak ada komunitas di kategori ini.'
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

      {/* Join Form Modal */}
      {showJoinForm && (
        <JoinCommunityForm 
          community={selectedCommunity}
          onClose={() => setShowJoinForm(false)}
          onSuccess={(message) => showToast(message, 'success')}
        />
      )}

      {/* Toast Notification */}
      {toast && (
        <Toast 
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </main>
  );
}

// Component Form Gabung Komunitas
function JoinCommunityForm({ community, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi submit delay
    setTimeout(() => {
      onSuccess(`Permintaan bergabung dengan ${community.name} berhasil dikirim! ✅`);
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-labelledby="join-form-title"
      aria-modal="true"
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto animate-scaleIn transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 id="join-form-title" className="text-2xl font-bold text-gray-800 dark:text-white">
            Gabung {community.name}
          </h2>
          <button 
            onClick={onClose}
            disabled={isSubmitting}
            className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
            aria-label="Tutup formulir"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Community Info */}
        <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg mb-6 transition-colors duration-300">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">📍 {community.location}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">👥 {community.members} Members</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
              placeholder="Masukkan nama lengkap"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
              placeholder="nama@email.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Nomor WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
              placeholder="08xxxxxxxxxx"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="reason" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Mengapa ingin bergabung?
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              disabled={isSubmitting}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none transition-all duration-300 disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
              placeholder="Ceritakan motivasi kamu..."
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 bg-green-600 dark:bg-green-700 text-white rounded-lg font-semibold hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Mengirim...
                </>
              ) : (
                'Kirim Permintaan'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Community;