// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useLocation } from "react-router-dom";
// import Booking from "../Booking Forms/Booking";
// import { Link } from "react-router-dom";

// const Details = () => {
//   const location = useLocation();
//   const [hostel, setHostel] = useState(null);
//   const [isBookingOpen, setIsBookingOpen] = useState(false);

//   useEffect(() => {
//     if (location.state?.hostel) {
//       setHostel(location.state.hostel);
//     }
//   }, [location.state]);

//   if (!hostel) return <p className="text-center mt-10">Loading...</p>;

//   return (
//     <>
//       <Navbar />
//       {/* <Booking isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} /> */}

//       <div className="bg-gray-100 p-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Top Section */}
//           <div className="flex flex-col w-full  items-center lg:flex-row gap-6">
//             {/* Left Side */}
//             <div className="max-w-[40vw] lg:w-2/3 space-y-3">
//               <h1 className="text-2xl font-bold">{hostel.name}</h1>
//               <p className="text-gray-600">
//                 <strong>Location:</strong> {hostel.location}
//               </p>
//               <p className="text-gray-600">
//                 <strong>Type:</strong> {hostel.type || "Budget-friendly hostel"}
//               </p>
//               <p className="text-gray-600">
//                 <strong>Rating:</strong> ⭐⭐⭐⭐⭐ ({hostel.rating || "4.5"}/5)
//               </p>
//               <p className="text-gray-600">
//                 <strong>Price:</strong> {hostel.price || "15,500/-"} per person
//               </p>
//               <p
//                 className={`font-semibold ${
//                   hostel.availability ? "text-green-600" : "text-red-600"
//                 }`}
//               >
//                 <strong>Availability:</strong>{" "}
//                 {hostel.availability ? "Available" : "Not Available"}
//               </p>
//               <p className="text-gray-700 mt-4">
//                 <strong>Description:</strong> {hostel.description}
//               </p>
//             </div>

//             {/* Right Side */}
//             <div className="w-full space-y-4 flex flex-col items-center lg:items-start">
//               <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
//                 <button
//                   onClick={() => setIsBookingOpen(true)}
//                   className="text-blue-500 bg-white border-blue-600 border px-4 py-2 hover:cursor-pointer rounded w-full sm:w-auto"
//                 >
//                   Book Now
//                 </button>
//                 <Link
//                   to="/Inbox"
//                   state={{
//                     role: "tenant",
//                     hostelName: hostel.hostelName,
//                     tenantName: hostel.tenantName,
//                     ownerName: hostel.ownerName,
//                   }}
//                   className="bg-blue-600 text-white text-center px-4 py-2 rounded w-full sm:w-auto"
//                 >
//                   Chat with Owner
//                 </Link>
//               </div>

//               <img
//                 src={hostel.image || "/images/hostel-main.jpg"}
//                 alt="Hostel"
//                 className="w-full h-64 sm:h-72 md:h-80 bg-gray-400 lg:h-96 object-cover rounded-lg"
//               />
//             </div>
//           </div>

//           <Booking
//             isOpen={isBookingOpen}
//             onClose={() => setIsBookingOpen(false)}
//             hostelPrice={hostel.price || "15,500/-"}
//           />

//           {/* Lower Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
//             {/* Image Gallery */}
//             <div>
//               <div className="border border-gray-300 rounded-lg p-4">
//                 <div className="w-full h-64 bg-gray-200 rounded-lg">
//                   <img
//                     src={hostel.image || "/images/hostel-main.jpg"}
//                     alt="Main Hostel"
//                     className="w-full h-full object-cover rounded-lg"
//                   />
//                 </div>
//                 <div className="flex flex-wrap justify-center gap-2 mt-4">
//                   {hostel.gallery
//                     ? hostel.gallery.map((img, index) => (
//                         <div
//                           key={index}
//                           className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-md"
//                         >
//                           <img
//                             src={img}
//                             alt={`Thumbnail ${index + 1}`}
//                             className="w-full h-full object-cover rounded-md"
//                           />
//                         </div>
//                       ))
//                     : [1, 2, 3, 4, 5].map((_, index) => (
//                         <div
//                           key={index}
//                           className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-md"
//                         >
//                           <img
//                             src={`/images/thumb-${index + 1}.jpg`}
//                             alt={`Thumbnail ${index + 1}`}
//                             className="w-full h-full object-cover rounded-md"
//                           />
//                         </div>
//                       ))}
//                 </div>
//               </div>
//             </div>

//             {/* Amenities & Reviews */}
//             <div>
//               <h2 className="text-xl font-bold">Key Amenities</h2>
//               <ul className="list-disc pl-6 text-gray-700">
//                 <li>
//                   <strong>Room Types:</strong> Dorms, Private Rooms, and Family
//                   Rooms
//                 </li>
//                 <li>
//                   <strong>Shared Facilities:</strong> Clean and modern
//                   bathrooms, common lounge, and kitchen
//                 </li>
//                 <li>
//                   <strong>Free Services:</strong> Wi-Fi, linen, towels, and
//                   breakfast
//                 </li>
//                 <li>
//                   <strong>Paid Services:</strong> Laundry, airport transfers,
//                   and tour bookings
//                 </li>
//               </ul>

//               <h2 className="text-xl text-center font-bold mt-4">
//                 User Reviews
//               </h2>
//               <p className="text-yellow-500 text-center font-semibold">
//                 {hostel.ratings || "4.5"}/5 from {hostel.reviewsCount || 100}{" "}
//                 reviews
//               </p>
//               <div className="border border-gray-300 p-4 mt-4 rounded-lg">
//                 <p className="text-gray-700">
//                   "
//                   {hostel.review ||
//                     "This hostel exceeded all my expectations! It's clean, comfortable, and has great facilities. Highly recommended!"}
//                   "
//                 </p>
//                 <p className="mt-2 text-gray-600">
//                   - {hostel.reviewer || "Saad Raza, UMT Lahore Student"}
//                 </p>
//               </div>
//               <Link
//                 to={"/Ratings"}
//                 className="mt-2 text-blue-600 text-center cursor-pointer"
//               >
//                 See All Reviews | Help Us
//               </Link>

//               {/* Quick Links */}
//               <div className="mt-6">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Quick Links
//                 </h3>
//                 <ul className="text-blue-600 mt-2 space-y-1">
//                   <li className="hover:underline cursor-pointer">
//                     Hostel Rules
//                   </li>
//                   <li className="hover:underline cursor-pointer">
//                     Map Integration
//                   </li>
//                   <li className="hover:underline cursor-pointer">
//                     Related Hostels
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Details;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchHostelById } from "../Features/hostelSlice";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Booking from "../Booking Forms/Booking";
import BookingWrapper from "../BookingWrapper";
const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
      const feedbackList = useSelector((state) => state.ratings?.feedbackList || []);
    console.log("user",feedbackList)
  

  const {
    selectedHostel: hostel,
    loading,
    error,
  } = useSelector((state) => state.hostel);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    if (id) dispatch(fetchHostelById(id));
  }, [id, dispatch]);

  if (loading)
    return <p className="text-center mt-10">Loading hostel details...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-600">Error: {error}</p>;
  if (!hostel) return <p className="text-center mt-10">No hostel found.</p>;

  const handleDashboardClick = () => {
    if (user?.userType === 'owner') {
      navigate('/Owner'); // adjust this path to your actual owner dashboard route
      
    } else if (user?.userType === 'tenant') {
      navigate('/Tennet'); // adjust this path to your actual tenant dashboard route
    } else {
      navigate('/'); // fallback if userType is missing or unrecognized
    }
  };

  return (
    <>
      <Navbar />
        <div className="w-full bg-blue-900 text-white   text-xl pl-16 h-10">
                        <p className="hover:cursor-pointer pt-1 ">   <Link to={"/Home"}>Home</Link> | <span onClick={handleDashboardClick} >Dashboard</span> |  <Link to="/Myprofile" className="ml-2">My Profile</Link> </p>
                      </div>

      <div className="bg-gray-100 p-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col w-full items-center lg:flex-row gap-6">
            {/* Left Side */}
            <div className="max-w-[40vw] lg:w-2/3 space-y-3">
              <h1 className="text-2xl font-bold">{hostel.name}</h1>
              <p className="text-gray-600">
                <strong>Location:</strong>{" "}
                {hostel.location?.address || "Not Available"}
              </p>
              <p className="text-gray-600">
                <strong>Type:</strong> {hostel.type || "Budget-friendly hostel"}
              </p>
              <p className="text-gray-600">
                <strong>Rating:</strong> ⭐⭐⭐⭐⭐ (
                {hostel.averageRating || hostel.rating || "4.5"}/5)
              </p>
              <p className="text-gray-600">
                <strong>Price:</strong>{" "}
                {hostel.pricePerMonth || hostel.price || "15,500/-"} per person
              </p>
              <p
                className={`font-semibold ${
                  hostel.availability ? "text-green-600" : "text-red-600"
                }`}
              >
                <strong>Availability:</strong>{" "}
                {hostel.availability ? "Available" : "Not Available"}
              </p>
              <p className="text-gray-700 mt-4">
                <strong>Description:</strong> {hostel.description || "N/A"}
              </p>
              <h2 className="text-xl font-bold">Key Amenities</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>
                  <strong>Room Types:</strong> Dorms, Private Rooms, and Family
                  Rooms
                </li>
                <li>
                  <strong>Shared Facilities:</strong> Common lounge, kitchen
                </li>
                <li>
                  <strong>Free Services:</strong> Wi-Fi, linen, breakfast
                </li>
                <li>
                  <strong>Paid Services:</strong> Laundry, airport transfers
                </li>
              </ul>
            </div>

            {/* Right Side */}
            <div className="w-full space-y-4 flex flex-col items-center lg:items-start">
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="text-blue-500 bg-white border-blue-600 border px-4 py-2 hover:cursor-pointer rounded w-full sm:w-auto"
                >
                  Book Now
                </button>
               <Link
  to={`/Inbox/${hostel._id}`} // or use `hostel.ownerId` if that's the ID needed
  state={{
    role: "tenant",
    hostelName: hostel.name,
    tenantName: hostel.tenantName || "Tenant",
    ownerName: hostel.ownerName || "Owner",
  }}

                  className="bg-blue-900 text-white text-center px-4 py-2 rounded w-full sm:w-auto"
                >
                  Chat with Owner
                </Link>
              </div>

              <img
                src={
                  hostel.imageUrl || hostel.image || "/images/hostel-main.jpg"
                }
                alt="Hostel"
                className="w-full h-64 sm:h-72 md:h-80 bg-gray-400 lg:h-96 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Booking */}
          <BookingWrapper
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
            hostelPrice={hostel.pricePerMonth || hostel.price || "15,500/-"}
          />

          {/* Lower Section */}
          <div className=" flex flex-col justify-center items-center mt-10">
            {/* Image Gallery */}
            {/* <div>
              <div className="border border-gray-300 rounded-lg p-4">
                <div className="w-full h-64 bg-gray-200 rounded-lg">
                  <img
                    src={hostel.imageUrl || hostel.image || "/images/hostel-main.jpg"}
                    alt="Main Hostel"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {hostel.gallery?.length > 0
                    ? hostel.gallery.map((img, index) => (
                        <div key={index} className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-md">
                          <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                        </div>
                      ))
                    : [1, 2, 3, 4, 5].map((_, index) => (
                        <div key={index} className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-md">
                          <img src={`/images/thumb-${index + 1}.jpg`} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                        </div>
                      ))}
                </div>
              </div>
            </div> */}

            {/* Amenities & Reviews */}
            <div className="justify-center flex flex-col mb-20 ">
              

              <h2 className="text-xl text-blue-700 text-center font-bold mt-4">
                User Reviews
              </h2>
              <p className="text-black text-center font-semibold">
                {hostel.averageRating || hostel.ratings || "4.5"}/5 from{" "}
                {hostel.reviewsCount || 100} reviews
              </p>
              <div className="border border-gray-300 sm:w-3xl align-m bg-white flex flex-col justify-center  p-4 mt-4 text-center rounded-lg">
                <p className="text-gray-700">
                  "
                  {hostel.review || "This hostel exceeded all my expectations!"}
                  "
                </p>
                <p className="mt-2 text-gray-600">
                  - {hostel.reviewer || "Saad Raza, UMT Lahore Student"}
                </p>
              </div>
              <Link
                key={hostel._id}
                to={`/Ratings/${hostel._id}`}
                className="mt-2 text-blue-600 text-right cursor-pointer"
              >
                See All Reviews | Rate Us
              </Link>

              {/* <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Quick Links
                </h3>
                <ul className="text-blue-600 mt-2 space-y-1">
                  <li className="hover:underline cursor-pointer">
                    Hostel Rules
                  </li>
                  <li className="hover:underline cursor-pointer">
                    Map Integration
                  </li>
                  <li className="hover:underline cursor-pointer">
                    Related Hostels
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Details;
