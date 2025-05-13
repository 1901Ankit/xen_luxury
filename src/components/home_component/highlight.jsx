import React from "react";
import image1 from "../../assets/home_banner/highlight/airport.jpg";
import image2 from "../../assets/home_banner/highlight/tourist.jpg";
import image3 from "../../assets/home_banner/highlight/available.jpg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay} from "swiper/modules";
const images = [
  { src: image1, title: "Free Airport Shuttle" },
  { src: image2, title: "Tourist Places (Book Passes)" },
  { src: image3, title: "Free Guide Available" },
];
const Highlight = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat px-2 py-10"
      style={{ backgroundColor: "#f2f0ff" }}
      aria-label="Banner Image"
    >
      {" "}
      <div className="flex flex-col md:flex-row items-start justify-between md:items-center gap-4 mb-10">
        <div className="flex items-center w-full md:w-1/2">
          <div className="h-[2px] bg-[#3E2AD9] w-20 md:w-44 mr-3"></div>
          <h2 className="text-[40px] font-normal whitespace-nowrap text-[#3E4958]">
            HIGHLIGHTS
          </h2>
        </div>
        <p className="font-normal text-[black] text-sm md:text-base text-justify leading-[1.9] md:w-1/2">
          The Xen Luxury is a brand-new affordable luxury Hotel Suites project
          created by the highly reputed developer Siddha group. It is
          strategically located in Rajarhat, Kolkata.
        </p>
      </div>
      <div className="block sm:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[300px] rounded-xl shadow-xl overflow-hidden">
                <img
                  src={item.src}
                  className="w-full h-full object-cover rounded-xl"
                  alt={`Highlight ${index + 1}`}
                />
              </div>
              <p className="mt-2 text-lg font-normal text-[#3E4958]">
                {item.title}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((item, index) => (
          <div key={index} className="w-full">
            <div className="w-full h-[300px] rounded-xl shadow-xl overflow-hidden">
              <img
                src={item.src}
                className="w-full h-full object-cover rounded-xl"
                alt={`Highlight ${index + 1}`}
              />
            </div>
            <p className="mt-2 text-base font-normal text-[#3E4958]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlight;
