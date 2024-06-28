import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Auth/Login'; // Importing Login component for user authentication
import Logout from './Components/Auth/Logout'; // Importing Logout component for user logout
import SuperAdminDashboard from './Components/Dashboard/SuperAdminDashboard'; // Importing SuperAdminDashboard component
import DoctorDashboard from './Components/Dashboard/DoctorDashboard'; // Importing DoctorDashboard component
import AccountsDashboard from './Components/Dashboard/AccountsDashboard'; // Importing AccountsDashboard component
import DietitianDashboard from './Components/Dashboard/DietitianDashboard'; // Importing DietitianDashboard component
import MedicalRecords from './Components/Records/MedicalRecords'; // Importing MedicalRecords component
import CreateRecord from './Components/Records/CreateRecord'; // Importing CreateRecord component
import CreateProfile from './Components/Profiles/CreateProfile'; // Importing CreateProfile component
import EditProfile from './Components/Profiles/EditProfile'; // Importing EditProfile component
import ViewProfile from './Components/Profiles/ViewProfile'; // Importing ViewProfile component
import MedicalHistory from './Components/History/MedicalHistory'; // Importing MedicalHistory component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Route for user login */}
        <Route path="/logout" element={<Logout />} /> {/* Route for user logout */}
        
        {/* Dashboard Routes */}
        <Route path="/superadmin" element={<SuperAdminDashboard />} /> {/* Route for SuperAdminDashboard */}
        <Route path="/doctor" element={<DoctorDashboard />} /> {/* Route for DoctorDashboard */}
        <Route path="/accounts" element={<AccountsDashboard />} /> {/* Route for AccountsDashboard */}
        <Route path="/dietitian" element={<DietitianDashboard />} /> {/* Route for DietitianDashboard */}
        
        {/* Records Routes */}
        <Route path="/medical-records" element={<MedicalRecords />} /> {/* Route for MedicalRecords */}
        <Route path="/create-record" element={<CreateRecord />} /> {/* Route for CreateRecord */}
        
        {/* Profiles Routes */}
        <Route path="/create-profile" element={<CreateProfile />} /> {/* Route for CreateProfile */}
        <Route path="/edit-profile/:id" element={<EditProfile />} /> {/* Route for EditProfile with dynamic ID */}
        <Route path="/view-profile/:id" element={<ViewProfile />} /> {/* Route for ViewProfile with dynamic ID */}
        
        {/* Medical History Route */}
        <Route path="/medical-history/:id" element={<MedicalHistory />} /> {/* Route for MedicalHistory with dynamic ID */}
        
        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/login" />} /> {/* Default redirect to login page */}
      </Routes>
    </Router>
  );
};

export default App;
