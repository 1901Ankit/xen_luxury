import React from "react";
import Sidebar from "../../components/sidebar";
import SearchForm from "../../components/home_component/searchform";
import Keyfeature from "../../components/keyfeature";
import banner from "../../assets/home_banner/banner.webp";
import Accomodation from "../../components/home_component/accomodation";
import Luxury_hotel from "../../components/home_component/luxury_hotel";
import Highlight from "../../components/home_component/highlight";
import Nearby from "../../components/home_component/nearby";
import Location from "../../components/home_component/location";
import { BiHome, BiPhoneCall, BiSolidOffer } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaBed } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <div
        className="w-full bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${banner})` }}
        aria-label="Banner Image"
      >
        <div className="flex  lg:flex-row items-center gap-6  flex-col-reverse ">
          <div className="relative">
            <Sidebar />
          </div>

          <div className="w-full lg:w-3/6 relative mt-5 md:mt-0">
            <SearchForm />
          </div>

          <div className="w-full lg:w-4/6 relative">
            <Keyfeature />

            <div className="absolute bottom-0  bg-indigo-700 text-white  rounded-4xl py-4 px-6 shadow-lg flex items-center justify-between sm:hidden z-50 w-[89%] left-[25px]">
              <Link to="/" className="flex flex-col items-center group ">
                <div className="">
                  <BiHome className="w-8 h-8  text-white" />
                </div>
                <span className="text-xs mt-2 font-medium text-white ">
                  Home
                </span>
              </Link>
              <Link to="/" className="flex flex-col items-center group">
                <div className="">
                  <FaBed  className="w-8 h-8  text-white" />
                </div>
                <span className="text-xs mt-2 font-medium text-white ">
                  Rooms
                </span>
              </Link>
              <Link to="/" className="flex flex-col items-center group">
                <div className="">
                  <BiPhoneCall className="w-8 h-8  text-white" />
                </div>
                <span className="text-xs mt-2 font-medium text-white ">
                  Contact
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Luxury_hotel />
      </div>
      <div className="">
        <Highlight />
      </div>

      <div className="">
        <Accomodation />
      </div>
      <div className="">
        <Nearby />
      </div>
      <div className="">
        <Location />
      </div>
    </>
  );
};

export default Home;
