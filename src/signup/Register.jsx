import React, { useState } from "react";
import Field from "../components/Inputfield";
import Navbar from "../components/Navbar";
import Selectfield from "../components/Selectfield";
import upload from "../assets/Register/upload.png";
import Footer from "../components/Footer";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender: "",
    cnic: "",
    photo: null,
    house: "",
    street: "",
    postalCode: "",
    city: "",
    district: "",
    state: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      gender: "",
      cnic: "",
      photo: null,
      house: "",
      street: "",
      postalCode: "",
      city: "",
      district: "",
      state: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      <Navbar />

      {/* Main Wrapper with Gray Background */}
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* My Profile Section */}
        <div className="pt-7 pl-36">
          <h2 className="text-2xl font-semibold text-blue-700">My Profile</h2>
        </div>

        {/* Form Section */}
        <div className="flex justify-center items-center pt-7 mb-16">
          <div className="w-full max-w-4xl bg-white border-2 border-gray-300 p-8 rounded-lg shadow-lg">
            {/* Basic Info Section */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-blue-600 mb-3">
                Basic Info
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 mb-2 gap-4">
                <Field
                  label="First Name"
                  placeholder="Enter your first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Field
                  label="Last Name"
                  placeholder="Enter your last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <Field
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Field
                  label="Mobile Number"
                  placeholder="Enter your mobile number"
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                <Selectfield
                  label="Gender"
                  type="select"
                  options={["Male", "Female", "Other"]}
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                />
                <Field
                  label="CNIC"
                  placeholder="Enter your CNIC number"
                  type="text"
                  inputmode="numeric"
                  pattern="\d{13}"
                  maxlength="13"
                  name="cnic"
                  value={formData.cnic}
                  onChange={handleChange}
                />
              </div>
              {/* Upload Photo */}
              <div className="mt-9">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload your photo
                </label>
                <div className="relative w-[28%]">
                  <input
                    type="file"
                    id="fileUpload"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="fileUpload"
                    className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer w-full"
                  >
                    <img src={upload} alt="upload" className="h-5 w-5" />
                    <span>Upload</span>
                  </label>
                </div>
              </div>
              {/* Permanent Address  */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-blue-600 pt-4 mb-3">
                  Permanent Address
                </h3>
                <div className="grid pt-3.5 grid-cols-1 md:grid-cols-3 gap-4">
                  <Field
                    label="House/Unit/Apartment/Suite Number"
                    placeholder="Enter your House/Apartment/Suite Number"
                    name="house"
                    value={formData.house}
                    onChange={handleChange}
                  />
                  <Field
                    label="Street Name"
                    placeholder="Enter Street Name"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                  />
                  <Field
                    label="Postal Code"
                    placeholder="Enter Postal Code"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                  />
                  <Field
                    label="City"
                    placeholder="Enter your City Name"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <Selectfield
                    label="District"
                    type="select"
                    options={["District 1", "District 2", "District 3"]}
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                  />
                  <Selectfield
                    label="State"
                    type="select"
                    options={["State 1", "State 2", "State 3"]}
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  onClick={handleReset}
                  className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 hover:cursor-pointer transition"
                >
                  Reset
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 hover:cursor-pointer transition"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Space Below Form with Gray Background */}
        <div className="flex-grow bg-gray-100"></div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Register;
