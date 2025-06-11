// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import edit from "../assets/Profile/edit.png";

// function MyProfile() {
//   const [profile, setProfile] = useState({});
//   const [booking, setBooking] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editableProfile, setEditableProfile] = useState({});

//   useEffect(() => {
//     const storedProfile = localStorage.getItem("userProfile");
//     if (storedProfile) {
//       const parsedProfile = JSON.parse(storedProfile);
//       setProfile(parsedProfile);
//       setEditableProfile(parsedProfile);
//     }
//   }, []);

//   useEffect(() => {
//     const storedBooking = localStorage.getItem("bookingFormData");
//     if (storedBooking) {
//       setBooking(JSON.parse(storedBooking));
//     }
//   }, []);

//   const handleEditClick = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleChange = (e) => {
//     setEditableProfile({
//       ...editableProfile,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSave = () => {
//     setProfile(editableProfile);
//     localStorage.setItem("userProfile", JSON.stringify(editableProfile));
//     setIsEditing(false);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="bg-gray-100 min-h-screen">
//         <div className=" flex w-[40vw] justify-center items-start">
//           <h1 className="text-xl sm:text-2xl text-blue-600 font-semibold mt-10 mb-4 px-4">
//             My Profile
//           </h1>
//         </div>

//         <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
//           <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md">
//             <div className="flex flex-col gap-6">
//               {/* Edit Button */}
//               <div className="flex justify-end">
//                 <button onClick={handleEditClick}>
//                   <img src={edit} alt="Edit" className="w-5 h-5 sm:w-6 sm:h-6" />
//                 </button>
//               </div>

//               {/* Profile Header */}
//               <div className="flex flex-col md:flex-row md:items-center gap-4">
//                 <img
//                   alt={`Profile picture of ${profile.firstName || "User"}`}
//                   className="w-24 h-24 rounded-full object-cover border"
//                   src={`https://ui-avatars.com/api/?name=${profile.firstName || "U"}&background=0D8ABC&color=fff`}
//                 />
//                 <h2 className="text-lg sm:text-xl font-semibold">
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={editableProfile.firstName || ""}
//                       onChange={handleChange}
//                       className="border border-gray-400 px-2 py-1 rounded w-full sm:w-auto"
//                     />
//                   ) : (
//                     `${profile.firstName || "First Name"} ${profile.lastName || "Last Name"}`
//                   )}
//                 </h2>
//               </div>

//               {/* Profile Fields */}
//               <div>
//                 <p className="font-medium mb-2">Email:</p>
//                 {isEditing ? (
//                   <input
//                     type="email"
//                     name="email"
//                     value={editableProfile.email || ""}
//                     onChange={handleChange}
//                     className="border border-gray-400 px-2 py-1 rounded w-full"
//                   />
//                 ) : (
//                   <p className="text-gray-700 mb-4">{profile.email || "No Email Provided"}</p>
//                 )}

//                 <p className="font-medium mb-2">Phone Number:</p>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="mobile"
//                     value={editableProfile.mobile || ""}
//                     onChange={handleChange}
//                     className="border border-gray-400 px-2 py-1 rounded w-full"
//                   />
//                 ) : (
//                   <p className="text-gray-700 mb-4">{profile.mobile || "No Phone Number"}</p>
//                 )}

//                 {/* Permanent Address */}
//                 <p className="mt-6 text-lg font-semibold text-blue-600">Permanent Address</p>
//                 {isEditing ? (
//                   <div className="space-y-2 mt-2">
//                     <input
//                       type="text"
//                       name="house"
//                       placeholder="House"
//                       value={editableProfile.house || ""}
//                       onChange={handleChange}
//                       className="border border-gray-400 px-2 py-1 rounded w-full"
//                     />
//                     <input
//                       type="text"
//                       name="street"
//                       placeholder="Street"
//                       value={editableProfile.street || ""}
//                       onChange={handleChange}
//                       className="border border-gray-400 px-2 py-1 rounded w-full"
//                     />
//                     <input
//                       type="text"
//                       name="city"
//                       placeholder="City"
//                       value={editableProfile.city || ""}
//                       onChange={handleChange}
//                       className="border border-gray-400 px-2 py-1 rounded w-full"
//                     />
//                   </div>
//                 ) : (
//                   <p className="text-gray-700 mt-2">
//                     {profile.house || "House"}, {profile.street || "Street"},{" "}
//                     {profile.city || "City"}
//                   </p>
//                 )}

//                 {/* Booking History */}
//                 <p className="mt-8 text-lg font-semibold text-blue-600">Booking History</p>
//                 {booking ? (
//                   <div className="space-y-2 mt-2 text-gray-800">
//                     <p>
//                       <strong>Hostel Name:</strong> {booking.hostelName || "N/A"}
//                     </p>
//                     <p>
//                       <strong>Booking Date:</strong> {booking.bookingDate || "N/A"}
//                     </p>
//                     <p>
//                       <strong>Status:</strong> {booking.status || "Pending"}
//                     </p>
//                   </div>
//                 ) : (
//                   <p className="text-gray-500 mt-2">No bookings found.</p>
//                 )}
//               </div>

//               {isEditing && (
//                 <button
//                   className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
//                   onClick={handleSave}
//                 >
//                   Save Changes
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="mt-10">
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// }

// export default MyProfile;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import edit from "../assets/Profile/edit.png";
import { Link,useNavigate } from "react-router-dom";
import { getUserProfile } from "../Features/authSlics";

function MyProfile() {
  const dispatch = useDispatch();
   const navigate = useNavigate();

  // Get user profile from Redux
  const { user, loading, error } = useSelector((state) => state.auth);
  const booking = useSelector((state) => state.booking.booking); // Adjust path based on your store


  const [editableProfile, setEditableProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);
 

  // Fetch profile from backend via Redux
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  // Update editableProfile when Redux user is fetched
  useEffect(() => {
    if (user) {
      setEditableProfile(user);
    }
  }, [user]);

  // Load booking data from localStorage
  // useEffect(() => {
  //   const storedBooking = localStorage.getItem("bookingFormData");
  //   if (storedBooking) {
  //     setBooking(JSON.parse(storedBooking));
  //   }
  // }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
  if (user) {
    setEditableProfile({
      ...user,
      address: user.address || { street: "", city: "" },
    });
  }
}, [user]);

console.log("Editable Profile:", editableProfile);

  const handleSave = () => {
    // NOTE: You would normally dispatch an update profile API here
    setIsEditing(false);
  };
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
       <div className="w-full bg-blue-800 text-white  pl-28 h-8">
              <p className="hover:cursor-pointer"><span onClick={handleDashboardClick} >Dashboard</span> |  <Link to="/Myprofile" className="ml-2">My Profile</Link> |   <Link to={"/Notifications"}>Notifications</Link></p>
            </div>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex w-[40vw] justify-center items-start">
          <h1 className="text-xl sm:text-2xl text-blue-600 font-semibold mt-10 mb-4 px-4">
            My Profile
          </h1>
        </div>

        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
          <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md">
            <div className="flex flex-col gap-6">
              <div className="flex justify-end">
                <button onClick={handleEditClick}>
                  <img src={edit} alt="Edit" className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <img
                  alt={`Profile picture of ${editableProfile.firstName || "User"}`}
                  className="w-24 h-24 rounded-full object-cover border"
                  src={`https://ui-avatars.com/api/?name=${editableProfile.firstName || "U"}&background=0D8ABC&color=fff`}
                />
                <h2 className="text-lg sm:text-xl font-semibold">
                  {isEditing ? (
                    <input
                      type="text"
                      name="firstName"
                      value={editableProfile.firstName || ""}
                      onChange={handleChange}
                      className="border border-gray-400 px-2 py-1 rounded w-full sm:w-auto"
                    />
                  ) : (
                    `${editableProfile.firstName || "First Name"} ${editableProfile.lastName || "Last Name"}`
                  )}
                </h2>
              </div>

              <div>
                <p className="font-medium mb-2">Email:</p>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editableProfile.email || ""}
                    onChange={handleChange}
                    className="border border-gray-400 px-2 py-1 rounded w-full"
                  />
                ) : (
                  <p className="text-gray-700 mb-4">{editableProfile.email || "No Email Provided"}</p>
                )}

                <p className="font-medium mb-2">Phone Number:</p>
                {isEditing ? (
                  <input
                    type="text"
                    name="mobileNo"
                    value={editableProfile.mobileNo || ""}
                    onChange={handleChange}
                    className="border border-gray-400 px-2 py-1 rounded w-full"
                  />
                ) : (
                  <p className="text-gray-700 mb-4">{editableProfile.mobileNo || "No Phone Number"}</p>
                )}

                <p className="mt-6 text-lg font-semibold text-blue-600">Permanent Address</p>
                {isEditing ? (
                  <div className="space-y-2 mt-2">
                    <input
                      type="text"
                      name="street"
                      placeholder="Street"
                      value={editableProfile.address?.street || ""}
                      onChange={(e) =>
                        setEditableProfile((prev) => ({
                          ...prev,
                          address: { ...prev.address, street: e.target.value },
                        }))
                      }
                      className="border border-gray-400 px-2 py-1 rounded w-full"
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={editableProfile.address?.city || ""}
                      onChange={(e) =>
                        setEditableProfile((prev) => ({
                          ...prev,
                          address: { ...prev.address, city: e.target.value },
                        }))
                      }
                      className="border border-gray-400 px-2 py-1 rounded w-full"
                    />
                  </div>
                ) : (
                  <p className="text-gray-700 mt-2">
                    {editableProfile.address?.street || "Street"},{" "}
                    {editableProfile.address?.city || "City"}
                  </p>
                )}
  
                {/* <p className="mt-8 text-lg font-semibold text-blue-600">Booking History</p>
                {booking ? (
                  <div className="space-y-2 mt-2 text-gray-800">
                    <p>
                      <strong>Hostel Name:</strong> {booking.hostelName || "N/A"}
                    </p>
                    <p>
                      <strong>Booking Date:</strong> {booking.bookingDate || "N/A"}
                    </p>
                    <p>
                      <strong>Status:</strong> {booking.status || "Pending"}
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-500 mt-2">No bookings found.</p>
                )} */}
              </div>

              {isEditing && (
                <button
                  className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyProfile;
