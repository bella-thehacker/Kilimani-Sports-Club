import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
import Restaurant from './components/Restaurant';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (You can modify this logic)
    const token = localStorage.getItem("userToken");
    setIsAuthenticated(!!token);

    if (!token) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, []);

  return (
    <>
      {isAuthenticated && <NavBar />}  {/* Show Navbar only if logged in */}
      <Routes>
        {/* User authentication */}
        <Route path="/login" element={<UserLogin setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<UserSignUp />} />

        {/* Redirect unauthenticated users */}
        {!isAuthenticated ? (
          <Route path="*" element={<Navigate to="/login" replace />} />
        ) : (
          <>
            {/* Public pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/events" element={<Events />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/rest" element={<Restaurant />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/staff" element={<Staff />} />

            {/* Admin authentication */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin/login" 
              element={
                <PrivateRoute>
                  <AdminPage />
                </PrivateRoute>
              } 
            />
          </>
        )}
      </Routes>
      {isAuthenticated && <Footer />} {/* Show Footer only if logged in */}
    </>
  );
}

export default App;
