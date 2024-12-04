import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../pages/Admin/Dashboard';
import ManageUsers from '../pages/Admin/ManageUsers';
import Reports from '../pages/Admin/Reports';
import Settings from '../pages/Admin/Settings';

function AdminLayout() {
  return (
    <div className="wrapper">
      {/* AdminLTE specific classes */}
      <div className="content-wrapper">
        <Routes>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminLayout;