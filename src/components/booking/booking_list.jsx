import React from "react";
import Booking_Card from "./booking_card";
import image1 from "../../assets/rooms/1.jpeg";
import image2 from "../../assets/rooms/2.jpeg";
import image3 from "../../assets/rooms/3.jpeg";

const bookingsData = {
  recent: [
    {
      id: 1,
      title: "Premium Room",
      description:
        "Experience elevated comfort and elegance in our Premium Room ,where luxury meets tranquility.",
      nights: 3,
      guests: 2,
      price: 88952,
      image: image1,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Premium Room",
      description:
        "Experience elevated comfort and elegance in our Premium Room ,where luxury meets tranquility.",
      nights: 3,
      guests: 2,
      price: 88952,
      image: image1,
      rating: 4.5,
    },
  ],
  past: [
    {
      id: 2,
      title: "Deluxe Room",
      description:
        "Experience elevated comfort and elegance in our Premium Room ,where luxury meets tranquility.",

      nights: 2,
      guests: 1,
      price: 55450,
      image: image2,
      rating: 4.2,
    },
  ],
  cancelled: [
    {
      id: 3,
      title: "Suite Room",
      subtitle: "cancelled",
      description:
        "Experience elevated comfort and elegance in our Premium Room ,where luxury meets tranquility.",

      nights: 1,
      guests: 2,
      price: 38900,
      image: image3,
      rating: 4.7,
    },
  ],
};

const Booking_list = ({ status }) => {
  const bookings = bookingsData[status] || [];

  return (
    <div className="mt-6 space-y-6">
      {bookings.length > 0 ? (
        bookings.map((booking) => (
          <Booking_Card key={booking.id} data={booking} status={status} />
        ))
      ) : (
        <p className="text-gray-500">No bookings available.</p>
      )}
    </div>
  );
};

export default Booking_list;
