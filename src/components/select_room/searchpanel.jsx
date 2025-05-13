"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaCalendarAlt,
  FaSearch,
  FaMapMarkerAlt,
  FaUser,
  FaHotel,
} from "react-icons/fa";
import { motion } from "framer-motion";

const SearchPanel = ({ searchParams, setSearchParams }) => {
  const [location, setLocation] = useState(searchParams.location || "");
  const [checkIn, setCheckIn] = useState(searchParams.checkIn || null);
  const [checkOut, setCheckOut] = useState(searchParams.checkOut || null);
  const [adults, setAdults] = useState(searchParams.adults || 2);
  const [children, setChildren] = useState(searchParams.children || 0);
  const [rooms, setRooms] = useState(searchParams.rooms || 1);

  const handleSearch = () => {
    setSearchParams({
      location,
      checkIn,
      checkOut,
      adults,
      children,
      rooms,
    });
  };

  const locations = [
    "New York",
    "Paris",
    "London",
    "Tokyo",
    "Sydney",
    "Dubai",
    "Rome",
  ];

  return (
    <div className=" overflow-hidden h-full p-0 ">
      <div className="p-0 bg-primary-600">
        <h2 className="text-xl font-semibold items-center justify-center flex mb-5">
          Your Search
        </h2>
      </div>

      <div className="">
        <form>
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Select Location
            </label>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-3 text-[#3E2AD9] text-lg" />
              <select
                className="w-[225px] h-[45px] pl-10 pr-[9px] py-[3px] border border-[#E1E1E1] rounded-[12px] text-sm text-gray-700 focus:outline-none appearance-none"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select a location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Check-in Date
            </label>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-3 text-[#3E2AD9] text-lg" />
              <DatePicker
                selected={checkIn}
                onChange={setCheckIn}
                selectsStart
                startDate={checkIn}
                endDate={checkOut}
                minDate={new Date()}
                className="w-[225px] h-[45px] pl-10 pr-[9px] py-[3px] border border-[#E1E1E1] rounded-[12px] text-sm text-gray-700 focus:outline-none appearance-none"
                placeholderText="Select date"
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Check-out Date
            </label>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-3 text-[#3E2AD9] text-lg" />
              <DatePicker
                selected={checkOut}
                onChange={setCheckOut}
                selectsEnd
                startDate={checkIn}
                endDate={checkOut}
                minDate={checkIn || new Date()}
                className="w-[225px] h-[45px] pl-10 pr-[9px] py-[3px] border border-[#E1E1E1] rounded-[12px] text-sm text-gray-700 focus:outline-none appearance-none"
                placeholderText="Select date"
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Adults
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-[#3E2AD9] text-lg" />
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="w-[225px] h-[45px] pl-10 pr-[9px] py-[3px] border border-[#E1E1E1] rounded-[12px] text-sm text-gray-700 focus:outline-none appearance-none"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Adult" : "Adults"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Children
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-[#3E2AD9] text-lg" />
              <select
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="w-[225px] h-[45px] pl-10 pr-[9px] py-[3px] border border-[#E1E1E1] rounded-[12px] text-sm text-gray-700 focus:outline-none appearance-none"
              >
                {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Child" : "Children"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Rooms
            </label>
            <div className="relative">
              <FaHotel className="absolute left-3 top-3 text-[#3E2AD9] text-lg" />
              <select
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="w-[225px] h-[45px] pl-10 pr-[9px] py-[3px] border border-[#E1E1E1] rounded-[12px] text-sm text-gray-700 focus:outline-none appearance-none"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Room" : "Rooms"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={handleSearch}
            className="w-full flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium bg-[#3E2AD9]"
          >
            <FaSearch className="mr-2" />
            Search
          </motion.button>
        </form>

        <div className="mt-8">
          <h3 className="font-semibold text-gray-800 mb-5">Popular Filters</h3>
          <div className="space-y-7">
            {[
              { id: "breakfast", label: "Breakfast Included" },
              { id: "airport-shuttle", label: "Free airport shuttle" },
              { id: "no-smoking", label: "Non-smoking Rooms" },
              { id: "free-wifi", label: "Free guest WiFi" },
            ].map((filter) => (
              <div key={filter.id} className="flex items-center">
                <input
                  id={filter.id}
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label
                  htmlFor={filter.id}
                  className="ml-2 text-sm text-gray-700"
                >
                  {filter.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-semibold text-gray-800 mb-3">Price per night</h3>
          <input
            type="range"
            min="0"
            max="1000"
            step="50"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>$0</span>
            <span>$1,000+</span>
          </div>
        </div>

        <div className="mt-10 mb-5">
          <h3 className="font-semibold text-gray-800 mb-5">Guest rating</h3>
          <div className="space-y-7">
            {["Excellent", "Very Good", "Good", "Average"].map((rating) => (
              <div key={rating} className="flex items-center">
                <input
                  id={rating.toLowerCase()}
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label
                  htmlFor={rating.toLowerCase()}
                  className="ml-2 text-sm text-gray-700"
                >
                  {rating}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
