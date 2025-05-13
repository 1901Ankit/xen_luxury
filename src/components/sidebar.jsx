import React from "react";
import { CiDiscount1 } from "react-icons/ci";
import { FaBed, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className=" left-0 top-0 h-dvh w-16 bg-indigo-700 text-white z-50 hidden md:flex flex-col items-center py-10 shadow-lg">
      <div className="flex flex-col items-center space-y-10 mb-10">
        <Link to="/" className="flex flex-col items-center group">
          <div className="">
            <IoHome  className="w-6 h-6  text-white" />
          </div>
          <span className="text-xs mt-2 font-medium text-white ">Home</span>
        </Link>

        <Link to="/roomlist" className="flex flex-col items-center group">
          <div className="">
            <FaBed  className="w-6 h-6  text-white" />
          </div>
          <span className="text-xs mt-2 font-medium text-white ">Rooms</span>
        </Link>

        <Link to="/contact" className="flex flex-col items-center group">
          <div className="">
            <LuPhoneCall  className="w-5 h-5  text-white" />
          </div>
          <span className="text-xs mt-2 font-medium text-white ">Contact</span>
        </Link>
      </div>

      <div className="mt-10">
        <div className="flex flex-col items-center space-y-10">
          <a href="https://facebook.com" className="text-white ">
            <span className="sr-only">Facebook</span>
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" className="text-white ">
            <span className="sr-only">Instagram</span>
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" className="text-white">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedinIn className="w-6 h-6" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
