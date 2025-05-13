import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaSortAmountDown } from "react-icons/fa";
import { useRooms } from "../../contexts/rooms_context";
import Roomcard from "./room_card";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const RoomListing = ({ searchParams }) => {
  const { rooms, selectedRooms } = useRooms();
  const [sortBy, setSortBy] = useState("price-low");
  const [filteredRooms, setFilteredRooms] = useState([]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const formatDateOnly = (date) => {
    if (!date) return "";
    const options = {
      weekday: "long",
      day: "numeric",
      month: "short",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  const formatTimeOnly = (date) => {
    if (!date) return "";
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return new Date(date).toLocaleTimeString("en-US", options);
  };

  useEffect(() => {
    let filtered = [...rooms];
    if (searchParams.location) {
      filtered = filtered.filter((room) =>
        room.location
          .toLowerCase()
          .includes(searchParams.location.toLowerCase())
      );
    }
    filtered.sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

    setFilteredRooms(filtered);
  }, [rooms, searchParams, sortBy]);

  return (
    <div>
      {selectedRooms.length > 0 && (
        <div className="mb-6 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 bg-primary-50 text-primary-600 font-medium">
            Selected Rooms ({selectedRooms.length})
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-2 py-4 bg-[#F7F6FD] shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-[20px] items-center  justify-between">
            {" "}
            {selectedRooms.map((room) => (
              <div
                key={room.id}
                className="flex items-center justify-between bg-[#fff] shadow-md rounded-xl p-4 w-full "
              >
                <div className="flex items-center justify-between w-full">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="rounded-xl"
                    width={120}
                    height={120}
                  />
                  <div className="ml-4 space-y-1 w-full">
                    <div className="flex items-center justify-between w-full">
                      <p className="font-semibold text-[15px] leading-none">
                        {room.name}
                      </p>
                      <MdDeleteForever
                        className="text-red-700 font-bold text-[20px] cursor-pointer"
                        onClick={() => toggleRoomSelection(room)}
                      />
                    </div>

                    <p className="text-[12px] text-gray-400 font-semibold">
                      {room.night} {room.guests}
                    </p>
                    <p className="font-bold text-[15px] leading-none mt-2">
                      {formatCurrency(room.price)}
                      <span className="text-gray-400 font-semibold text-[12px] ml-2">
                        per night
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <Link to="/enhance_stay">
              <button className="w-44 h-10 flex items-center justify-center text-[15px] bg-[#3E2AD9]  border-2 border-red text-white p-2 rounded-[34px] cursor-pointer">
                Book Now{" "}
              </button>
            </Link>
          </div>
        </div>
      )}

      {searchParams.checkIn && searchParams.checkOut && (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 px-4 py-3 bg-[#F7F6FD] shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-[20px] mt-5 ">
          {searchParams.checkIn && searchParams.checkOut && (
            <div className="w-full">
              <div className="flex items justify-between">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {filteredRooms.length} Search results for
                  </h2>
                  <p className="text-sm font-semibold text-gray-500 mt-1">
                    {searchParams.location
                      ? `${searchParams.location}`
                      : "Showing all available rooms"}
                  </p>
                </div>
                <div className=" flex  space-x-2 items-start justify-center">
                  <FaSortAmountDown className="text-gray-500 text-sm mt-1" />
                  <label className="text-sm font-medium text-gray-700 ">
                    Sort by:
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-[180px] h-[25px] pl-5 text-sm text-gray-700 focus:outline-none appearance-none"
                  >
                    <option value="price-low">Price (low to high)</option>
                    <option value="price-high">Price (high to low)</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-3 flex-wrap w-full md:w-[50%] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-[20px] p-5">
                  <div className="p-3 bg-[#eceafb] rounded-md">
                    <FaCalendarAlt className="text-[#3E2AD9] text-xl" />
                  </div>
                  <div className="flex items-center gap-6 flex-wrap">
                    <div className="flex flex-col text-sm text-gray-700 font-medium">
                      <span>{formatDateOnly(searchParams.checkIn)}</span>
                      <span className="text-xs text-gray-500">
                        {formatTimeOnly(searchParams.checkIn)}
                      </span>
                    </div>
                    <div className="border-t border-dotted border-gray-400 w-14"></div>
                    <div className="flex flex-col text-sm text-gray-700 font-medium">
                      <span>{formatDateOnly(searchParams.checkOut)}</span>
                      <span className="text-xs text-gray-500">
                        {formatTimeOnly(searchParams.checkOut)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-wrap w-full md:w-[40%] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-[20px] p-5">
                  <div className="p-3 bg-[#eceafb] rounded-md">
                    <FaUser className="text-[#3E2AD9] text-xl" />
                  </div>
                  <div className="flex flex-col ">
                    <span className="text-xs font-semibold text-gray-500">
                      Guests & Rooms
                    </span>
                    <span className="text-sm font-medium mt-1">
                      {searchParams.adults} Adults, {searchParams.children}{" "}
                      Children, {searchParams.rooms} Rooms
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="space-y-6 mt-5">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Roomcard room={room} />
            </motion.div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              No rooms found
            </h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomListing;
