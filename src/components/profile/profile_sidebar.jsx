import React from "react";
import { FaEdit, FaBook, FaHistory } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import avatar from "../../assets/home_banner/avtar.jpg";

const Profile_sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      icon: <FaEdit size={20} />,
      text: "Edit Profile",
      path: "/user_profile",
    },
    {
      icon: <FaBook size={20} />,
      text: "My Bookings",
      path: "/booking",
    },
    {
      icon: <FaHistory size={20} />,
      text: "Transaction History",
      path: "/transaction_history",
    },
  ];

  return (
    <div className="overflow-hidden h-[100dvh] p-0 ">
      <div className="flex flex-col items-center mb-8">
        <div className="bg-transparent text-white px-3.5 py-2 mt-2 font-semibold">
          <img
            src={avatar}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>{" "}
        <p className="text-sm">
          Hello! <span className="font-bold">Gurleen</span>
        </p>
      </div>

      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center p-3 rounded-md transition-colors ${
              location.pathname === item.path
                ? "bg-indigo-100 text-indigo-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <span
              className={`mr-3 ${
                location.pathname === item.path
                  ? "text-indigo-600"
                  : "text-gray-500"
              }`}
            >
              {item.icon}
            </span>
            <span className="font-medium">{item.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Profile_sidebar;
