import React from "react";
import { IoIosStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

import popularroom from "../../assets/home_banner/room.png";

const Popular_room = () => {
  return (
    <div className="mt-10 ">
      <h1 className="font-poppins font-medium text-[20px] leading-[14px] tracking-[0px] text-[#3E4958] mb-5">
        Our Popular Rooms
      </h1>

      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Navigation, Keyboard]}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        className="w-full max-w-md "
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, idx) => (
          <SwiperSlide key={idx}>
            <div
              className=" rounded-xl  p-4"
              style={{
                boxShadow: "10px 12px 20px 40px #f8f7f5",
                backgroundColor: "#f8f7f5",
              }}
            >
              <div className="flex items-center justify-between ">
                <div className="flex items-center">
                  <img
                    src={popularroom}
                    alt="Luxury Suite"
                    className="rounded-xl"
                    width={100}
                    height={100}
                  />
                  <div className="ml-4 space-y-1">
                    <p className="font-semibold text-[15px] leading-none">
                      Luxury Suite
                    </p>
                    <p className="text-[14px] text-gray-400">Kolkata, India</p>
                    <p className="font-bold text-[16px] leading-none">
                      ₹30,952
                      <span className="text-gray-400 font-normal text-[12px] ml-2">
                        per night
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2 ml-3">
                  <div className="flex items-center">
                    <IoIosStar className="w-5 h-5 text-yellow-400" />
                    <span className="ml-1 text-base font-normal">4.9</span>
                  </div>
                  <button className="relative overflow-hidden bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 transition-all w-[110px] md:w-full group">
                    Book Now
                    <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-white opacity-20 transform rotate-[25deg] group-hover:left-[125%] transition-all duration-500 ease-in-out"></span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Popular_room;
