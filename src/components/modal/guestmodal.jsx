import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaChild, FaUserAlt } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";

const GuestModal = ({
  isModalOpen,
  setIsModalOpen,
  guests,
  updateCount,
  onClose,
}) => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white shadow-lg rounded-md p-6 space-y-6  w-11/12 md:w-6/12 relative overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>

        <div className="flex items-center border-b border-gray-300 py-4">
          <div className="flex items-center gap-3 flex-1">
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

          <div className="flex items-center gap-3 flex-1 border-l border-gray-300 pl-6 ml-6">
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

        <div className="flex justify-between items-center ">
          <div className="flex items-center space-x-2">
            <div className="p-3 bg-[#eceafb] rounded-md">
              <FaUserAlt className="text-[#3E2AD9] text-xl" />
            </div>
            <span className="text-gray-800 text-sm font-medium">Adults</span>
          </div>
          <div className="flex items-center gap-3 border border-gray-400 p-1 rounded-md">
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

        <div className="flex items-center justify-between border-t border-b border-gray-300 py-4">
          <div className="flex items-center space-x-2">
            <div className="p-3 bg-[#eceafb] rounded-md">
              <FaChild className="text-[#3E2AD9] text-xl" />
            </div>
            <span className="text-gray-800 text-sm font-medium">Children</span>
          </div>
          <div className="flex items-center gap-3 border border-gray-400 p-1 rounded-md">
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

        <button
          onClick={() => setIsModalOpen(false)}
          className="w-full bg-[#3E2AD9] text-white py-2 rounded-md font-semibold hover:bg-indigo-700"
        >
          Book Now{" "}
        </button>
      </div>
    </div>
  );
};

export default GuestModal;
