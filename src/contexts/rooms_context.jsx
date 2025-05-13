import { createContext, useContext, useState, useEffect } from "react";
import image1 from "../assets/rooms/1.jpeg";
import image2 from "../assets/rooms/2.jpeg";
import image3 from "../assets/rooms/3.jpeg";
import image4 from "../assets/rooms/4.jpeg";
import image5 from "../assets/rooms/5.jpeg";
const RoomsContext = createContext();
export const useRooms = () => useContext(RoomsContext);

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toggleRoomSelection = (room) => {
    setSelectedRooms((prev) => {
      const isSelected = prev.find((r) => r.id === room.id);
      if (isSelected) {
        return prev.filter((r) => r.id !== room.id);
      } else {
        return [...prev, room];
      }
    });
  };

  useEffect(() => {
    const fetchRooms = () => {
      setLoading(true);
      try {
        const roomsData = [
          {
            id: 1,
            name: "Premium Room",
            night: "3 nights",
            guests: "3 guests",
            description:
              "Experience elevated comfort and elegance in our Premium Room, where luxury meets tranquility, elegance in our Premium Room.",
            price: 88952,
            location: "New York",
            image: image1,
            rating: "Excellect 4.8",
            reviews: 532,
            capacity: 2,
            bedType: "King Bed",
            size: 32,
            amenities: [
              { name: "Free Cab Service", icon: "car" },
              { name: "Air Conditioning", icon: "ac" },
              { name: "Queen size Bed", icon: "bed" },
              { name: "Breakfast Included", icon: "breakfast" },
            ],
          },
          {
            id: 2,
            name: "Deluxe Suite",
            night: "3 nights",
            guests: "3 guests",
            description:
              "Indulge in spacious luxury with our Deluxe Suite featuring separate living area and premium amenities for an unforgettable stay.",
            price: 129999,
            originalPrice: 159999,
            location: "New York",
            image: image2,

            rating: "Excellect 4.8",
            reviews: 348,
            discount: 20,
            capacity: 4,
            bedType: "1 King & 2 Twin Beds",
            size: 48,
            amenities: [
              { name: "Free Cab Service", icon: "car" },
              { name: "Air Conditioning", icon: "ac" },
              { name: "Queen size Bed", icon: "bed" },
              { name: "Breakfast Included", icon: "breakfast" },
            ],
          },
          {
            id: 3,
            name: "Executive Room",
            night: "3 nights",
            guests: "3 guests",
            description:
              "Perfect for business travelers, our Executive Room offers a dedicated workspace, high-speed internet, and premium comfort.",
            price: 75500,
            location: "London",
            image: image3,

            rating: "Excellect 4.8",
            reviews: 215,
            capacity: 1,
            bedType: "Queen Bed",
            size: 28,
            amenities: [
              { name: "Free Cab Service", icon: "car" },
              { name: "Air Conditioning", icon: "ac" },
              { name: "Queen size Bed", icon: "bed" },
              { name: "Breakfast Included", icon: "breakfast" },
            ],
          },
          {
            id: 4,
            name: "Family Suite",
            night: "3 nights",
            guests: "3 guests",
            description:
              "Spacious accommodation ideal for families, with connected rooms, child-friendly amenities, and plenty of space for everyone.",
            price: 145000,
            originalPrice: 165000,
            location: "Paris",
            image: image4,

            rating: "Excellect 4.8",
            reviews: 189,
            discount: 12,
            capacity: 6,
            bedType: "2 King Beds",
            size: 65,
            amenities: [
              { name: "Free Cab Service", icon: "car" },
              { name: "Air Conditioning", icon: "ac" },
              { name: "Queen size Bed", icon: "bed" },
              { name: "Breakfast Included", icon: "breakfast" },
            ],
          },
          {
            id: 5,
            name: "Ocean View Room",
            night: "3 nights",
            guests: "3 guests",
            description:
              "Wake up to breathtaking ocean views in our specially designed rooms featuring private balconies and luxurious amenities.",
            price: 110000,
            location: "Sydney",
            image: image5,

            rating: "Excellect 4.8",
            reviews: 302,
            capacity: 2,
            bedType: "King Bed",
            size: 35,
            amenities: [
              { name: "Free Cab Service", icon: "car" },
              { name: "Air Conditioning", icon: "ac" },
              { name: "Queen size Bed", icon: "bed" },
              { name: "Breakfast Included", icon: "breakfast" },
            ],
          },
        ];
        setRooms(roomsData);
        setLoading(false);
      } catch (err) {
        setError("Failed to load rooms data");
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const value = {
    rooms,
    selectedRooms,
    toggleRoomSelection,
    loading,
    error,
  };

  return (
    <RoomsContext.Provider value={value}>{children}</RoomsContext.Provider>
  );
};
