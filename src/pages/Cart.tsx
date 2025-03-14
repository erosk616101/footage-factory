
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeIn } from '@/utils/animations';
import Navbar from '@/components/Navbar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { Trash2, MinusCircle, PlusCircle, ShoppingCart, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock cart items - in a real app, this would come from a cart state or context
const initialCartItems = [
  { id: '1', title: 'Beach Sunset', type: 'photo', price: 15.99, quantity: 1, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: '2', title: 'City Skyline', type: 'video', price: 29.99, quantity: 1, image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
];

const Cart = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState('');
  
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = couponCode === 'HABIBI20' ? subtotal * 0.2 : 0;
  const total = subtotal - discount;
  
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart",
    });
  };
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const applyCoupon = () => {
    if (couponCode === 'HABIBI20') {
      toast({
        title: "Coupon applied",
        description: "20% discount has been applied to your order",
      });
    } else {
      toast({
        title: "Invalid coupon",
        description: "Please enter a valid coupon code",
        variant: "destructive",
      });
    }
  };
  
  const proceedToCheckout = () => {
    // Check if user is logged in - this would use an auth context in a real app
    const isLoggedIn = false; // Mock for demo
    
    if (!isLoggedIn) {
      toast({
        title: "Sign in required",
        description: "Please sign in or create an account to complete your purchase",
      });
      navigate("/auth?mode=login&redirect=checkout");
    } else {
      navigate("/checkout");
    }
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
          <div className="flex items-center gap-3 mb-8">
            <ShoppingCart className="text-primary" size={28} />
            <h1 className="text-3xl font-bold">Your Cart</h1>
          </div>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="col-span-2">
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cartItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="w-16 h-16 rounded-md overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                              </div>
                              <div>
                                <p className="font-medium">{item.title}</p>
                                <p className="text-sm text-gray-500 capitalize">{item.type}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>${item.price.toFixed(2)}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="text-gray-500 hover:text-primary transition-colors"
                              >
                                <MinusCircle size={18} />
                              </button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="text-gray-500 hover:text-primary transition-colors"
                              >
                                <PlusCircle size={18} />
                              </button>
                            </div>
                          </TableCell>
                          <TableCell className="font-medium">${(item.price * item.quantity).toFixed(2)}</TableCell>
                          <TableCell>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" onClick={() => navigate('/browse')}>
                    Continue Shopping
                  </Button>
                  <div className="flex-1 flex gap-4">
                    <Input
                      placeholder="Coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button variant="secondary" onClick={applyCoupon}>
                      Apply Coupon
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="col-span-1">
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount (20%)</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="border-t border-gray-100 pt-3 mt-3"></div>
                    
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full flex items-center justify-center gap-2" onClick={proceedToCheckout}>
                    <CreditCard size={18} />
                    Proceed to Checkout
                  </Button>
                  
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    Secure payment processing. All data is encrypted.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-12 text-center">
              <div className="flex justify-center mb-4">
                <ShoppingCart className="text-gray-300" size={64} />
              </div>
              <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
              <Button size="lg" onClick={() => navigate('/browse')}>
                Browse Gallery
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Cart;
