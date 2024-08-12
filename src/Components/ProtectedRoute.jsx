import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ element, allowedRoles }) => {
  const { user } = useAuth();

  // Check if user is logged in and has an allowed role
  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute;
