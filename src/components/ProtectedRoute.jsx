import React from "react";
import { Navigate } from "react-router-dom";
import { useApiContext } from "../context/ApiContext"; 

function ProtectedRoute({ children, role }) {
  const { token, role: userRole } = useApiContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (userRole !== role) {
    const redirectPath = {
      admin: "/admin/dashboard",
      service_provider: "/provider/dashboard",
      customer: "/customer/dashboard",
      supervisor: "/supervisor/dashboard",
    }[userRole];

    return <Navigate to={redirectPath} replace />;
  }
  return children;
}

export default ProtectedRoute;
