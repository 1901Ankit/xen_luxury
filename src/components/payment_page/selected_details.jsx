import React, { useState } from "react";
import TripSummary from "./trip_summary";
import Selected_room from "./selected_room";
import { FaCalendarAlt } from "react-icons/fa";

const Selected_details = () => {
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const Selectedroom = [
    {
      id: 1,
      title: "Luxury Suite",
      rating: 4.8,
      pricePerNight: 75500,
      description:
        "Experience elevated comfort and elegance in our Premium Room, where luxury meets tranquility.",
    },
    {
      id: 2,
      title: "Deluxe Room",
      rating: 4.5,
      pricePerNight: 75500,
      description:
        "Unwind in a serene space filled with modern amenities and soothing ambiance.",
    },

  ];

  const nights = 2;
  const days = 3;

  const handleViewDetails = (roomId) => {
    console.log("View details of room", roomId);
    setSelectedRoomId(roomId);
  };

  const handleRemoveRoom = (roomId) => {
    console.log("Remove room", roomId);
  };
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="w-full mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Section */}
          <div className="md:col-span-8">
            <div className="pt-8 pb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Review your selected details
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Experience elevated comfort and elegance in our Premium Rooms,
                where luxury meets tranquility.
              </p>
            </div>

            <div className="mb-6">
              {Selectedroom.map((room) => (
                <div key={room.id} className="mb-6">
                  <Selected_room
                    room={room}
                    nights={nights}
                    days={days}
                    selected={room.id === selectedRoomId}
                    onViewDetails={() => handleViewDetails(room.id)}
                    onRemove={() => handleRemoveRoom(room.id)}
                  />
                </div>
              ))}
            </div>

            {/* Payment Options */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 items-center w-full">
              <button className="px-6 py-2 bg-[#3E2AD91A] text-[#3E2AD9] rounded-md font-medium transition-colors cursor-pointer w-full md:w-[60%]">
                Pay at Hotel
              </button>
              <button className="px-6 py-2 bg-indigo-600  text-white rounded-md font-medium transition-colors cursor-pointer w-full md:w-[40%]">
                Pay Now
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:col-span-4">
            <div className="pt-8 pb-2">
              <div className="flex items-center gap-3 flex-wrap w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-[20px] p-5 ">
                <div className="flex items-center gap-4 flex-wrap justify-between">
                  <FaCalendarAlt className="text-[#3E2AD9] text-xl hidden md:block" />

                  <div className="flex flex-col text-sm text-gray-700 font-medium">
                    <span>Monday, 28 apr</span>
                    <span className="text-xs text-gray-500">11:00 Am </span>
                  </div>
                  <div className="border-t border-dotted border-gray-400 w-14"></div>
                  <div className="flex flex-col text-sm text-gray-700 font-medium">
                    <span>Monday, 30 apr</span>
                    <span className="text-xs text-gray-500">1:00 PM </span>
                  </div>
                </div>
              </div>
            </div>
            <TripSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selected_details;
