import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Logout from './Components/Auth/Logout'; // Import Logout component
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './contexts/AuthContext';

// Dummy components to replace actual components for testing
const DummyComponent = () => <div>Dummy Component</div>;

// PrivateRoute component to handle protected routes
const PrivateRoute = ({ Component, ...rest }) => {
  // Get the current user from the AuthContext
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      element={user ? <Component /> : <Navigate to="/login" />}
    />
  );
};

// Main App component
const App = () => {
  return (
    // Provide authentication context to the entire app
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public route for login */}
          <Route path="/login" element={<Login />} />
          {/* Public route for logout */}
          <Route path="/logout" element={<Logout />} />
          {/* Private routes for different user roles */}
          <PrivateRoute path="/superadmin" Component={DummyComponent} />
          <PrivateRoute path="/doctor" Component={DummyComponent} />
          <PrivateRoute path="/accounts" Component={DummyComponent} />
          <PrivateRoute path="/dietitian" Component={DummyComponent} />
          <PrivateRoute path="/medical-records" Component={DummyComponent} />
          <PrivateRoute path="/create-profile" Component={DummyComponent} />
          {/* Redirect all other routes to login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
