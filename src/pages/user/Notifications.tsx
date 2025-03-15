
import React from 'react';
import UserLayout from '@/layouts/UserLayout';
import { Bell, Check, DollarSign, Download, MessageSquare, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Notifications = () => {
  // Mock notifications data
  const notifications = [
    { 
      id: 1, 
      title: 'New sale', 
      message: 'Your photo "Mountain Sunrise" was purchased for $15.00', 
      time: '2 hours ago', 
      read: false,
      icon: DollarSign
    },
    { 
      id: 2, 
      title: 'Content approved', 
      message: 'Your upload "City Nightscape" has been approved and is now available for sale', 
      time: '1 day ago', 
      read: false,
      icon: Check
    },
    { 
      id: 3, 
      title: 'New message', 
      message: 'You have a new message from admin regarding your recent upload', 
      time: '3 days ago', 
      read: true,
      icon: MessageSquare
    },
    { 
      id: 4, 
      title: 'Download milestone', 
      message: 'Congratulations! Your content has reached 100 downloads', 
      time: '1 week ago', 
      read: true,
      icon: Download
    },
    { 
      id: 5, 
      title: 'Upload reminder', 
      message: 'You haven\'t uploaded new content in 30 days. Keep your portfolio fresh!', 
      time: '2 weeks ago', 
      read: true,
      icon: Upload
    },
  ];
  
  return (
    <UserLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Notifications</h1>
            <p className="text-gray-500 mt-1">Stay updated with your account activity</p>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" size="sm">Mark All as Read</Button>
            <Button variant="outline" size="sm">Settings</Button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm divide-y">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`p-4 flex items-start gap-4 ${!notification.read ? 'bg-primary/5' : ''}`}
              >
                <div className={`p-2 rounded-full ${!notification.read ? 'bg-primary/10' : 'bg-gray-100'}`}>
                  <notification.icon className={`h-5 w-5 ${!notification.read ? 'text-primary' : 'text-gray-500'}`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`font-medium ${!notification.read ? 'text-primary' : ''}`}>
                      {notification.title}
                    </h3>
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                  <p className="text-gray-600 mt-1">{notification.message}</p>
                </div>
                
                {!notification.read && (
                  <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                )}
              </div>
            ))
          ) : (
            <div className="p-8 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                <Bell className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium">No notifications</h3>
              <p className="text-gray-500 mt-1">You're all caught up!</p>
            </div>
          )}
        </div>
        
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-medium mb-4">Notification Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Sales notifications</p>
                <p className="text-sm text-gray-500">Get notified when your content is purchased</p>
              </div>
              <input 
                type="checkbox" 
                defaultChecked 
                className="h-4 w-4 rounded border-gray-300"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Content approval updates</p>
                <p className="text-sm text-gray-500">Get notified about your upload status</p>
              </div>
              <input 
                type="checkbox" 
                defaultChecked 
                className="h-4 w-4 rounded border-gray-300"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Messages</p>
                <p className="text-sm text-gray-500">Get notified when you receive messages</p>
              </div>
              <input 
                type="checkbox" 
                defaultChecked 
                className="h-4 w-4 rounded border-gray-300"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Marketing emails</p>
                <p className="text-sm text-gray-500">Receive promotional content and offers</p>
              </div>
              <input 
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300"
              />
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Notifications;
