import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import edit from "../assets/Profile/edit.png";

function MyProfile() {
  const [profile, setProfile] = useState({});
  const [booking, setBooking] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editableProfile, setEditableProfile] = useState({});

  useEffect(() => {
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      const parsedProfile = JSON.parse(storedProfile);
      setProfile(parsedProfile);
      setEditableProfile(parsedProfile);
    }
  }, []);

  useEffect(() => {
    const storedBooking = localStorage.getItem("bookingFormData");
    if (storedBooking) {
      setBooking(JSON.parse(storedBooking));
    }
  }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setEditableProfile({
      ...editableProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setProfile(editableProfile);
    localStorage.setItem("userProfile", JSON.stringify(editableProfile));
    setIsEditing(false);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-[40vw] flex justify-center items-start">
          <h1 className="text-2xl text-blue-600 font-semibold mt-10 mb-4">My Profile</h1>
        </div>
        <div className="max-w-4xl mx-auto bg-white border border-gray-400 p-6 rounded-lg shadow-md mt-6">
          <div className="flex flex-col items-start">
            {/* Edit Button */}
            <button className="flex w-full justify-end hover:cursor-pointer" onClick={handleEditClick}>
              <img src={edit} alt="Edit Profile" />
            </button>
            <div className="flex items-center">
              <img
                alt={`Profile picture of ${profile.firstName || "User"}`}
                className="w-24 h-24 rounded-full mr-4"
                width="100"
                height="100"
              />
              <h2 className="text-xl font-semibold">
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    value={editableProfile.firstName || ""}
                    onChange={handleChange}
                    className="border border-gray-400 px-2 py-1 rounded"
                  />
                ) : (
                  `${profile.firstName || "First Name"} ${profile.lastName || "Last Name"}`
                )}
              </h2>
            </div>
            <div className="flex-1 mt-4">
              <p className="mb-7">
                Email:
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editableProfile.email || ""}
                    onChange={handleChange}
                    className="border border-gray-400 px-2 py-1 rounded w-full"
                  />
                ) : (
                  <div className="font-semibold">{profile.email || "No Email Provided"}</div>
                )}
              </p>
              <p>
                Phone Number:
                {isEditing ? (
                  <input
                    type="text"
                    name="mobile"
                    value={editableProfile.mobile || ""}
                    onChange={handleChange}
                    className="border border-gray-400 px-2 py-1 rounded w-full"
                  />
                ) : (
                  <div className="mb-6 font-semibold">{profile.mobile || "No Phone Number"}</div>
                )}
              </p>
              <p className="mt-4 text-2xl mb-1 text-blue-600">Permanent Address</p>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    name="house"
                    value={editableProfile.house || ""}
                    onChange={handleChange}
                    className="border border-gray-400 px-2 py-1 rounded w-full mt-1"
                  />
                  <input
                    type="text"
                    name="street"
                    value={editableProfile.street || ""}
                    onChange={handleChange}
                    className="border border-gray-400 px-2 py-1 rounded w-full mt-1"
                  />
                  <input
                    type="text"
                    name="city"
                    value={editableProfile.city || ""}
                    onChange={handleChange}
                    className="border border-gray-400 px-2 py-1 rounded w-full mt-1"
                  />
                </>
              ) : (
                <p>
                  {profile.house || "House"}, {profile.street || "Street"}, {profile.city || "City"}
                </p>
              )}
              {/* Booking History */}
              <p className="mt-4 mb-1.5 text-2xl text-blue-600">Booking History</p>
              {booking ? (
                <>
                  <p className="mt-4 mb-1.5">
                    <strong>Hostel Name:</strong> {booking.hostelName || "N/A"}
                  </p>
                  <p className="mt-4 mb-1.5">
                    <strong>Booking Date:</strong> {booking.bookingDate || "N/A"}
                  </p>
                  <p className="mt-4 mb-1.5">
                    <strong>Status:</strong> {booking.status || "Pending"}
                  </p>
                </>
              ) : (
                <p className="mt-4 mb-1.5 text-gray-500">No bookings found.</p>
              )}
            </div>
            {isEditing && (
              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleSave}
              >
                Save Changes
              </button>
            )}
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
