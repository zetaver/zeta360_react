import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';

function ProtectedRoute({ children, role }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== role) {
    const redirectPath = {
      admin: '/admin/dashboard',
      service_provider: '/provider/dashboard',
      customer: '/customer/dashboard',
      supervisor: '/supervisor/dashboard',
    }[user.role];
    
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}

export default ProtectedRoute;