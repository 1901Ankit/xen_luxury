import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { FaSearch, FaFilter } from "react-icons/fa";
import Profile_mobilefilters from "../profile/profile_filter";
const data = Array(8).fill({
  bookingId: "2623458",
  method: "Card",
  amount: "Rs. 5460",
  date: "26.02.2025",
});

const TransactionHistory = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [searchParams, setSearchParams] = useState({});
  return (
    <>
      <div className="md:hidden flex items-center justify-between w-full mt-10 px-4">
        <div className="relative flex-1 mr-2">
          <input
            type="text"
            placeholder="Search hotels..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
        </div>
        <button
          onClick={() => setShowMobileFilters(true)}
          className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm font-medium"
        >
          <FaFilter />
          Filters
        </button>
      </div>

      <Profile_mobilefilters
        show={showMobileFilters}
        onClose={() => setShowMobileFilters(false)}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold text-[#3E2AD9] mt-3">
          Transaction History
        </h2>
        <p className="text-gray-500 mb-3">See your transaction history here</p>
        <div className="space-y-4">
          <div className="hidden md:grid grid-cols-5 bg-[#3E2AD9] text-white text-sm font-semibold rounded-md overflow-hidden">
            <div className="py-3 px-4">Booking Id</div>
            <div className="py-3 px-4">Payment Method</div>
            <div className="py-3 px-4">Amount</div>
            <div className="py-3 px-4">Date</div>
            <div className="py-3 px-4">Invoice</div>
          </div>

          {data.map((entry, idx) => (
            <div
              key={idx}
              className="bg-[#f5f4fd] rounded-md shadow-md p-4 grid grid-cols-1 md:grid-cols-5 gap-2 text-sm font-medium"
            >
              <div className="md:hidden flex justify-between">
                <span className="text-gray-500">Booking Id:</span>
                <span className="text-gray-700">ID: {entry.bookingId}</span>
              </div>
              <div className="md:hidden flex justify-between">
                <span className="text-gray-500">Payment:</span>
                <span className="text-gray-700">{entry.method}</span>
              </div>
              <div className="md:hidden flex justify-between">
                <span className="text-gray-500">Amount:</span>
                <span className="text-gray-700">{entry.amount}</span>
              </div>
              <div className="md:hidden flex justify-between">
                <span className="text-gray-500">Date:</span>
                <span className="text-gray-700">{entry.date}</span>
              </div>
              <div className="md:hidden flex justify-between">
                <span className="text-gray-500">Invoice:</span>
                <button className="w-8 h-8 flex items-center justify-center border border-[#3E2AD9] rounded-lg text-[#3E2AD9] hover:bg-[#3E2AD9] hover:text-white transition">
                  <FiDownload size={16} />
                </button>
              </div>

              {/* Desktop layout (inline columns) */}
              <div className="hidden md:block py-2 px-4 text-gray-700">
                ID: {entry.bookingId}
              </div>
              <div className="hidden md:block py-2 px-4 text-gray-700">
                {entry.method}
              </div>
              <div className="hidden md:block py-2 px-4 text-gray-700">
                {entry.amount}
              </div>
              <div className="hidden md:block py-2 px-4 text-gray-700">
                {entry.date}
              </div>
              <div className="hidden md:flex items-center px-4">
                <button className="w-8 h-8 flex items-center justify-center border border-[#3E2AD9] rounded-lg text-[#3E2AD9] hover:bg-[#3E2AD9] hover:text-white transition">
                  <FiDownload size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;
