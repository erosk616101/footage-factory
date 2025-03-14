
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeIn } from '@/utils/animations';
import Navbar from '@/components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Check, Download, User } from 'lucide-react';

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <motion.div 
        className="container mx-auto px-4 py-16 mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for your purchase. Your order has been processed successfully.
            </p>
            
            <div className="space-y-2 mb-8">
              <div className="flex justify-between px-4 py-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-medium">#ORD-2023-42589</span>
              </div>
              <div className="flex justify-between px-4 py-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between px-4 py-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-medium">$40.45</span>
              </div>
              <div className="flex justify-between px-4 py-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Payment Method:</span>
                <span className="font-medium">Credit Card</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" onClick={() => navigate('/browse')} className="flex-1">
                Continue Shopping
              </Button>
              <Button onClick={() => navigate('/user-dashboard')} className="flex items-center justify-center gap-2 flex-1">
                <User size={18} />
                Go to Dashboard
              </Button>
            </div>
            
            <div className="mt-8 p-4 rounded-lg bg-primary/10 flex items-center gap-3">
              <Download className="text-primary flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-medium">Your downloads are ready</h3>
                <p className="text-sm text-gray-600">
                  Visit your dashboard to download your purchased items
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CheckoutSuccess;
