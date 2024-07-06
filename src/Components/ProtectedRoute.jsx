import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ element: Element, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    // User is not authenticated
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // User does not have the necessary role
    return <Navigate to="/unauthorized" />;
  }

  // User is authenticated and has the necessary role
  return <Element />;
};

export default ProtectedRoute;
