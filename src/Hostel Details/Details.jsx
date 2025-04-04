import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import Booking from "../Booking Forms/Booking";
import { Link } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const [hostel, setHostel] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    if (location.state?.hostel) {
      setHostel(location.state.hostel);
    }
  }, [location.state]);

  

  if (!hostel) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      <Navbar />
      {/* <Booking isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} /> */}

      <div className="bg-gray-100 p-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Side */}
            <div className="max-w-[40vw] lg:w-2/3 space-y-3">
              <h1 className="text-2xl font-bold">{hostel.name}</h1>
              <p className="text-gray-600">
                <strong>Location:</strong> {hostel.location}
              </p>
              <p className="text-gray-600">
                <strong>Type:</strong> {hostel.type || "Budget-friendly hostel"}
              </p>
              <p className="text-gray-600">
                <strong>Rating:</strong> ⭐⭐⭐⭐⭐ ({hostel.rating || "4.5"}/5)
              </p>
              <p className="text-gray-600">
                <strong>Price:</strong> {hostel.price || "15,500/-"} per person
              </p>
              <p
                className={`font-semibold ${
                  hostel.availability ? "text-green-600" : "text-red-600"
                }`}
              >
                <strong>Availability:</strong>{" "}
                {hostel.availability ? "Available" : "Not Available"}
              </p>
              <p className="text-gray-700 mt-4"><strong>Description:</strong> {hostel.description}</p>
            </div>

            {/* Right Side */}
            <div className="w-[40vw]  space-y-4">
              <div className="flex max-w-[25vw] h-9 space-x-2">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="text-blue-500 bg-white border-blue-600 border  h-9  hover:cursor-pointer rounded w-[8vw]"
                >
                  Book Now
                </button>
                <button className="bg-blue-600 text-white hover:cursor-pointer w-[12vw] rounded " >
                <Link to={"/Inbox"} >
                  Chat with Owner
                </Link>
                </button>
              </div>
              <img
                src={hostel.image || "/images/hostel-main.jpg"}
                alt="Hostel"
                className="w-[50vw] h-64 bg-gray-400 object-cover rounded-lg"
              />
            </div>
          </div>

          <Booking isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} hostelPrice={hostel.price || "15,500/-"} />

          {/* Lower Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* Image Gallery */}
            <div>
              <div className="border border-gray-300 rounded-lg p-4">
                <div className="w-full h-64 bg-gray-200 rounded-lg">
                  <img
                    src={hostel.image || "/images/hostel-main.jpg"}
                    alt="Main Hostel"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex justify-center  space-x-2 mt-4">
                  {hostel.gallery
                    ? hostel.gallery.map((img, index) => (
                        <div key={index} className="w-16 h-16 bg-gray-200 rounded-md">
                          <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                      ))
                    : [1, 2, 3, 4, 5].map((_, index) => (
                        <div key={index} className="w-16 h-16 bg-gray-200 rounded-md">
                          <img
                            src={`/images/thumb-${index + 1}.jpg`}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                      ))}
                </div>
              </div>
            </div>

            {/* Amenities & Reviews */}
            <div>
              <h2 className="text-xl font-bold">Key Amenities</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li> <strong>Room Types:</strong>  Dorms, Private Rooms, and Family Rooms</li>
                <li> <strong>Shared Facilities: </strong> Clean and modern bathrooms, common lounge, and kitchen</li>
                <li> <strong>Free Services:</strong>  Wi-Fi, linen, towels, and breakfast</li>
                <li> <strong>Paid Services: </strong> Laundry, airport transfers, and tour bookings</li>

                
              </ul>

              <h2 className="text-xl text-center font-bold mt-4">User Reviews</h2>
              <p className="text-yellow-500 text-center font-semibold">
                {hostel.ratings || "4.5"}/5 from {hostel.reviewsCount || 100} reviews
              </p>
              <div className="border border-gray-300 p-4 mt-4 rounded-lg">
                <p className="text-gray-700">
                  "{hostel.review ||
                    "This hostel exceeded all my expectations! It's clean, comfortable, and has great facilities. Highly recommended!"}"
                </p>
                <p className="mt-2 text-gray-600">
                  - {hostel.reviewer || "Saad Raza, UMT Lahore Student"}
                </p>
              </div>
              <p className="mt-2 text-blue-600 text-center cursor-pointer">
                See All Reviews | Help Us
              </p>

              {/* Quick Links */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
                <ul className="text-blue-600 mt-2 space-y-1">
                  <li className="hover:underline cursor-pointer">Hostel Rules</li>
                  <li className="hover:underline cursor-pointer">Map Integration</li>
                  <li className="hover:underline cursor-pointer">Related Hostels</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Details;
