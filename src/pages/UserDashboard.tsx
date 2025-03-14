
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Download, Edit, Eye, Trash2, Upload } from 'lucide-react';
import { fadeIn } from '@/utils/animations';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('uploads');
  
  // Mock data - in a real app this would come from API
  const uploads = [
    { id: '1', title: 'Beach Sunset', type: 'photo', date: '2023-05-15', downloads: 12, earnings: 24.99 },
    { id: '2', title: 'City Traffic', type: 'video', date: '2023-06-02', downloads: 35, earnings: 87.50 },
    { id: '3', title: 'Mountain View', type: 'photo', date: '2023-06-12', downloads: 8, earnings: 16.00 },
    { id: '4', title: 'Office Meeting', type: 'video', date: '2023-07-01', downloads: 20, earnings: 50.00 },
  ];
  
  const purchases = [
    { id: '1', title: 'Aerial City View', type: 'video', date: '2023-05-20', price: 39.99 },
    { id: '2', title: 'Abstract Background', type: 'photo', date: '2023-06-15', price: 15.00 },
  ];
  
  return (
    <motion.div 
      className="container mx-auto px-4 py-8 max-w-6xl"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
          <p className="text-gray-500 mt-1">Manage your uploads and track earnings</p>
        </div>
        <Button className="flex items-center gap-2">
          <Upload size={18} />
          Upload New Content
        </Button>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <Tabs defaultValue="uploads" className="w-full" onValueChange={setActiveTab}>
          <div className="px-6 pt-4">
            <TabsList className="grid grid-cols-4 w-full max-w-md">
              <TabsTrigger value="uploads">My Uploads</TabsTrigger>
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
              <TabsTrigger value="purchases">Purchases</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="uploads" className="p-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Upload Date</TableHead>
                    <TableHead>Downloads</TableHead>
                    <TableHead>Earnings</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {uploads.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.title}</TableCell>
                      <TableCell className="capitalize">{item.type}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.downloads}</TableCell>
                      <TableCell>${item.earnings.toFixed(2)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye size={16} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit size={16} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="earnings" className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-500 text-sm">Total Earnings</p>
                <h3 className="text-3xl font-bold mt-1">$178.49</h3>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-500 text-sm">This Month</p>
                <h3 className="text-3xl font-bold mt-1">$42.50</h3>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-500 text-sm">Available for Payout</p>
                <h3 className="text-3xl font-bold mt-1">$125.99</h3>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Earnings Chart</h3>
              <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-500">Earnings chart will be displayed here</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Payout History</h3>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <p className="text-gray-500">No payouts processed yet</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="purchases" className="p-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Purchase Date</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {purchases.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.title}</TableCell>
                      <TableCell className="capitalize">{item.type}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>${item.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Download size={14} />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="p-6">
            <div className="max-w-xl">
              <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    defaultValue="Jane Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    defaultValue="jane.doe@example.com"
                  />
                </div>
                
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
                
                <div className="pt-4">
                  <Button>Save Changes</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default UserDashboard;
