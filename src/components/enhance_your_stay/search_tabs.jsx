import React, { useState } from "react";
import { FaSuitcaseRolling } from "react-icons/fa6";
import { MdDinnerDining } from "react-icons/md";
import { FaBusAlt } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import Tourism from "./Tourism";
import Dining from "./dining";
import ArrivalTransport from "./arrival";
import CelebrationEssentials from "./celebration";

const SearchTabs = () => {
  const [activeTab, setActiveTab] = useState("TouristPlaces");

  const tabs = [
    {
      id: "TouristPlaces",
      label: "Tourist Places",
      icon: <FaSuitcaseRolling className="h-5 w-5" />,
    },
    {
      id: "Dinning",
      label: "Dinning",
      icon: <MdDinnerDining className="h-5 w-5" />,
    },
    {
      id: "Arrival&Transport",
      label: "Arrival & Transport",
      icon: <FaBusAlt className="h-5 w-5" />,
    },
    {
      id: "Celebrationessentials",
      label: "Celebration essentials",
      icon: <GiPartyPopper className="h-5 w-5" />,
    },
  ];

  return (
    <div className="container-fluid mx-auto -mt-10 relative z-10 ">
      {/* Tabs */}
      <div className="flex justify-center px-0 md:px-4">
        <div
          className="p-0 md:p-3  max-w-5xl rounded-xl bg-[rgba(255,255,255,0.35)]"
          style={{
            boxShadow: `
              5.22px 6.26px 6.52px 0px #00000007,
              12.8px 15.36px 13px 0px #00000009,
              24.66px 29.59px 25.48px 0px #0000000B
            `,
          }}
        >
          <div className=" grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-between gap-5 md:gap-12   bg-[#eceafb] md:bg-white p-4 md:p-2 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 rounded-full cursor-pointer  transition duration-300 flex items-center justify-center ${
                  activeTab === tab.id
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="">
        {activeTab === "TouristPlaces" && <Tourism />}
        {activeTab === "Dinning" && <Dining />}
        {activeTab === "Arrival&Transport" && <ArrivalTransport />}
        {activeTab === "Celebrationessentials" && <CelebrationEssentials />}
      </div>
    </div>
  );
};

export default SearchTabs;
