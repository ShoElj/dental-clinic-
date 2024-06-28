import React, { useState } from 'react';
import { Tab, Tabs, TabPanel } from 'react-tabs';
import MedicalRecords from '../Records/MedicalRecords';
import CreateProfile from '../Profiles/CreateProfile';
import MedicalHistory from '../History/MedicalHistory';
import Logout from '../Logout/Logout';
import Sidebar from '../Sidebar/Sidebar';

const SuperAdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="flex">
      <Sidebar onSelectTab={setSelectedTab} />
      <div className="flex-grow p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Super Admin Dashboard</h1>
        </div>
        <Tabs selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)}>
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
