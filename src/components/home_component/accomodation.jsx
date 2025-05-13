import { FaHome, FaSwimmingPool } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { IoIosStar } from "react-icons/io";
import image1 from "../../assets/home_banner/accomodation/room.png";
import image2 from "../../assets/home_banner/accomodation/hotel.png";
import image3 from "../../assets/home_banner/accomodation/hotel.png";
import image4 from "../../assets/home_banner/accomodation/luxury.png";
import image5 from "../../assets/home_banner/accomodation/hotel.png";
import image6 from "../../assets/home_banner/accomodation/hotel.png";
import image7 from "../../assets/home_banner/accomodation/classic.png";
import image8 from "../../assets/home_banner/accomodation/hotel.png";
import image9 from "../../assets/home_banner/accomodation/hotel.png";
import image10 from "../../assets/home_banner/accomodation/premium.jpg";
import image11 from "../../assets/home_banner/accomodation/hotel.png";
import image12 from "../../assets/home_banner/accomodation/hotel.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import GuestModal from "../modal/guestmodal";
import banner from "../../assets/home_banner/background.png";
import { MdTravelExplore } from "react-icons/md";

const sections = [
  {
    hourlyRoom: {
      image: image1,
      title: "Hourly Room",
      subtitle:
        "Experience elevated comfort and elegance in our Premium Room, where luxury meets tranquility.",
      bookingLink: "/",
    },
    premiumRoom: {
      images: [image2, image5, image8],
      title: "Premium Room - Deluxe",
      subtitle:
        "Experience elevated comfort and elegance in our Premium Room, where luxury meets tranquility.",
      rating: "4.8",
      price: "75",
      features: [
        { name: "Deluxe Room", icon: FaHome },
        { name: "Air Conditioning", icon: TbAirConditioning },
        { name: "Swimming Pool", icon: FaSwimmingPool },
      ],
      bookingLink: "/",
    },
    luxurySuite: {
      images: [image3, image6, image9],
      title: "Luxury Suite - Executive",
      subtitle:
        "Experience elevated comfort and elegance in our Premium Room, where luxury meets tranquility.",
      rating: "5.0",
      price: "150",
      features: [
        { name: "Luxury Suite", icon: FaHome },
        { name: "Air Conditioning", icon: TbAirConditioning },
        { name: "Swimming Pool", icon: FaSwimmingPool },
      ],
      bookingLink: "/",
    },
  },
  {
    hourlyRoom: {
      image: image4,
      title: "Luxury Suite",
      subtitle:
        "Experience elevated comfort and elegance in our Premium Room, where luxury meets tranquility.",
      bookingLink: "/",
    },
    premiumRoom: {
      images: [image5, image2, image11],
      title: "Premium Room - Superior",
      subtitle:
        "Experience elevated comfort and elegance in our Premium Room, where luxury meets tranquility.",
      rating: "4.7",
      price: "85",
      features: [
        { name: "Superior Room", icon: FaHome },
        { name: "Air Conditioning", icon: TbAirConditioning },
        { name: "Swimming Pool", icon: FaSwimmingPool },
      ],
      bookingLink: "/",
    },
    luxurySuite: {
      images: [image6, image3, image12],
      title: "Luxury Suite - Royal",
      subtitle:
        "Experience elevated comfort and elegance in our Premium Room, where luxury meets tranquility.",
      rating: "5.2",
      price: "200",
      features: [
        { name: "Royal Suite", icon: FaHome },
        { name: "Air Conditioning", icon: TbAirConditioning },
        { name: "Swimming Pool", icon: FaSwimmingPool },
      ],
      bookingLink: "/",
    },
  },
  {
    hourlyRoom: {
      image: image7,
      title: "Classic Rooms",
      subtitle:
        "Experience elevated comfort and elegance in our Premium Room, where luxury meets tranquility.",
      bookingLink: "/",
    },
    premiumRoom: {
      images: [image8, image5, image2],
      title: "Premium Room - Elite",
      subtitle:
        "Experience elevated comfort and elegance in our Premium Room, where luxury meets tranquility.",
      rating: "4.9",
      price: "90",
      features: [
        { name: "Elite Room", icon: FaHome },
        { name: "Air Conditioning", icon: TbAirConditioning },
        { name: "Swimming Pool", icon: FaSwimmingPool },
      ],
      bookingLink: "/",
    },
    luxurySuite: {
      images: [image9, image6, image3],
      title: "Luxury Suite - Presidential",
      subtitle:
        "Experience elevated comfort and elegance in our Premium Room, where luxury meets tranquility.",
      rating: "5.3",
      price: "250",
      features: [
        { name: "Presidential Suite", icon: FaHome },
        { name: "Air Conditioning", icon: TbAirConditioning },
        { name: "Swimming Pool", icon: FaSwimmingPool },
      ],
      bookingLink: "/",
    },
  },
  {
    hourlyRoom: {
      image: image10,
      title: "Premium Rooms",
      subtitle:
        "Experience elevated comfort and elegance in our Premium Room, where luxury meets tranquility.",
      bookingLink: "/",
    },
    premiumRoom: {
      images: [image11, image8, image5],
      title: "Premium Room - Classic",
      subtitle:
        "Experience elevated comfort and elegance in our Premium Room, where luxury meets tranquility.",
      rating: "4.6",
      price: "70",
      features: [
        { name: "Classic Room", icon: FaHome },
        { name: "Air Conditioning", icon: TbAirConditioning },
        { name: "Swimming Pool", icon: FaSwimmingPool },
      ],
      bookingLink: "/",
    },
    luxurySuite: {
      images: [image12, image9, image6],
      title: "Luxury Suite - Grand",
      subtitle:
        "Experience elevated comfort and elegance in our Premium Room, where luxury meets tranquility.",
      rating: "5.1",
      price: "180",
      features: [
        { name: "Grand Suite", icon: FaHome },
        { name: "Air Conditioning", icon: TbAirConditioning },
        { name: "Swimming Pool", icon: FaSwimmingPool },
      ],
      bookingLink: "/",
    },
  },
];

const HourlyRoomCard = ({ room, setIsModalOpen }) => (
  <div className="relative w-full h-full rounded-lg shadow-xl overflow-hidden group">
    <img
      src={room.image}
      alt={room.title}
      className="w-full h-[50dvh] md:h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute bottom-0 left-0 w-full h-1/1 bg-gradient-to-t from-black opacity-80 pointer-events-none z-10"></div>
    <div className="absolute inset-0 z-20 flex flex-col justify-end text-center px-4 py-5">
      <h2 className="text-white text-2xl font-bold mb-4">{room.title}</h2>
      <p className="text-white text-sm mb-4">{room.subtitle}</p>
      <div className="bg-[#3E2AD9] text-white p-3 rounded-xl cursor-pointer flex items-center justify-center mt-5">
        <MdTravelExplore className="w-7 h-7 mx-2" />
        <button type="submit">
          <span className="text-[16px] font-bold hover:text-indigo-200">
            Explore more
          </span>
        </button>
      </div>
    </div>
  </div>
);

const RoomCard = ({ room, setIsModalOpen }) => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden  ">
    <div className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-64"
      >
        {room.images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`${room.title} - Image ${index + 1}`}
              className="w-full h-64 object-cover "
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-md">
        <IoIosStar className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        <span className="ml-1 text-sm font-bold">{room.rating}</span>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">{room.title}</h3>
      <p className="text-[12px] text-gray-400">{room.subtitle}</p>
      <div className="flex flex-wrap justify-between items-center mt-5">
        {room.features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center mb-2 sm:mb-0">
            <feature.icon className="w-7 h-7 mb-2 text-[#3E2AD9]" />
            <p className="text-[12px] text-gray-400">{feature.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center">
          <span className="text-xl font-bold">${room.price}</span>
          <span className="text-[14px] text-gray-400 mx-2">per night</span>
        </div>
      </div>
      <div>
        <div
          className="bg-[#3E2AD9] text-white p-3 rounded-xl cursor-pointer flex items-center justify-center mt-5"
          onClick={() => setIsModalOpen(true)}
        >
          <button>
            <span className="text-[16px] font-bold hover:text-indigo-200">
              Check Availability{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Accomodation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guests, setGuests] = useState({ adults: 1, children: 0 });
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const updateCount = (type, operation) => {
    setGuests((prev) => ({
      ...prev,
      [type]:
        operation === "inc"
          ? prev[type] + 1
          : prev[type] > 0
          ? prev[type] - 1
          : 0,
    }));
  };

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat px-2 py-10 "
      style={{ backgroundImage: `url(${banner})` }}
      aria-label="Banner Image"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
        <div className="relative inline-block px-6 py-3 text-[30px] font-bold whitespace-nowrap">
          <h2 className="text-[30px] md:text-[40px] font-normal whitespace-nowrap text-[#3E4958]">
            Accomodations{" "}
          </h2>
          <span className="absolute bottom-4 left-7 w-full h-full pointer-events-none">
            <span className="absolute top-0 left-0 w-[230px] md:w-[310px] h-0.5 bg-indigo-600" />
            <span className="absolute top-0 left-0 w-0.5 h-1/2 bg-indigo-600" />
            <span className="absolute top-0 right-14 w-0.5 h-1/2 bg-indigo-600" />
          </span>
          <span className="absolute top-4 right-6 w-full h-full pointer-events-none">
            <span className="absolute bottom-0 left-14 w-0.5 h-1/2 bg-indigo-600" />
            <span className="absolute bottom-0 right-1 w-[230px] md:w-[305px] h-0.5 bg-indigo-600" />
            <span className="absolute bottom-0 right-1 w-0.5 h-1/2 bg-indigo-600" />
          </span>
        </div>
      </div>
      {sections.map((section, index) => (
        <div key={index} className="container mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {index === 0 || index === 2 ? (
              <>
                <div className="">
                  <HourlyRoomCard
                    room={section.hourlyRoom}
                    setIsModalOpen={setIsModalOpen}
                  />
                </div>
                <>
                  {isMobile ? (
                    <Swiper
                      className="w-full rounded-lg shadow-xl"
                      modules={[Autoplay]}
                      spaceBetween={20}
                      slidesPerView={1}
                      loop={true}
                      autoplay={{ delay: 3000 }}
                    >
                      <SwiperSlide>
                        <RoomCard
                          room={section.luxurySuite}
                          setIsModalOpen={setIsModalOpen}
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <RoomCard
                          room={section.premiumRoom}
                          setIsModalOpen={setIsModalOpen}
                        />
                      </SwiperSlide>
                    </Swiper>
                  ) : (
                    <>
                      <RoomCard
                        room={section.luxurySuite}
                        setIsModalOpen={setIsModalOpen}
                      />
                      <RoomCard
                        room={section.premiumRoom}
                        setIsModalOpen={setIsModalOpen}
                      />
                    </>
                  )}
                </>
              </>
            ) : (
              <>
                <>
                  {isMobile ? (
                    <Swiper
                      className="w-full rounded-lg shadow-xl order-3 sm:order-none"
                      modules={[Autoplay]}
                      spaceBetween={20}
                      slidesPerView={1}
                      loop={true}
                      autoplay={{ delay: 3000 }}
                    >
                      <SwiperSlide>
                        <RoomCard
                          room={section.luxurySuite}
                          setIsModalOpen={setIsModalOpen}
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <RoomCard
                          room={section.premiumRoom}
                          setIsModalOpen={setIsModalOpen}
                        />
                      </SwiperSlide>
                    </Swiper>
                  ) : (
                    <>
                      <RoomCard
                        room={section.luxurySuite}
                        setIsModalOpen={setIsModalOpen}
                      />
                      <RoomCard
                        room={section.premiumRoom}
                        setIsModalOpen={setIsModalOpen}
                      />
                    </>
                  )}
                </>
                <div className="order-1 sm:order-none">
                  <HourlyRoomCard
                    room={section.hourlyRoom}
                    setIsModalOpen={setIsModalOpen}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      ))}

      {/* Modal Component */}
      <GuestModal
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setIsModalOpen={setIsModalOpen}
        guests={guests}
        updateCount={updateCount}
      />
    </div>
  );
};

export default Accomodation;
