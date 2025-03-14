
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Check, Eye, EyeOff, Loader2, LogIn } from 'lucide-react';
import { api } from '@/utils/mockData';
import { useToast } from "@/hooks/use-toast";

interface AuthFormProps {
  mode: 'login' | 'register';
  onSuccess?: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode, onSuccess }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (mode === 'register' && !formData.name) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      let response;
      
      if (mode === 'login') {
        response = await api.login(formData.email, formData.password);
      } else {
        response = await api.register(formData.name, formData.email, formData.password);
      }
      
      if (response.success) {
        toast({
          title: mode === 'login' ? 'Welcome back!' : 'Account created successfully!',
          description: mode === 'login' ? 'You are now logged in.' : 'You can now log in with your credentials.',
          variant: 'default',
        });
        
        if (onSuccess) {
          onSuccess();
        } else {
          navigate('/');
        }
      } else {
        toast({
          title: 'Error',
          description: response.error || 'Something went wrong. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    
    try {
      const response = await api.googleLogin();
      
      if (response.success) {
        toast({
          title: 'Welcome back!',
          description: 'You are now logged in with Google.',
          variant: 'default',
        });
        
        if (onSuccess) {
          onSuccess();
        } else {
          navigate('/');
        }
      } else {
        toast({
          title: 'Error',
          description: response.error || 'Something went wrong with Google login. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong with Google login. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-display font-bold text-gray-900">
          {mode === 'login' ? 'Welcome back' : 'Create your account'}
        </h2>
        <p className="mt-2 text-gray-600">
          {mode === 'login'
            ? 'Sign in to access your account'
            : 'Join our marketplace to find or sell amazing content'}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {mode === 'register' && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
              placeholder="Enter your name"
              disabled={isLoading}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>
        )}
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
            placeholder="Enter your email"
            disabled={isLoading}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors pr-10`}
              placeholder={mode === 'login' ? 'Enter your password' : 'Create a password'}
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </div>
        
        {mode === 'login' && (
          <div className="flex items-center justify-end">
            <a href="#" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              Forgot password?
            </a>
          </div>
        )}
        
        <Button
          type="submit"
          className="w-full h-12 flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <LogIn className="mr-2 h-4 w-4" />
          )}
          {mode === 'login' ? 'Sign In' : 'Create Account'}
        </Button>
      </form>
      
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>
        
        <div className="mt-6">
          <Button
            type="button"
            variant="outline"
            className="w-full h-12"
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            <img
              src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Google
          </Button>
        </div>
      </div>
      
      <p className="mt-8 text-center text-sm text-gray-600">
        {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
        <Button
          variant="link"
          className="font-medium text-primary hover:text-primary/80"
          onClick={() => navigate(`/auth?mode=${mode === 'login' ? 'register' : 'login'}`)}
        >
          {mode === 'login' ? 'Sign up' : 'Sign in'}
        </Button>
      </p>
    </motion.div>
  );
};

export default AuthForm;
