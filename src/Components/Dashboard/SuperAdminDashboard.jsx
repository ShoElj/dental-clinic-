import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'; // Importing Tab components from 'react-tabs'
import MedicalRecords from '../Records/MedicalRecords'; // Importing MedicalRecords component
import CreateProfile from '../Profiles/CreateProfile'; // Importing CreateProfile component
import MedicalHistory from '../History/MedicalHistory'; // Importing MedicalHistory component

// SuperAdminDashboard component
const SuperAdminDashboard = () => {
  return (
    <div className="container mx-auto p-4"> // Container for the dashboard content
      <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1> // Dashboard title
      <Tabs> // Tabs component for tabbed navigation
        <TabList className="flex border-b mb-4"> // TabList component for tab headers
          <Tab className="px-4 py-2 cursor-pointer" selectedClassName="border-b-2 border-primary">
            Create Medical Record
          </Tab> // Tab for creating a medical record
          <Tab className="px-4 py-2 cursor-pointer" selectedClassName="border-b-2 border-primary">
            Access Medical Records
          </Tab> // Tab for accessing medical records
          <Tab className="px-4 py-2 cursor-pointer" selectedClassName="border-b-2 border-primary">
            Create Profile
          </Tab> // Tab for creating a profile
          <Tab className="px-4 py-2 cursor-pointer" selectedClassName="border-b-2 border-primary">
            Create Medical History
          </Tab> // Tab for creating a medical history
          <Tab className="px-4 py-2 cursor-pointer" selectedClassName="border-b-2 border-primary">
            Access Medical History
          </Tab> // Tab for accessing medical history
        </TabList>

        <TabPanel className="mt-4"> // TabPanel for the first tab content
          <MedicalRecords create={true} /> // MedicalRecords component for creating a record
        </TabPanel>
        <TabPanel className="mt-4"> // TabPanel for the second tab content
          <MedicalRecords create={false} /> // MedicalRecords component for accessing records
        </TabPanel>
        <TabPanel className="mt-4"> // TabPanel for the third tab content
          <CreateProfile /> // CreateProfile component
        </TabPanel>
        <TabPanel className="mt-4"> // TabPanel for the fourth tab content
          <MedicalHistory create={true} /> // MedicalHistory component for creating a history
        </TabPanel>
        <TabPanel className="mt-4">
          <MedicalHistory create={false} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SuperAdminDashboard;
