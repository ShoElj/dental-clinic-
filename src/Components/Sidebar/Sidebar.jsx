import React from 'react';
import { FaUserMd, FaFileMedical, FaHistory, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ onSelectTab }) => {
  return (
    <div className="bg-secondary text-white w-64 min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Super Admin</h2>
      <ul>
        <li className="mb-4">
          <button onClick={() => onSelectTab(0)} className="flex items-center w-full">
            <FaFileMedical className="mr-2" /> Create Medical Record
          </button>
        </li>
        <li className="mb-4">
          <button onClick={() => onSelectTab(1)} className="flex items-center w-full">
            <FaHistory className="mr-2" /> Access Medical Records
          </button>
        </li>
        <li className="mb-4">
          <button onClick={() => onSelectTab(2)} className="flex items-center w-full">
            <FaUserPlus className="mr-2" /> Create Profile
          </button>
        </li>
        <li className="mb-4">
          <button onClick={() => onSelectTab(3)} className="flex items-center w-full">
            <FaHistory className="mr-2" /> Create Medical History
          </button>
        </li>
        <li className="mb-4">
          <button onClick={() => onSelectTab(4)} className="flex items-center w-full">
            <FaHistory className="mr-2" /> Access Medical History
          </button>
        </li>
        <li className="mb-4">
          <button onClick={() => onSelectTab(5)} className="flex items-center w-full">
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
