import { motion } from "framer-motion";
import {
  FaCarSide,
  FaCoffee,
  FaEye,
  FaSnowflake,
  FaStar,
} from "react-icons/fa";
import { GiPersonInBed } from "react-icons/gi";
import image1 from "../../assets/rooms/1.jpeg";
const Booking_Card = ({ data, status }) => {
  const amenities = [
    { icon: "car", name: "Free Parking" },
    { icon: "breakfast", name: "Breakfast Included" },
    { icon: "ac", name: "Air Conditioning" },
    { icon: "bed", name: "King Size Bed" },
  ];

  const amenityIcons = {
    car: <FaCarSide />,
    breakfast: <FaCoffee />,
    ac: <FaSnowflake />,
    bed: <GiPersonInBed />,
  };

  return (
    <motion.div className="bg-[#f7f6fd] shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-[20px] overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative p-6">
          <img
            src={data.image}
            alt="Room"
            className="w-[100%] h-[100%]  object-cover rounded-4xl"
          />
        </div>

        <div className="md:w-2/3 p-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <div className=" items-center justify-between flex">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {data.title}
                </h3>
                <span className="text-[rgba(223,26,26,1)] mx-2 text-base font-semibold">
                  {" "}
                  {data.subtitle}
                </span>
              </div>
              <div className="flex items-center gap-1 text-green-600 bg-green-100 px-2 py-1 rounded-md text-sm font-medium">
                <FaStar />
                Excellent {data.rating}
              </div>
            </div>

            <div className="flex justify-between items-start mb-5">
              <h3 className="text-xl font-semibold text-gray-800">
                <span className="mx-2 text-[#3E2AD9] font-medium text-[15px] leading-[27.75px]">
                  {data.nights} night{data.nights > 1 ? "s" : ""},
                </span>
                <span className="text-[#3E2AD9] font-medium text-[15px] leading-[27.75px]">
                  {data.guests} guest{data.guests > 1 ? "s" : ""}
                </span>
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
              <div className="flex-1">
                <p className="text-gray-600 text-sm">{data.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 w-full">
                  {amenities.map((amenity, index) => (
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
                <button className="w-44 h-10 flex items-center justify-center text-[15px] gap-1 text-[#3E2AD9] p-2 rounded-[34px] cursor-pointer">
                  <FaEye /> View Room Details
                </button>

                <div>
                  <div className="text-xl font-bold text-gray-800">
                    ₹{data.price.toLocaleString()}
                    <span className="text-sm text-gray-500 ml-2 font-normal">
                      Per night
                    </span>
                  </div>
                </div>
                {status === "recent" ? (
                  <button className="w-44 h-10 font-semibold flex items-center justify-center text-[15px] bg-[#fff] text-[rgba(223,26,26,1)] border border-[rgba(223,26,26,1)] p-2 rounded-[10px] cursor-pointer">
                    Cancel Booking
                  </button>
                ) : status === "past" ? (
                  <div className="flex  items-center justify-between gap-2">
                    <button className="w-44 h-10 flex items-center justify-center text-[15px] bg-[#3E2AD9] text-white p-2 rounded-[34px] cursor-pointer">
                      Re-book
                    </button>
                  </div>
                ) : status === "cancelled" ? (
                  <button className="w-44 h-10 font-semibold flex items-center justify-center text-[15px] bg-[#3E2AD9] text-[#fff] border border-[#3E2AD9)] p-2 rounded-[10px] cursor-pointer">
                    Re-book
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Booking_Card;
