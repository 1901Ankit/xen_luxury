import React, { useRef } from "react";
import "./index.css";
import image1 from "../../assets/home_banner/key_feature/paradise.png";
import image2 from "../../assets/home_banner/key_feature/2.png";
import image3 from "../../assets/home_banner/key_feature/3.png";
import image4 from "../../assets/home_banner/key_feature/4.png";
import { FaArrowRight } from "react-icons/fa";

const Keyfeature = () => {
  const carouselRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const showSlider = () => {
    const carouselDom = carouselRef.current;
    const SliderDom = carouselDom.querySelector(".list");
    const thumbnailBorderDom = carouselDom.querySelector(".thumbnail");
    const SliderItemsDom = SliderDom.querySelectorAll(".item");
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");

    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    carouselDom.classList.add("next");
    setTimeout(() => {
      carouselDom.classList.remove("next");
    }, 1000);
    setSelectedIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  const handleItemClick = (index) => {
    setSelectedIndex(index);
    showSlider();
  };

  return (
    <div className="container p-2 mx-auto">
      <div className="waper">
        <div className="carousel m-auto rounded-[40px]" ref={carouselRef}>
          <div className="list">
            {[image1, image2, image3, image4].map((image, index) => (
              <div className="item" key={index}>
                <img src={image} alt={`feature-${index}`} />
                <div className="content">
                  <p className=" font-semibold text-[20px] leading-[100%] tracking-[0%] mb-3">
                    Live as if
                  </p>
                  <p className=" font-bold text-[40px] md:text-[55px] leading-[100%] tracking-[0%] ">
                    The Paradise{" "}
                  </p>
                  <p className=" font-semibold text-[18px] leading-[100%] tracking-[0%] mt-3 mx-2">
                    is on earth
                  </p>
                  <button
                    onClick={showSlider}
                    className="border-2 border-white text-white p-2 rounded-[34px] cursor-pointer w-[20%] mt-5 flex items-center justify-center"
                  >
                    <FaArrowRight className="text-[18px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="container flex items-center justify-between gap-6">
            <div className="thumbnail rounded-[20px] p-2 flex gap-3 w-full md:w-1/2">
              {[image1, image2, image3, image4].map((image, index) => (
                <div
                  className={`item cursor-pointer ${
                    selectedIndex === index ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => handleItemClick(index)}
                >
                  <img
                    src={image}
                    alt={`thumbnail-${index}`}
                    className="w-[60px] h-[60px] object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyfeature;
