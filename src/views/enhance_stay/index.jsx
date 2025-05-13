import React from "react";
import SearchTabs from "../../components/enhance_your_stay/search_tabs";
import { FaBed, FaCalendarCheck, FaCreditCard } from "react-icons/fa6";
import { FaMagic } from "react-icons/fa";
import banner from "../../assets/enhance/banner.jpg";
const Enhance_stay = () => {
  return (
    <>
      <div className="relative h-auto md:h-[500px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg")',
            filter: "brightness(0.7)",
          }}
        ></div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-4 md:px-8 lg:px-16 py-10 gap-6">
          {/* Left Box */}
          <div
            className="w-full md:w-1/3 text-end md:text-end p-8 text-white  rounded-lg bg-[rgba(255,255,255,0.25)]"
            style={{
              boxShadow: `
                  5.22px 6.26px 6.52px 0px #00000007,
                  12.8px 15.36px 13px 0px #00000009,
                  24.66px 29.59px 25.48px 0px #0000000B
                `,
            }}
          >
            <h2 className="text-3xl font-semibold">Enhance your stay</h2>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={banner}
              alt="Enhance Banner"
              className="w-[90%] max-w-[433px] h-[400px] object-cover rounded-[33px] border border-white"
            />
          </div>

          {/* Right Box */}
          <div className="w-full md:w-1/3 text-center md:text-start p-6 text-white rounded-lg">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Experience New Perspective
            </h2>
          </div>
        </div>
      </div>

      <SearchTabs />
    </>
  );
};

export default Enhance_stay;
