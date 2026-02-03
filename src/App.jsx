// src/App.jsx

import React, { useEffect, useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Community from './pages/Community';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';

// Constants
const PAGES = {
  HOME: 'home',
  ABOUT: 'about',
  COMMUNITY: 'community',
  BLOG: 'blog',
  BLOG_DETAIL: 'blog-detail',
  CONTACT: 'contact',
};

function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  // Handle blog read more with useCallback for optimization
  const handleBlogReadMore = useCallback((blogId) => {
    setSelectedBlogId(blogId);
    setCurrentPage(PAGES.BLOG_DETAIL);
  }, []);

  // Handle back to blog with useCallback for optimization
  const handleBackToBlog = useCallback(() => {
    setCurrentPage(PAGES.BLOG);
  }, []);

  // Page router with clear mapping
  const renderPage = () => {
    const pageComponents = {
      [PAGES.HOME]: <Home setCurrentPage={setCurrentPage} />,
      [PAGES.ABOUT]: <About />,
      [PAGES.COMMUNITY]: <Community />,
      [PAGES.BLOG]: <Blog onReadMore={handleBlogReadMore} />,
      [PAGES.BLOG_DETAIL]: <BlogDetail blogId={selectedBlogId} onBack={handleBackToBlog} />,
      [PAGES.CONTACT]: <Contact />,
    };

    return pageComponents[currentPage] || pageComponents[PAGES.HOME];
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow" role="main">
        {renderPage()}
      </main>
      
      <Footer setCurrentPage={setCurrentPage} />
      <ScrollToTop />
    </div>
  );
}

export default App;