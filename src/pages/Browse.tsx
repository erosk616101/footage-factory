
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { fadeIn } from '@/utils/animations';
import Navbar from '@/components/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import { Filter, Search, ShoppingCart, Plus, Tag } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import MediaCard from '@/components/MediaCard';
import { mockMedia } from '@/utils/mockData';
import { useToast } from '@/hooks/use-toast';

const Browse = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredMedia, setFilteredMedia] = useState(mockMedia);
  
  // Get search param from URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('search');
    const category = searchParams.get('category');
    
    if (query) {
      setSearchQuery(query);
    }
    
    if (category) {
      setSelectedCategory(category);
    }
    
    // Apply initial filtering
    applyFilters(query || '', category || '', selectedType);
  }, [location.search]);
  
  const applyFilters = (query: string, category: string, type: string) => {
    let filtered = [...mockMedia];
    
    // Apply search query filter
    if (query) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
    }
    
    // Apply category filter
    if (category) {
      filtered = filtered.filter(item => 
        item.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Apply type filter
    if (type) {
      filtered = filtered.filter(item => item.type === type);
    }
    
    setFilteredMedia(filtered);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters(searchQuery, selectedCategory, selectedType);
    
    // Update URL with search query
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('search', searchQuery);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
    applyFilters(searchQuery, category === selectedCategory ? '' : category, selectedType);
  };
  
  const handleTypeChange = (type: string) => {
    setSelectedType(type === selectedType ? '' : type);
    applyFilters(searchQuery, selectedCategory, type === selectedType ? '' : type);
  };
  
  const addToCart = (item: any) => {
    toast({
      title: "Added to cart",
      description: `${item.title} has been added to your cart.`,
    });
  };
  
  const categories = ['Nature', 'Business', 'Technology', 'Food', 'Travel', 'People'];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <motion.div 
        className="container mx-auto px-4 py-16 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Browse Stock Content</h1>
              <p className="text-gray-600">Find the perfect content for your next project</p>
            </div>
            
            <form onSubmit={handleSearch} className="w-full md:w-auto flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full md:w-80"
                />
              </div>
              <Button type="submit">Search</Button>
            </form>
          </div>
          
          <div className="md:flex gap-8">
            {/* Mobile filter toggle */}
            <div className="md:hidden mb-4">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={18} />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
            </div>
            
            {/* Filters - Desktop always visible, mobile conditionally visible */}
            <div className={`md:w-72 ${showFilters ? 'block' : 'hidden md:block'}`}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Filter size={20} className="text-gray-500" />
                  Filters
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <Tag size={18} className="text-gray-500" />
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center gap-2">
                          <Checkbox 
                            id={`category-${category}`} 
                            checked={selectedCategory === category}
                            onCheckedChange={() => handleCategoryChange(category)}
                          />
                          <label htmlFor={`category-${category}`} className="text-sm cursor-pointer">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Media Type</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox 
                          id="type-photo" 
                          checked={selectedType === 'photo'}
                          onCheckedChange={() => handleTypeChange('photo')}
                        />
                        <label htmlFor="type-photo" className="text-sm cursor-pointer">
                          Photos
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox 
                          id="type-video" 
                          checked={selectedType === 'video'}
                          onCheckedChange={() => handleTypeChange('video')}
                        />
                        <label htmlFor="type-video" className="text-sm cursor-pointer">
                          Videos
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('');
                        setSelectedType('');
                        applyFilters('', '', '');
                        navigate('/browse');
                      }}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Grid */}
            <div className="flex-1">
              {filteredMedia.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMedia.map((item) => (
                    <div key={item.id} className="group relative">
                      <MediaCard item={item} />
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="sm" className="rounded-full shadow-md" onClick={() => addToCart(item)}>
                          <ShoppingCart size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-12 text-center">
                  <h2 className="text-2xl font-bold mb-2">No results found</h2>
                  <p className="text-gray-600 mb-6">Try adjusting your search or filters to find what you're looking for.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('');
                      setSelectedType('');
                      applyFilters('', '', '');
                      navigate('/browse');
                    }}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Browse;
