import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Logout from './Components/Auth/Logout';
import Sidebar from './Components/Sidebar/Sidebar';
import SuperAdminDashboard from './Components/Dashboard/SuperAdminDashboard';
import DoctorDashboard from './Components/Dashboard/DoctorDashboard';
import AccountsDashboard from './Components/Dashboard/AccountsDashboard';
import DietitianDashboard from './Components/Dashboard/DietitianDashboard';
import MedicalRecords from './Components/Records/MedicalRecords';
import CreateRecord from './Components/Records/CreateRecord';
import CreateProfile from './Components/Profiles/CreateProfile';
import EditProfile from './Components/Profiles/EditProfile';
import ViewProfile from './Components/Profiles/ViewProfile';
import MedicalHistory from './Components/History/MedicalHistory';

// Define the App component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        {/* Dashboard Routes */}
        <Route
          path="/superadmin"
          element={
            <MainLayout>
              <SuperAdminDashboard />
            </MainLayout>
          }
        />
        <Route
          path="/doctor"
          element={
            <MainLayout>
              <DoctorDashboard />
            </MainLayout>
          }
        />
        <Route
          path="/accounts"
          element={
            <MainLayout>
              <AccountsDashboard />
            </MainLayout>
          }
        />
        <Route
          path="/dietitian"
          element={
            <MainLayout>
              <DietitianDashboard />
            </MainLayout>
          }
        />

        {/* Records Routes */}
        <Route
          path="/medical-records"
          element={
            <MainLayout>
              <MedicalRecords />
            </MainLayout>
          }
        />
        <Route
          path="/create-record"
          element={
            <MainLayout>
              <CreateRecord />
            </MainLayout>
          }
        />

        {/* Profiles Routes */}
        <Route
          path="/create-profile"
          element={
            <MainLayout>
              <CreateProfile />
            </MainLayout>
          }
        />
        <Route
          path="/edit-profile/:id"
          element={
            <MainLayout>
              <EditProfile />
            </MainLayout>
          }
        />
        <Route
          path="/view-profile/:id"
          element={
            <MainLayout>
              <ViewProfile />
            </MainLayout>
          }
        />

        {/* Medical History Route */}
        <Route
          path="/medical-history/:id"
          element={
            <MainLayout>
              <MedicalHistory />
            </MainLayout>
          }
        />

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

// Define the MainLayout component
const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100">
        {children}
      </div>
    </div>
  );
};

// Export the App component
export default App;
