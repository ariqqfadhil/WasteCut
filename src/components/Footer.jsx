import React, { useCallback } from 'react';
import { NAV_ITEMS, CONTACT_INFO, ROUTES } from '../constants';
import wastecutLogo from '../assets/images/wastecutlogo.png';

function Footer({ setCurrentPage }) {
  const handleNavClick = useCallback((pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [setCurrentPage]);

  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white mt-auto transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo & About Section */}
          <section aria-labelledby="footer-about">
            <button
              onClick={() => handleNavClick(ROUTES.HOME)}
              className="mb-4 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-lg p-1 transition-all duration-300 hover:scale-110 inline-block"
              aria-label="WasteCut Home"
            >
              <img 
                src={wastecutLogo} 
                alt="WasteCut Logo" 
                className="h-16 w-auto transition-transform duration-300 hover:rotate-6"
              />
            </button>
            <h2 id="footer-about" className="sr-only">Tentang WasteCut</h2>
            <p className="text-gray-400 dark:text-gray-500">
              Platform komunitas untuk edukasi dan aksi nyata pengurangan sampah di Indonesia.
            </p>
          </section>

          {/* Quick Links */}
          <section aria-labelledby="footer-links">
            <h2 id="footer-links" className="text-xl font-bold mb-4">Tautan Cepat</h2>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2 text-gray-400 dark:text-gray-500">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => handleNavClick(item.id)}
                      className="hover:text-green-400 dark:hover:text-green-300 transition-colors duration-300 focus:outline-none focus:text-green-400"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* Contact */}
          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="text-xl font-bold mb-4">Hubungi Kami</h2>
            <address className="not-italic space-y-2 text-gray-400 dark:text-gray-500">
              
              {/* Email */}
              <p className="flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href={`mailto:${CONTACT_INFO.EMAIL}`}
                  className="hover:text-green-400 dark:hover:text-green-300 transition-colors duration-300 focus:outline-none focus:text-green-400 break-all"
                  aria-label={`Email ke ${CONTACT_INFO.EMAIL}`}
                >
                  {CONTACT_INFO.EMAIL}
                </a>
              </p>
              
              {/* Phone */}
              <p className="flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href={`tel:${CONTACT_INFO.PHONE}`}
                  className="hover:text-green-400 dark:hover:text-green-300 transition-colors duration-300 focus:outline-none focus:text-green-400"
                  aria-label={`Telepon ke ${CONTACT_INFO.PHONE}`}
                >
                  {CONTACT_INFO.PHONE.replace('+62', '+62 ')}
                </a>
              </p>
              
              {/* Instagram */}
              <p className="flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a 
                  href={CONTACT_INFO.INSTAGRAM_URL}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-400 dark:hover:text-green-300 transition-colors duration-300 focus:outline-none focus:text-green-400"
                  aria-label={`Instagram ${CONTACT_INFO.INSTAGRAM}`}
                >
                  {CONTACT_INFO.INSTAGRAM}
                </a>
              </p>
            </address>
          </section>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-6 text-center text-gray-400 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} WasteCut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;