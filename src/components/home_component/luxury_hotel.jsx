import React, { useState, useRef } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCoffee,
  FaConciergeBell,
  FaDumbbell,
  FaGamepad,
  FaSpa,
  FaSwimmingPool,
} from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import banner from "../../assets/home_banner/background.png";

const Luxury_hotel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef(null);

  const tabs = [
    {
      name: "Spa",
      icon: <FaSpa />,
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      content1:
        "The Xen Luxury is a brand-new affordable luxury Hotel Suites project created by the highly reputed developer Siddha group. It is strategically located in Rajarhat, Kolkata. It is a magical place that takes your breath away.",
      content2:
        "Best place to stay too hygiene and all services are very good staff also. pacious Location: Some say the hotel is conveniently located.The Xen Luxury is a brand-new affordable luxury Hotel Suites project created by the highly reputed developer Siddha group.",
    },
    {
      name: "Swimming Pool",
      icon: <FaSwimmingPool />,
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      content1:
        "The Xen Luxury is a brand-new affordable luxury Hotel Suites project created by the highly reputed developer Siddha group. It is strategically located in Rajarhat, Kolkata.",
      content2:
        "Best place to stay too hygiene and all services are very good staff also. Spacious Location: Some say the hotel is conveniently located.",
    },
    {
      name: "Gym",
      icon: <FaDumbbell />,
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
      content1:
        "The Xen Luxury is a brand-new affordable luxury Hotel Suites project created by the highly reputed developer Siddha group. It is strategically located in Rajarhat, Kolkata.",
      content2:
        "Best place to stay too hygiene and all services are very good staff also. Spacious Location: Some say the hotel is conveniently located.",
    },
    {
      name: "Indoor Games",
      icon: <FaGamepad />,
      image:
        "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg",
      content1:
        "The Xen Luxury is a brand-new affordable luxury Hotel Suites project created by the highly reputed developer Siddha group. It is strategically located in Rajarhat, Kolkata.",
      content2:
        "Best place to stay too hygiene and all services are very good staff also. Spacious Location: Some say the hotel is conveniently located.",
    },
    {
      name: "Yoga",
      icon: <GrYoga />,
      image:
        "https://images.pexels.com/photos/2908175/pexels-photo-2908175.jpeg",
      content1:
        "The Xen Luxury is a brand-new affordable luxury Hotel Suites project created by the highly reputed developer Siddha group. It is strategically located in Rajarhat, Kolkata.",
      content2:
        "Best place to stay too hygiene and all services are very good staff also. Spacious Location: Some say the hotel is conveniently located.",
    },
    {
      name: "Lounge",
      icon: <FaCoffee />,
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
      content1:
        "The Xen Luxury is a brand-new affordable luxury Hotel Suites project created by the highly reputed developer Siddha group. It is strategically located in Rajarhat, Kolkata.",
      content2:
        "Best place to stay too hygiene and all services are very good staff also. Spacious Location: Some say the hotel is conveniently located.",
    },
    {
      name: "Restaurant",
      icon: <FaConciergeBell />,
      image: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg",
      content1:
        "The Xen Luxury is a brand-new affordable luxury Hotel Suites project created by the highly reputed developer Siddha group. It is strategically located in Rajarhat, Kolkata.",
      content2:
        "Best place to stay too hygiene and all services are very good staff also. Spacious Location: Some say the hotel is conveniently located.",
    },
  ];

  const activeContent = tabs[activeTab];
  const handleTabClick = (index) => {
    setActiveTab(index);
    swiperRef.current.swiper.slideTo(index);
  };

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat px-2 py-10"
      style={{ backgroundImage: `url(${banner})` }}
      aria-label="Banner Image"
    >
      <div className="text-center">
        <div className="flex items-center justify-center w-full flex-wrap mb-4">
          <div className="h-[2px] bg-[#3E2AD9] flex-1 max-w-[150px] sm:max-w-[300px] mr-3"></div>
          <h2 className="text-[28px] sm:text-[40px] font-normal whitespace-nowrap text-[#3E4958]">
            THE XEN LUXURY HOTEL
          </h2>
          <div className="h-[2px] bg-[#3E2AD9] flex-1 max-w-[150px] sm:max-w-[300px] ml-3"></div>
        </div>
        <p className="font-medium text-[15px] sm:text-[17px] leading-relaxed text-center  mb-8 px-2">
          The Xen Luxury is a brand-new affordable luxury Hotel Suites project
          created by the highly reputed developer Siddha group. It is
          strategically located in Rajarhat, Kolkata. It is a magical place that
          takes your breath away.
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex justify-center px-0 md:px-4">
        <div className="bg-[#eceafb]  md:bg-[#e7e6f8] p-0 md:p-3 md:rounded-[3rem] rounded-[0] w-full max-w-5xl">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-5 md:gap-1 bg-[#eceafb] md:bg-white p-4 md:p-2 rounded-[3rem]">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full cursor-pointer whitespace-nowrap transition duration-300 flex items-center justify-center ${
                  activeTab === index
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => handleTabClick(index)}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Slider and content */}
      <div className="container-fluid flex flex-wrap items-center justify-center mb-4 pt-5 pb-5 bg-white px-2">
        <div className="w-full sm:w-1/2 pr-0 sm:pr-8 relative">
          <div className="relative">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              speed={800}
              onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
              ref={swiperRef}
              modules={[Pagination]}
            >
              {tabs.map((tab, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[300px] sm:h-[400px] overflow-hidden rounded-xl shadow-md">
                    <img
                      src={tab.image}
                      alt={tab.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute bottom-4 left-0 right-0 flex justify-between px-6 z-10">
              <button
                className="border-2 border-white text-white p-2 rounded-[34px] cursor-pointer w-[20%] flex items-center justify-center bg-black/50"
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                <FaArrowLeft className="text-[18px]" />
              </button>
              <button
                className="border-2 border-white text-white p-2 rounded-[34px] cursor-pointer w-[20%] flex items-center justify-center bg-black/50"
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
                <FaArrowRight className="text-[18px]" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 mt-5 sm:mt-0 pl-0 sm:pl-10">
          <h2 className="text-[#3E2AD9] font-medium text-2xl sm:text-4xl mt-8 uppercase">
            {activeContent.name}
          </h2>
          <p className="font-normal text-black mt-5 text-sm md:text-base text-justify leading-[1.6]">
            {activeContent.content1}
            <span className="block mt-4 mb-10">{activeContent.content2}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Luxury_hotel;
