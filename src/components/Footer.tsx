
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-display font-bold text-2xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                PixelStock
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Premium stock footage marketplace for creators and professionals. Discover, buy, and sell high-quality videos and photos.
            </p>
            <div className="flex space-x-4 text-gray-500">
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Content Column */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-gray-400 mb-4">Content</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/browse?type=video" className="text-gray-600 hover:text-primary transition-colors">
                  Videos
                </Link>
              </li>
              <li>
                <Link to="/browse?type=photo" className="text-gray-600 hover:text-primary transition-colors">
                  Photos
                </Link>
              </li>
              <li>
                <Link to="/browse?category=popular" className="text-gray-600 hover:text-primary transition-colors">
                  Popular Content
                </Link>
              </li>
              <li>
                <Link to="/browse?category=new" className="text-gray-600 hover:text-primary transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/browse" className="text-gray-600 hover:text-primary transition-colors">
                  Browse All
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-gray-400 mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support Column */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-gray-400 mb-4">Support</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/help" className="text-gray-600 hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/copyright" className="text-gray-600 hover:text-primary transition-colors">
                  Copyright Info
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PixelStock. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/terms" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Privacy
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
