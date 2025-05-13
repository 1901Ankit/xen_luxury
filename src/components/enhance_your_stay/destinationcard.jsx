import React, { useState } from "react";
import { FiMinus} from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const DestinationCard = ({
  id,
  name,
  image,
  price,
  currency = "Rs.",
  onAddToCart,
}) => {
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
    <div className="relative w-[full] h-full rounded-lg shadow-xl overflow-hidden group">
      <img
        src={image}
        alt={name}
        className="w-full h-[300px] object-cover transform hover:scale-110 transition-transform duration-500  "
      />
      <div className="absolute inset-0 z-20 flex flex-col justify-end text-start px-2 py-2">
        <div
          className=" p-2 rounded-lg shadow-md bg-[rgba(255,255,255,0.8)]"
          style={{
            boxShadow: `
              5.22px 6.26px 6.52px 0px #00000007,
              12.8px 15.36px 13px 0px #00000009,
              24.66px 29.59px 25.48px 0px #0000000B
            `,
          }}
        >
          <h3 className="text-base font-semibold text-gray-800 mb-2">{name}</h3>
          <h3 className="text-sm font-semibold text-gray-800 ">Price</h3>
          <div className="flex justify-between items-center">
            <div className="text-gray-700">
              <span className="text-sm">{currency}</span>
              <span className="font-bold text-lg ml-1">{price}</span>
            </div>
            <div className="flex items-center border border-[#000] rounded-md">
              <button
                onClick={decreaseQuantity}
                className="px-2 py-1 text-gray-700 "
              >
                <FiMinus className="h-4 w-4" />
              </button>
              <span className="px-3 py-1 border-x border-[#000]">
                {quantity}
              </span>
              <button
                onClick={increaseQuantity}
                className="px-2 py-1 text-gray-700"
              >
                <GoPlus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
