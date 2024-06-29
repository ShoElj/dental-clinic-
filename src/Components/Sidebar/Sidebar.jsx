import React from 'react';
import { FaUserMd, FaFileMedical, FaHistory, FaUserPlus, FaSignOutAlt } from "react-icons/fa";

// Define the Sidebar component
const Sidebar = ({ onSelectTab }) => {
  // Render the sidebar with navigation options
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="flex items-center justify-center py-4">
        <div className="text-lg font-bold">Arrayan Super Admin</div>
      </div>
      <div className="mt-6">
        <button className="flex items-center p-2 mb-4 w-full text-left hover:bg-gray-700 rounded" onClick={() => onSelectTab(0)}>
          <FaUserMd className="mr-3" />
          <span>Dashboard</span>
        </button>
        <button className="flex items-center p-2 mb-4 w-full text-left hover:bg-gray-700 rounded" onClick={() => onSelectTab(1)}>
          <FaFileMedical className="mr-3" />
          <span>Create Medical Record</span>
        </button>
        <button className="flex items-center p-2 mb-4 w-full text-left hover:bg-gray-700 rounded" onClick={() => onSelectTab(2)}>
          <FaFileMedical className="mr-3" />
          <span>Access Medical Records</span>
        </button>
        <button className="flex items-center p-2 mb-4 w-full text-left hover:bg-gray-700 rounded" onClick={() => onSelectTab(3)}>
          <FaUserPlus className="mr-3" />
          <span>Create Profile</span>
        </button>
        <button className="flex items-center p-2 mb-4 w-full text-left hover:bg-gray-700 rounded" onClick={() => onSelectTab(4)}>
          <FaHistory className="mr-3" />
          <span>Access Medical History</span>
        </button>
        <button className="flex items-center p-2 mb-4 w-full text-left hover:bg-gray-700 rounded" onClick={() => onSelectTab(5)}>
          <FaSignOutAlt className="mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

// Export the Sidebar component
export default Sidebar;
