import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomerDashboard from '../pages/Customer/Dashboard';
import BookService from '../pages/Customer/BookService';
import MyOrders from '../pages/Customer/MyOrders';
import Profile from '../pages/Customer/Profile';

function CustomerLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="dashboard" element={<CustomerDashboard />} />
          <Route path="book-service" element={<BookService />} />
          <Route path="orders" element={<MyOrders />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default CustomerLayout;