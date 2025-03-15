
import React from 'react';
import UserLayout from '@/layouts/UserLayout';
import { Button } from '@/components/ui/button';

const Analytics = () => {
  // Mock analytics data
  const overviewStats = [
    { title: 'Total Views', value: '2,456', change: '+12.5%' },
    { title: 'Download Rate', value: '6.8%', change: '+2.1%' },
    { title: 'Avg. Revenue/Item', value: '$14.50', change: '+4.2%' },
    { title: 'Unique Visitors', value: '843', change: '+8.7%' },
  ];
  
  // Top performing content
  const topContent = [
    { id: 1, title: 'Beach Sunset', views: 456, downloads: 32, earnings: 67.20 },
    { id: 2, title: 'City Traffic', views: 342, downloads: 28, earnings: 58.80 },
    { id: 3, title: 'Mountain View', views: 287, downloads: 15, earnings: 31.50 },
  ];
  
  return (
    <UserLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-gray-500 mt-1">Track your content performance</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {overviewStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <div className="flex items-end justify-between mt-1">
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <span className="text-sm text-green-600">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">View Statistics</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">7 Days</Button>
              <Button variant="outline" size="sm">30 Days</Button>
              <Button variant="outline" size="sm">90 Days</Button>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500">Views chart will be displayed here</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Top Performing Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topContent.map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-lg border p-4">
                <h4 className="font-medium">{item.title}</h4>
                <div className="mt-2 space-y-1">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">{item.views}</span> views
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">{item.downloads}</span> downloads
                  </p>
                  <p className="text-sm font-medium mt-2">${item.earnings.toFixed(2)} earned</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Analytics;
