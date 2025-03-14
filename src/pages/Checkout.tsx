
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { fadeIn } from '@/utils/animations';
import Navbar from '@/components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Check, CreditCard, ShieldCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/checkout/success');
      
      toast({
        title: "Payment successful!",
        description: "Your order has been processed successfully.",
      });
    }, 2000);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <motion.div 
        className="container mx-auto px-4 py-16 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="col-span-2">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Billing Information</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <Input required placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <Input required placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <Input type="email" required placeholder="Enter your email address" />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <Input required placeholder="Enter your street address" />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <Input required placeholder="City" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
                        <Input required placeholder="State/Province" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Zip/Postal Code</label>
                        <Input required placeholder="Zip/Postal" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                    
                    <Tabs value={paymentMethod} onValueChange={setPaymentMethod} className="w-full">
                      <TabsList className="grid grid-cols-2 mb-6">
                        <TabsTrigger value="credit-card">Credit Card</TabsTrigger>
                        <TabsTrigger value="paypal">PayPal</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="credit-card">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                            <Input required placeholder="1234 5678 9012 3456" />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
                              <Input required placeholder="MM/YY" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                              <Input required placeholder="123" />
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                            <Input required placeholder="Name as it appears on card" />
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="paypal">
                        <div className="text-center p-8">
                          <p className="mb-4 text-gray-600">You will be redirected to PayPal to complete your purchase securely.</p>
                          <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" alt="PayPal" className="h-16 mx-auto" />
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                  
                  <div className="mt-8">
                    <Button type="submit" className="w-full h-12" disabled={isProcessing}>
                      {isProcessing ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <CreditCard className="mr-2 h-5 w-5" />
                          Complete Purchase
                        </>
                      )}
                    </Button>
                    
                    <div className="flex items-center justify-center mt-4">
                      <ShieldCheck size={18} className="text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">Secure payment processing</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="col-span-1">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-16 rounded-md bg-gray-100 flex-shrink-0 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Product" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Beach Sunset</h4>
                      <p className="text-sm text-gray-500">Photo</p>
                      <div className="flex justify-between mt-1">
                        <span className="text-sm">1 × $15.99</span>
                        <span className="font-medium">$15.99</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-16 rounded-md bg-gray-100 flex-shrink-0 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Product" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">City Skyline</h4>
                      <p className="text-sm text-gray-500">Video</p>
                      <div className="flex justify-between mt-1">
                        <span className="text-sm">1 × $29.99</span>
                        <span className="font-medium">$29.99</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Subtotal</span>
                      <span>$45.98</span>
                    </div>
                    
                    <div className="flex justify-between text-green-600 mb-2">
                      <span>Discount (20%)</span>
                      <span>-$9.20</span>
                    </div>
                    
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Tax</span>
                      <span>$3.67</span>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-2 mt-2"></div>
                    
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>$40.45</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Checkout;
