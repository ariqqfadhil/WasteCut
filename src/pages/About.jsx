// src\pages\About.jsx

import React from 'react';

function About() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16 animate-slideDown">
        <h1 className="text-5xl font-bold mb-6 text-gray-800 dark:text-white">
          Tentang WasteCut
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Platform komunitas yang menghubungkan pegiat lingkungan di Indonesia untuk bersama-sama 
          mengurangi sampah dan menciptakan masa depan yang lebih hijau.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover-lift animate-slideUp transition-colors duration-300">
          <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
            <span className="text-4xl">🎯</span>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Visi Kami</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Menjadi platform terdepan yang menginspirasi dan memberdayakan masyarakat Indonesia 
            untuk hidup berkelanjutan dengan mengurangi sampah hingga mencapai zero waste.
          </p>
        </article>

        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover-lift animate-slideUp delay-100 transition-colors duration-300">
          <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
            <span className="text-4xl">🚀</span>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Misi Kami</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Menghubungkan komunitas peduli lingkungan, menyediakan edukasi berkualitas, dan 
            memfasilitasi aksi nyata dalam pengurangan sampah di seluruh Indonesia.
          </p>
        </article>
      </section>

      {/* Our Story */}
      <section className="mb-16 animate-fadeIn">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 rounded-2xl p-8 md:p-12 transition-colors duration-300">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Cerita Kami</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              WasteCut lahir dari keprihatinan mendalam terhadap kondisi lingkungan Indonesia yang 
              semakin tercemar oleh sampah. Kami percaya bahwa perubahan besar dimulai dari 
              tindakan kecil yang dilakukan bersama-sama.
            </p>
            <p>
              Berawal dari sekelompok kecil aktivis lingkungan di Jakarta pada tahun 2025, WasteCut 
              kini telah berkembang menjadi platform yang menghubungkan lebih dari 50 komunitas 
              dengan ribuan anggota di seluruh Indonesia.
            </p>
            <p>
              Kami tidak hanya menyediakan informasi, tetapi juga memfasilitasi aksi nyata melalui 
              komunitas lokal, workshop, dan program-program inovatif yang terbukti efektif dalam 
              mengurangi sampah.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white animate-slideDown">
          Nilai-Nilai Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="text-center animate-slideUp delay-100">
            <div className="bg-green-100 dark:bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
              <span className="text-4xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Kolaborasi</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Kami percaya kekuatan kolaborasi dapat menciptakan dampak yang lebih besar
            </p>
          </article>

          <article className="text-center animate-slideUp delay-200">
            <div className="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
              <span className="text-4xl">💡</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Inovasi</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Terus berinovasi dalam mencari solusi berkelanjutan untuk masalah sampah
            </p>
          </article>

          <article className="text-center animate-slideUp delay-300">
            <div className="bg-yellow-100 dark:bg-yellow-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
              <span className="text-4xl">🌱</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Keberlanjutan</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Setiap langkah diambil dengan mempertimbangkan dampak jangka panjang
            </p>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-400 dark:from-green-800 dark:to-green-600 rounded-2xl p-12 text-center text-white animate-slideUp transition-colors duration-300">
        <h2 className="text-3xl font-bold mb-4">Bergabunglah dengan Gerakan Kami</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Mari bersama-sama menciptakan Indonesia yang lebih bersih dan hijau
        </p>
        <button className="bg-white text-green-600 dark:bg-gray-800 dark:text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105">
          Gabung Sekarang
        </button>
      </section>
    </main>
  );
}

export default About;