import React from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaCoffee,
  FaSnowflake,
  FaCarSide,
  FaEye,
} from "react-icons/fa";
import { GiPersonInBed } from "react-icons/gi";
import { useRooms } from "../../contexts/rooms_context";

const Roomcard = ({ room }) => {
  const { selectedRooms, toggleRoomSelection } = useRooms();
  const isSelected = selectedRooms.some((r) => r.id === room.id);
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const amenityIcons = {
    car: <FaCarSide />,
    breakfast: <FaCoffee />,
    ac: <FaSnowflake />,
    bed: <GiPersonInBed />,
  };

  return (
    <motion.div className="bg-[#f7f6fd] shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-[20px] overflow-hidden ">
      <div className="flex flex-col md:flex-row">
        {/* Room Image */}
        <div className="md:w-1/3 relative p-6">
          <img
            src={room.image}
            alt={room.name}
            className="w-[100%] h-[100%]  object-cover rounded-4xl"
          />
          {room.discount && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold py-1 px-3 rounded-full shadow-md">
              {room.discount}% OFF
            </div>
          )}
        </div>

        {/* Room Info */}
        <div className="md:w-2/3 p-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-semibold text-gray-800">
                {room.name}
              </h3>
              <div className="flex items-center gap-1 text-green-600 bg-green-100 px-2 py-1 rounded-md text-sm font-medium">
                <FaStar />
                {room.rating}
              </div>
            </div>
            <div className="flex justify-between items-start mb-5">
              <h3 className="text-xl font-semibold text-gray-800 items-center justify-between ">
                <span className="mx-2 text-[#3E2AD9] font-medium text-[15px] leading-[27.75px] align-middle ">
                  {room.night}
                </span>
                <span className=" text-[#3E2AD9] font-medium text-[15px] leading-[27.75px] align-middle ">
                  {room.guests}
                </span>
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
              <div className="flex-1">
                <p className="text-gray-600 text-sm">{room.description}</p>

                {/* Amenities under paragraph */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 w-full">
                  {room.amenities.map((amenity, index) => (
                    <div key={index}>
                      <div className="bg-[#eceafb] text-[#3e2ad9] text-sm py-2 px-3 rounded-full cursor-pointer whitespace-nowrap transition duration-300 flex items-center w-full">
                        <span className="text-[#3e2ad9] mr-2 text-[20px]">
                          {amenityIcons[amenity.icon]}
                        </span>
                        <span>{amenity.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sm:text-right flex flex-col gap-4 sm:items-end sm:w-[35%]">
                <button className="w-44 h-10 flex items-center justify-center text-[15px] gap-1   text-[#3E2AD9] p-2 rounded-[34px] cursor-pointer">
                  <FaEye className="" /> View Room Details
                </button>

                <div>
                  <div className="text-xl font-bold text-gray-800 items-center justify-between">
                    {formatCurrency(room.price)}
                    <span className="text-sm text-gray-500 ml-2 font-normal">
                      Per night
                    </span>
                  </div>
                  {room.originalPrice && (
                    <div className="text-sm text-gray-400 line-through">
                      {formatCurrency(room.originalPrice)}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => toggleRoomSelection(room)}
                  className="w-44 h-10 flex items-center justify-center text-[15px] bg-[#3E2AD9]  border-2 border-red text-white p-2 rounded-[34px] cursor-pointer"
                >
                  {isSelected ? "Selected" : "Select Room"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Roomcard;
