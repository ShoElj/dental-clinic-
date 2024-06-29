import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ onSelectTab }) => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-4">Super Admin</h2>
      <NavLink
        to="/superadmin"
        className="mb-4 p-2 bg-blue-500 rounded hover:bg-blue-600"
        activeClassName="bg-blue-700"
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/create-record"
        className="mb-4 p-2 bg-blue-500 rounded hover:bg-blue-600"
        activeClassName="bg-blue-700"
      >
        Create Medical Record
      </NavLink>
      <NavLink
        to="/medical-records"
        className="mb-4 p-2 bg-blue-500 rounded hover:bg-blue-600"
        activeClassName="bg-blue-700"
      >
        Access Medical Records
      </NavLink>
      <NavLink
        to="/create-profile"
        className="mb-4 p-2 bg-blue-500 rounded hover:bg-blue-600"
        activeClassName="bg-blue-700"
      >
        Create Profile
      </NavLink>
      <NavLink
        to="/medical-history"
        className="mb-4 p-2 bg-blue-500 rounded hover:bg-blue-600"
        activeClassName="bg-blue-700"
      >
        Access Medical History
      </NavLink>
      <NavLink
        to="/logout"
        className="mt-auto p-2 bg-blue-500 rounded hover:bg-blue-600"
        activeClassName="bg-blue-700"
      >
        Logout
      </NavLink>
    </div>
  );
};

export default Sidebar;
