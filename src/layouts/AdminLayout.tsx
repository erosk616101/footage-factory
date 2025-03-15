
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  BarChart, CreditCard, FileText, Home, Image, 
  LogOut, Settings, Shield, Users
} from 'lucide-react';
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
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent
} from '@/components/ui/sidebar';

// Mock user for dashboard header
const mockUser = {
  name: 'Admin User',
  email: 'admin@example.com',
  avatar: 'https://i.pravatar.cc/150?img=4',
  role: 'admin'
};

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Helper to check if a path is active
  const isActive = (path: string) => location.pathname === path;

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
                    <SidebarMenuButton asChild onClick={() => navigate("/")} isActive={false}>
                      <a>
                        <Home />
                        <span>Home</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={location.pathname.startsWith('/admin-dashboard')}>
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
                    <SidebarMenuButton asChild onClick={() => navigate("/admin-dashboard")} isActive={isActive("/admin-dashboard")}>
                      <a>
                        <BarChart />
                        <span>Overview</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild onClick={() => navigate("/admin-dashboard/content")} isActive={isActive("/admin-dashboard/content")}>
                      <a>
                        <Image />
                        <span>Content</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild onClick={() => navigate("/admin-dashboard/users")} isActive={isActive("/admin-dashboard/users")}>
                      <a>
                        <Users />
                        <span>Users</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild onClick={() => navigate("/admin-dashboard/sales")} isActive={isActive("/admin-dashboard/sales")}>
                      <a>
                        <CreditCard />
                        <span>Sales</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild onClick={() => navigate("/admin-dashboard/reports")} isActive={isActive("/admin-dashboard/reports")}>
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
                    <SidebarMenuButton asChild onClick={() => navigate("/admin-dashboard/settings")} isActive={isActive("/admin-dashboard/settings")}>
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
                <SidebarMenuButton asChild className="text-red-500 hover:text-red-600" onClick={() => navigate("/")}>
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
              {children}
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
