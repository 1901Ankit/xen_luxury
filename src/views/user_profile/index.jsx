import Profile from "../../components/profile/edit_profile";
import TransactionHistory from "../../components/profile/transaction_history";
import MyBookingsPage from "./my_bookings";
import withDashboardLayout from "../../router/HOC";

export const Edit_profile = withDashboardLayout(Profile);
export const Transaction = withDashboardLayout(TransactionHistory);
export const Booking = withDashboardLayout(MyBookingsPage);
