
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart, CheckCircle, CreditCard, Download, FileText, Home,
  Image, LogOut, Settings, Shield, Upload, Users, Wallet, XCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
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

const mockUser = {
  name: 'Admin User',
  email: 'admin@example.com',
  avatar: 'https://i.pravatar.cc/150?img=4',
  role: 'admin'
};

// Mock data for admin dashboard
const pendingContent = [
  { id: '1', title: 'Mountain Landscape', author: 'Jane Smith', type: 'photo', submitDate: '2023-06-15' },
  { id: '2', title: 'Urban Life Documentary', author: 'Alex Johnson', type: 'video', submitDate: '2023-06-18' },
  { id: '3', title: 'Wildlife Collection', author: 'Mark Davis', type: 'photo', submitDate: '2023-06-20' },
];

const recentSales = [
  { id: '1', user: 'Sarah Miller', item: 'Aerial City View', amount: 39.99, date: '2023-06-22' },
  { id: '2', user: 'John Doe', item: 'Abstract Background', amount: 15.00, date: '2023-06-21' },
  { id: '3', user: 'Lisa Wong', item: 'Business Meeting', amount: 45.50, date: '2023-06-20' },
  { id: '4', user: 'Robert Chen', item: 'Nature Collection', amount: 99.00, date: '2023-06-19' },
];

const users = [
  { id: '101', name: 'Sarah Miller', email: 'sarah@example.com', role: 'buyer', joined: '2023-05-10', status: 'active' },
  { id: '102', name: 'John Doe', email: 'john@example.com', role: 'creator', joined: '2023-04-15', status: 'active' },
  { id: '103', name: 'Lisa Wong', email: 'lisa@example.com', role: 'buyer', joined: '2023-06-01', status: 'active' },
  { id: '104', name: 'Robert Chen', email: 'robert@example.com', role: 'creator', joined: '2023-03-22', status: 'inactive' },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center px-2">
              <div className="flex items-center gap-2 text-xl font-bold text-primary">
                Habibi Stock
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
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
                        <Shield />
                        <span>Admin</span>
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
                    <SidebarMenuButton asChild onClick={() => setActiveTab('overview')}>
                      <a>
                        <BarChart />
                        <span>Overview</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild onClick={() => setActiveTab('content')}>
                      <a>
                        <Image />
                        <span>Content</span>
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>{pendingContent.length}</SidebarMenuBadge>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild onClick={() => setActiveTab('users')}>
                      <a>
                        <Users />
                        <span>Users</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild onClick={() => setActiveTab('sales')}>
                      <a>
                        <CreditCard />
                        <span>Sales</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild onClick={() => setActiveTab('reports')}>
                      <a>
                        <FileText />
                        <span>Reports</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Settings</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild onClick={() => setActiveTab('settings')}>
                      <a>
                        <Settings />
                        <span>Site Settings</span>
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
          <DashboardHeader user={mockUser} />
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <p className="text-gray-500 mt-1">Manage users, content, and platform settings</p>
              </div>
            </div>

            <div className="w-full">
              <Tabs defaultValue={activeTab} value={activeTab} className="w-full" onValueChange={setActiveTab}>
                <div className="mb-6">
                  <TabsList className="grid w-full max-w-2xl grid-cols-5">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="content">Content</TabsTrigger>
                    <TabsTrigger value="users">Users</TabsTrigger>
                    <TabsTrigger value="sales">Sales</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="overview" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground mt-1">+20.1% from last month</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+2,350</div>
                        <p className="text-xs text-muted-foreground mt-1">+180 new this week</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Content Items</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">12,234</div>
                        <p className="text-xs text-muted-foreground mt-1">+340 this month</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Sales</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-muted-foreground mt-1">+201 since yesterday</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="col-span-4">
                      <CardHeader>
                        <CardTitle>Revenue Overview</CardTitle>
                      </CardHeader>
                      <CardContent className="pl-2">
                        <div className="h-80 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
                          <p className="text-gray-500">Revenue chart will be displayed here</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="col-span-3">
                      <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                        <CardDescription>
                          You made {recentSales.length} sales this period
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {recentSales.map((sale) => (
                            <div key={sale.id} className="flex items-center">
                              <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">{sale.user}</p>
                                <p className="text-sm text-muted-foreground">{sale.item}</p>
                              </div>
                              <div className="ml-auto font-medium">${sale.amount.toFixed(2)}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="content" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Content Approval</CardTitle>
                      <CardDescription>
                        Review and approve new content submissions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Submit Date</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {pendingContent.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="font-medium">{item.title}</TableCell>
                              <TableCell>{item.author}</TableCell>
                              <TableCell className="capitalize">{item.type}</TableCell>
                              <TableCell>{item.submitDate}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <Button size="sm" variant="outline" className="h-8">
                                    Preview
                                  </Button>
                                  <Button size="sm" variant="success" className="h-8">
                                    <CheckCircle className="mr-1 h-4 w-4" />
                                    Approve
                                  </Button>
                                  <Button size="sm" variant="destructive" className="h-8">
                                    <XCircle className="mr-1 h-4 w-4" />
                                    Reject
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Content Analytics</CardTitle>
                      <CardDescription>
                        Track performance of content across the platform
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
                        <p className="text-gray-500">Content analytics chart will be displayed here</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="users" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>User Management</CardTitle>
                      <CardDescription>
                        View and manage user accounts
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Joined</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {users.map((user) => (
                            <TableRow key={user.id}>
                              <TableCell className="font-medium">{user.name}</TableCell>
                              <TableCell>{user.email}</TableCell>
                              <TableCell className="capitalize">{user.role}</TableCell>
                              <TableCell>{user.joined}</TableCell>
                              <TableCell>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                }`}>
                                  {user.status}
                                </span>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <Button size="sm" variant="outline" className="h-8">
                                    Edit
                                  </Button>
                                  <Button size="sm" variant="ghost" className="h-8 text-red-500 hover:text-red-700">
                                    Suspend
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="sales" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Today's Sales</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$1,429.00</div>
                        <p className="text-xs text-muted-foreground mt-1">+22.5% from yesterday</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Sales</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$42,567.89</div>
                        <p className="text-xs text-muted-foreground mt-1">+8.2% from last month</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Annual Sales</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$365,789.12</div>
                        <p className="text-xs text-muted-foreground mt-1">+32.1% from last year</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Sales Trends</CardTitle>
                      <CardDescription>
                        Monthly sales data for the past year
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
                        <p className="text-gray-500">Sales trend chart will be displayed here</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Top Sellers</CardTitle>
                      <CardDescription>
                        Best performing content by revenue
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Item</TableHead>
                            <TableHead>Creator</TableHead>
                            <TableHead>Sales</TableHead>
                            <TableHead>Revenue</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Aerial City View</TableCell>
                            <TableCell>Jane Smith</TableCell>
                            <TableCell>243</TableCell>
                            <TableCell>$9,712.57</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Business Meeting</TableCell>
                            <TableCell>Alex Johnson</TableCell>
                            <TableCell>198</TableCell>
                            <TableCell>$8,910.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Nature Collection</TableCell>
                            <TableCell>Mark Davis</TableCell>
                            <TableCell>152</TableCell>
                            <TableCell>$7,648.00</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="reports" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Financial Reports</CardTitle>
                      <CardDescription>
                        Generate and download financial reports
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h3 className="font-medium">Monthly Revenue Report</h3>
                            <p className="text-sm text-muted-foreground">Financial summary for the current month</p>
                          </div>
                          <Button>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h3 className="font-medium">Creator Payouts</h3>
                            <p className="text-sm text-muted-foreground">Payment records for content creators</p>
                          </div>
                          <Button>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h3 className="font-medium">Tax Summary</h3>
                            <p className="text-sm text-muted-foreground">Tax information for the fiscal year</p>
                          </div>
                          <Button>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>System Analytics</CardTitle>
                      <CardDescription>
                        Platform usage and performance metrics
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
                        <p className="text-gray-500">System analytics chart will be displayed here</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="settings" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Platform Settings</CardTitle>
                      <CardDescription>
                        Configure global settings for the platform
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium">General Settings</h3>
                          <div className="mt-4 space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium">Platform Name</h4>
                                <p className="text-sm text-muted-foreground">The name of your stock platform</p>
                              </div>
                              <input 
                                type="text" 
                                className="w-64 px-4 py-2 border border-gray-300 rounded-md"
                                defaultValue="Habibi Stock"
                              />
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium">Commission Rate</h4>
                                <p className="text-sm text-muted-foreground">Percentage taken from each sale</p>
                              </div>
                              <div className="w-64 flex items-center">
                                <input 
                                  type="number" 
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                  defaultValue="30"
                                />
                                <span className="ml-2">%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium">Email Settings</h3>
                          <div className="mt-4 space-y-4">
                            <div className="flex items-center gap-2">
                              <input 
                                type="checkbox" 
                                id="sales-emails" 
                                className="h-4 w-4 rounded border-gray-300"
                                defaultChecked
                              />
                              <label htmlFor="sales-emails" className="text-sm">
                                Send sales notification emails
                              </label>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <input 
                                type="checkbox" 
                                id="content-emails" 
                                className="h-4 w-4 rounded border-gray-300"
                                defaultChecked
                              />
                              <label htmlFor="content-emails" className="text-sm">
                                Send content approval emails
                              </label>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <Button>Save Settings</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
