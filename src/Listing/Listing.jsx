import React, { useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import { Menu, Grid } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";

function Listing() {
  const [institution, setInstitution] = useState("");
  const [radius, setRadius] = useState("");
  const [location, setLocation] = useState("");
  const [view, setView] = useState("grid");
  const [selectedHostels, setSelectedHostels] = useState([]);

  const handleCheckboxChange = (hostelId) => {
    if (selectedHostels.includes(hostelId)) {
      setSelectedHostels(selectedHostels.filter((id) => id !== hostelId));
    } else {
      if (selectedHostels.length < 2) {
        setSelectedHostels([...selectedHostels, hostelId]);
      }
    }
  };

  const hostels = [
    {
      id: 1,
      name: "Lahore Hostel",
      location: "Model Town, Ferozpur Road",
      price: "15,000 PKR",
      description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem aliquid neque distinctio corrupti, quibusdam consequuntur libero ab quis, rerum exercitationem saepe eius, dignissimos fugiat.",
      ratings:"⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      name: "Johar Hostel",
      location: "Johar Town, Near Emporium Mall",
      price: "18,000 PKR",
      description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem aliquid neque distinctio corrupti, quibusdam consequuntur libero ab quis, rerum exercitationem saepe eius, dignissimos fugiat.",
        ratings:"⭐⭐⭐⭐⭐",
    },
    {
      id: 3,
      name: "DHA Residency",
      location: "DHA Phase 5, Lahore",
      price: "20,000 PKR",
      description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem aliquid neque distinctio corrupti, quibusdam consequuntur libero ab quis, rerum exercitationem saepe eius, dignissimos fugiat.",
        ratings:"⭐⭐⭐⭐⭐",
    },
    {
      id: 4,
      name: "UCP Boys Hostel",
      location: "Near UCP Campus, Lahore",
      price: "12,000 PKR",
      description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem aliquid neque distinctio corrupti, quibusdam consequuntur libero ab quis, rerum exercitationem saepe eius, dignissimos fugiat.",
        ratings:"⭐⭐⭐⭐⭐",
    },
    {
      id: 6,
      name: "Lahore Hostel",
      location: "Model Town, Ferozpur Road",
      price: "15,000 PKR",
      description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem aliquid neque distinctio corrupti, quibusdam consequuntur libero ab quis, rerum exercitationem saepe eius, dignissimos fugiat.",
      ratings:"⭐⭐⭐⭐⭐",
    },
    {
      id: 7,
      name: "Lahore Hostel",
      location: "Model Town, Ferozpur Road",
      price: "15,000 PKR",
      description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem aliquid neque distinctio corrupti, quibusdam consequuntur libero ab quis, rerum exercitationem saepe eius, dignissimos fugiat.",
      ratings:"⭐⭐⭐⭐⭐",
    },
    {
      id: 8,
      name: "Lahore Hostel",
      location: "Model Town, Ferozpur Road",
      price: "15,000 PKR",
      description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem aliquid neque distinctio corrupti, quibusdam consequuntur libero ab quis, rerum exercitationem saepe eius, dignissimos fugiat.",
      ratings:"⭐⭐⭐⭐⭐",
    },
    
  ];

  return (
    <div className="bg-gray-100">
      <HomeNavbar />

      {/* Search Filters  */}
      <div className="flex flex-col items-center justify-center min-h-[10vh] max-w-[95vw] rounded-2xl mx-auto bg-blue-300 text-white p-6 mt-6 border border-blue-400">
        <div className="flex flex-wrap justify-center gap-4 rounded-lg shadow-lg">
          <select
            className="p-2 border rounded-lg text-gray-700 bg-[#f6f3fc] w-[220px]"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
          >
            <option value="">-- Select Institution --</option>
            <option value="LUMS">LUMS</option>
            <option value="UCP">UCP</option>
            <option value="FAST">FAST</option>
          </select>

          <select
            className="p-2 border rounded-lg text-gray-700 bg-[#f6f3fc] w-[180px]"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
          >
            <option value="">-- Select Radius --</option>
            <option value="1km">1 km</option>
            <option value="3km">3 km</option>
            <option value="5km">5 km</option>
          </select>

          <select
            className="p-2 border rounded-lg text-gray-700 bg-[#f6f3fc] w-[200px] font-semibold"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">-- Select Location --</option>
            <option value="Johar Town">Johar Town</option>
            <option value="Model Town">Model Town</option>
            <option value="DHA">DHA</option>
          </select>

          <button className="bg-[#2d3e8e] hover:bg-[#1f2b6f] p-2 rounded-lg text-white w-[40px] flex items-center justify-center">
            🔍
          </button>
        </div>
      </div>

      {/* body div */}
      <div className="flex justify-center mt-7">
        {/* Filter */}
        <div className="max-w-[50vw] bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-blue-600">Filters</h2>

          {/* Location Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Location:
            </label>
            <select className="w-full p-2 border rounded-lg bg-gray-50">
              <option>Reach Town</option>
              <option>Model Town</option>
              <option>Johar Town</option>
              <option>DHA</option>
            </select>
          </div>

          {/* Price  Slider */}  
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price Range:
            </label>
            <input
              type="range"
              className="w-full cursor-pointer"
              min="5000"
              max="50000"
              step="1000"
            />
          </div>

          {/* Amenities */}
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700">Amenities</h3>
            <div className="flex flex-col space-y-1 text-sm text-gray-600">
              <label>
                <input type="checkbox" className="mr-2" /> Air Conditioning
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Free Wi-Fi
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Private or Ensuite
                Bathrooms
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Laundry Services
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Luggage Storage
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Healthy & Organic
                Meals
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Kitchen Facilities
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> 24/7 Security
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> UPS
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Nearby Restaurants
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Study Rooms
              </label>
            </div>
          </div>

          {/* Hostel Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Hostel Type:
            </label>
            <select className="w-full p-2 border rounded-lg bg-gray-50">
              <option>Male Hostel</option>
              <option>Female Hostel</option>
              <option>Co-ed Hostel</option>
            </select>
          </div>

          {/* Room Type */}
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700">Room Type:</h3>
            <div className="flex gap-4 text-sm text-gray-600">
              <label>
                <input type="radio" name="roomType" className="mr-2" /> Single
              </label>
              <label>
                <input type="radio" name="roomType" className="mr-2" /> Shared
              </label>
            </div>
          </div>

          {/* Radius Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Radius:
            </label>
            <select className="w-full p-2 border rounded-lg bg-gray-50">
              <option>1 km</option>
              <option>3 km</option>
              <option>5 km</option>
            </select>
          </div>

          {/* Availability Checkbox */}
          <div className="mb-4">
            <label className="flex items-center text-sm text-gray-700">
              <input type="checkbox" className="mr-2" /> Only available hostels
            </label>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Apply Filters
          </button>
        </div>
        {/* Hostels */}
        <div className="flex-1 max-w-[70vw]  p-4 rounded-lg shadow-lg">
          <div className="mb-3"><h2 className="text-lg text-blue-600 font-semibold">
              {hostels.length} Hostels Found
            </h2></div>
          <div className="flex justify-between items-center mb-4">
            
            
            <div className="flex items-center justify-between p-2 border rounded-lg w-full">
              {/* Sort Dropdown */}
              <div className="gap-2">
              <select className="border px-3 py-1 rounded-lg">
                <option>-- Sort By --</option>
              </select>
              {/* Compare Button */}
              <button className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:cursor-pointer hover:text-[17px]">
                Compare
              </button>
              </div>
              

              {/* View Mode Buttons */}
              <div className="flex gap-2">
                <button
                  className={`p-1 border rounded ${
                    view === "list" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setView("list")}
                >
                  <Menu size={20} />
                </button>
                <button
                  className={`p-1 border rounded ${
                    view === "grid" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setView("grid")}
                >
                  <Grid size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {hostels.map((hostel) => (
              <div
                key={hostel.id}
                className="flex gap-4 p-4 rounded-lg bg-white shadow"
              >
                <div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500">Image</span>
                </div>

                <div className="flex-1">
                  <div className="flex gap-2">
                  <input
                  type="checkbox"
                  checked={selectedHostels.includes(hostel.id)}
                  onChange={() => handleCheckboxChange(hostel.id)}
                  disabled={!selectedHostels.includes(hostel.id) && selectedHostels.length >= 2}
                />                  <h1 className="font-semibold text-blue-600 text-lg">
                    {hostel.name}
                  </h1>
                  </div>
                  <p className="text-gray-500 text-sm mt-3 mb-3">
                    {hostel.description}
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    Location: <strong>{hostel.location}</strong> | Price:{" "}
                    <strong>{hostel.price}</strong>
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                   <strong>Ratings:</strong>  {hostel.ratings} | 
                  </p>
                  <p className="text-blue-600  text-sm">
                    <Link className="hover:underline hover:cursor-pointer">Calll Owner</Link> | <Link className="hover:underline hover:cursor-pointer">More Details</Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Pagination/>
      <Footer/>
    </div>
  );
}

export default Listing;
