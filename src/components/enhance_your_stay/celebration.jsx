import React, { useState } from "react";
import DestinationCard from "./destinationcard";
import image1 from "../../assets/enhance/celebration/image1.jpg";
import image2 from "../../assets/enhance/celebration/image2.jpg";
import image3 from "../../assets/enhance/celebration/image3.png";
import image4 from "../../assets/enhance/celebration/image4.jpg";
import { Link } from "react-router-dom";
const CelebrationEssentials = () => {
  const [cart, setCart] = useState([]);

  const destinations = [
    {
      id: "1",
      name: "Cake",
      image: image1,

      price: 2399,
    },
    {
      id: "2",
      name: "Birthday Decoration",
      image: image2,

      price: 1999,
    },
    {
      id: "3",
      name: "Anniversary Decoration ",
      image: image3,

      price: 1499,
    },
    {
      id: "4",
      name: "Flower Room Decoration",
      image: image4,
      price: 2699,
    },
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

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center w-full">
          Add according to your stay & people{" "}
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
  );
};

export default CelebrationEssentials;
