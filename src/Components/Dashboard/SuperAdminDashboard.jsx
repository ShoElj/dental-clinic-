// Importing necessary libraries and components
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MedicalRecords from '../Records/MedicalRecords';
import CreateProfile from '../Profiles/CreateProfile';
import MedicalHistory from '../History/MedicalHistory';

// SuperAdminDashboard component to manage the super admin dashboard
const SuperAdminDashboard = () => {
  // JSX for the super admin dashboard
  return (
    <div>
      <h1>Super Admin Dashboard</h1>
      <Tabs>
        <TabList>
          <Tab>Create Medical Record</Tab>
          <Tab>Access Medical Records</Tab>
          <Tab>Create Profile</Tab>
          <Tab>Create Medical History</Tab>
          <Tab>Access Medical History</Tab>
        </TabList>

        <TabPanel>
          <MedicalRecords create={true} />
        </TabPanel>
        <TabPanel>
          <MedicalRecords create={false} />
        </TabPanel>
        <TabPanel>
          <CreateProfile />
        </TabPanel>
        <TabPanel>
          <MedicalHistory create={true} />
        </TabPanel>
        <TabPanel>
          <MedicalHistory create={false} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

// Exporting the SuperAdminDashboard component
export default SuperAdminDashboard;
