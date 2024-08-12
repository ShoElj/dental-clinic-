import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Auth/Login";
import Logout from "./Components/Auth/Logout";
import Sidebar from "./Components/Sidebar/Sidebar";
import SuperAdminDashboard from "./Components/Dashboard/SuperAdminDashboard";
import DoctorDashboard from "./Components/Dashboard/DoctorDashboard";
import AccountsDashboard from "./Components/Dashboard/AccountsDashboard";
import DietitianDashboard from "./Components/Dashboard/DietitianDashboard";
import NotFound from "./Components/NotFound";

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
      case "Super Admin":
        return <SuperAdminDashboard />;
      case "Doctor":
        return <DoctorDashboard />;
      case "Accounts":
        return <AccountsDashboard />;
      case "Dietitian":
        return <DietitianDashboard />;
      default:
        return <NotFound />;
    }
  };

  const DynamicDashboard = () => {
    const { user } = useAuth();
    return user ? getDashboardForRole(user.role) : <NotFound />;
  };

  const MainLayout = () => (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <DynamicDashboard />
      </div>
    </div>
  );

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route
        path="/"
        element={
          user ? (
            <Navigate to={`/${user.role.toLowerCase()}`} replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute
            element={<MainLayout />}
            allowedRoles={["Super Admin", "Doctor", "Accounts", "Dietitian"]}
          />
        }
      >
        <Route path=":role" element={<DynamicDashboard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
