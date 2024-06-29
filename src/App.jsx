import React, { useState } from 'react';
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

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route element={<MainLayout selectedTab={selectedTab} onSelectTab={setSelectedTab} />}>
          <Route path="/superadmin" element={<SuperAdminDashboard selectedTab={selectedTab} onSelectTab={setSelectedTab} />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/accounts" element={<AccountsDashboard />} />
          <Route path="/dietitian" element={<DietitianDashboard />} />
          <Route path="/medical-records" element={<MedicalRecords />} />
          <Route path="/create-record" element={<CreateRecord />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/edit-profile/:id" element={<EditProfile />} />
          <Route path="/view-profile/:id" element={<ViewProfile />} />
          <Route path="/medical-history/:id" element={<MedicalHistory />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

const MainLayout = ({ selectedTab, onSelectTab }) => {
  return (
    <div className="flex">
      <Sidebar onSelectTab={onSelectTab} />
      <div className="flex-grow">
        <Routes>
          <Route path="/superadmin" element={<SuperAdminDashboard selectedTab={selectedTab} onSelectTab={onSelectTab} />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/accounts" element={<AccountsDashboard />} />
          <Route path="/dietitian" element={<DietitianDashboard />} />
          <Route path="/medical-records" element={<MedicalRecords />} />
          <Route path="/create-record" element={<CreateRecord />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/edit-profile/:id" element={<EditProfile />} />
          <Route path="/view-profile/:id" element={<ViewProfile />} />
          <Route path="/medical-history/:id" element={<MedicalHistory />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
