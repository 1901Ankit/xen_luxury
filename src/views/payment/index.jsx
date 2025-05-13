import React, { useEffect } from "react";
import { FaBed, FaCalendarCheck, FaCreditCard } from "react-icons/fa6";
import { FaMagic } from "react-icons/fa";
import Selected_details from "../../components/payment_page/selected_details";

const Payment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Selected_details />
    </div>
  );
};

export default Payment;
