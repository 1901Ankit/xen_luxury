import {
  FaBed,
  FaChild,
  FaMapMarkerAlt,
  FaSearch,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import Popular_room from "./popular_room";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

export default function Searchform() {
  const [isOpen, setIsOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [guests, setGuests] = useState({
    adults: 4,
    children: 0,
  });
  const updateCount = (type, operation) => {
    setGuests((prev) => ({
      ...prev,
      [type]:
        operation === "inc"
          ? prev[type] + 1
          : prev[type] > 0
          ? prev[type] - 1
          : 0,
    }));
  };
  return (
    <div className="px-4 md:px-0 cursor-pointer ">
      <div className="hidden sm:flex items-center justify-between border-b-2 border-gray-400 px-1 py-2 mb-8 w-full max-w-full">
        <input
          type="text"
          placeholder="Search rooms"
          className="bg-transparent outline-none text-[#3E4958] placeholder-[#3E4958] w-full text-[15px]"
        />
        <FaSearch className="text-[#3E4958] ml-2" />
      </div>

      <div
        className="relative bg-white rounded-xl w-full max-w-full sm:max-w-3xl flex flex-col sm:flex-row gap-4 p-4 sm:p-5 z-20"
        style={{ boxShadow: "0px 4px 12.5px 0px #00000040" }}
      >
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#eceafb] rounded-md">
              <FaMapMarkerAlt className="text-[#3E2AD9] text-xl" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Select Location
              </p>
            </div>
          </div>
          <div className="flex items-center border-t border-b border-gray-300 py-4">
            {/* Check-in */}
            <div className="flex items-center gap-3 flex-1 ">
              <div className="p-3 bg-[#eceafb] rounded-md">
                <MdCalendarToday className="text-[#3E2AD9] text-xl" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Check-in</p>
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  className="text-xs text-gray-500 focus:outline-none"
                  dateFormat="dd.MM.yyyy"
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="flex items-center gap-3 flex-1  ">
              <div className="p-3 bg-[#eceafb] rounded-md">
                <MdCalendarToday className="text-[#3E2AD9] text-xl" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Check-out</p>
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  className="text-xs text-gray-500 focus:outline-none"
                  dateFormat="dd.MM.yyyy"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#eceafb] rounded-md">
              <FaUser className="text-[#3E2AD9] text-xl" />
            </div>
            <div className="relative inline-block w-full max-w-xs">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer  p-3 rounded-md bg-white"
              >
                <p className="text-sm font-semibold text-gray-800">Guests</p>
                <p className="text-xs text-gray-400">
                  {guests.adults} adults, {guests.children} children{" "}
                </p>
              </div>

              {isOpen && (
                <div className="absolute mt-2 z-10 w-full bg-white shadow-lg rounded-md p-4 space-y-4 -ml-20">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="p-3 bg-[#eceafb] rounded-md">
                        <FaUserAlt className="text-[#3E2AD9] text-xl" />
                      </div>{" "}
                      <span className="capitalize text-gray-800 text-sm font-medium">
                        Adults
                      </span>
                    </div>
                    <div className="flex items-center gap-3  border border-gray-400 p-1 rounded-md">
                      <button
                        onClick={() => updateCount("adults", "dec")}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 text-lg font-semibold"
                      >
                        -
                      </button>
                      <span className="w-6 text-center">{guests.adults}</span>
                      <button
                        onClick={() => updateCount("adults", "inc")}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 text-lg font-semibold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="p-3 bg-[#eceafb] rounded-md">
                        <FaChild className="text-[#3E2AD9] text-xl" />
                      </div>{" "}
                      <span className="capitalize text-gray-800 text-sm font-medium">
                        Children
                      </span>
                    </div>
                    <div className="flex items-center gap-3  border border-gray-400 p-1 rounded-md">
                      <button
                        onClick={() => updateCount("children", "dec")}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 text-lg font-semibold"
                      >
                        -
                      </button>
                      <span className="w-6 text-center">{guests.children}</span>
                      <button
                        onClick={() => updateCount("children", "inc")}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 text-lg font-semibold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <Link to="/roomlist">
          <button
            type="submit"
            className="bg-[#3E2AD9] text-white p-4 rounded-xl cursor-pointer flex items-center w-full justify-center h-full md:h-[200px] sm:h-auto"
            style={{ boxShadow: "0px 4px 12.5px 0px #3E2AD9" }}
          >
            <FaMagnifyingGlass className="w-5 h-5 text-white" />
          </button>
        </Link>
      </div>
      <div className="relative ">
        <Popular_room />
      </div>
    </div>
  );
}
