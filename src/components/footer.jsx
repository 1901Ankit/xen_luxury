import React from "react";
import footer_banner from "../assets/footer/footer_banner.png";
import call from "../assets/footer/call.png";
import mail from "../assets/footer/mail.png";
import location from "../assets/footer/location.png";
const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center text-white py-10 px-4 sm:px-6 md:px-20"
      style={{
        backgroundImage: `url(${footer_banner})`,
      }}
      aria-label="Banner Image"
    >
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="space-y-7 md:max-w-xs w-full">
          <div className="flex items-start gap-2">
            <img src={location} className="w-5 h-full mt-1 " />
            <p className="text-[14px] leading-relaxed">
              Abcd, Ashok vihar enclave, sector-88 near metro station 110223.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <img src={call} className="w-5 h-full " />
            <p className="text-[14px] font-medium">+91 8877669900</p>
          </div>

          <div className="flex items-center gap-2">
            <img src={mail} className="w-5 h-full" />
            <p className="text-[14px] font-medium">Xenluxury@hotels.in</p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex-1 text-center">
          <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-bold leading-tight">
            Your Hotel booking website
          </h2>
          <p className="text-[14px] sm:text-[16px] mt-4">
            Type your mail or Mobile number to get notified about offers and
            best price you can get here.
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mt-5">
            <button className="bg-gray-400 text-white px-4 py-1 rounded-full text-sm font-medium">
              Mobile
            </button>
            <button className="border border-white px-4 py-1 rounded-full text-sm font-semibold">
              Email
            </button>
          </div>

          {/* Input */}
          <div className="flex items-center justify-between bg-gray-400 rounded-full px-2 mt-5 max-w-md py-2 mx-auto">
            <input
              type="text"
              placeholder="+91 Mobile number"
              className="px-4 py-2 outline-none text-sm text-white bg-transparent placeholder-white"
            />
            <button className="flex items-center justify-center bg-white text-[#3E2AD9] px-4 py-2 rounded-full font-semibold w-[40%] cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm">
        <div className="flex flex-wrap gap-4 text-[14px] font-medium">
          <a href="#" className="hover:underline">
            Home Page
          </a>
          <a href="#" className="hover:underline">
            About us
          </a>
          <a href="#" className="hover:underline">
            Accommodations
          </a>
          <a href="#" className="hover:underline">
            Explore Areas
          </a>
          <a href="#" className="hover:underline">
            Our Location
          </a>
        </div>

        <div className="flex gap-4 text-[14px] font-medium">
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
