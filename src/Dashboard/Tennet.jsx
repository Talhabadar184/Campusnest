import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cross from "../assets/Listing/cross.png";
import { Link } from "react-router-dom";

function Tennet() {
  const [bookingData, setBookingData] = useState(null);
  const [messages, setMessages] = useState([]);

  const hostelData = [
    { hostelName: "Ali Town Hostel", ownerName: "Ahmed Raza" },
    { hostelName: "Lahore Nest Hostel", ownerName: "Shoaib Noor" },
    { hostelName: "Lahore Haven Hostel", ownerName: "Tayyab Ahmed" },
    { hostelName: "Skyline Hostel", ownerName: "Muhammad Iqbal" },
    { hostelName: "Lahore Backpackers", ownerName: "Zubair Khan" }
  ];

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(storedMessages);
  }, []);

  const [hostels, setHostels] = useState([
    { id: 1, name: "Ali Town Hostel", location: "Raiwand Road, Lahore." },
    { id: 2, name: "Lahore Nest Hostel", location: "Location goes here." },
    { id: 3, name: "Lahore Haven Hostel", location: "Location goes here." },
    { id: 4, name: "Skyline Hostel", location: "Location goes here." },
  ]);

  const removeHostel = (id) => {
    setHostels(hostels.filter((hostel) => hostel.id !== id));
  };

  useEffect(() => {
    const storedData = localStorage.getItem("bookingFormData");
    if (storedData) {
      setBookingData(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      <Navbar />
     
      <div className="bg-gray-100 p-4 sm:p-6 min-h-screen">
        <div className="container mx-auto">
          <div ><h1 className="text-2xl  font-semibold mb-6 ml-20 text-blue-800 text-left">
            Dashboard
          </h1></div>
          

          {/* Centered Booking & Favorite Hostels Section */}
          <div className="flex flex-col md:flex-row justify-center items-start gap-8">
            
            {/* Upcoming Bookings */}
            {/* <div className="bg-white w-full md:w-[35vw] border border-gray-400 p-4 sm:p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-blue-700">
                  Upcoming Bookings
                </h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer">
                  View Details
                </button>
              </div>
              <div className="w-full h-0.5 bg-gray-400 mb-7"></div>
              {bookingData ? (
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <p><strong>Hostel Name:</strong> <br /> {bookingData.hostelName}</p>
                    <p><strong>Room Type:</strong> <br /> {bookingData.roomType}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <p><strong>Booking Date:</strong><br /> {bookingData.bookingDate}</p>
                    <p><strong>Advance Paid:</strong> <br /> Rs.{bookingData.advancePaid}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <p><strong>Check-In Date:</strong> <br />{bookingData.checkInDate}</p>
                    <p><strong>Remaining Payment:</strong> <br /> Rs.{bookingData.remainingPayment}</p>
                  </div>
                  <p className="mt-4"><strong>Status:</strong> {bookingData.status}</p>
                </div>
              ) : (
                <p>No upcoming bookings found.</p>
              )}
            </div> */}

            {/* Favorite Hostels */}
            {/* <div className="bg-white w-full md:w-[35vw] border border-gray-400 p-4 sm:p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-blue-700">
                  Favorite Hostels
                </h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer">
                  View Details
                </button>
              </div>
              <div className="w-full h-0.5 bg-gray-400 "></div>
              <ul>
                {hostels.length > 0 ? (
                  hostels.map((hostel) => (
                    <li key={hostel.id} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <div>
                        <strong>{hostel.name}</strong>
                        <div className="text-sm text-gray-500">{hostel.location}</div>
                      </div>
                      <button onClick={() => removeHostel(hostel.id)} className="hover:cursor-pointer text-gray-500 hover:text-red-500 transition duration-200">
                        <img src={cross} alt="Remove" />
                      </button>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500 text-center">No favorite hostels.</p>
                )}
              </ul>
            </div> */}
            
          </div>

          {/* Messages Section */}
          <div className="bg-white p-4 sm:p-6 w-full md:w-[35vw] mx-auto border border-gray-400 rounded-lg shadow-md mt-8">
            <h2 className="text-lg font-semibold mb-4 text-blue-700">Messages</h2>
            <div className="w-full h-0.5 bg-gray-400 mb-7"></div>

            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2">Hostel Name</th>
                  <th className="text-left py-2">Owner Name</th>
                  <th className="text-left py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {hostelData.map((hostel, index) => {
                  const message = messages.find(msg => msg.hostelName === hostel.hostelName);
                  return (
                    <tr key={index} className={`border-b border-gray-200 ${message ? "bg-yellow-100" : ""}`}>
                      <td className="py-2">{hostel.hostelName}</td>
                      <td className="py-2">{hostel.ownerName}</td>
                      <td className="py-2">
                        <Link
  
  className="text-blue-500 font-medium hover:underline"
>
  View Chat {message ? "🔔" : ""}
</Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Tennet;
