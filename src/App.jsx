import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Logout from './Components/Auth/Logout';
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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        
        {/* Dashboard Routes */}
        <Route path="/superadmin" element={<SuperAdminDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/accounts" element={<AccountsDashboard />} />
        <Route path="/dietitian" element={<DietitianDashboard />} />
        
        {/* Records Routes */}
        <Route path="/medical-records" element={<MedicalRecords />} />
        <Route path="/create-record" element={<CreateRecord />} />
        
        {/* Profiles Routes */}
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/edit-profile/:id" element={<EditProfile />} />
        <Route path="/view-profile/:id" element={<ViewProfile />} />
        
        {/* Medical History Route */}
        <Route path="/medical-history/:id" element={<MedicalHistory />} />
        
        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
