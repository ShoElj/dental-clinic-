import React, { useState } from "react";
import { Tabs, TabPanel, TabList, Tab } from "react-tabs";
import MedicalRecords from "../Records/MedicalRecords";
import CreateProfile from "../Profiles/CreateProfile";
import MedicalHistory from "../History/MedicalHistory";
import Logout from "../Auth/Logout";

const SuperAdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="flex flex-col sm:ml-64 p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1>
      <div className="flex-grow p-4">
        <Tabs
          selectedIndex={selectedTab}
          onSelect={(index) => setSelectedTab(index)}
        >
          <TabList>
            <Tab>Manage Medical Records</Tab>
            <Tab>View Medical Records</Tab>
            <Tab>Create Profile</Tab>
            <Tab>Manage Medical History</Tab>
            <Tab>View Medical History</Tab>
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
