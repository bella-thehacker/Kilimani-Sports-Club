// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage';
import About from './components/About';
import Membership from './components/Membership';
import Events from './components/Events';
import Facilities from './components/Facilities';
import Bookings from './components/Bookings';
import Payments from './components/Payments';
import Staff from './components/Staff';
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import UserSignUp from "./components/UserSignUp";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AdminPage from './components/AdminPage';
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/events" element={<Events />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/staff" element={<Staff />} />

        {/* User authentication */}
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />

        {/* Admin authentication */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route 
          path="/admin" 
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          } 
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
