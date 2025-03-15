
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './user/Dashboard';
import Uploads from './user/Uploads';
import Downloads from './user/Downloads';
import Earnings from './user/Earnings';
import Analytics from './user/Analytics';
import Profile from './user/Profile';
import Notifications from './user/Notifications';
import Settings from './user/Settings';
import Payouts from './user/Payouts';

const UserDashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/uploads" element={<Uploads />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/earnings" element={<Earnings />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/payouts" element={<Payouts />} />
      <Route path="*" element={<Navigate to="/user-dashboard" />} />
    </Routes>
  );
};

export default UserDashboard;
