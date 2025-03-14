
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  expandable?: boolean;
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
  initialQuery?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  expandable = false,
  placeholder = 'Search for videos, photos...',
  className = '',
  onSearch,
  initialQuery = '',
}) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(initialQuery);
  const [isExpanded, setIsExpanded] = useState(!expandable);
  
  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (query.trim()) {
      if (onSearch) {
        onSearch(query);
      } else {
        navigate(`/browse?search=${encodeURIComponent(query)}`);
      }
    }
  };
  
  const handleClear = () => {
    setQuery('');
    if (onSearch) onSearch('');
  };
  
  return (
    <motion.div 
      className={`relative ${className}`}
      animate={{ width: isExpanded ? '100%' : expandable ? '40px' : '100%' }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={handleSearch} className="w-full">
        <div className="relative">
          {/* Search icon */}
          {expandable ? (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className={`absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 hover:text-primary transition-colors`}
            >
              <Search size={20} />
            </button>
          ) : (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              <Search size={20} />
            </div>
          )}
          
          {/* Input field */}
          <motion.input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`${
              isExpanded ? 'opacity-100 w-full' : 'opacity-0 w-0'
            } h-12 bg-gray-50 border border-gray-200 text-gray-900 text-base rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary block pl-10 pr-10 py-2.5 transition-all duration-300`}
            placeholder={placeholder}
            animate={{ width: isExpanded ? '100%' : '0%' }}
            aria-label="Search"
            transition={{ duration: 0.3 }}
          />
          
          {/* Clear button */}
          {query && isExpanded && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute inset-y-0 right-12 flex items-center pr-1 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={18} />
            </button>
          )}
          
          {/* Search button */}
          {isExpanded && (
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 bg-primary text-white rounded-r-lg hover:bg-primary/90 transition-colors"
            >
              Search
            </button>
          )}
        </div>
      </form>
    </motion.div>
  );
};

export default SearchBar;
