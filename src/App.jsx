import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import Login from './Components/Auth/Login';
import Logout from './Components/Auth/Logout';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Components/Dashboard/Dashboard';
import SuperAdminDashboard from './Components/Dashboard/SuperAdminDashboard';
import DoctorDashboard from './Components/Dashboard/DoctorDashboard';
import AccountsDashboard from './Components/Dashboard/AccountsDashboard';
import DietitianDashboard from './Components/Dashboard/DietitianDashboard';


const App = () => {
  const { user } = useAuth();

  return (
    <Router>
      <AuthProvider>
        <Routes>   
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<ProtectedRoute element={MainLayout} allowedRoles={['superadmin', 'doctor', 'accounts', 'dietitian']} />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="superadmin" element={<ProtectedRoute element={SuperAdminDashboard} allowedRoles={['superadmin']} />} />
            <Route path="doctor" element={<ProtectedRoute element={DoctorDashboard} allowedRoles={['doctor']} />} />
            <Route path="accounts" element={<ProtectedRoute element={AccountsDashboard} allowedRoles={['accounts']} />} />
            <Route path="dietitian" element={<ProtectedRoute element={DietitianDashboard} allowedRoles={['dietitian']} />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

const MainLayout = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-grow">
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="superadmin" element={<SuperAdminDashboard />} />
        <Route path="doctor" element={<DoctorDashboard />} />
        <Route path="accounts" element={<AccountsDashboard />} />
        <Route path="dietitian" element={<DietitianDashboard />} />
      </Routes>
    </div>
  </div>
);

export default App;
