
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import { CreditCard, Shield, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="py-12 md:py-20">
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
            Pricing Options
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Choose Your Perfect Plan</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get access to thousands of high-quality stock videos, photos, and illustrations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {/* Single Item Plan */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col relative overflow-hidden"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
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
            
            <Button variant="outline" onClick={() => navigate('/cart')} className="w-full">
              Choose Plan
            </Button>
          </motion.div>

          {/* Monthly Plan */}
          <motion.div 
            className="bg-primary p-8 rounded-xl shadow-lg border border-primary/20 flex flex-col relative z-10 transform md:scale-105 md:-translate-y-2"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
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
            
            <Button variant="secondary" onClick={() => navigate('/cart')} className="w-full bg-white text-primary hover:bg-white/90">
              Choose Plan
            </Button>
          </motion.div>

          {/* Annual Plan */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col relative overflow-hidden"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
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
            
            <Button variant="outline" onClick={() => navigate('/cart')} className="w-full">
              Choose Plan
            </Button>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-2">Can I cancel my subscription anytime?</h3>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time. Your access will remain active until the end of your billing period.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-2">What types of licenses do you offer?</h3>
              <p className="text-gray-600">We offer standard and extended licenses. The standard license covers most commercial uses, while the extended license provides additional rights for merchandise and products for resale.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-2">Do you offer team plans?</h3>
              <p className="text-gray-600">Yes, we offer team plans for businesses with multiple users. Contact our sales team for custom pricing and setup.</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Pricing;
