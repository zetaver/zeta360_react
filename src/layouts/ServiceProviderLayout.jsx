import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProviderDashboard from '../pages/ServiceProvider/Dashboard';
import ManageServices from '../pages/ServiceProvider/ManageServices';
import ProviderProfile from '../pages/ServiceProvider/Profile';
import ProviderReports from '../pages/ServiceProvider/Reports';

function ServiceProviderLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="">
        <Routes>
          <Route path="dashboard" element={<ProviderDashboard />} />
          <Route path="services" element={<ManageServices />} />
          <Route path="profile" element={<ProviderProfile />} />
          <Route path="reports" element={<ProviderReports />} />
        </Routes>
      </div>
    </div>
  );
}

export default ServiceProviderLayout;