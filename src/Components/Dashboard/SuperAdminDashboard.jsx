import React from 'react';
import { Tabs, TabPanel } from 'react-tabs';
import MedicalRecords from '../Records/MedicalRecords';
import CreateProfile from '../Profiles/CreateProfile';
import MedicalHistory from '../History/MedicalHistory';
import Logout from '../Auth/Logout';

const SuperAdminDashboard = ({ selectedTab, onSelectTab }) => {
  return (
    <div className="flex-grow p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1>
      <div className="flex-grow p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Super Admin Dashboard</h1>
        </div>
        <Tabs selectedIndex={selectedTab} onSelect={index => onSelectTab(index)}>
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
