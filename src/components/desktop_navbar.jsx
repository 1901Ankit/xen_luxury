import React, { useEffect, useRef, useState } from "react";
import avatar from "../assets/home_banner/avtar.jpg";
import { Link, useLocation } from "react-router-dom";

const Desktop_Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setSelectedOption(location.pathname);
  }, [location.pathname]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="bg-indigo-700 text-white px-4 py-3 shadow-lg">
      <div className="w-full mx-auto flex  items-center justify-between gap-3">
        <div className="h-10 w-36 bg-slate-200 rounded-md shrink-0"></div>

        <div className="hidden md:block text-center text-[14px] md:text-[16px] font-semibold px-2">
          Book & Pay Now to get discounts & offers on your booking!
        </div>

        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              src={avatar}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-white"
            />
          </div>

          {isOpen && (
            <div className="absolute top-12 right-0 bg-white text-sm shadow-lg rounded-md w-44 z-50 mt-2">
              <Link to="/user_profile">
                <button className="w-full text-left px-4 py-2 text-black hover:bg-blue-500 hover:text-white transition rounded-t-md">
                  User Profile
                </button>
              </Link>
              <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-500 hover:text-white transition rounded-b-md">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Desktop_Navbar;
