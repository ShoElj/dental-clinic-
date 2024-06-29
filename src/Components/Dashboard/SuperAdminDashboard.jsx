import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';  // Adjust the import path as needed


// Define the SuperAdminDashboard component
const SuperAdminDashboard = () => {
  // Initialize the state for the selected tab
  const [selectedTab, setSelectedTab] = useState(0);

  // Render the SuperAdminDashboard component
  return (
    <div className="flex">
      {/* Sidebar component to select tabs */}
      <Sidebar onSelectTab={setSelectedTab} />
      <div className="flex-grow p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1>
        <div className="flex-grow p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Super Admin Dashboard</h1>
          </div>
          {/* Tabs component to switch between different panels */}
          <Tabs selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)}>
            <TabPanel>
              {/* Component to create medical records */}
              <MedicalRecords create={true} />
            </TabPanel>
            <TabPanel>
              {/* Component to access medical records */}
              <MedicalRecords create={false} />
            </TabPanel>
            <TabPanel>
              {/* Component to create profiles */}
              <CreateProfile />
            </TabPanel>
            <TabPanel>
              {/* Component to access medical history */}
              <MedicalHistory create={true} />
            </TabPanel>
            <TabPanel>
              {/* Component to access medical history */}
              <MedicalHistory create={false} />
            </TabPanel>
            <TabPanel>
              {/* Component to logout */}
              <Logout />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

// Export the SuperAdminDashboard component
export default SuperAdminDashboard;
