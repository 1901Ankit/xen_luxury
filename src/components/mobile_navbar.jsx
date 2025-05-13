import React from "react";
import avatar from "../assets/home_banner/avtar.jpg";
const Mobile_navbar = () => {
  return (
    <div className="bg-indigo-700 text-white py-4 px-6 shadow-lg flex items-center justify-between sm:hidden">
      {/* Logo */}
      <div className="text-lg font-bold">THE XEN LUXURY </div>

      {/* Profile Avatar */}
      <div>
        <img
          src={avatar}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Mobile_navbar;
