
import React from 'react';
import UserLayout from '@/layouts/UserLayout';
import { Button } from '@/components/ui/button';
import { CreditCard, Key, Lock, Wallet } from 'lucide-react';

const Settings = () => {
  return (
    <UserLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
        
        <div className="space-y-8">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-medium">Security Settings</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <input 
                  type="password" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="••••••••"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input 
                  type="password" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="••••••••"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <input 
                  type="password" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="••••••••"
                />
              </div>
              
              <div className="pt-2">
                <Button>Update Password</Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Wallet className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-medium">Payout Settings</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Payout Method
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                  <option>PayPal</option>
                  <option>Bank Transfer</option>
                  <option>Stripe</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  PayPal Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="your-paypal@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Automatic Payouts
                </label>
                <div className="flex items-center gap-2 mt-2">
                  <input 
                    type="checkbox" 
                    id="auto-payout" 
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <label htmlFor="auto-payout" className="text-sm text-gray-700">
                    Automatically transfer funds when balance exceeds $100
                  </label>
                </div>
              </div>
              
              <div className="pt-2">
                <Button>Save Payout Settings</Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Key className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-medium">API Access</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                Generate API keys to access our platform programmatically.
              </p>
              
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Your API Key</p>
                    <p className="text-sm text-gray-500 mt-1">Last used: Never</p>
                  </div>
                  <Button variant="outline" size="sm">Generate New Key</Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-medium">Billing Settings</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Default License Type
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                  <option>Standard License</option>
                  <option>Extended License</option>
                  <option>Custom License</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tax Information
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Tax ID / VAT Number"
                />
              </div>
              
              <div className="pt-2">
                <Button>Save Billing Settings</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Settings;
