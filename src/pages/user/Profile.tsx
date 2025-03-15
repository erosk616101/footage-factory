
import React from 'react';
import UserLayout from '@/layouts/UserLayout';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

const Profile = () => {
  // Mock user data
  const mockUser = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    avatar: 'https://i.pravatar.cc/150?img=5',
    bio: 'Stock photographer specializing in nature and travel imagery.',
    website: 'www.janedoephotography.com',
    socialMedia: {
      instagram: '@janedoephotos',
      twitter: '@janedoephoto'
    }
  };
  
  return (
    <UserLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {mockUser.avatar ? (
                <img src={mockUser.avatar} alt={mockUser.name} className="h-full w-full object-cover" />
              ) : (
                <User size={36} />
              )}
            </div>
            <div>
              <h4 className="text-xl font-medium">{mockUser.name}</h4>
              <p className="text-gray-500">{mockUser.email}</p>
              <div className="mt-3 flex gap-3">
                <Button variant="outline" size="sm">Change Avatar</Button>
                <Button variant="outline" size="sm">Remove</Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  defaultValue={mockUser.name}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  defaultValue={mockUser.email}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                rows={4}
                defaultValue={mockUser.bio}
              />
              <p className="text-xs text-gray-500 mt-1">
                Brief description for your profile, this will be displayed on your public profile.
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Website
              </label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                defaultValue={mockUser.website}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Instagram
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  defaultValue={mockUser.socialMedia.instagram}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Twitter
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  defaultValue={mockUser.socialMedia.twitter}
                />
              </div>
            </div>
            
            <div className="pt-4">
              <Button>Save Profile</Button>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Profile;
