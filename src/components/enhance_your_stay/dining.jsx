import React, { useState } from "react";
import DestinationCard from "./destinationcard";
import image1 from "../../assets/enhance/dining/image1.jpg";
import image2 from "../../assets/enhance/dining/image2.png";
import image3 from "../../assets/enhance/dining/image3.png";
import image4 from "../../assets/enhance/dining/image4.jpg";
import { FaClock, FaBowlFood } from "react-icons/fa6";
import { PiBowlSteam, PiBreadThin } from "react-icons/pi";
import { BsEggFried } from "react-icons/bs";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Dining = () => {
  const [cart, setCart] = useState([]);

  const destinations = [
    { id: "1", name: "Breakfast", image: image1, price: 2399 },
    { id: "2", name: "Lunch", image: image2, price: 1999 },
    { id: "3", name: "Dinner", image: image3, price: 1499 },
    { id: "4", name: "Breakfast, Lunch, Dinner", image: image4, price: 2699 },
  ];

  const handleAddToCart = (id, quantity = 1) => {
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { id, quantity }]);
    }
  };

  const cartTotal = cart.reduce((total, item) => {
    const destination = destinations.find((d) => d.id === item.id);
    return total + (destination?.price || 0) * item.quantity;
  }, 0);

  const meals = [
    {
      title: "Breakfast",
      time: "8:00am to 10:00am",
      description:
        "Start your day with our delicious buffet-style breakfast, featuring a variety of fresh and hearty options.",
      amenities: [
        { name: "Tea & Coffee", icon: <MdOutlineEmojiFoodBeverage /> },
        { name: "Omelet & boiled eggs", icon: <BsEggFried /> },
        { name: "Bread & butter", icon: <PiBreadThin /> },
        { name: "Dosa, idli, wada & sambar", icon: <PiBowlSteam /> },
        { name: "Aloo sabzi & puri", icon: <FaBowlFood /> },
      ],
      image: image1,
    },
    {
      title: "Lunch",
      time: "12:00pm to 2:30pm",
      description:
        "Enjoy a satisfying lunch with multiple cuisine options and a relaxing ambiance.",
      amenities: [
        { name: "Tea & Coffee", icon: <MdOutlineEmojiFoodBeverage /> },
        { name: "Omelet & boiled eggs", icon: <BsEggFried /> },
        { name: "Bread & butter", icon: <PiBreadThin /> },
        { name: "Dosa, idli, wada & sambar", icon: <PiBowlSteam /> },
        { name: "Aloo sabzi & puri", icon: <FaBowlFood /> },
      ],
      image: image2,
    },
    {
      title: "Dinner",
      time: "12:00pm to 2:30pm",
      description:
        "Enjoy a satisfying lunch with multiple cuisine options and a relaxing ambiance.",
      amenities: [
        { name: "Tea & Coffee", icon: <MdOutlineEmojiFoodBeverage /> },
        { name: "Omelet & boiled eggs", icon: <BsEggFried /> },
        { name: "Bread & butter", icon: <PiBreadThin /> },
        { name: "Dosa, idli, wada & sambar", icon: <PiBowlSteam /> },
        { name: "Aloo sabzi & puri", icon: <FaBowlFood /> },
      ],
      image: image3,
    },
  ];

  return (
    <>
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center w-full">
            Add according to your stay & people
          </h2>

          {cart.length > 0 && (
            <div className="relative">
              <div className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg">
                <span>
                  {cart.reduce((sum, item) => sum + item.quantity, 0)} items
                </span>
                <span className="mx-2">|</span>
                <span>Rs. {cartTotal.toLocaleString()}</span>
              </div>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                {cart.length}
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              id={destination.id}
              name={destination.name}
              image={destination.image}
              price={destination.price}
              onAddToCart={() => handleAddToCart(destination.id)}
            />
          ))}
        </div>
        <div className="flex justify-end gap-4 mt-10">
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
      </section>

      <div className="px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
          What is Included in your meals
        </h2>
        {meals.map((meal, idx) => (
          <motion.div
            key={idx}
            className="bg-[#fff] shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-[20px] overflow-hidden mb-8"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative p-6">
                <img
                  src={meal.image}
                  alt={meal.title}
                  className="w-full h-[300px] object-cover rounded-4xl"
                />
              </div>

              <div className="md:w-2/3 p-3 md:p-5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center ">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {meal.title}
                    </h3>
                    <div className="bg-[#eceafb] text-[#3e2ad9] text-xs py-2 px-3 rounded-full cursor-pointer transition duration-300 flex items-center">
                      <FaClock className="mx-1" />
                      Timings: {meal.time}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mt-4">
                    <div className="flex-1">
                      <p className="text-gray-600 text-base font-normal w-fll md:w-[70%] leading-6">
                        {meal.description}
                      </p>

                      <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
                        What’s Included in your buffet:
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                        {meal.amenities.map((amenity, index) => (
                          <div
                            key={index}
                            className="bg-[#eceafb] text-[#3e2ad9] text-sm py-2 px-3 rounded-full cursor-pointer transition duration-300 flex items-center"
                          >
                            <span className="text-[20px] mr-2">
                              {amenity.icon}
                            </span>
                            <span>{amenity.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Dining;
