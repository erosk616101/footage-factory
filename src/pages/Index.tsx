
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeIn } from '@/utils/animations';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import MediaCard from '@/components/MediaCard';
import { mockMedia } from '@/utils/mockData';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Award, Clock, Shield, CreditCard, DollarSign } from 'lucide-react';

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
            Habibi Stock - Premium Quality for Every Project
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
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 flex items-center gap-2"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart size={20} />
              View Cart
            </Button>
          </div>
        </motion.div>
      </section>
      
      {/* Why Choose Habibi Stock Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Habibi Stock?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The premier destination for premium stock footage and images
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Award className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Every piece of content is carefully curated and reviewed for professional quality. No low-resolution or amateur content.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Regular Updates</h3>
              <p className="text-gray-600">
                Thousands of new assets added daily. Our library is constantly growing with the latest trends and styles.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Licensed for Commercial Use</h3>
              <p className="text-gray-600">
                All content is fully licensed for commercial projects. Use with confidence in any professional setting.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the plan that works best for your creative needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Single Item</h3>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold">$15</span>
                  <span className="text-gray-500 mb-1">/item</span>
                </div>
                <p className="text-gray-600 mt-3">Perfect for one-time projects</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2">
                  <CreditCard className="text-primary mt-0.5" size={18} />
                  <span>Single download credit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CreditCard className="text-primary mt-0.5" size={18} />
                  <span>Commercial license</span>
                </li>
                <li className="flex items-start gap-2">
                  <CreditCard className="text-primary mt-0.5" size={18} />
                  <span>High-resolution files</span>
                </li>
              </ul>
              
              <Button variant="outline" onClick={() => navigate('/pricing')}>
                Choose Plan
              </Button>
            </motion.div>
            
            <motion.div 
              className="bg-primary p-8 rounded-xl shadow-lg border border-primary/20 flex flex-col relative"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <div className="absolute -top-4 right-8 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-white">Monthly</h3>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-white">$79</span>
                  <span className="text-white/80 mb-1">/month</span>
                </div>
                <p className="text-white/80 mt-3">Great for regular content needs</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2 text-white">
                  <DollarSign className="text-white mt-0.5" size={18} />
                  <span>50 downloads per month</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <DollarSign className="text-white mt-0.5" size={18} />
                  <span>Commercial license</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <DollarSign className="text-white mt-0.5" size={18} />
                  <span>High-resolution files</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <DollarSign className="text-white mt-0.5" size={18} />
                  <span>Priority support</span>
                </li>
              </ul>
              
              <Button variant="secondary" onClick={() => navigate('/pricing')}>
                Choose Plan
              </Button>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Annual</h3>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold">$799</span>
                  <span className="text-gray-500 mb-1">/year</span>
                </div>
                <p className="text-gray-600 mt-3">Best value for businesses</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2">
                  <Shield className="text-primary mt-0.5" size={18} />
                  <span>Unlimited downloads</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="text-primary mt-0.5" size={18} />
                  <span>Extended commercial license</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="text-primary mt-0.5" size={18} />
                  <span>4K resolution files</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="text-primary mt-0.5" size={18} />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="text-primary mt-0.5" size={18} />
                  <span>API access</span>
                </li>
              </ul>
              
              <Button variant="outline" onClick={() => navigate('/pricing')}>
                Choose Plan
              </Button>
            </motion.div>
          </div>
        </div>
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
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of creatives worldwide
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://i.pravatar.cc/150?img=1" alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">Marketing Director</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Habibi Stock has transformed our content marketing strategy. The quality is unmatched and the licensing terms are straightforward."
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://i.pravatar.cc/150?img=2" alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">David Chen</h4>
                  <p className="text-gray-500 text-sm">Film Producer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a filmmaker, I need high-quality stock footage that blends seamlessly with my productions. Habibi Stock consistently delivers exceptional content."
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://i.pravatar.cc/150?img=3" alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Maria Rodriguez</h4>
                  <p className="text-gray-500 text-sm">Graphic Designer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The variety and quality of images available on Habibi Stock have elevated my design work. The subscription model saves me time and money."
              </p>
            </motion.div>
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
