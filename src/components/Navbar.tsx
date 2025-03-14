
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Menu, X, User, Upload, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, slideDown } from '@/utils/animations';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock logged in state
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Categories for the dropdown
  const categories = [
    { name: 'Nature', path: '/browse?category=Nature' },
    { name: 'Urban', path: '/browse?category=Urban' },
    { name: 'Business', path: '/browse?category=Business' },
    { name: 'Food', path: '/browse?category=Food' },
    { name: 'Abstract', path: '/browse?category=Abstract' },
    { name: 'People', path: '/browse?category=People' },
  ];
  
  // Set scrolled state for transparent navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);
  
  // Check if a link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };
  
  // For demo purposes, toggle login state
  const toggleLoginState = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="font-display font-bold text-2xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
            >
              PixelStock
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Home
            </Link>
            
            {/* Categories dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                <span>Categories</span>
                <ChevronDown size={16} />
              </button>
              
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.path}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    {category.name}
                  </Link>
                ))}
                <div className="my-1 border-t border-gray-100"></div>
                <Link
                  to="/browse"
                  className="block px-4 py-2.5 text-sm font-medium text-primary hover:bg-primary/5 transition-colors"
                  onClick={closeMenu}
                >
                  View All Categories
                </Link>
              </div>
            </div>
            
            <Link 
              to="/browse" 
              className={`text-sm font-medium transition-colors ${
                isActive('/browse') ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Browse
            </Link>
            
            <Link 
              to="/pricing" 
              className={`text-sm font-medium transition-colors ${
                isActive('/pricing') ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Pricing
            </Link>
          </nav>
          
          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/browse" className="text-gray-700 hover:text-primary">
              <Search size={20} />
            </Link>
            
            {isLoggedIn ? (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/upload" className="flex items-center space-x-1">
                    <Upload size={18} />
                    <span>Upload</span>
                  </Link>
                </Button>
                
                <div className="relative group">
                  <Button variant="ghost" className="p-2">
                    <User size={20} />
                  </Button>
                  
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/profile"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                    >
                      Settings
                    </Link>
                    <div className="my-1 border-t border-gray-100"></div>
                    <button
                      onClick={toggleLoginState}
                      className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/auth?mode=login">Sign In</Link>
                </Button>
                
                <Button asChild>
                  <Link to="/auth?mode=register">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/browse" className="text-gray-700 hover:text-primary">
              <Search size={20} />
            </Link>
            
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideDown}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-5 space-y-5">
              <Link 
                to="/" 
                className={`block text-lg font-medium ${isActive('/') ? 'text-primary' : 'text-gray-700'}`}
                onClick={closeMenu}
              >
                Home
              </Link>
              
              <div className="border-t border-gray-100 pt-5">
                <div className="text-lg font-medium text-gray-700 mb-3">Categories</div>
                <div className="space-y-3 pl-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.path}
                      className="block text-base text-gray-600 hover:text-primary transition-colors"
                      onClick={closeMenu}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/browse" 
                className={`block text-lg font-medium ${isActive('/browse') ? 'text-primary' : 'text-gray-700'}`}
                onClick={closeMenu}
              >
                Browse
              </Link>
              
              <Link 
                to="/pricing" 
                className={`block text-lg font-medium ${isActive('/pricing') ? 'text-primary' : 'text-gray-700'}`}
                onClick={closeMenu}
              >
                Pricing
              </Link>
              
              <div className="border-t border-gray-100 pt-5">
                {isLoggedIn ? (
                  <div className="space-y-4">
                    <Link 
                      to="/upload" 
                      className="flex items-center space-x-2 text-lg font-medium text-primary"
                      onClick={closeMenu}
                    >
                      <Upload size={18} />
                      <span>Upload Content</span>
                    </Link>
                    
                    <Link 
                      to="/dashboard" 
                      className="block text-lg font-medium text-gray-700"
                      onClick={closeMenu}
                    >
                      Dashboard
                    </Link>
                    
                    <Link 
                      to="/profile" 
                      className="block text-lg font-medium text-gray-700"
                      onClick={closeMenu}
                    >
                      My Profile
                    </Link>
                    
                    <button
                      onClick={() => {
                        toggleLoginState();
                        closeMenu();
                      }}
                      className="block text-lg font-medium text-red-600"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Button asChild className="w-full">
                      <Link to="/auth?mode=login" onClick={closeMenu}>
                        Sign In
                      </Link>
                    </Button>
                    
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/auth?mode=register" onClick={closeMenu}>
                        Sign Up
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
