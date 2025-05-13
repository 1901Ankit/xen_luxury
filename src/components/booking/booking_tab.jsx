import React from 'react';

const Tab = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-medium text-sm transition-colors ${
        active
          ? 'text-indigo-600 border-b-2 border-indigo-600'
          : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      {label}
    </button>
  );
};

const Booking_Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'recent', label: 'Recent Bookings' },
    { id: 'past', label: 'Past Bookings' },
    { id: 'cancelled', label: 'Cancelled' },
  ];

  return (
    <div className="border-b border-gray-200">
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Booking_Tabs;
