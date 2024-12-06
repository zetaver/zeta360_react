import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SupervisorDashboard from '../pages/Supervisor/Dashboard';
import ManageProviders from '../pages/Supervisor/ManageProviders';
import SupervisorReports from '../pages/Supervisor/Reports';
import SupervisorProfile from '../pages/Supervisor/Profile';

function SupervisorLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="">
        <Routes>
          <Route path="dashboard" element={<SupervisorDashboard />} />
          <Route path="providers" element={<ManageProviders />} />
          <Route path="reports" element={<SupervisorReports />} />
          <Route path="profile" element={<SupervisorProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default SupervisorLayout;