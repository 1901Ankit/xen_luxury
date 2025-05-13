import React from "react";
import image1 from "../../assets/home_banner/nearby/1.jpg";
import image2 from "../../assets/home_banner/highlight/airport.jpg";
import image3 from "../../assets/home_banner/nearby/3.png";
import banner from "../../assets/home_banner/background.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
const images = [
  { src: image1, label: "Airport" },
  { src: image2, label: "Tourist Spot" },
  { src: image3, label: "Available Area" },
  { src: image1, label: "Airport" },
  { src: image2, label: "Tourist Spot" },
  { src: image3, label: "Available Area" },
];
const Nearby = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat px-2 py-10"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10 px-4">
        <div className="relative inline-block px-6 py-3  text-center">
          <h2 className="text-[30px] md:text-[40px] font-normal whitespace-nowrap text-[#3E4958]">
            EXPLORE NEARBY AREAS
          </h2>
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full max-w-xs h-full pointer-events-none">
            <span className="absolute top-0 left-0 w-full h-0.5 bg-indigo-600" />
            <span className="absolute top-0 left-0 w-0.5 h-1/2 bg-indigo-600" />
            <span className="absolute top-0 right-0 w-0.5 h-1/2 bg-indigo-600" />
          </span>
          <span className="absolute top-5 left-1/2 -translate-x-1/2 w-full max-w-xs h-full pointer-events-none">
            <span className="absolute bottom-0 left-0 w-0.5 h-1/2 bg-indigo-600" />
            <span className="absolute bottom-0 right-0 w-full h-0.5 bg-indigo-600" />
            <span className="absolute bottom-0 right-0 w-0.5 h-1/2 bg-indigo-600" />
          </span>
        </div>
      </div>

      {/* Mobile Swiper */}
      <div className="block sm:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden h-[300px] cursor-pointer">
                <img
                  src={item.src}
                  className="w-full h-full object-cover transform scale-125 transition-all duration-300 group-hover:scale-110 group-hover:opacity-60"
                  alt={`Highlight ${index + 1}`}
                />
                <div className="absolute inset-0 flex items-end justify-center p-4 opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-white text-3xl font-semibold">
                    {item.label}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((item, index) => (
          <div
            key={index}
            className="w-full relative group overflow-hidden h-[300px] cursor-pointer"
          >
            <img
              src={item.src}
              className="w-full h-full object-cover transform scale-125 transition-all duration-300 ease-out group-hover:scale-110 group-hover:opacity-60"
              alt={`Highlight ${index + 1}`}
            />
            <div className="absolute inset-0 flex items-end justify-center p-4 opacity-120 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              <div className="absolute bottom-0 left-0 w-full h-screen bg-gradient-to-t from-black opacity-90 pointer-events-none z-10"></div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end text-center px-4 py-5">
                <h2 className="text-white text-2xl font-bold mb-4">
                  {item.label}{" "}
                </h2>
              </div>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nearby;
