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
  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
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

  const validateForm = (data) => {
    let newErrors = {};
    if (!data.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!data.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!data.email.trim()) newErrors.email = "Email is required";
    if (!data.mobile.trim()) newErrors.mobile = "Mobile Number is required";
    if (!data.gender) newErrors.gender = "Gender is required";
    if (!data.cnic.trim()) newErrors.cnic = "CNIC is required";
    if (!data.photo) newErrors.photo = "Photo is required";
    if (!data.house.trim()) newErrors.house = "House Number is required";
    if (!data.street.trim()) newErrors.street = "Street Name is required";
    if (!data.postalCode.trim()) newErrors.postalCode = "Postal Code is required";
    if (!data.city.trim()) newErrors.city = "City is required";
    if (!data.district) newErrors.district = "District is required";
    if (!data.state) newErrors.state = "State is required";
  
    return newErrors;
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    localStorage.setItem("userProfile", JSON.stringify(formData));
    alert("Profile saved successfully!");
    setErrors({}); // Clear errors
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
                <div><Field
                  label="First Name"
                  placeholder="Enter your first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>
                
                <div>
                <Field
                  label="Last Name"
                  placeholder="Enter your last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>
                
                <div>
                <Field
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                
                <div>
                <Field
                  label="Mobile Number"
                  placeholder="Enter your mobile number"
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                </div>
                

                <Selectfield
                  label="Gender"
                  type="select"
                  options={["Male", "Female", "Other"]}
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                />

                <div>
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
                {errors.cnic && <p className="text-red-500 text-sm">{errors.cnic}</p>}
                </div>
                

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
