
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { categories } from '@/utils/mockData';
import { useIsMobile } from '@/hooks/use-mobile';

interface FilterPanelProps {
  activeFilters: {
    type?: string;
    category?: string;
    price?: string;
    sort?: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onClearFilters: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  activeFilters,
  onFilterChange,
  onClearFilters,
}) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const priceRanges = [
    { label: 'All Prices', value: '' },
    { label: 'Under $25', value: 'under-25' },
    { label: '$25 - $50', value: '25-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: 'Over $100', value: 'over-100' },
  ];
  
  const sortOptions = [
    { label: 'Newest First', value: 'newest' },
    { label: 'Oldest First', value: 'oldest' },
    { label: 'Most Popular', value: 'popular' },
    { label: 'Price: Low to High', value: 'price-low-high' },
    { label: 'Price: High to Low', value: 'price-high-low' },
  ];
  
  const hasActiveFilters = Object.values(activeFilters).some(filter => filter);
  
  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };
  
  // Filter group with accordion functionality
  const FilterGroup = ({ title, children }: { title: string; children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(true);
    
    return (
      <div className="border-b border-gray-100 py-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-2"
        >
          {title}
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
          />
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  const desktopFilters = (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
      {hasActiveFilters && (
        <div className="mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Active Filters</span>
            <button
              onClick={onClearFilters}
              className="text-primary text-sm hover:text-primary/80 transition-colors flex items-center space-x-1"
            >
              <X size={14} />
              <span>Clear All</span>
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {Object.entries(activeFilters).map(([key, value]) => {
              if (!value) return null;
              
              let label = '';
              
              if (key === 'type') {
                label = value === 'video' ? 'Videos' : 'Photos';
              } else if (key === 'category') {
                label = value;
              } else if (key === 'price') {
                const priceOption = priceRanges.find(p => p.value === value);
                label = priceOption?.label || value;
              } else if (key === 'sort') {
                const sortOption = sortOptions.find(s => s.value === value);
                label = sortOption?.label || value;
              }
              
              return (
                <div
                  key={`${key}-${value}`}
                  className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700"
                >
                  <span>{label}</span>
                  <button
                    onClick={() => onFilterChange(key, '')}
                    className="ml-1.5 text-gray-500 hover:text-gray-700"
                  >
                    <X size={12} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
      
      <FilterGroup title="Content Type">
        <div className="space-y-2 pl-1">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="type"
              value=""
              checked={!activeFilters.type}
              onChange={() => onFilterChange('type', '')}
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
            />
            <span className="text-gray-700">All Content</span>
          </label>
          
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="type"
              value="video"
              checked={activeFilters.type === 'video'}
              onChange={() => onFilterChange('type', 'video')}
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
            />
            <span className="text-gray-700">Videos</span>
          </label>
          
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="type"
              value="photo"
              checked={activeFilters.type === 'photo'}
              onChange={() => onFilterChange('type', 'photo')}
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
            />
            <span className="text-gray-700">Photos</span>
          </label>
        </div>
      </FilterGroup>
      
      <FilterGroup title="Categories">
        <div className="space-y-2 max-h-60 overflow-y-auto pl-1">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              value=""
              checked={!activeFilters.category}
              onChange={() => onFilterChange('category', '')}
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
            />
            <span className="text-gray-700">All Categories</span>
          </label>
          
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category}
                checked={activeFilters.category === category}
                onChange={() => onFilterChange('category', category)}
                className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
              />
              <span className="text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </FilterGroup>
      
      <FilterGroup title="Price">
        <div className="space-y-2 pl-1">
          {priceRanges.map((range) => (
            <label key={range.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                value={range.value}
                checked={activeFilters.price === range.value}
                onChange={() => onFilterChange('price', range.value)}
                className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
              />
              <span className="text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>
      </FilterGroup>
      
      <FilterGroup title="Sort By">
        <div className="space-y-2 pl-1">
          {sortOptions.map((option) => (
            <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="sort"
                value={option.value}
                checked={activeFilters.sort === option.value}
                onChange={() => onFilterChange('sort', option.value)}
                className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
              />
              <span className="text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </FilterGroup>
    </div>
  );
  
  const mobileFilterButton = (
    <Button
      onClick={toggleMobileFilter}
      variant="outline"
      className="md:hidden flex items-center space-x-2"
    >
      <Filter size={16} />
      <span>Filters</span>
      {hasActiveFilters && (
        <span className="ml-1 flex items-center justify-center w-5 h-5 bg-primary text-white text-xs font-medium rounded-full">
          {Object.values(activeFilters).filter(Boolean).length}
        </span>
      )}
    </Button>
  );
  
  const mobileFilters = (
    <AnimatePresence>
      {isMobileFilterOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleMobileFilter}
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30 }}
            className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white z-50 overflow-y-auto"
          >
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-medium text-lg">Filters</h2>
              <button
                onClick={toggleMobileFilter}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-4">
              {hasActiveFilters && (
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Active Filters</span>
                    <button
                      onClick={onClearFilters}
                      className="text-primary text-sm hover:text-primary/80 transition-colors"
                    >
                      Clear All
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    {Object.entries(activeFilters).map(([key, value]) => {
                      if (!value) return null;
                      
                      let label = '';
                      
                      if (key === 'type') {
                        label = value === 'video' ? 'Videos' : 'Photos';
                      } else if (key === 'category') {
                        label = value;
                      } else if (key === 'price') {
                        const priceOption = priceRanges.find(p => p.value === value);
                        label = priceOption?.label || value;
                      } else if (key === 'sort') {
                        const sortOption = sortOptions.find(s => s.value === value);
                        label = sortOption?.label || value;
                      }
                      
                      return (
                        <div
                          key={`${key}-${value}`}
                          className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700"
                        >
                          <span>{label}</span>
                          <button
                            onClick={() => onFilterChange(key, '')}
                            className="ml-1.5 text-gray-500 hover:text-gray-700"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {/* Mobile filter content - same as desktop but styled for mobile */}
              <FilterGroup title="Content Type">
                <div className="space-y-3 pl-1">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-type"
                      value=""
                      checked={!activeFilters.type}
                      onChange={() => onFilterChange('type', '')}
                      className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                    />
                    <span className="text-gray-700">All Content</span>
                  </label>
                  
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-type"
                      value="video"
                      checked={activeFilters.type === 'video'}
                      onChange={() => onFilterChange('type', 'video')}
                      className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                    />
                    <span className="text-gray-700">Videos</span>
                  </label>
                  
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-type"
                      value="photo"
                      checked={activeFilters.type === 'photo'}
                      onChange={() => onFilterChange('type', 'photo')}
                      className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                    />
                    <span className="text-gray-700">Photos</span>
                  </label>
                </div>
              </FilterGroup>
              
              <FilterGroup title="Categories">
                <div className="space-y-3 max-h-60 overflow-y-auto pl-1">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-category"
                      value=""
                      checked={!activeFilters.category}
                      onChange={() => onFilterChange('category', '')}
                      className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                    />
                    <span className="text-gray-700">All Categories</span>
                  </label>
                  
                  {categories.map((category) => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-category"
                        value={category}
                        checked={activeFilters.category === category}
                        onChange={() => onFilterChange('category', category)}
                        className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                      />
                      <span className="text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </FilterGroup>
              
              <FilterGroup title="Price">
                <div className="space-y-3 pl-1">
                  {priceRanges.map((range) => (
                    <label key={range.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-price"
                        value={range.value}
                        checked={activeFilters.price === range.value}
                        onChange={() => onFilterChange('price', range.value)}
                        className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                      />
                      <span className="text-gray-700">{range.label}</span>
                    </label>
                  ))}
                </div>
              </FilterGroup>
              
              <FilterGroup title="Sort By">
                <div className="space-y-3 pl-1">
                  {sortOptions.map((option) => (
                    <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-sort"
                        value={option.value}
                        checked={activeFilters.sort === option.value}
                        onChange={() => onFilterChange('sort', option.value)}
                        className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </FilterGroup>
            </div>
            
            <div className="p-4 border-t border-gray-100 sticky bottom-0 bg-white">
              <Button onClick={toggleMobileFilter} className="w-full">
                Apply Filters
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
  
  return (
    <>
      {isMobile ? (
        <>
          {mobileFilterButton}
          {mobileFilters}
        </>
      ) : (
        desktopFilters
      )}
    </>
  );
};

export default FilterPanel;
