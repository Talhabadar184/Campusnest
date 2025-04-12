import React from "react";
import bookingIcon from "../assets/Ratings/bookings.png";
import messageIcon from "../assets/Ratings/messeges.png";
import reminderIcon from "../assets/Ratings/reminder.png";
import offerIcon from "../assets/Ratings/offer.png";
import updateIcon from "../assets/Ratings/update.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const notifications = [
  {
    id: 1,
    icon: bookingIcon,
    title: "Booking Confirmed",
    message: "Your booking at Lahore Backpackers has been confirmed.",
    buttonLabel: "View Details",
    time: "14/01/2025 - 10:30 AM",
  },
  {
    id: 2,
    icon: messageIcon,
    title: "New Message",
    message: "You have a new message from All Town Hostel.",
    buttonLabel: "Reply",
    time: "14/01/2025 - 10:45 AM",
  },
  {
    id: 3,
    icon: reminderIcon,
    title: "Review Reminder",
    message: "Don't forget to review your stay at Hostel Sunshine.",
    buttonLabel: "Write Review",
    time: "14/01/2025 - 11:00 AM",
  },
  {
    id: 4,
    icon: offerIcon,
    title: "Special Offer",
    message: "Get a 10% discount on bookings at Lahore Hostel.",
    buttonLabel: "View Offer",
    time: "14/01/2025 - 11:15 AM",
  },
  {
    id: 5,
    icon: updateIcon,
    title: "Update",
    message: "The amenities list at All Town Hostel has been updated.",
    buttonLabel: "Check Now",
    time: "14/01/2025 - 11:45 AM",
  },
];

const Notifications = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 sm:p-6">
        <div className="w-full max-w-5xl mb-4">
          <h2 className="text-xl font-semibold text-blue-700">Notifications</h2>
        </div>
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-4">
          {notifications.map((notif) => (
            <NotificationCard key={notif.id} {...notif} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

const NotificationCard = ({ icon, title, message, buttonLabel, time }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border-b last:border-none">
      <div className="flex items-start gap-3">
        <div className="border-2 border-gray-200 rounded-full p-1 sm:p-1.5">
          <img src={icon} alt={title} c className="w-8 h-8 sm:w-5 sm:h-5 object-contain" />
        </div>
        <div>
          <p className="font-bold text-blue-700">{title}</p>
          <p className="text-gray-600 text-sm sm:text-base">{message}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 ml-8 sm:ml-0">
        <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded-md hover:bg-blue-100 text-sm sm:text-base">
          {buttonLabel}
        </button>
        <p className="text-black font-medium text-xs sm:text-sm">{time}</p>
      </div>
    </div>
  );
};

export default Notifications;
