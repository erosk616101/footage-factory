
import React from 'react';
import UserLayout from '@/layouts/UserLayout';
import { CreditCard, Download, DownloadCloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Earnings = () => {
  // Mock earnings data
  const earnings = {
    total: 178.49,
    thisMonth: 42.50,
    available: 125.99,
    history: [] // Empty for now, could be populated with transaction history
  };
  
  // Top selling items
  const topItems = [
    { id: 1, title: 'Beach Sunset', downloads: 12, earnings: 24.99 },
    { id: 2, title: 'City Traffic', downloads: 35, earnings: 87.50 },
    { id: 3, title: 'Mountain View', downloads: 8, earnings: 16.00 },
  ];
  
  return (
    <UserLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Earnings</h1>
          <p className="text-gray-500 mt-1">Track your revenue and payments</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <p className="text-gray-500 text-sm">Total Earnings</p>
            <h3 className="text-3xl font-bold mt-1">${earnings.total.toFixed(2)}</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <p className="text-gray-500 text-sm">This Month</p>
            <h3 className="text-3xl font-bold mt-1">${earnings.thisMonth.toFixed(2)}</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <p className="text-gray-500 text-sm">Available for Payout</p>
            <h3 className="text-3xl font-bold mt-1">${earnings.available.toFixed(2)}</h3>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Earnings Chart</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Month</Button>
              <Button variant="outline" size="sm">Quarter</Button>
              <Button variant="outline" size="sm">Year</Button>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500">Earnings chart will be displayed here</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Top Selling Items</h3>
            <div className="space-y-4">
              {topItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <DownloadCloud size={14} />
                      <span>{item.downloads} downloads</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${item.earnings.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Payout Methods</h3>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Visa ending in 4242</p>
                    <p className="text-sm text-gray-500">Expires 12/25</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Default</Button>
              </div>
              
              <Button className="w-full">Add Payment Method</Button>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Earnings;
