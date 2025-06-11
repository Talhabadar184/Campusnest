// // import React, { useState } from "react";
// // import HomeNavbar from "../components/HomeNavbar";
// // import { Menu, Grid } from "lucide-react";
// // import { Link } from "react-router-dom";
// // import Footer from "../components/Footer";
// // import Hostels from "../components/Hostels";
// // import Pagination from "../components/Pagination";
// // import Comparison from "../components/Comparison";

// // function Listing() {
// //    const [institution, setInstitution] = useState("");
// //    const [radius, setRadius] = useState("");
// //    const [location, setLocation] = useState("");
// //    const [selectedHostels, setSelectedHostels] = useState([]); 
// //    const [isCompareOpen, setIsCompareOpen] = useState(false); 
// //   return (
// //     <div className="bg-gray-100 min-h-screen">
// //       <HomeNavbar />

// //       {/* Comparison Modal  */}
// //       {isCompareOpen && (
// //         <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
// //           <div className="bg-white p-6 rounded-lg shadow-lg w-[80%] relative">
// //             <button
// //               className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
// //               onClick={() => setIsCompareOpen(false)}
// //             >
// //               ✖
// //             </button>
// //             <Comparison selectedHostels={selectedHostels} />
// //           </div>
// //         </div>
// //       )}

// //       {/* Search Filters  */}
// //       <div className="flex flex-col items-center justify-center min-h-[10vh] max-w-[95vw] rounded-2xl mx-auto bg-blue-300 text-white p-6 mt-6 border border-blue-400">
// //         <div className="flex flex-wrap justify-center gap-4 rounded-lg shadow-lg">
// //           <select
// //             className="p-2 border rounded-lg text-gray-700 bg-[#f6f3fc] w-[220px]"
// //             value={institution}
// //             onChange={(e) => setInstitution(e.target.value)}
// //           >
// //             <option value="">-- Select Institution --</option>
// //             <option value="LUMS">LUMS</option>
// //             <option value="UCP">UCP</option>
// //             <option value="FAST">FAST</option>
// //           </select>

// //           <select
// //             className="p-2 border rounded-lg text-gray-700 bg-[#f6f3fc] w-[180px]"
// //             value={radius}
// //             onChange={(e) => setRadius(e.target.value)}
// //           >
// //             <option value="">-- Select Radius --</option>
// //             <option value="1km">1 km</option>
// //             <option value="3km">3 km</option>
// //             <option value="5km">5 km</option>
// //           </select>

// //           <select
// //             className="p-2 border rounded-lg text-gray-700 bg-[#f6f3fc] w-[200px] font-semibold"
// //             value={location}
// //             onChange={(e) => setLocation(e.target.value)}
// //           >
// //             <option value="">-- Select Location --</option>
// //             <option value="Johar Town">Johar Town</option>
// //             <option value="Model Town">Model Town</option>
// //             <option value="DHA">DHA</option>
// //           </select>

// //           <button className="bg-[#2d3e8e] hover:bg-[#1f2b6f] p-2 rounded-lg text-white w-[40px] flex items-center justify-center">
// //             🔍
// //           </button>
// //         </div>
// //       </div>

// //       {/* body div */}
// //       <div className="flex flex-col lg:flex-row lg:justify-center items-center justify-center mt-7 gap-6 px-4 lg:px-8">
// //         {/* Filter Column - Fixed Width */}
// //         <div className="w-[300px] lg:w-[300px] bg-white p-4  rounded-lg shadow-lg">
// //           <h2 className="text-lg font-semibold mb-4 text-blue-600">Filters</h2>

// //           {/* Location Filter */}
// //           <div className="mb-4">
// //             <label className="block text-sm font-medium text-gray-700">
// //               Location:
// //             </label>
// //             <select className="w-[17vw] p-2 border rounded-lg  bg-gray-50">
// //               <option>Reach Town</option>
// //               <option>Model Town</option>
// //               <option>Johar Town</option>
// //               <option>DHA</option>
// //             </select>
// //           </div>

// //           {/* Price  Slider */}  
// //           <div className="mb-4">
// //             <label className="block text-sm font-medium text-gray-700">
// //               Price Range:
// //             </label>
// //             <input
// //               type="range"
// //               className="w-full cursor-pointer"
// //               min="5000"
// //               max="50000"
// //               step="1000"
// //             />
// //           </div>


// //           {/* Amenities */}
// //           <div className="mb-4">
// //             <h3 className="text-sm font-medium text-gray-700">Amenities</h3>
// //             <div className="flex flex-col space-y-1 text-sm text-gray-600">
// //               <label>
// //                 <input type="checkbox" className="mr-2" /> Air Conditioning
// //               </label>
// //               <label>
// //                 <input type="checkbox" className="mr-2" /> Free Wi-Fi
// //               </label>
// //               <label>
// //                 <input type="checkbox" className="mr-2" /> Private or Ensuite
// //                 Bathrooms
// //               </label>
// //               <label>
// //                 <input type="checkbox" className="mr-2" /> Laundry Services
// //               </label>
// //               <label>
// //                 <input type="checkbox" className="mr-2" /> Luggage Storage
// //               </label>
// //               <label>
// //                 <input type="checkbox" className="mr-2" /> Healthy & Organic
// //                 Meals
// //               </label>
// //               <label>
// //                 <input type="checkbox" className="mr-2" /> Kitchen Facilities
// //               </label>
// //               <label>
// //                 <input type="checkbox" className="mr-2" /> 24/7 Security
// //               </label>
// //               <label>
// //                 <input type="checkbox" className="mr-2" /> UPS
// //               </label>
// //               <label>
// //                 <input type="checkbox" className="mr-2" /> Nearby Restaurants
// //               </label>
// //               <label>
// //                 <input type="checkbox" className="mr-2" /> Study Rooms
// //               </label>
// //             </div>
// //           </div>

// //           {/* Hostel Type */}
// //           <div className="mb-4">
// //             <label className="block text-sm font-medium text-gray-700">
// //               Hostel Type:
// //             </label>
// //             <select className="w-full p-2 border rounded-lg bg-gray-50">
// //               <option>Male Hostel</option>
// //               <option>Female Hostel</option>
// //               <option>Co-ed Hostel</option>
// //             </select>
// //           </div>

// //            {/* Room Type */}
// //            <div className="mb-4">
// //             <h3 className="text-sm font-medium text-gray-700">Room Type:</h3>
// //             <div className="flex gap-4 text-sm text-gray-600">
// //               <label>
// //                 <input type="radio" name="roomType" className="mr-2" /> Single
// //               </label>
// //               <label>
// //                 <input type="radio" name="roomType" className="mr-2" /> Shared
// //               </label>
// //             </div>
// //           </div>

// //            {/* Radius Filter */}
// //            <div className="mb-4">
// //             <label className="block text-sm font-medium text-gray-700">
// //               Radius:
// //             </label>
// //             <select className="w-full p-2 border rounded-lg bg-gray-50">
// //               <option>1 km</option>
// //               <option>3 km</option>
// //               <option>5 km</option>
// //             </select>
// //           </div>

// //           {/* Availability Checkbox */}
// //           <div className="mb-4">
// //             <label className="flex items-center text-sm text-gray-700">
// //               <input type="checkbox" className="mr-2" /> Only available hostels
// //             </label>
// //           </div>

// //           <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
// //             Apply Filters
// //           </button>

// //         </div>

// //         {/* Hostels Section -  */}
// //         <div className="flex-1 w-full">
// //           <Hostels />
// //         </div>
// //       </div>

// //       <Footer />
// //     </div>
// //   );
// // }

// // export default Listing;

// import React, { useState } from "react";
// import HomeNavbar from "../components/HomeNavbar";
// import Footer from "../components/Footer";
// import Hostels from "../components/Hostels";
// import Comparison from "../components/Comparison";

// function Listing() {
//   const [tempFilters, setTempFilters] = useState({
//     institution: "",
//     radius: "",
//     location: "",
//     priceRange: 50000,
//     amenities: {
//       airConditioning: false,
//       freeWiFi: false,
//       privateBathrooms: false,
//       laundry: false,
//       luggageStorage: false,
//       healthyMeals: false,
//       kitchen: false,
//       security: false,
//       ups: false,
//       nearbyRestaurants: false,
//       studyRooms: false,
//     },
//     hostelType: "",
//     roomType: "",
//     onlyAvailable: false,
//   });

//   const [searchFilters, setSearchFilters] = useState({});
//   const [selectedHostels, setSelectedHostels] = useState([]);
//   const [isCompareOpen, setIsCompareOpen] = useState(false);

//   const handleAmenityChange = (name) => {
//     setTempFilters((prev) => ({
//       ...prev,
//       amenities: {
//         ...prev.amenities,
//         [name]: !prev.amenities[name],
//       },
//     }));
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <HomeNavbar />

//       {/* Comparison Modal */}
//       {isCompareOpen && (
//         <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-[80%] relative max-h-[90vh] overflow-y-auto">
//             <button
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold"
//               onClick={() => setIsCompareOpen(false)}
//               aria-label="Close comparison modal"
//             >
//               ✖
//             </button>
//             <Comparison selectedHostels={selectedHostels} />
//           </div>
//         </div>
//       )}

//       {/* Top Bar Filters */}
//       <div className="flex flex-col items-center justify-center min-h-[10vh] max-w-[95vw] rounded-2xl mx-auto bg-blue-300 text-white p-6 mt-6 border border-blue-400">
//         <div className="flex flex-wrap justify-center gap-4 rounded-lg shadow-lg">
//           <select
//             className="p-2 border rounded-lg text-gray-700 bg-[#f6f3fc] w-[220px]"
//             value={tempFilters.institution}
//             onChange={(e) =>
//               setTempFilters({ ...tempFilters, institution: e.target.value })
//             }
//           >
//             <option value="">-- Select Institution --</option>
//             <option value="LUMS">LUMS</option>
//             <option value="UCP">UCP</option>
//             <option value="FAST">FAST</option>
//           </select>

//           <select
//             className="p-2 border rounded-lg text-gray-700 bg-[#f6f3fc] w-[180px]"
//             value={tempFilters.radius}
//             onChange={(e) =>
//               setTempFilters({ ...tempFilters, radius: e.target.value })
//             }
//           >
//             <option value="">-- Select Radius --</option>
//             <option value="1km">1 km</option>
//             <option value="3km">3 km</option>
//             <option value="5km">5 km</option>
//           </select>

//           <select
//             className="p-2 border rounded-lg text-gray-700 bg-[#f6f3fc] w-[200px] font-semibold"
//             value={tempFilters.location}
//             onChange={(e) =>
//               setTempFilters({ ...tempFilters, location: e.target.value })
//             }
//           >
//             <option value="">-- Select Location --</option>
//             <option value="Johar Town">Johar Town</option>
//             <option value="Model Town">Model Town</option>
//             <option value="DHA">DHA</option>
//           </select>

//           <button
//             className="bg-[#2d3e8e] hover:bg-[#1f2b6f] p-2 rounded-lg text-white w-[40px] flex items-center justify-center"
//             onClick={() => setSearchFilters(tempFilters)}
//             aria-label="Apply top bar filters"
//           >
//             🔍
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row lg:justify-center items-center justify-center mt-7 gap-6 px-4 lg:px-8">
//         {/* Filters Sidebar */}
//         <div className="w-[300px] lg:w-[300px] bg-white p-4 rounded-lg shadow-lg">
//           <h2 className="text-lg font-semibold mb-4 text-blue-600">Filters</h2>

//           {/* Location */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Location:</label>
//             <select
//               className="w-full p-2 border rounded-lg bg-gray-50"
//               value={tempFilters.location}
//               onChange={(e) =>
//                 setTempFilters({ ...tempFilters, location: e.target.value })
//               }
//             >
//               <option value="">Select Location</option>
//               <option value="Reach Town">Reach Town</option>
//               <option value="Model Town">Model Town</option>
//               <option value="Johar Town">Johar Town</option>
//               <option value="DHA">DHA</option>
//             </select>
//           </div>

//           {/* Price Range */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Price Range: Up to Rs. {tempFilters.priceRange}
//             </label>
//             <input
//               type="range"
//               min="5000"
//               max="50000"
//               step="1000"
//               className="w-full cursor-pointer"
//               value={tempFilters.priceRange}
//               onChange={(e) =>
//                 setTempFilters({ ...tempFilters, priceRange: +e.target.value })
//               }
//             />
//           </div>

//           {/* Amenities */}
//           <div className="mb-4">
//             <h3 className="text-sm font-medium text-gray-700">Amenities</h3>
//             <div className="flex flex-col space-y-1 text-sm text-gray-600 max-h-48 overflow-y-auto">
//               {Object.entries(tempFilters.amenities).map(([key, value]) => (
//                 <label key={key} className="capitalize">
//                   <input
//                     type="checkbox"
//                     className="mr-2"
//                     checked={value}
//                     onChange={() => handleAmenityChange(key)}
//                   />
//                   {key.replace(/([A-Z])/g, " $1")}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Hostel Type */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Hostel Type:</label>
//             <select
//               className="w-full p-2 border rounded-lg bg-gray-50"
//               value={tempFilters.hostelType}
//               onChange={(e) =>
//                 setTempFilters({ ...tempFilters, hostelType: e.target.value })
//               }
//             >
//               <option value="">Select Hostel Type</option>
//               <option value="Male Hostel">Male Hostel</option>
//               <option value="Female Hostel">Female Hostel</option>
//               <option value="Co-ed Hostel">Co-ed Hostel</option>
//             </select>
//           </div>

//           {/* Room Type */}
//           <div className="mb-4">
//             <h3 className="text-sm font-medium text-gray-700">Room Type:</h3>
//             <div className="flex gap-4 text-sm text-gray-600">
//               <label>
//                 <input
//                   type="radio"
//                   name="roomType"
//                   className="mr-2"
//                   checked={tempFilters.roomType === "Single"}
//                   onChange={() =>
//                     setTempFilters({ ...tempFilters, roomType: "Single" })
//                   }
//                 />
//                 Single
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="roomType"
//                   className="mr-2"
//                   checked={tempFilters.roomType === "Shared"}
//                   onChange={() =>
//                     setTempFilters({ ...tempFilters, roomType: "Shared" })
//                   }
//                 />
//                 Shared
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="roomType"
//                   className="mr-2"
//                   checked={tempFilters.roomType === ""}
//                   onChange={() =>
//                     setTempFilters({ ...tempFilters, roomType: "" })
//                   }
//                 />
//                 Any
//               </label>
//             </div>
//           </div>

//           {/* Radius */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Radius:</label>
//             <select
//               className="w-full p-2 border rounded-lg bg-gray-50"
//               value={tempFilters.radius}
//               onChange={(e) =>
//                 setTempFilters({ ...tempFilters, radius: e.target.value })
//               }
//             >
//               <option value="">Select Radius</option>
//               <option value="1km">1 km</option>
//               <option value="3km">3 km</option>
//               <option value="5km">5 km</option>
//             </select>
//           </div>

//           {/* Availability */}
//           <div className="mb-4">
//             <label className="flex items-center text-sm text-gray-700">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 checked={tempFilters.onlyAvailable}
//                 onChange={() =>
//                   setTempFilters({
//                     ...tempFilters,
//                     onlyAvailable: !tempFilters.onlyAvailable,
//                   })
//                 }
//               />
//               Only available hostels
//             </label>
//           </div>

//           <button
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
//             onClick={() => setSearchFilters(tempFilters)}
//             aria-label="Apply filters"
//           >
//             Apply Filters
//           </button>
//         </div>

//         {/* Hostels List */}
//         <div className="flex-1 w-full">
//           <Hostels
//             selectedHostels={selectedHostels}
//             setSelectedHostels={setSelectedHostels}
//             filters={searchFilters}
//             isCompareOpen={isCompareOpen}
//             setIsCompareOpen={setIsCompareOpen}
//           />
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default Listing;

import React, { useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Hostels from "../components/Hostels";
import Comparison from "../components/Comparison";


function Listing() {
  const [institution, setInstitution] = useState("");
  const [radius, setRadius] = useState("");
  const [location, setLocation] = useState("");
  const [selectedHostels, setSelectedHostels] = useState([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
  institution: '',
  radius: '',
  location: '',
});


  return (
    <div className="bg-gray-100 min-h-screen">
      <HomeNavbar />

      {isCompareOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[80%] relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setIsCompareOpen(false)}
              aria-label="Close comparison modal"
            >
              ✖
            </button>
<Comparison selectedHostels={selectedHostels} />          </div>
        </div>
      )}

<<<<<<< HEAD
      {/* Search Filters (Quick Filters) */}
      <div className="flex flex-col items-center justify-center min-h-[10vh] max-w-[95vw] rounded-2xl mx-auto bg-blue-300 text-white p-6  border border-blue-400">
=======
      {/* Search Filters */}
      <div className="flex flex-col items-center justify-center min-h-[10vh] max-w-[95vw] rounded-2xl mx-auto bg-blue-300 text-white p-6 mt-6 border border-blue-400">
>>>>>>> 7618c08ef64d623546da5686aafc61f26aeb6107
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
            <option value="1000">1 km</option>
            <option value="3000">3 km</option>
            <option value="5000">5 km</option>
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

         <button
  className="bg-[#2d3e8e] hover:bg-[#1f2b6f] p-2 rounded-lg text-white w-[40px] flex items-center justify-center"
  onClick={() =>
    setSearchFilters({
      institution,
      radius,
      location,
    })
  }
>
  🔍
</button>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col lg:flex-row lg:justify-center items-center justify-center mt-7 gap-6 px-4 lg:px-8">
        {/* Filter Column */}
        <div className="w-[300px] lg:w-[300px] bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-blue-600">Filters</h2>

          {/* Location Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Location:
            </label>
            <select className="w-full p-2 border rounded-lg bg-gray-50" value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="">Select Location</option>
              <option value="Reach Town">Reach Town</option>
              <option value="Model Town">Model Town</option>
              <option value="Johar Town">Johar Town</option>
              <option value="DHA">DHA</option>
            </select>
          </div>

          {/* Price Slider */}
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
                <input type="checkbox" className="mr-2" /> Private or Ensuite Bathrooms
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Laundry Services
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Luggage Storage
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Healthy & Organic Meals
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
            <select className="w-full p-2 border rounded-lg bg-gray-50" value={radius} onChange={(e) => setRadius(e.target.value)}>
              <option value="">Select Radius</option>
              <option value="1 km">1 km</option>
              <option value="3 km">3 km</option>
              <option value="5 km">5 km</option>
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

        {/* Hostels Section */}
        <div className="flex-1 w-full">
          <Hostels
  selectedHostels={selectedHostels}
  setSelectedHostels={setSelectedHostels}
  isCompareOpen={isCompareOpen}
  setIsCompareOpen={setIsCompareOpen}
  filters={searchFilters}
/>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Listing;