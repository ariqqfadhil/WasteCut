import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Community from './pages/Community';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import { ROUTES } from './constants';

function App() {
  const [currentPage, setCurrentPage] = useState(ROUTES.HOME);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case ROUTES.HOME:
        return <Home setCurrentPage={setCurrentPage} />;
      case ROUTES.COMMUNITY:
        return <Community />;
      case ROUTES.BLOG:
        return <Blog onReadMore={(blogId) => {
          setSelectedBlogId(blogId);
          setCurrentPage(ROUTES.BLOG_DETAIL);
        }} />;
      case ROUTES.BLOG_DETAIL:
        return <BlogDetail 
          blogId={selectedBlogId} 
          onBack={() => setCurrentPage(ROUTES.BLOG)}
        />;
      case ROUTES.ABOUT:
        return <About />;
      case ROUTES.CONTACT:
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
      <ScrollToTop />
    </div>
  );
}

export default App;