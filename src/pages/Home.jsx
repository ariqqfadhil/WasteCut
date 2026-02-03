// src\pages\Home.jsx

import React from 'react';

function Home({ setCurrentPage }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const impactStats = [
    { number: '50+', label: 'Komunitas Aktif', icon: '🌍', color: 'from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700' },
    { number: '10,000+', label: 'Member Bergabung', icon: '👥', color: 'from-blue-500 to-cyan-600 dark:from-blue-600 dark:to-cyan-700' },
    { number: '500 Ton', label: 'Sampah Berkurang', icon: '♻️', color: 'from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700' },
    { number: '100+', label: 'Event Terlaksana', icon: '🎯', color: 'from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700' },
  ];

  const educationCards = [
    {
      icon: '♻️',
      title: 'Reduce (Kurangi)',
      description: 'Kurangi penggunaan barang sekali pakai dan pilih produk yang ramah lingkungan untuk masa depan yang lebih berkelanjutan.',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950',
      iconBg: 'bg-green-100 dark:bg-green-900/50',
      iconColor: 'text-green-600 dark:text-green-400',
      borderColor: 'border-green-200 dark:border-green-800'
    },
    {
      icon: '🔄',
      title: 'Reuse (Gunakan Kembali)',
      description: 'Manfaatkan kembali barang-barang yang masih bisa digunakan sebelum membuangnya ke tempat sampah.',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950',
      iconBg: 'bg-blue-100 dark:bg-blue-900/50',
      iconColor: 'text-blue-600 dark:text-blue-400',
      borderColor: 'border-blue-200 dark:border-blue-800'
    },
    {
      icon: '🗑️',
      title: 'Recycle (Daur Ulang)',
      description: 'Pisahkan sampah organik dan anorganik untuk memudahkan proses daur ulang dan mengurangi pencemaran.',
      bgColor: 'from-yellow-50 to-amber-50 dark:from-yellow-950 dark:to-amber-950',
      iconBg: 'bg-yellow-100 dark:bg-yellow-900/50',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      borderColor: 'border-yellow-200 dark:border-yellow-800'
    },
  ];

  const features = [
    {
      icon: '🤝',
      title: 'Komunitas Solid',
      description: 'Bergabung dengan ribuan orang yang peduli lingkungan',
    },
    {
      icon: '📚',
      title: 'Edukasi Gratis',
      description: 'Akses materi pembelajaran dan workshop berkualitas',
    },
    {
      icon: '🎯',
      title: 'Aksi Nyata',
      description: 'Ikuti program cleanup dan kegiatan peduli lingkungan',
    },
    {
      icon: '🏆',
      title: 'Reward System',
      description: 'Dapatkan penghargaan untuk setiap kontribusi Anda',
    },
  ];

  return (
    <div>
      {/* Hero Section - Enhanced */}
      <section 
        id="hero"
        className="relative bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 dark:from-green-900 dark:via-green-800 dark:to-emerald-900 text-white py-24 md:py-32 overflow-hidden animate-fadeIn transition-colors duration-300" 
        aria-labelledby="hero-heading"
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white dark:bg-white opacity-5 dark:opacity-10 rounded-full animate-pulse-slow"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white dark:bg-white opacity-5 dark:opacity-10 rounded-full animate-pulse-slow delay-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute top-20 left-20 w-3 h-3 bg-white rounded-full animate-ping opacity-60"></div>
            <div className="absolute top-40 right-32 w-2 h-2 bg-white rounded-full animate-ping delay-200 opacity-60"></div>
            <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-white rounded-full animate-ping delay-500 opacity-60"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6 animate-slideDown">
              <span className="text-2xl">🌱</span>
              <span className="font-semibold">Platform Peduli Lingkungan #1 di Indonesia</span>
            </div>

            <h2 id="hero-heading" className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slideUp delay-100 leading-tight">
              Bersama Kurangi Sampah,
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
                Selamatkan Bumi
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-slideUp delay-200 leading-relaxed text-green-50 dark:text-green-100">
              WasteCut menghubungkan ribuan pegiat lingkungan untuk menciptakan perubahan nyata. 
              Mulai perjalanan zero waste Anda bersama kami!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp delay-300">
              <button 
                onClick={() => setCurrentPage('community')}
                className="group bg-white text-green-600 dark:bg-gray-800 dark:text-green-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <span>Gabung Komunitas</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="group border-2 border-white dark:border-gray-300 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 dark:hover:bg-gray-800 dark:hover:text-green-400 dark:hover:border-gray-800 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Pelajari Lebih Lanjut</span>
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" className="fill-gray-50 dark:fill-gray-900"/>
          </svg>
        </div>
      </section>

      {/* Impact Stats Section - Enhanced */}
      <section 
        id="stats"
        className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" 
        aria-labelledby="stats-heading"
      >
        <div className="container mx-auto px-4">
          <h2 id="stats-heading" className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white animate-slideDown">
            Dampak Nyata yang Kami Ciptakan
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-slideDown delay-100">
            Bersama-sama, kita telah membuat perbedaan yang signifikan untuk lingkungan
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <article 
                key={index}
                className="relative group animate-slideUp hover-lift bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <p className="text-4xl font-bold text-gray-800 dark:text-white mb-2 group-hover:scale-105 transition-transform">
                    {stat.number}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 dark:opacity-20 rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - New */}
      <section 
        id="features"
        className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
        aria-labelledby="features-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="features-heading" className="text-4xl font-bold mb-4 text-gray-800 dark:text-white animate-slideDown">
              Mengapa Bergabung dengan WasteCut?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-slideDown delay-100">
              Platform lengkap untuk memulai dan mengembangkan gaya hidup ramah lingkungan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <article 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 shadow-lg hover-lift animate-slideUp border border-gray-200 dark:border-gray-700 transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section - Enhanced */}
      <section 
        id="education"
        className="py-20 bg-gradient-to-br from-gray-50 to-green-50 dark:from-gray-900 dark:to-green-950 transition-colors duration-300" 
        aria-labelledby="education-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="education-heading" className="text-4xl font-bold mb-4 animate-slideDown text-gray-800 dark:text-white">
              Panduan Pengelolaan Sampah
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-slideDown delay-100">
              Tiga prinsip dasar untuk memulai gaya hidup zero waste
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {educationCards.map((card, index) => (
              <article 
                key={index}
                className={`relative bg-gradient-to-br ${card.bgColor} rounded-3xl p-8 shadow-xl hover-lift animate-slideUp group overflow-hidden transition-colors duration-300 border ${card.borderColor}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Decorative circles */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-white dark:bg-gray-700 opacity-20 dark:opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`${card.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 animate-scaleIn group-hover:rotate-12 transition-transform duration-300 backdrop-blur-sm`} aria-hidden="true">
                    <span className={`text-4xl ${card.iconColor}`}>{card.icon}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Number badge */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center font-bold text-xl text-gray-400 dark:text-gray-500 opacity-50">
                    {index + 1}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section - New */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white animate-slideDown">
              Apa Kata Mereka?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-slideDown delay-100">
              Cerita inspiratif dari anggota komunitas WasteCut
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <article className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-2xl p-8 shadow-lg hover-lift animate-slideUp transition-colors duration-300 border border-green-200 dark:border-green-800">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 dark:bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                  S
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Siti Nurhaliza</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Member Jakarta</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "Bergabung dengan WasteCut mengubah cara pandang saya tentang sampah. Sekarang rumah tangga kami sudah zero waste!"
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 dark:text-yellow-400">⭐</span>
                ))}
              </div>
            </article>

            <article className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-2xl p-8 shadow-lg hover-lift animate-slideUp delay-200 transition-colors duration-300 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                  B
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Budi Santoso</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Member Bandung</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "Komunitas yang solid! Banyak kegiatan seru dan edukasi yang bermanfaat untuk lingkungan."
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 dark:text-yellow-400">⭐</span>
                ))}
              </div>
            </article>

            <article className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-2xl p-8 shadow-lg hover-lift animate-slideUp delay-300 transition-colors duration-300 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 dark:bg-purple-700 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Ani Wijaya</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Member Surabaya</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "Platform yang sangat membantu! Dari sini saya belajar banyak tentang pengelolaan sampah yang benar."
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 dark:text-yellow-400">⭐</span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section 
        id="cta"
        className="relative py-24 bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 dark:from-green-900 dark:via-green-800 dark:to-emerald-900 text-white animate-fadeIn overflow-hidden transition-colors duration-300" 
        aria-labelledby="cta-heading"
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full animate-ping"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white rounded-full animate-pulse-slow"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-white rounded-lg rotate-45 animate-pulse-slow delay-300"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6 animate-slideUp">
              Siap Membuat Perbedaan?
            </h2>
            <p className="text-xl md:text-2xl mb-10 animate-slideUp delay-100 text-green-50 dark:text-green-100">
              Bergabunglah dengan ribuan orang yang telah memulai perjalanan zero waste mereka. Bersama kita bisa!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp delay-200">
              <button 
                onClick={() => setCurrentPage('community')}
                className="group bg-white text-green-600 dark:bg-gray-800 dark:text-green-400 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <span>Gabung Sekarang</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button 
                onClick={() => setCurrentPage('blog')}
                className="border-2 border-white dark:border-gray-300 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 dark:hover:bg-gray-800 dark:hover:text-green-400 dark:hover:border-gray-800 transition-all duration-300 hover:scale-110"
              >
                Baca Artikel Kami
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;