// src\pages\BlogDetail.jsx

import React from 'react';
import blogData from '../data/dummy.json';

function BlogDetail({ blogId, onBack }) {
  const post = blogData.blogPosts.find(p => p.id === blogId);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Artikel tidak ditemukan</h1>
        <button 
          onClick={onBack}
          className="text-green-600 dark:text-green-400 hover:underline"
        >
          Kembali ke Blog
        </button>
      </div>
    );
  }

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
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 mb-6 transition-colors duration-300 animate-slideInLeft"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Kembali ke Blog
      </button>

      {/* Featured Image */}
      <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl animate-slideUp">
        <img 
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Article Header */}
      <header className="mb-8 animate-slideUp delay-100">
        {/* Category Badge */}
        <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-1 rounded-full font-semibold mb-4 transition-colors duration-300">
          {post.category}
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
              <span className="text-green-600 dark:text-green-400 font-bold">
                {post.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">{post.author}</p>
              <p className="text-sm">{formatDate(post.date)} · {post.readTime} read</p>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none animate-slideUp delay-200">
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          {post.excerpt}
        </p>

        {/* Simulated Article Content */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-6 transition-colors duration-300">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Pengantar</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Dalam era modern ini, kesadaran akan pentingnya menjaga lingkungan semakin meningkat. 
            Artikel ini akan membahas secara mendalam tentang bagaimana kita dapat berkontribusi 
            dalam mengurangi dampak negatif terhadap lingkungan melalui tindakan-tindakan sederhana 
            namun bermakna.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 mt-8">Mengapa Hal Ini Penting?</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Setiap tahun, Indonesia menghasilkan jutaan ton sampah yang berakhir di tempat pembuangan akhir 
          atau bahkan mencemari lingkungan. Dengan mengadopsi praktik-praktik yang lebih berkelanjutan, 
          kita dapat secara signifikan mengurangi jejak lingkungan kita.
        </p>

        <div className="bg-green-50 dark:bg-green-900 border-l-4 border-green-600 dark:border-green-400 p-6 my-8 rounded-r-lg transition-colors duration-300">
          <p className="text-green-800 dark:text-green-200 font-semibold mb-2">💡 Tips Praktis:</p>
          <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-2">
            <li>Mulai dari hal-hal kecil di rumah</li>
            <li>Libatkan seluruh anggota keluarga</li>
            <li>Konsisten dalam menerapkan kebiasaan baru</li>
            <li>Bagikan pengalaman Anda kepada orang lain</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 mt-8">Langkah-Langkah Konkret</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Berikut adalah beberapa langkah praktis yang dapat Anda terapkan mulai hari ini:
        </p>

        <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
          <li className="leading-relaxed">
            <strong>Kurangi penggunaan plastik sekali pakai</strong> - Bawa tas belanja sendiri dan 
            gunakan botol minum yang dapat digunakan kembali.
          </li>
          <li className="leading-relaxed">
            <strong>Pilah sampah dengan benar</strong> - Pisahkan sampah organik dan anorganik 
            untuk memudahkan proses daur ulang.
          </li>
          <li className="leading-relaxed">
            <strong>Kompos sampah organik</strong> - Ubah sisa makanan menjadi pupuk yang berguna 
            untuk tanaman.
          </li>
          <li className="leading-relaxed">
            <strong>Beli produk lokal dan ramah lingkungan</strong> - Dukung produk yang 
            diproduksi secara berkelanjutan.
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 mt-8">Kesimpulan</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Perubahan dimulai dari diri sendiri. Dengan menerapkan praktik-praktik sederhana ini, 
          kita tidak hanya membantu lingkungan tetapi juga menginspirasi orang lain untuk melakukan hal yang sama. 
          Mari bersama-sama menciptakan masa depan yang lebih hijau dan berkelanjutan!
        </p>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 rounded-xl p-8 mt-8 transition-colors duration-300">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
            Ingin Tahu Lebih Lanjut?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Bergabunglah dengan komunitas WasteCut dan dapatkan tips, panduan, dan dukungan 
            dari sesama pegiat lingkungan!
          </p>
          <button 
            onClick={onBack}
            className="bg-green-600 dark:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 dark:hover:bg-green-600 transition-all duration-300 hover:scale-105"
          >
            Lihat Artikel Lainnya
          </button>
        </div>
      </div>

      {/* Share Section */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 animate-slideUp delay-300">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Bagikan Artikel Ini</h3>
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105">
            Facebook
          </button>
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105">
            Twitter
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105">
            WhatsApp
          </button>
        </div>
      </div>
    </article>
  );
}

export default BlogDetail;