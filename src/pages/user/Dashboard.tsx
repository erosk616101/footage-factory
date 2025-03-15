
import React from 'react';
import UserLayout from '@/layouts/UserLayout';
import { Link } from 'react-router-dom';
import { 
  Upload, Download, CreditCard, Bell, 
  Settings, BarChart, Wallet, User 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const userStats = [
    { title: 'Total Uploads', value: '24', icon: Upload, link: '/user-dashboard/uploads' },
    { title: 'Downloads', value: '145', icon: Download, link: '/user-dashboard/downloads' },
    { title: 'Earnings', value: '$1,240.50', icon: CreditCard, link: '/user-dashboard/earnings' },
    { title: 'Notifications', value: '3', icon: Bell, link: '/user-dashboard/notifications' },
  ];

  const quickLinks = [
    { title: 'Edit Profile', icon: User, link: '/user-dashboard/profile' },
    { title: 'Analytics', icon: BarChart, link: '/user-dashboard/analytics' },
    { title: 'Payout History', icon: Wallet, link: '/user-dashboard/payouts' },
    { title: 'Settings', icon: Settings, link: '/user-dashboard/settings' },
  ];

  return (
    <UserLayout>
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">User Dashboard</h1>
            <p className="text-gray-500 mt-1">Welcome back, Jane!</p>
          </div>
          
          <Button className="flex items-center gap-2">
            <Upload size={18} />
            Upload New Content
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userStats.map((stat, index) => (
            <Link 
              key={index} 
              to={stat.link}
              className="bg-white hover:bg-gray-50 transition-colors duration-200 rounded-xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                </div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <p className="font-medium">Mountain Sunrise Photo purchased</p>
                <p className="text-sm text-gray-500">$15.00 earned - 3 hours ago</p>
              </div>
              <div className="border-b pb-3">
                <p className="font-medium">City Nightscape uploaded</p>
                <p className="text-sm text-gray-500">2 days ago</p>
              </div>
              <div>
                <p className="font-medium">Beach Sunset Video downloaded 5 times</p>
                <p className="text-sm text-gray-500">$25.00 earned - 1 week ago</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-medium mb-4">Quick Links</h2>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index} 
                  to={link.link}
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  <div className="p-1.5 bg-primary/10 rounded-full">
                    <link.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Dashboard;
