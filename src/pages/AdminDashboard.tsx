
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AdminLayout from '@/layouts/AdminLayout';
import AdminOverview from './admin/Overview';

const AdminDashboard = () => {
  const location = useLocation();
  
  // Only render the overview page when we're at the root admin dashboard path
  if (location.pathname === '/admin-dashboard') {
    return (
      <AdminLayout>
        <AdminOverview />
      </AdminLayout>
    );
  }
  
  // If user navigates directly to /admin-dashboard with no subpage defined,
  // render the overview page
  return <Navigate to="/admin-dashboard" replace />;
};

export default AdminDashboard;
