// TourismSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "../../assets/enhance/tourist/image1.jpg";
import image2 from "../../assets/enhance/tourist/image2.jpg";
import image3 from "../../assets/enhance/tourist/image3.jpg";
import image4 from "../../assets/enhance/tourist/image4.jpg";
import image5 from "../../assets/enhance/tourist/image5.jpg";
import image6 from "../../assets/enhance/tourist/image6.png";

const images = [
  { id: 1, img: image1 },
  { id: 2, img: image2 },
  { id: 3, img: image3 },
  { id: 4, img: image4 },
  { id: 5, img: image5 },
  { id: 6, img: image6 },
];

const TourismSlider = () => {
  const swiperRef = React.useRef(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="container-fluid py-12  mx-auto w-full   bg-[#d0cde7]">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="h-[500px]"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <img
                src={item.img}
                alt={`Slide ${index}`}
                className={`rounded-xl mx-auto mt-5 object-cover cursor-pointer transition-all duration-500 w-full ${
                  isActive
                    ? "h-[430px] w-[270px] scale-105 z-10"
                    : "h-[380px] w-[250px] "
                }`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-evenly items-center ">
        <button
          onClick={handlePrev}
          className="border-2 border-[#675c5c] text-[#675c5c] p-2 rounded-[34px] cursor-pointer w-[10%] py-3 flex items-center justify-center bg-transparent"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="border-2 border-[#675c5c] text-[#675c5c] p-2 rounded-[34px] cursor-pointer w-[10%] py-3 flex items-center justify-center bg-transparent"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TourismSlider;
