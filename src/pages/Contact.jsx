// src\pages\Contact.jsx

import React, { useState } from 'react';
import Toast from '../components/Toast';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi submit
    setTimeout(() => {
      setToast({ 
        message: 'Pesan berhasil dikirim! Kami akan menghubungi Anda segera.', 
        type: 'success' 
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Header */}
      <section className="text-center mb-16 animate-slideDown">
        <h1 className="text-5xl font-bold mb-6 text-gray-800 dark:text-white">
          Hubungi Kami
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Ada pertanyaan atau ingin berkolaborasi? Kami dengan senang hati mendengarnya!
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section className="animate-slideUp">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Kirim Pesan
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
                  placeholder="nama@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Subjek <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
                  placeholder="Subjek pesan"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Pesan <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none transition-all duration-300 disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 dark:bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-700 dark:hover:bg-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Mengirim...
                  </>
                ) : (
                  'Kirim Pesan'
                )}
              </button>
            </form>
          </div>
        </section>

        {/* Contact Info */}
        <section className="animate-slideUp delay-200">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Informasi Kontak
            </h2>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg mr-4 transition-colors duration-300">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Email</h3>
                  <a 
                    href="mailto:worklifeariqfadhil@gmail.com" 
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    worklifeariqfadhil@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mr-4 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">No. Telepon</h3>
                  <a 
                    href="tel:+62895384098583" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    +62 895-3840-98583
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start">
                <div className="bg-pink-100 dark:bg-pink-900 p-3 rounded-lg mr-4 transition-colors duration-300">
                  <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Instagram</h3>
                  <a 
                    href="https://instagram.com/ariqqfadhil" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-pink-600 dark:text-pink-400 hover:underline"
                  >
                    @ariqqfadhil
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 rounded-2xl p-8 transition-colors duration-300">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Jam Operasional
            </h3>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>Senin - Jumat:</strong> 09:00 - 17:00 WIB</p>
              <p><strong>Sabtu:</strong> 09:00 - 14:00 WIB</p>
              <p><strong>Minggu:</strong> Tutup</p>
            </div>
          </div>
        </section>
      </div>

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

export default Contact;