import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Auth/Login';
import SuperAdminDashboard from './Components/Dashboard/SuperAdminDashboard';
import DoctorDashboard from './Components/Dashboard/DoctorDashboard';
import AccountsDashboard from './Components/Dashboard/AccountsDashboard';
import DietitianDashboard from './Components/Dashboard/DietitianDashboard';
import MedicalRecords from './Components/Records/MedicalRecords';
import CreateProfile from './Components/Profiles/CreateProfile';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const PrivateRoute = ({ Component, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      element={user ? <Component /> : <Navigate to="/login" />}
    />
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <PrivateRoute path="/superadmin" Component={SuperAdminDashboard} />
          <PrivateRoute path="/doctor" Component={DoctorDashboard} />
          <PrivateRoute path="/accounts" Component={AccountsDashboard} />
          <PrivateRoute path="/dietitian" Component={DietitianDashboard} />
          <PrivateRoute path="/medical-records" Component={MedicalRecords} />
          <PrivateRoute path="/create-profile" Component={CreateProfile} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
