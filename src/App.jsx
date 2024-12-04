import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './layouts/AdminLayout';
import CustomerLayout from './layouts/CustomerLayout';
import ServiceProviderLayout from './layouts/ServiceProviderLayout';
import SupervisorLayout from './layouts/SupervisorLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        
        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        />
        
        {/* Customer Routes */}
        <Route
          path="/customer/*"
          element={
            <ProtectedRoute role="customer">
              <CustomerLayout />
            </ProtectedRoute>
          }
        />
        
        {/* Service Provider Routes */}
        <Route
          path="/provider/*"
          element={
            <ProtectedRoute role="service_provider">
              <ServiceProviderLayout />
            </ProtectedRoute>
          }
        />
        
        {/* Supervisor Routes */}
        <Route
          path="/supervisor/*"
          element={
            <ProtectedRoute role="supervisor">
              <SupervisorLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;