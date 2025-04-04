import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import Comparison from "./Comparison";

function Hostels() {
  const [selectedHostels, setSelectedHostels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const hostelsPerPage = 5;

  const handleCheckboxChange = (hostel) => {
    setSelectedHostels((prevSelected) => {
      const isAlreadySelected = prevSelected.some((h) => h.id === hostel.id);
      return isAlreadySelected
        ? prevSelected.filter((h) => h.id !== hostel.id)
        : prevSelected.length < 2
        ? [...prevSelected, hostel]
        : prevSelected;
    });
  };

  const hostels = [
    {
      id: 1,
      name: "Lahore Hostel",
      image: "/images",
      location: "Model Town, Ferozpur Road",
      price: "15,000 PKR",
      description: "Lorem ipsum dolor sit amet.",
      ratings: "⭐⭐⭐⭐⭐",
      amenities: ["WiFi", "Laundry", "Security", "Mess","24/7 Security","Gym/Fitness Center","Study Area","Common Room/TV Lounge","Private Bathrooms","Parking","Housekeeping Services"],
    },
    {
      id: 2,
      name: "Johar Hostel",
      image: "/images",
      location: "Johar Town, Near Emporium Mall",
      price: "18,000 PKR",
      description: "Lorem ipsum dolor sit amet.",
      ratings: "⭐⭐⭐⭐⭐",
      amenities: ["WiFi", "Laundry", "Security", "Mess","24/7 Security","Gym/Fitness Center","Study Area","Common Room/TV Lounge","Private Bathrooms","Parking","Housekeeping Services"],
    },
  ];

  const indexOfLastHostel = currentPage * hostelsPerPage;
  const indexOfFirstHostel = indexOfLastHostel - hostelsPerPage;
  const currentHostels = hostels.slice(indexOfFirstHostel, indexOfLastHostel);

  return (
    <div className="flex-1 max-w-full px-4 md:max-w-[70vw] p-4 rounded-lg shadow-lg">
      <h2 className="text-lg text-blue-600 font-semibold mb-3 text-center md:text-left">
        {hostels.length} Hostels Found
      </h2>

      <div className="space-y-4">
        {currentHostels.map((hostel) => (
          <div key={hostel.id} className="flex flex-col md:flex-row gap-4 p-4 rounded-lg bg-white shadow">
            <div className="w-full md:w-40 h-40 bg-gray-200 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">Image</span>
            </div>
            <div className="flex-1">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked={selectedHostels.some((h) => h.id === hostel.id)}
                  onChange={() => handleCheckboxChange(hostel)}
                  disabled={!selectedHostels.some((h) => h.id === hostel.id) && selectedHostels.length >= 2}
                />
                <h1 className="font-semibold text-blue-600 text-lg">{hostel.name}</h1>
              </div>
              <p className="text-gray-500 text-sm mt-3 mb-3">{hostel.description}</p>
              <p className="text-gray-600 text-sm mb-1">
                Location: <strong>{hostel.location}</strong> | Price: <strong>{hostel.price}</strong>
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Ratings:</strong> {hostel.ratings}
              </p>
              <p className="text-blue-600 text-sm">
                <Link className="hover:underline hover:cursor-pointer">Call Owner</Link> |
                <Link to="/Details" state={{ hostel }} className="hover:underline hover:cursor-pointer">
                  More Details
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        hostels={hostels}
        totalPages={Math.ceil(hostels.length / hostelsPerPage)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        selectedHostels={selectedHostels}
        setSelectedHostels={setSelectedHostels}
        setIsCompareOpen={setIsCompareOpen}
      />

      {isCompareOpen && <Comparison selectedHostels={selectedHostels} onClose={() => setIsCompareOpen(false)} />}
    </div>
  );
}

export default Hostels;