
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import AuthForm from '@/components/AuthForm';
import { useLocation } from 'react-router-dom';

const Auth = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const mode = searchParams.get('mode') === 'register' ? 'register' : 'login';
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 mt-16">
        <motion.div 
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <AuthForm mode={mode} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
