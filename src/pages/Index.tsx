
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeIn } from '@/utils/animations';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import MediaCard from '@/components/MediaCard';
import { mockMedia } from '@/utils/mockData';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Award, Clock, Shield, CreditCard, DollarSign, Play, Image, Users, Zap, CheckCircle, Gift } from 'lucide-react';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const navigate = useNavigate();
  
  const handleSearch = (query: string) => {
    navigate(`/browse?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Parallax Effect - Updated Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=90')] bg-cover bg-center"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/70 to-gray-800/50"></div>
        
        <motion.div 
          className="container mx-auto px-4 relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="inline-block bg-primary/20 backdrop-blur-sm text-primary rounded-full px-4 py-1 text-sm font-medium mb-6">
              Premium Quality Stock Assets
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Habibi Stock - Elevate Your Projects
            </span>
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
            <Button variant="default" size="lg" onClick={() => navigate('/browse')} className="bg-primary hover:bg-primary/90 text-white">
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

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-center justify-center">
            <motion.div 
              className="w-1.5 h-3 bg-white rounded-full"
              animate={{ 
                y: [0, 6, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>
        </motion.div>
      </section>
      
      {/* Stats Section */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div 
              className="p-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">2M+</h3>
              <p className="text-gray-600">Stock Assets</p>
            </motion.div>
            
            <motion.div 
              className="p-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">50K+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </motion.div>
            
            <motion.div 
              className="p-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">4.9/5</h3>
              <p className="text-gray-600">Customer Rating</p>
            </motion.div>
            
            <motion.div 
              className="p-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600">Customer Support</p>
            </motion.div>
          </div>
        </div>
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
            <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
              Unmatched Quality
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Habibi Stock?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The premier destination for premium stock footage and images
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              whileHover={{ y: -5 }}
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
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              whileHover={{ y: -5 }}
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
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              whileHover={{ y: -5 }}
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

      {/* Features Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
              Exceptional Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed for Professionals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Powerful tools and features that make your creative workflow seamless
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Instant Downloads</h3>
              <p className="text-gray-600">
                Get your assets immediately after purchase with our lightning-fast delivery system.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Content Verification</h3>
              <p className="text-gray-600">
                All assets are verified for authenticity and quality by our expert content team.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Creator Community</h3>
              <p className="text-gray-600">
                Join our vibrant community of creators and earn money from your content.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 text-red-600">
                <Play size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">4K/8K Video Support</h3>
              <p className="text-gray-600">
                Get ultra-high-definition videos that look stunning on any screen size.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 text-amber-600">
                <Image size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">RAW Image Files</h3>
              <p className="text-gray-600">
                Download RAW image files for maximum editing flexibility and quality.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-600">
                <Gift size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Exclusive Collections</h3>
              <p className="text-gray-600">
                Access curated collections of premium content not available elsewhere.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section with Enhanced Design */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
              Flexible Options
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans for Every Need</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the plan that works best for your creative needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col relative overflow-hidden"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              whileHover={{ y: -5 }}
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
              
              <Button variant="outline" onClick={() => navigate('/pricing')} className="w-full">
                Choose Plan
              </Button>
            </motion.div>
            
            <motion.div 
              className="bg-primary p-8 rounded-xl shadow-lg border border-primary/20 flex flex-col relative z-10 transform md:scale-105 md:-translate-y-2"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 py-1 rounded-full text-sm font-semibold">
                Most Popular
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
              
              <Button variant="secondary" onClick={() => navigate('/pricing')} className="w-full bg-white text-primary hover:bg-white/90">
                Choose Plan
              </Button>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col relative overflow-hidden"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              whileHover={{ y: -5 }}
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
              
              <Button variant="outline" onClick={() => navigate('/pricing')} className="w-full">
                Choose Plan
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Trending Content Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
              Discover
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Content</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the most popular stock footage that creators are using right now
            </p>
          </motion.div>
          
          <Tabs defaultValue="videos" className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100 p-1">
                <TabsTrigger value="videos" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Videos
                </TabsTrigger>
                <TabsTrigger value="photos" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Photos
                </TabsTrigger>
                <TabsTrigger value="illustrations" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Illustrations
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="videos">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mockMedia.filter(item => item.type === 'video').slice(0, 4).map((item) => (
                  <MediaCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="photos">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mockMedia.filter(item => item.type === 'photo').slice(0, 4).map((item) => (
                  <MediaCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="illustrations">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mockMedia.slice(4, 8).map((item) => (
                  <MediaCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-12">
            <Button onClick={() => navigate('/browse')} className="bg-primary hover:bg-primary/90 text-white">
              View All Content
            </Button>
          </div>
        </div>
      </section>
      
      {/* Categories Section with Enhanced Design */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
              Categories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find exactly what you need from our extensive collection
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Nature', icon: '🌄', bg: 'bg-green-100' },
              { name: 'Business', icon: '💼', bg: 'bg-blue-100' },
              { name: 'Technology', icon: '💻', bg: 'bg-purple-100' },
              { name: 'Food', icon: '🍔', bg: 'bg-amber-100' },
              { name: 'Travel', icon: '✈️', bg: 'bg-cyan-100' },
              { name: 'People', icon: '👪', bg: 'bg-pink-100' }
            ].map((category) => (
              <motion.div
                key={category.name}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -5 }}
                onClick={() => navigate(`/browse?category=${category.name}`)}
              >
                <div className={`h-32 ${category.bg} flex items-center justify-center text-4xl`}>
                  {category.icon}
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-center group-hover:text-primary transition-colors">{category.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of creatives worldwide
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              whileHover={{ y: -5 }}
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
              <div className="mt-4 flex text-yellow-400">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              whileHover={{ y: -5 }}
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
              <div className="mt-4 flex text-yellow-400">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              whileHover={{ y: -5 }}
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
              <div className="mt-4 flex text-yellow-400">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section with Enhanced Design */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium mb-6">
              Join Our Community
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start selling your content?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join our community of creators and start earning from your creativity today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Become a Contributor
              </Button>
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
