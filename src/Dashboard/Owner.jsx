import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cross from "../assets/Listing/cross.png";
import { Link } from "react-router-dom";
import plus from "../assets/Owner/plus.png"
import NewHostel from "../Dashboard/NewHostel"

function Owner() {
    const [hData, setHData] = useState([]);
    const [messages, setMessages] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);


  const hostelData = [
    { id: 1,hostelName: "Ali Town Hostel", tenantName: "Ali Khan", messages: [] },
    { id: 2,hostelName: "Lahore Nest Hostel", tenantName: "Sara Ali", messages: [] },
    { id: 3,hostelName: "Lahore Haven Hostel", tenantName: "Tariq Jamil", messages: [] },
    { id: 4,hostelName: "Skyline Hostel", tenantName: "Asad Malik", messages: [] },
    { id: 5,hostelName: "Ali Town Hostel", tenantName: "Zainab Fatima", messages: [] },
  ];

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(storedMessages);
  }, []);

  const [hostels, setHostels] = useState([
    { id: 1, name: "Ali Town Hostel", Room: "Room No. 16" },
    { id: 2, name: "Lahore Nest Hostel", Room: "Room No. 07" },
    { id: 3, name: "Lahore Haven Hostel", Room: "Room No. 15" },
    { id: 4, name: "Skyline Hostel", Room: "Room No. 11" }
  ]);

  useEffect(() => {
   
    const fetchedData = [
      { roomNo: "Room No. 14", tenantName: "Ahmed Raza", mobileNo: "03004214771" },
      { roomNo: "Room No. 12", tenantName: "Shoaib Noor", mobileNo: "03004312752" },
      { roomNo: "Room No. 11", tenantName: "Tayyab Ahmed", mobileNo: "03004312752" },
      { roomNo: "Room No. 07", tenantName: "Muhammad Iqbal", mobileNo: "03004312752" },
      { roomNo: "Room No. 03", tenantName: "Zubair Khan", mobileNo: "03004312752" },
    ];

    setHData(fetchedData);
  }, []); 

  const removeHostel = (id) => {
    setHostels(hostels.filter((hostel) => hostel.id !== id));
  };



  return (
    <>
      <Navbar />
      <div className="w-full bg-blue-800 text-white  pl-28 h-8">
        <p className="hover:cursor-pointer">Dashboard |  <Link to="/Myprofile" className="ml-2">My Profile</Link> |   <Link to={"/Notifications"}>Notifications</Link></p>
      </div>
      <div className="bg-gray-100 p-4 sm:p-6 min-h-screen">
        <div className="container mx-auto">
          <div ><h1 className="text-2xl  font-semibold mb-6 ml-20 text-blue-800 text-left">
            Dashboard
          </h1></div>
          

          {/* Centered Booking & Favorite Hostels Section */}
          <div className="flex flex-col md:flex-row justify-center items-start gap-8">
            
            {/* Manage Bookings */}
          <div className="bg-white w-full md:w-[35vw] border border-gray-400 p-4 sm:p-6 rounded-lg shadow-md">
         {/* Manage Hostels Section */}
<div className="flex justify-between items-center mb-4">
  <h2 className="text-lg font-semibold text-blue-700">Manage Hostels</h2>
  <button
    onClick={() => setIsModalOpen(true)}
    className="bg-blue-500 gap-2 items-center flex text-white px-4 py-2 rounded hover:cursor-pointer"
  >
    <img className="h-4" src={plus} alt="" />
    Hostels
  </button>
</div>

{isModalOpen && <NewHostel onClose={() => setIsModalOpen(false)} />}





  <div className="w-full h-0.5 bg-gray-400 mb-3"></div>

  <div className="overflow-x-auto">
    <table className="w-full table-auto min-w-[600px]">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left border-b">Room</th>
          <th className="px-4 py-2 text-left border-b">Tenant Name</th>
          <th className="px-4 py-2 text-left border-b">Mobile No.</th>
        </tr>
      </thead>
      <tbody>
        {hData.length > 0 ? (
          hData.map((hostel, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-b">{hostel.roomNo}</td>
              <td className="px-4 py-2 border-b">{hostel.tenantName}</td>
              <td className="px-4 py-2 border-b">{hostel.mobileNo}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" className="text-center py-4">No Data Available</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>


            {/* Listed Hostels */}
            <div className="bg-white w-full md:w-[35vw] border border-gray-400 p-4 sm:p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-blue-700">
                  Listed Rooms
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
                        <div className="text-sm text-gray-500">{hostel.Room}</div>
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
            </div>
            
          </div>

          {/* Messages Section */}
          <div className="bg-white p-4 sm:p-6 w-full md:w-[35vw] mx-auto border border-gray-400 rounded-lg shadow-md mt-8">
            <h2 className="text-lg font-semibold mb-4 text-blue-700">Messages</h2>
            <div className="w-full h-0.5 bg-gray-400 mb-7"></div>

            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2">Hostel Name</th>
                  <th className="text-left py-2">Tenant Name</th>
                  <th className="text-left py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {hostelData.map((hostel, index) => {
                  const message = messages.find(msg => msg.hostelName === hostel.hostelName);
                  return (
                    <tr key={index} className={`border-b border-gray-200 ${message ? "bg-yellow-100" : ""}`}>
                      <td className="py-2">{hostel.hostelName}</td>
                      <td className="py-2">{hostel.tenantName}</td>
                      <td className="py-2">
                        <Link to="/Inbox"
                        state={{
                          role: "owner",
                          hostelName: hostel.hostelName,
                          tenantName: hostel.tenantName,
                          ownerName: hostel.ownerName,
                        }} 
                         className="text-blue-500 font-medium hover:underline">
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

export default Owner;
