
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  CheckCircle, Download, Edit, Eye, Search, Trash2, User, 
  Users, XCircle, DollarSign, BarChart2, Settings, 
  FileText, Bell, LogOut, ShieldCheck, Home
} from 'lucide-react';
import { fadeIn } from '@/utils/animations';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent
} from '@/components/ui/sidebar';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('users');
  
  // Mock data
  const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'creator', status: 'active', uploads: 12, joined: '2023-03-15' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'buyer', status: 'active', uploads: 8, joined: '2023-04-22' },
    { id: '3', name: 'Mike Johnson', email: 'mike@example.com', role: 'creator', status: 'suspended', uploads: 5, joined: '2023-05-10' },
    { id: '4', name: 'Sara Williams', email: 'sara@example.com', role: 'admin', status: 'active', uploads: 0, joined: '2023-02-01' },
  ];
  
  const content = [
    { id: '1', title: 'Beach Sunset', type: 'photo', creator: 'John Doe', status: 'approved', date: '2023-05-15', downloads: 12 },
    { id: '2', title: 'City Traffic', type: 'video', creator: 'Jane Smith', status: 'pending', date: '2023-06-02', downloads: 35 },
    { id: '3', title: 'Mountain View', type: 'photo', creator: 'John Doe', status: 'approved', date: '2023-06-12', downloads: 8 },
    { id: '4', title: 'Office Meeting', type: 'video', creator: 'Mike Johnson', status: 'rejected', date: '2023-07-01', downloads: 0 },
  ];
  
  const payments = [
    { id: '1', amount: 120.50, recipient: 'John Doe', status: 'completed', date: '2023-07-01' },
    { id: '2', amount: 75.25, recipient: 'Jane Smith', status: 'pending', date: '2023-07-05' },
    { id: '3', amount: 42.00, recipient: 'Mike Johnson', status: 'completed', date: '2023-06-15' },
  ];
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center px-2">
              <div className="flex items-center gap-2 text-xl font-bold text-primary">
                Habibi Admin
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild onClick={() => navigate("/")}>
                      <a>
                        <Home />
                        <span>Home</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={true}>
                      <a>
                        <ShieldCheck />
                        <span>Admin Dashboard</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Management</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild onClick={() => setActiveTab('users')}>
                      <a>
                        <Users />
                        <span>Users</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild onClick={() => setActiveTab('content')}>
                      <a>
                        <FileText />
                        <span>Content</span>
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>{content.filter(item => item.status === 'pending').length}</SidebarMenuBadge>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild onClick={() => setActiveTab('payments')}>
                      <a>
                        <DollarSign />
                        <span>Payments</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Reports</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a>
                        <BarChart2 />
                        <span>Analytics</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a>
                        <Bell />
                        <span>Notifications</span>
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>5</SidebarMenuBadge>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a>
                        <Settings />
                        <span>Settings</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-red-500 hover:text-red-600">
                  <a>
                    <LogOut />
                    <span>Logout</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>

          <SidebarRail />
        </Sidebar>

        {/* Main content area */}
        <SidebarInset className="bg-gray-50">
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div className="flex items-center gap-2">
                <SidebarTrigger className="md:hidden" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                  <p className="text-gray-500 mt-1">Manage users, content, and payments</p>
                </div>
              </div>
              
              <div className="relative w-full md:w-auto">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-80 pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Total Users</p>
                  <h3 className="text-2xl font-bold">432</h3>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Download className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Total Downloads</p>
                  <h3 className="text-2xl font-bold">1,284</h3>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Platform Revenue</p>
                  <h3 className="text-2xl font-bold">$8,942</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <Tabs defaultValue={activeTab} value={activeTab} className="w-full" onValueChange={setActiveTab}>
                <div className="px-6 pt-4">
                  <TabsList className="grid grid-cols-3 w-full max-w-md">
                    <TabsTrigger value="users">Users</TabsTrigger>
                    <TabsTrigger value="content">Content</TabsTrigger>
                    <TabsTrigger value="payments">Payments</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="users" className="p-6">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Uploads</TableHead>
                          <TableHead>Joined</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell className="capitalize">{user.role}</TableCell>
                            <TableCell>
                              <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                user.status === 'active' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {user.status}
                              </span>
                            </TableCell>
                            <TableCell>{user.uploads}</TableCell>
                            <TableCell>{user.joined}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm">
                                  <Eye size={16} />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Edit size={16} />
                                </Button>
                                {user.status === 'active' ? (
                                  <Button variant="ghost" size="sm" className="text-red-500">
                                    <XCircle size={16} />
                                  </Button>
                                ) : (
                                  <Button variant="ghost" size="sm" className="text-green-500">
                                    <CheckCircle size={16} />
                                  </Button>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
                
                <TabsContent value="content" className="p-6">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Creator</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Downloads</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {content.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.title}</TableCell>
                            <TableCell className="capitalize">{item.type}</TableCell>
                            <TableCell>{item.creator}</TableCell>
                            <TableCell>
                              <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                item.status === 'approved' 
                                  ? 'bg-green-100 text-green-800' 
                                  : item.status === 'pending'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-red-100 text-red-800'
                              }`}>
                                {item.status}
                              </span>
                            </TableCell>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>{item.downloads}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm">
                                  <Eye size={16} />
                                </Button>
                                {item.status === 'pending' && (
                                  <>
                                    <Button variant="ghost" size="sm" className="text-green-500">
                                      <CheckCircle size={16} />
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-red-500">
                                      <XCircle size={16} />
                                    </Button>
                                  </>
                                )}
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
                
                <TabsContent value="payments" className="p-6">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Recipient</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {payments.map((payment) => (
                          <TableRow key={payment.id}>
                            <TableCell className="font-medium">#{payment.id}</TableCell>
                            <TableCell>${payment.amount.toFixed(2)}</TableCell>
                            <TableCell>{payment.recipient}</TableCell>
                            <TableCell>
                              <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                payment.status === 'completed' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {payment.status}
                              </span>
                            </TableCell>
                            <TableCell>{payment.date}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm">
                                  <Eye size={16} />
                                </Button>
                                {payment.status === 'pending' && (
                                  <Button variant="ghost" size="sm" className="text-green-500">
                                    <CheckCircle size={16} />
                                  </Button>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
