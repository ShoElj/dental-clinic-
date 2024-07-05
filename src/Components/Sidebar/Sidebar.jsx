// src/Components/Sidebar/Sidebar.jsx
import React, { useState } from 'react';
import { FaUserMd, FaFileMedical, FaHistory, FaUserPlus, FaSignOutAlt, FaBars, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sidebar = ({ onSelectTab }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Button to toggle sidebar on small screens */}
      <button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <FaBars className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 h-screen transition-transform ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-16'} sm:translate-x-0 bg-gray-50 dark:bg-gray-800`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-lg font-bold ${isOpen ? '' : 'hidden'}`}>Menu</h2>
            <button
              onClick={toggleSidebar}
              className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            >
              {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
            </button>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <button
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full text-left"
                onClick={() => onSelectTab(0)}
              >
                <FaUserMd className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className={`ms-3 ${isOpen ? '' : 'hidden'}`}>Dashboard</span>
              </button>
            </li>
            <li>
              <button
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full text-left"
                onClick={() => onSelectTab(1)}
              >
                <FaFileMedical className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className={`ms-3 ${isOpen ? '' : 'hidden'}`}>Create a medical record</span>
              </button>
            </li>
            <li>
              <button
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full text-left"
                onClick={() => onSelectTab(2)}
              >
                <FaFileMedical className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className={`ms-3 ${isOpen ? '' : 'hidden'}`}>Access Medical Records</span>
              </button>
            </li>
            <li>
              <button
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full text-left"
                onClick={() => onSelectTab(3)}
              >
                <FaUserPlus className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className={`ms-3 ${isOpen ? '' : 'hidden'}`}>Create Profile</span>
              </button>
            </li>
            <li>
              <button
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full text-left"
                onClick={() => onSelectTab(4)}
              >
                <FaHistory className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className={`ms-3 ${isOpen ? '' : 'hidden'}`}>Access Medical History</span>
              </button>
            </li>
            <li>
              <button
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full text-left"
                onClick={() => onSelectTab(5)}
              >
                <FaSignOutAlt className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className={`ms-3 ${isOpen ? '' : 'hidden'}`}>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
      {/* Main content margin adjustment */}
      <div className={`flex-grow ${isOpen ? 'ml-64' : 'ml-16'}`}>
        {/* Content will go here */}
      </div>
    </div>
  );
};

export default Sidebar;
