import React, { useState, useCallback } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { NAV_ITEMS, ROUTES } from '../constants';
import wastecutLogo from '../assets/images/wastecutlogo.png';

function Header({ currentPage, setCurrentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = useCallback((pageId) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
  }, [setCurrentPage]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <header className="bg-green-600 dark:bg-green-800 text-white shadow-lg sticky top-0 z-50 animate-slideDown transition-colors duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Only - Bigger Size */}
            <button
              onClick={() => handleNavClick(ROUTES.HOME)}
              className="animate-slideInLeft focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 rounded-lg p-1 transition-all duration-300 hover:scale-110"
              aria-label="WasteCut Home"
            >
              <img 
                src={wastecutLogo} 
                alt="WasteCut Logo" 
                className="h-16 w-auto md:h-20 transition-transform duration-300 hover:rotate-6"
              />
            </button>

            {/* Desktop Navigation */}
            <nav aria-label="Main navigation" className="hidden md:flex items-center space-x-6 animate-slideInRight">
              <ul className="flex space-x-6">
                {NAV_ITEMS.map((item, index) => (
                  <li key={item.id} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      aria-current={currentPage === item.id ? 'page' : undefined}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
                        currentPage === item.id
                          ? 'bg-white text-green-600 dark:bg-gray-800 dark:text-green-400 font-semibold shadow-lg scale-105'
                          : 'hover:bg-green-500 dark:hover:bg-green-700 hover:scale-105'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
              
              {/* Dark Mode Toggle - Desktop */}
              <DarkModeToggle />
            </nav>

            {/* Mobile: Dark Mode Toggle & Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <DarkModeToggle />
              
              <button 
                onClick={toggleMobileMenu}
                className="transition-transform duration-300 hover:scale-110 active:scale-95 z-50 relative focus:outline-none focus:ring-2 focus:ring-white rounded p-1"
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <nav 
            id="mobile-menu"
            className="md:hidden bg-green-700 dark:bg-green-900 animate-slideDown relative z-50 transition-colors duration-300"
            aria-label="Mobile navigation"
          >
            <ul className="container mx-auto px-4 py-4 space-y-2">
              {NAV_ITEMS.map((item, index) => (
                <li 
                  key={item.id} 
                  className="animate-slideInLeft"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    aria-current={currentPage === item.id ? 'page' : undefined}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
                      currentPage === item.id
                        ? 'bg-white text-green-600 dark:bg-gray-800 dark:text-green-400 font-semibold shadow-lg'
                        : 'hover:bg-green-600 dark:hover:bg-green-800'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-30 z-40 animate-fadeIn"
          style={{ top: '88px' }}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Header;