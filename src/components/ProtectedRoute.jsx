import React from "react";
import { Navigate } from "react-router-dom";
import { useApiContext } from "../context/ApiContext";

function ProtectedRoute({ children, role }) {
  const { token, role: userRole } = useApiContext();

  // Redirect to login if token is not present
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Redirect to the user's respective dashboard if the role doesn't match
  if (role && userRole !== role) {
    const redirectPaths = {
      admin: "/admin/dashboard",
      service_provider: "/provider/dashboard",
      customer: "/customer/dashboard",
      supervisor: "/supervisor/dashboard",
    };

    const redirectPath = redirectPaths[userRole] || "/";
    return <Navigate to={redirectPath} replace />;
  }

  // Render children if the token and role are valid
  return children;
}

export default ProtectedRoute;
