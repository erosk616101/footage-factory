
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeIn } from '@/utils/animations';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import MediaCard from '@/components/MediaCard';
import { mockMedia } from '@/utils/mockData';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  const handleSearch = (query: string) => {
    navigate(`/browse?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 opacity-60"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80')] bg-cover bg-center"></div>
        
        <motion.div 
          className="container mx-auto px-4 relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Find the perfect stock footage for your next project
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Access thousands of high-quality videos and photos from talented creators worldwide
          </p>
          
          <div className="max-w-3xl mx-auto">
            <SearchBar 
              placeholder="Search for videos, photos, illustrations..." 
              className="shadow-lg"
              onSearch={handleSearch}
            />
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" onClick={() => navigate('/browse')}>
              Browse Gallery
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              Become a Contributor
            </Button>
          </div>
        </motion.div>
      </section>
      
      {/* Featured Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Content</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the most popular stock footage that creators are using right now
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockMedia.slice(0, 8).map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button onClick={() => navigate('/browse')}>
              View All Content
            </Button>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find exactly what you need from our extensive collection
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Nature', 'Business', 'Technology', 'Food', 'Travel', 'People'].map((category) => (
              <motion.div
                key={category}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer"
                whileHover={{ y: -5 }}
                onClick={() => navigate(`/browse?category=${category}`)}
              >
                <div className="h-32 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-medium text-center group-hover:text-primary transition-colors">{category}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start selling your content?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community of creators and start earning from your creativity today
            </p>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Become a Contributor
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
