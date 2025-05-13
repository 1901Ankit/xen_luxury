import React, { useState } from "react";
import Booking_Tabs from "../../components/booking/booking_tab";
import Booking_list from "../../components/booking/booking_list";
import { FaSearch, FaFilter } from "react-icons/fa";
import Profile_mobilefilters from "../../components/profile/profile_filter";

const MyBookingsPage = () => {
  const [activeTab, setActiveTab] = useState("recent");
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
    <div className="w-full overflow-x-auto p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#3E2AD9] mt-3">
          My Bookings
        </h2>
          <p className="text-gray-500 mb-3">
          See your current, past and cancelled bookings here
        </p>
              <p className="text-gray-500 mb-5 border-t border-gray-200"></p>

      </div>
      <Booking_Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Booking_list status={activeTab} />
    </div>
    </>
  );
};

export default MyBookingsPage;
