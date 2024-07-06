import React from 'react';
import DashboardHeader from '../DashboardHeader';

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full">
      <DashboardHeader />
      <div className="p-6 bg-gray-100 flex-grow">
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 shadow-md rounded">
            <div className="text-gray-600">Total Patients</div>
            <div className="text-2xl font-bold">156</div>
            <div className="text-green-500">+6%</div>
          </div>
          <div className="bg-white p-4 shadow-md rounded">
            <div className="text-gray-600">Consultations</div>
            <div className="text-2xl font-bold">92</div>
            <div className="text-green-500">+14%</div>
          </div>
          <div className="bg-white p-4 shadow-md rounded">
            <div className="text-gray-600">Procedures</div>
            <div className="text-2xl font-bold">64</div>
            <div className="text-red-500">-7%</div>
          </div>
          <div className="bg-white p-4 shadow-md rounded">
            <div className="text-gray-600">Payments</div>
            <div className="text-2xl font-bold">$28,704.1</div>
            <div className="text-green-500">+12%</div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-4 shadow-md rounded h-64">
            {/* Placeholder for the chart */}
            <div className="text-gray-600">Appointments</div>
            {/* Add your chart component here */}
          </div>
          <div className="bg-white p-4 shadow-md rounded h-64">
            {/* Placeholder for the chart */}
            <div className="text-gray-600">Top Treatments</div>
            {/* Add your chart component here */}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-4 shadow-md rounded">
            <div className="text-gray-600">Next Patient Details</div>
            {/* Add next patient details here */}
          </div>
          <div className="bg-white p-4 shadow-md rounded">
            <div className="text-gray-600">Doctors at Work</div>
            {/* Add doctors at work details here */}
          </div>
          <div className="bg-white p-4 shadow-md rounded">
            <div className="text-gray-600">Approval Requests</div>
            {/* Add approval requests details here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
