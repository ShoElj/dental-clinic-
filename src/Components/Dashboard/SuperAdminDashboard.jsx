import React from 'react';
import { Tabs, TabPanel, TabList, Tab } from 'react-tabs';
import MedicalRecords from '../Records/MedicalRecords';
import CreateProfile from '../Profiles/CreateProfile';
import MedicalHistory from '../History/MedicalHistory';
import Logout from '../Auth/Logout';

const SuperAdminDashboard = ({ selectedTab, onSelectTab }) => {
  return (
    <div className="flex-grow p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1>
      <div className="flex-grow p-4">
        <Tabs selectedIndex={selectedTab} onSelect={index => onSelectTab(index)}>
          <TabList>
            <Tab>Dashboard</Tab>
            <Tab>Create a medical record</Tab>
            <Tab>Access Medical Records</Tab>
            <Tab>Create Profile</Tab>
            <Tab>Access Medical History</Tab>
            <Tab>Logout</Tab>
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
          <TabPanel>
            <Logout />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
