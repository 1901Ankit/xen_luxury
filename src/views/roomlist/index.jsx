import { useState } from "react";
import { RoomsProvider } from "../../contexts/rooms_context";
import SearchPanel from "../../components/select_room/searchpanel";
import RoomListing from "../../components/select_room/room_list";
import MobileFilters from "../../components/select_room/mobile_filter";
import {
  FaFilter,
  FaCalendarCheck,
  FaBed,
  FaMagic,
  FaCreditCard,
  FaSearch,
} from "react-icons/fa";

function RoomList() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [searchParams, setSearchParams] = useState({
    location: "",
    checkIn: null,
    checkOut: null,
    adults: 2,
    children: 0,
    rooms: 1,
  });
  return (
    <RoomsProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        

        
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between w-full mt-10 px-4 ">
          <div className="relative">
            <input
              type="text"
              placeholder="Search hotels..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
          </div>{" "}
          <button
            onClick={() => setShowMobileFilters(true)}
            className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm font-medium"
          >
            <FaFilter />
            Filters
          </button>
        </div>

        <div className="container-fluid px-4 py-6 flex flex-col md:flex-row gap-6 flex-grow">
          <div className="hidden md:block md:w-1/4 lg:w-1/5 border-r border-gray-300 pr-4">
            <SearchPanel
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          </div>

          {/* Room Listings */}
          <div className="w-full md:w-3/4 lg:w-4/5">
            <RoomListing searchParams={searchParams} />
          </div>
        </div>

        <MobileFilters
          show={showMobileFilters}
          onClose={() => setShowMobileFilters(false)}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </div>
    </RoomsProvider>
  );
}

export default RoomList;
