import React, { useState } from 'react'; // Import React and useState hook from 'react'
import { Tabs, TabPanel } from 'react-tabs'; // Import Tabs and TabPanel from 'react-tabs' for tab functionality
import MedicalRecords from '../Records/MedicalRecords'; // Import MedicalRecords component
import CreateProfile from '../Profiles/CreateProfile'; // Import CreateProfile component
import MedicalHistory from '../History/MedicalHistory'; // Import MedicalHistory component
import Logout from '../Auth/Logout'; // Import Logout component

// Define the SuperAdminDashboard component
const SuperAdminDashboard = () => {
  // Use useState to manage the state of the selected tab
  const [selectedTab, setSelectedTab] = useState(0);

  // Render the SuperAdminDashboard component
  return (
    <div className="flex-grow p-6 bg-gray-100"> {/* Container for the dashboard */}
      <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1> {/* Dashboard title */}
      <div className="flex-grow p-4"> {/* Content container */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Super Admin Dashboard</h1> {/* Another dashboard title */}
        </div>
        {/* Tabs component for navigation */}
        <Tabs selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)}>
          {/* Tab for creating medical records */}
          <TabPanel>
            <MedicalRecords create={true} />
          </TabPanel>
          {/* Tab for accessing medical records */}
          <TabPanel>
            <MedicalRecords create={false} />
          </TabPanel>
          {/* Tab for creating profiles */}
          <TabPanel>
            <CreateProfile />
          </TabPanel>
          {/* Tab for creating medical history */}
          <TabPanel>
            <MedicalHistory create={true} />
          </TabPanel>
          {/* Tab for accessing medical history */}
          <TabPanel>
            <MedicalHistory create={false} />
          </TabPanel>
          {/* Tab for logout */}
          <TabPanel>
            <Logout />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

// Export the SuperAdminDashboard component
export default SuperAdminDashboard;
