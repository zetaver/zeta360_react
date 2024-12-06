import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import CustomerLayout from "./layouts/CustomerLayout";
import ServiceProviderLayout from "./layouts/ServiceProviderLayout";
import SupervisorLayout from "./layouts/SupervisorLayout";
import ApiProvider from "./context/ApiContext";
import IndexPage from "./pages/indexPage";
import { Helmet } from "react-helmet";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignupPage from "./pages/auth/SignupPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [profileIsCompleted, setProfileIsCompleted] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const profileStatus = localStorage.getItem("profile_is_completed");

    if (token && role) {
      setIsLoggedIn(true);
      setUserRole(role);
      setProfileIsCompleted(profileStatus === "true");
    }
  }, []);

  return (
    <ApiProvider>
      <Router>
        <Routes>
          {/* If the user is logged in, redirect to their dashboard */}
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate
                  to={
                    userRole === "admin"
                      ? "/admin"
                      : userRole === "customer"
                      ? profileIsCompleted
                        ? "/customer/dashboard"
                        : "/customer/profile"
                      : userRole === "service_provider"
                      ? "/provider"
                      : userRole === "supervisor"
                      ? "/supervisor"
                      : "/"
                  }
                  replace
                />
              ) : (
                <IndexPage />
              )
            }
          />

          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

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
    </ApiProvider>
  );
}

export default App;
