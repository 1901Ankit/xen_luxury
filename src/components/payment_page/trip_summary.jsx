import React, { useState } from "react";
import { RiDiscountPercentFill } from "react-icons/ri";
import { MdEmojiPeople } from "react-icons/md";

const TripSummary = ({ prices, onApplyCoupon, hasDiscount }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [showChildOptions, setShowChildOptions] = useState(false);
  const [childAge, setChildAge] = useState("");

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleApplyCoupon = () => {
    if (promoCode.trim()) {
      onApplyCoupon(promoCode);
    }
  };
  const handleAddChild = () => {
    console.log(`Added child with age: ${childAge}`);
    setChildAge("");
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        Your Trip Summary
      </h2>

      {/* Promo Code Section */}
      <div className="mb-2 border-t border-gray-200">
        <div className="bg-[#fff] rounded-xl p-4 mt-4 border border-[#E1E1E1]">
          <button
            onClick={toggleExpand}
            className="flex items-center justify-between w-full text-left  text-indigo-600 hover:text-indigo-700 transition-colors "
          >
            <span className="flex items-center font-semibold">
              <RiDiscountPercentFill className="text-[17px] mr-1" />
              <span className="text-[14px]">View Offers to get discount</span>
            </span>
          </button>
          <div className="flex flex-col md:flex-row items-stretch gap-2 mt-2">
          <input
              type="text"
              className="flex-1 w-[100%] block px-3 py-2  rounded-l-md  border border-[#E1E1E1]  text-sm text-gray-700 focus:outline-none appearance-none"
              placeholder="Enter your Promo Code here"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button
              className="px-6 py-2 bg-indigo-600  text-white rounded-md font-medium transition-colors cursor-pointer w-full md:w-[30%]"
              onClick={handleApplyCoupon}
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Child Age Section */}
      <div className="mb-4">
        <div className="bg-[#fff] rounded-xl p-4 mt-6 border border-[#E1E1E1]">
          <button
            className="flex items-center justify-between w-full text-left  text-indigo-600 hover:text-indigo-700 transition-colors "
            onClick={() => setShowChildOptions(!showChildOptions)}
          >
            <span className="flex items-center font-semibold">
              <MdEmojiPeople  className="text-[19px] mr-1" />

              <span className="text-[14px]">
                {" "}
                Child's Age (Under 7) Required{" "}
              </span>
            </span>
          </button>
          <div className="flex flex-col md:flex-row items-stretch gap-2 mt-2">
          <div className="text-sm font-medium text-gray-700">Child 1</div>
            <div className="flex-1">
              <input
                type="number"
                min="0"
                max="7"
                className="flex-1 w-[100%] block px-3 py-2  rounded-l-md  border border-[#E1E1E1]  text-sm text-gray-700 focus:outline-none appearance-none"
                placeholder="Age"
                value={childAge}
                onChange={(e) => setChildAge(e.target.value)}
              />
            </div>
            <button
              className="px-6 py-2 bg-indigo-600  text-white rounded-md font-medium transition-colors cursor-pointer w-full md:w-[30%]"
              onClick={handleAddChild}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="bg-[#3E2AD914] rounded-xl p-4 mt-6 border border-[#E1E1E1]">
        <div className="flex w-full items-center justify-between mb-5">
          <h3 className="text-base font-bold text-[#3E2AD9]">
            Your Price Breakdown
          </h3>
          <p className="text-xs font-semibold text-[#3E2AD9]">
            You saved Rs. 150
          </p>
        </div>
        <div className="space-y-3 mb-4">
          <div className="flex justify-between text-sm font-semibold">
            <span className="text-[#000]">
              Original price (1 room x 2 nights)
            </span>
            <span className="font-medium">₹19,998</span>
          </div>

          <div className="flex justify-between text-sm font-semibold">
            <span className="text-[#000]">Booking fee</span>
            <span className="font-medium text-[#3E2AD9]">Free</span>
          </div>

          <div className="flex justify-between items-center text-sm font-semibold">
            <span className="flex items-center font-semibold">
              <RiDiscountPercentFill className="text-[17px] mr-1 text-[#3E2AD9]" />
              <span className="text-[#3E2AD9]">Coupon discount</span>{" "}
            </span>

            <span className="font-medium text-[#3E2AD9]">Rs. 350.00</span>
          </div>
        </div>

        <div className="flex justify-between text-sm font-semibold">
          <span className=" text-[#000]">Total Price</span>
          <span className=" text-indigo-600">₹19,748</span>
        </div>
      </div>

      {/* Contact Options */}
      <div className="mt-6 space-y-3">
        <a
          href="#"
          className="flex items-center justify-center w-full py-3 px-4 text-green-600 font-medium border border-[#60C961] hover:bg-green-100 rounded-lg transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Chat Via WhatsApp
        </a>

        <a
          href="#"
          className="flex items-center justify-center w-full py-3 px-4 text-indigo-600 font-medium border border-[#3E2AD9] hover:bg-indigo-100 rounded-lg transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Email Us
        </a>
      </div>
    </div>
  );
};

export default TripSummary;
