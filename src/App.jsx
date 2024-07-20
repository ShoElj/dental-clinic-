import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import Login from './Components/Auth/Login';
import Logout from './Components/Auth/Logout';
import Sidebar from './Components/Sidebar/Sidebar';
import SuperAdminDashboard from './Components/Dashboard/SuperAdminDashboard';
import DoctorDashboard from './Components/Dashboard/DoctorDashboard';
import AccountsDashboard from './Components/Dashboard/AccountsDashboard';
import DietitianDashboard from './Components/Dashboard/DietitianDashboard';
import NotFound from './Components/NotFound'; // Create this component

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

const AppRoutes = () => {
  const { user } = useAuth();

  const getDashboardForRole = (role) => {
    switch (role) {
      case 'superadmin': return SuperAdminDashboard;
      case 'doctor': return DoctorDashboard;
      case 'accounts': return AccountsDashboard;
      case 'dietitian': return DietitianDashboard;
      default: return NotFound;
    }
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/" element={
        user ? <Navigate to={`/${user.role}`} replace /> : <Navigate to="/login" replace />
      } />
      <Route path="/" element={<ProtectedRoute element={MainLayout} allowedRoles={['superadmin', 'doctor', 'accounts', 'dietitian']} />}>
        <Route path=":role" element={<DynamicDashboard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const MainLayout = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-grow">
      <Routes>
        <Route path=":role" element={<DynamicDashboard />} />
      </Routes>
    </div>
  </div>
);

const DynamicDashboard = () => {
  const { user } = useAuth();
  const DashboardComponent = getDashboardForRole(user.role);
  return <DashboardComponent />;
};

export default App;