// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  return isAdmin ? children : <Navigate to="/admin/login" />;
}
