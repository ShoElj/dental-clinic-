import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <FaSearch className="text-gray-500 mr-3" />
        <input type="text" placeholder="Search" className="border-b-2 outline-none" />
      </div>
      <div className="flex items-center">
        <FaBell className="text-gray-500 mr-4" />
        <FaUserCircle className="text-gray-500 mr-2" />
        <div className="text-gray-700">Dr. Shin Tamura</div>
      </div>
    </div>
  );
};

export default DashboardHeader;
