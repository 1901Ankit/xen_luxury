import React, { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import image1 from "../../assets/enhance/arrival/image1.png";
import { Link } from "react-router-dom";
const ArrivalTransport = () => {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center w-full mb-6">
        Add according to your stay & people{" "}
      </h2>

      <div
        className="relative overflow-hidden rounded-2xl shadow-lg bg-cover bg-center h-[500px]"
        style={{
          backgroundImage: `url(${image1})`,
          filter: "brightness(0.9)",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 space-y-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-[#fff]">
              Airport Pick & Drop off
            </h3>
            <p className="text-[#fff] font-semibold text-lg">
              Free Cab Service
            </p>
          </div>

          <div className="bg-[#fff] p-3 rounded-lg shadow-md">
            <p className="text-sm text-[#000] mb-2">Airport pick & Drop</p>
            <div className="flex items-center justify-between gap-5">
              <p className="text-xs text-[#000] mb-2">Free service</p>
              <div className="flex items-center border border-[#000] rounded-md">
                <button
                  onClick={decreaseQuantity}
                  className="p-2 hover:bg-[#fff] transition-colors"
                  disabled={quantity === 0}
                >
                  <FiMinus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 border-x border-[#000]">
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <GoPlus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button
          className="px-6 py-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors cursor-pointer"
          type="submit"
        >
          Skip
        </button>
        <Link to="/payment">
          <button
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition-colors cursor-pointer"
            type="submit"
          >
            Add Selected Service
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArrivalTransport;
