import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../views/home";
import Footer from "../components/footer";
import Mobile_navbar from "../components/mobile_navbar";
import Auth from "../views/auth";
import VerifyEmail from "../components/verifyemail";
import ResetPassword from "../components/resetpassword";
import RoomList from "../views/roomlist";
import Enhance_stay from "../views/enhance_stay";
import Desktop_Navbar from "../components/desktop_navbar";
import Payment from "../views/payment";
import Stepper from "../components/stepper";
import { Edit_profile } from "../views/user_profile";

import { Booking, Transaction } from "../views/user_profile";
const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      {["/"].includes(location.pathname) && (
        <div className="">
          <Mobile_navbar />
        </div>
      )}

      {[
        "/roomlist",
        "/enhance_stay",
        "/payment",
        "/user_profile",
        "/booking",
        "/transaction_history",
      ].includes(location.pathname) && (
        <div className="">
          <Desktop_Navbar />
        </div>
      )}
      {["/roomlist", "/enhance_stay", "/payment"].includes(
        location.pathname
      ) && (
        <div className="">
          <Stepper />
        </div>
      )}

      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/roomlist" element={<RoomList />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/enhance_stay" element={<Enhance_stay />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/user_profile" element={<Edit_profile />} />
        <Route path="/transaction_history" element={<Transaction />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

      {location.pathname !== "/auth" && <Footer />}
    </>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default Router;
