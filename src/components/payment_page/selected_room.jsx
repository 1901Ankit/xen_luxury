import React from "react";
import { MdDeleteForever, MdOutlineVerified } from "react-icons/md";
import { FaEye, FaStar } from "react-icons/fa6";
import image1 from "../../assets/rooms/1.jpeg";

const Selected_room = ({
  room,
  nights,
  days,
  selected = false,
  onViewDetails,
  onRemove,
}) => {
  return (
    <div className="flex flex-col md:flex-row p-4 bg-[#f7f6fd] shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-[20px] overflow-hidden ">
      <div className="relative w-full md:w-1/3 h-48 md:h-auto rounded-lg overflow-hidden">
        <img
          src={image1}
          alt="room"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>

      <div className="flex-1 p-4">
        <div className="flex items-center justify-between">
          <div className="">
            {" "}
            <h3 className="text-2xl font-semibold text-gray-800">
              Luxury Suite
            </h3>
          </div>
          <div className="flex items-center gap-1 text-green-600 bg-green-100 px-2 py-1 rounded-md text-sm font-medium">
            <FaStar className="text-lg mr-1" />
            <span className="text-gray-700">Excellent</span>
            <span className="ml-1 text-gray-600">{room.rating}</span>
          </div>
        </div>

        <div className="flex justify-between items-start mb-5">
          <h3 className="text-xl font-semibold text-gray-800 items-center justify-between ">
            <span className="mx-2 text-[#3E2AD9] font-medium text-[15px] leading-[27.75px] align-middle ">
              {nights} nights,
            </span>
            <span className=" text-[#3E2AD9] font-medium text-[15px] leading-[27.75px] align-middle ">
              {days} days
            </span>
          </h3>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Experience elevated comfort and elegance in our Premium Room, where
          luxury meets tranquility.
        </p>

        <div className="flex flex-col md:flex-row md:items-center justify-between mt-auto">
          <div className="flex items-center mb-3 md:mb-0">
            <span className="text-xl font-bold text-gray-900">
              ${room.pricePerNight.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 ml-1">per night</span>
          </div>

          <div className="flex space-x-2 items-center">
            <button className="w-44 h-10 flex items-center justify-center text-[15px] gap-1   text-[#3E2AD9] p-2 rounded-[34px] cursor-pointer">
              <FaEye className="" /> View Room Details
            </button>

            <MdDeleteForever className="text-red-700 font-bold text-[25px] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selected_room;
