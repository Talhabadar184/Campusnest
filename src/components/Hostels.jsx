// import { useState } from "react";
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Pagination from "./Pagination";
// import Comparison from "./Comparison";

// function Hostels() {
//   const [selectedHostels, setSelectedHostels] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isCompareOpen, setIsCompareOpen] = useState(false);
//   const hostelsPerPage = 5;

//   const handleCheckboxChange = (hostel) => {
//     setSelectedHostels((prevSelected) => {
//       const isAlreadySelected = prevSelected.some((h) => h.id === hostel.id);
//       return isAlreadySelected
//         ? prevSelected.filter((h) => h.id !== hostel.id)
//         : prevSelected.length < 2
//         ? [...prevSelected, hostel]
//         : prevSelected;
//     });
//   };

//   const hostels = [
//     {
//       id: 1,
//       name: "Lahore Hostel",
//       image: "/images",
//       location: "Model Town, Ferozpur Road",
//       price: "15,000 PKR",
//       description: "Lorem ipsum dolor sit amet.",
//       ratings: "⭐⭐⭐⭐⭐",
//       amenities: ["WiFi", "Laundry", "Security", "Mess","24/7 Security","Gym/Fitness Center","Study Area","Common Room/TV Lounge","Private Bathrooms","Parking","Housekeeping Services"],
//     },
//     {
//       id: 2,
//       name: "Johar Hostel",
//       image: "/images",
//       location: "Johar Town, Near Emporium Mall",
//       price: "18,000 PKR",
//       description: "Lorem ipsum dolor sit amet.",
//       ratings: "⭐⭐⭐⭐⭐",
//       amenities: ["WiFi", "Laundry", "Security", "Mess","24/7 Security","Gym/Fitness Center","Study Area","Common Room/TV Lounge","Private Bathrooms","Parking","Housekeeping Services"],
//     },
//   ];

//   const indexOfLastHostel = currentPage * hostelsPerPage;
//   const indexOfFirstHostel = indexOfLastHostel - hostelsPerPage;
//   const currentHostels = hostels.slice(indexOfFirstHostel, indexOfLastHostel);

//   return (
//     <div className="flex-1 max-w-full px-4 md:max-w-[70vw] p-4 rounded-lg shadow-lg">
//       <h2 className="text-lg text-blue-600 font-semibold mb-3 text-center md:text-left">
//         {hostels.length} Hostels Found
//       </h2>

//       <div className="space-y-4">
//         {currentHostels.map((hostel) => (
//           <div key={hostel.id} className="flex flex-col md:flex-row gap-4 p-4 rounded-lg bg-white shadow">
//             <div className="w-full md:w-40 h-40 bg-gray-200 flex items-center justify-center rounded-lg">
//               <span className="text-gray-500">Image</span>
//             </div>
//             <div className="flex-1">
//               <div className="flex gap-2 items-center">
//                 <input
//                   type="checkbox"
//                   checked={selectedHostels.some((h) => h.id === hostel.id)}
//                   onChange={() => handleCheckboxChange(hostel)}
//                   disabled={!selectedHostels.some((h) => h.id === hostel.id) && selectedHostels.length >= 2}
//                 />
//                 <h1 className="font-semibold text-blue-600 text-lg">{hostel.name}</h1>
//               </div>
//               <p className="text-gray-500 text-sm mt-3 mb-3">{hostel.description}</p>
//               <p className="text-gray-600 text-sm mb-1">
//                 Location: <strong>{hostel.location}</strong> | Price: <strong>{hostel.price}</strong>
//               </p>
//               <p className="text-gray-600 text-sm mb-2">
//                 <strong>Ratings:</strong> {hostel.ratings}
//               </p>
//               <p className="text-blue-600 text-sm">
//                 <Link className="hover:underline hover:cursor-pointer">Call Owner</Link> |
//                 <Link to="/Details" state={{ hostel }} className="hover:underline hover:cursor-pointer">
//                   More Details
//                 </Link>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Pagination
//         hostels={hostels}
//         totalPages={Math.ceil(hostels.length / hostelsPerPage)}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//         selectedHostels={selectedHostels}
//         setSelectedHostels={setSelectedHostels}
//         setIsCompareOpen={setIsCompareOpen}
//       />

//       {isCompareOpen && <Comparison selectedHostels={selectedHostels} onClose={() => setIsCompareOpen(false)} />}
//     </div>
//   );
// }

// export default Hostels;
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllHostels } from "../Features/hostelSlice"; // adjust import path
// import { Link } from "react-router-dom";
// import Pagination from "./Pagination";
// import Comparison from "./Comparison";

// function Hostels() {
//   const dispatch = useDispatch();
//   const { hostels, loading, error } = useSelector((state) => state.hostel);

//   const [selectedHostels, setSelectedHostels] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isCompareOpen, setIsCompareOpen] = useState(false);
//   const hostelsPerPage = 5;

//   useEffect(() => {
//     dispatch(fetchAllHostels());
//   }, [dispatch]);

//   const handleCheckboxChange = (hostel) => {
//     setSelectedHostels((prevSelected) => {
//       const isAlreadySelected = prevSelected.some((h) => h._id === hostel._id);
//       if (isAlreadySelected) {
//         return prevSelected.filter((h) => h._id !== hostel._id);
//       } else if (prevSelected.length < 2) {
//         return [...prevSelected, hostel];
//       } else {
//         return prevSelected;
//       }
//     });
//   };

//   // Pagination calculations
//   const indexOfLastHostel = currentPage * hostelsPerPage;
//   const indexOfFirstHostel = indexOfLastHostel - hostelsPerPage;
//   const currentHostels = hostels ? hostels.slice(indexOfFirstHostel, indexOfLastHostel) : [];

//   if (loading) {
//     return <div className="text-center mt-10">Loading hostels...</div>;
//   }

//   if (error) {
//     return <div className="text-center mt-10 text-red-600">Error: {error.message || error}</div>;
//   }

//   return (
//     <div className="flex-1 max-w-full px-4 md:max-w-[70vw] p-4 rounded-lg shadow-lg">
//       <h2 className="text-lg text-blue-600 font-semibold mb-3 text-center md:text-left">
//         {hostels?.length || 0} Hostels Found
//       </h2>

//       <div className="space-y-4">
//         {currentHostels.map((hostel) => (
//           <div key={hostel._id} className="flex flex-col md:flex-row gap-4 p-4 rounded-lg bg-white shadow">
//             <div className="w-full md:w-40 h-40 bg-gray-200 flex items-center justify-center rounded-lg">
//               {/* Optionally show an image if you have one */}
//               <span className="text-gray-500">Image</span>
//             </div>
//             <div className="flex-1">
//               <div className="flex gap-2 items-center">
//                 <input
//                   type="checkbox"
//                   checked={selectedHostels.some((h) => h._id === hostel._id)}
//                   onChange={() => handleCheckboxChange(hostel)}
//                   disabled={!selectedHostels.some((h) => h._id === hostel._id) && selectedHostels.length >= 2}
//                 />
//                 <h1 className="font-semibold text-blue-600 text-lg">{hostel.name}</h1>
//               </div>
//               <p className="text-gray-500 text-sm mt-3 mb-3">{hostel.description}</p>
//               <p className="text-gray-600 text-sm mb-1">
//                 Location: <strong>{hostel.location?.address || "N/A"}</strong> | Price: <strong>{hostel.pricePerMonth} PKR</strong>
//               </p>
//               <p className="text-gray-600 text-sm mb-2">
//                 <strong>Ratings:</strong> {hostel.averageRating || "No ratings"}
//               </p>
//               <p className="text-blue-600 text-sm">
//                 <Link className="hover:underline hover:cursor-pointer">Call Owner</Link> |
//                 <Link to="/Details" state={{ hostel }} className="hover:underline hover:cursor-pointer">
//                   More Details
//                 </Link>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Pagination
//         hostels={hostels}
//         totalPages={Math.ceil((hostels?.length || 0) / hostelsPerPage)}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//         selectedHostels={selectedHostels}
//         setSelectedHostels={setSelectedHostels}
//         setIsCompareOpen={setIsCompareOpen}
//       />

//       {isCompareOpen && <Comparison selectedHostels={selectedHostels} onClose={() => setIsCompareOpen(false)} />}
//     </div>
//   );
// }

// export default Hostels;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllHostels } from "../Features/hostelSlice";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import Comparison from "./Comparison";

function Hostels() {
  const dispatch = useDispatch();
  const { hostels, loading, error } = useSelector((state) => state.hostel);

  const [selectedHostels, setSelectedHostels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const hostelsPerPage = 5;

  useEffect(() => {
    dispatch(fetchAllHostels());
  }, [dispatch]);

  const handleCheckboxChange = (hostel) => {
    setSelectedHostels((prev) => {
      const isSelected = prev.some((h) => h._id === hostel._id);
      if (isSelected) return prev.filter((h) => h._id !== hostel._id);
      if (prev.length < 2) return [...prev, hostel];
      return prev;
    });
  };

  const indexOfLast = currentPage * hostelsPerPage;
  const indexOfFirst = indexOfLast - hostelsPerPage;
  const currentHostels = hostels?.slice(indexOfFirst, indexOfLast) || [];

  if (loading) return <p className="text-center mt-10">Loading hostels...</p>;
  if (error) return <p className="text-center text-red-600 mt-10">Error: {error.message || error}</p>;
  if (!hostels || hostels.length === 0) return <p className="text-center mt-10">No hostels found.</p>;

  return (
    <div className="flex-1 max-w-full px-4 md:max-w-[70vw] p-4 rounded-lg shadow-lg">
      <h2 className="text-lg text-blue-600 font-semibold mb-3 text-center md:text-left">
        {hostels.length} Hostels Found
      </h2>

      <div className="space-y-4">
        {currentHostels.map((hostel) => (
          <div key={hostel._id} className="flex flex-col md:flex-row gap-4 p-4 rounded-lg bg-white shadow">
            <div className="w-full md:w-40 h-40 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
              {hostel.imageUrl ? (
                <img src={hostel.imageUrl} alt={`${hostel.name}`} className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-500">No Image</span>
              )}
            </div>
            <div className="flex-1">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  aria-label={`Select ${hostel.name}`}
                  checked={selectedHostels.some((h) => h._id === hostel._id)}
                  onChange={() => handleCheckboxChange(hostel)}
                  disabled={!selectedHostels.some((h) => h._id === hostel._id) && selectedHostels.length >= 2}
                />
                <h1 className="font-semibold text-blue-600 text-lg">{hostel.name}</h1>
              </div>
              <p className="text-gray-500 text-sm mt-3 mb-3">{hostel.description || "No description available."}</p>
              <p className="text-gray-600 text-sm mb-1">
                Location: <strong>{hostel.location?.address || "N/A"}</strong> | Price:{" "}
                <strong>{hostel.pricePerMonth ? `${hostel.pricePerMonth} PKR` : "N/A"}</strong>
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Ratings:</strong> {hostel.averageRating || "No ratings"}
              </p>
              <p className="text-blue-600 text-sm flex gap-2">
                <a href={`tel:${hostel.ownerContact || ""}`} className="hover:underline">
                  Call Owner
                </a>
                |
                <Link to={`/Details/${hostel._id}`} className="hover:underline">
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

      {isCompareOpen && (
        <Comparison selectedHostels={selectedHostels} onClose={() => setIsCompareOpen(false)} />
      )}
    </div>
  );
}

export default Hostels;

