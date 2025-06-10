// import React, { useState } from "react";
// import Field from "../components/Inputfield";
// import Navbar from "../components/Navbar";
// import Selectfield from "../components/Selectfield";
// import upload from "../assets/Register/upload.png";
// import Footer from "../components/Footer";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     gender: "",
//     cnic: "",
//     photo: null,
//     house: "",
//     street: "",
//     postalCode: "",
//     city: "",
//     district: "",
//     state: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, photo: e.target.files[0] });
//   };

//   const handleReset = () => {
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       mobile: "",
//       gender: "",
//       cnic: "",
//       photo: null,
//       house: "",
//       street: "",
//       postalCode: "",
//       city: "",
//       district: "",
//       state: "",
//     });
//   };

//   const validateForm = (data) => {
//     let newErrors = {};
//     if (!data.firstName.trim()) newErrors.firstName = "First Name is required";
//     if (!data.lastName.trim()) newErrors.lastName = "Last Name is required";
//     if (!data.email.trim()) newErrors.email = "Email is required";
//     if (!data.mobile.trim()) newErrors.mobile = "Mobile Number is required";
//     if (!data.gender) newErrors.gender = "Gender is required";
//     if (!data.cnic.trim()) newErrors.cnic = "CNIC is required";
//     if (!data.photo) newErrors.photo = "Photo is required";
//     if (!data.house.trim()) newErrors.house = "House Number is required";
//     if (!data.street.trim()) newErrors.street = "Street Name is required";
//     if (!data.postalCode.trim()) newErrors.postalCode = "Postal Code is required";
//     if (!data.city.trim()) newErrors.city = "City is required";
//     if (!data.district) newErrors.district = "District is required";
//     if (!data.state) newErrors.state = "State is required";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm(formData);

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     localStorage.setItem("userProfile", JSON.stringify(formData));
//     alert("Profile saved successfully!");
//     setErrors({});
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gray-100 flex flex-col px-4 md:px-0">
//         {/* Heading */}
//         <div className="pt-7 flex justify-center md:justify-start md:pl-36">
//           <h2 className="text-2xl font-semibold text-blue-700 text-center">
//             My Profile
//           </h2>
//         </div>

//         {/* Form Container */}
//         <div className="flex justify-center items-center pt-7 mb-16">
//           <div className="w-full max-w-4xl bg-white border-2 border-gray-300 p-6 md:p-8 rounded-lg shadow-lg">
//             {/* Basic Info */}
//             <div className="mb-6">
//               <h3 className="text-lg font-medium text-blue-600 mb-3">
//                 Basic Info
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 mb-2 gap-4">
//                 <div>
//                   <Field
//                     label="First Name"
//                     placeholder="Enter your first name"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                   />
//                   {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
//                 </div>

//                 <div>
//                   <Field
//                     label="Last Name"
//                     placeholder="Enter your last name"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                   />
//                   {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
//                 </div>

//                 <div>
//                   <Field
//                     label="Email"
//                     placeholder="Enter your email"
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                   {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//                 </div>

//                 <div>
//                   <Field
//                     label="Mobile Number"
//                     placeholder="Enter your mobile number"
//                     type="tel"
//                     name="mobile"
//                     value={formData.mobile}
//                     onChange={handleChange}
//                   />
//                   {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
//                 </div>

//                 <Selectfield
//                   label="Gender"
//                   type="select"
//                   options={["Male", "Female", "Other"]}
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                 />

//                 <div>
//                   <Field
//                     label="CNIC"
//                     placeholder="Enter your CNIC number"
//                     type="text"
//                     inputmode="numeric"
//                     pattern="\d{13}"
//                     maxLength="13"
//                     name="cnic"
//                     value={formData.cnic}
//                     onChange={handleChange}
//                   />
//                   {errors.cnic && <p className="text-red-500 text-sm">{errors.cnic}</p>}
//                 </div>
//               </div>

//               {/* Upload Photo */}
//               <div className="mt-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Upload your photo
//                 </label>
//                 <div className="relative w-full md:w-[28%]">
//                   <input
//                     type="file"
//                     id="fileUpload"
//                     className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                     onChange={handleFileChange}
//                   />
//                   <label
//                     htmlFor="fileUpload"
//                     className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer w-full"
//                   >
//                     <img src={upload} alt="upload" className="h-5 w-5" />
//                     <span>Upload</span>
//                   </label>
//                   {errors.photo && <p className="text-red-500 text-sm mt-1">{errors.photo}</p>}
//                 </div>
//               </div>

//               {/* Permanent Address */}
//               <div className="mb-6">
//                 <h3 className="text-lg font-medium text-blue-600 pt-6 mb-3">
//                   Permanent Address
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <Field
//                     label="House/Unit/Apartment"
//                     placeholder="Enter your House/Apartment/Suite Number"
//                     name="house"
//                     value={formData.house}
//                     onChange={handleChange}
//                   />
//                   <Field
//                     label="Street Name"
//                     placeholder="Enter Street Name"
//                     name="street"
//                     value={formData.street}
//                     onChange={handleChange}
//                   />
//                   <Field
//                     label="Postal Code"
//                     placeholder="Enter Postal Code"
//                     name="postalCode"
//                     value={formData.postalCode}
//                     onChange={handleChange}
//                   />
//                   <Field
//                     label="City"
//                     placeholder="Enter your City Name"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                   />
//                   <Selectfield
//                     label="District"
//                     type="select"
//                     options={["District 1", "District 2", "District 3"]}
//                     name="district"
//                     value={formData.district}
//                     onChange={handleChange}
//                   />
//                   <Selectfield
//                     label="State"
//                     type="select"
//                     options={["State 1", "State 2", "State 3"]}
//                     name="state"
//                     value={formData.state}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               {/* Buttons */}
//               <div className="flex flex-col md:flex-row justify-end gap-4 mt-4">
//                 <button
//                   onClick={handleReset}
//                   className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 transition"
//                 >
//                   Reset
//                 </button>
//                 <button
//                   onClick={handleSubmit}
//                   className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex-grow bg-gray-100" />
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Register;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Field from "../components/Inputfield";
import Selectfield from "../components/Selectfield";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { registerUser } from "../Features/authSlics";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNo: "",
    gender: "",
    userType:"",
    address: {
      street: "",
      city: "",
      district: "",
      state: "",
      postalCode: "",
    },
  });

  const [errors, setErrors] = useState({});

  // For normal fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData) {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // For address fields (nested)
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      address: { ...prev.address, [name]: value },
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = (data) => {
    let newErrors = {};
    if (!data.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!data.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!data.email.trim()) newErrors.email = "Email is required";
    if (!data.password.trim()) newErrors.password = "Password is required";
    else if (data.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (!data.mobileNo.trim()) newErrors.mobileNo = "Mobile Number is required";
    if (!data.gender) newErrors.gender = "Gender is required";
    // if (!data.userType) newErrors.userType = "user type is required";
    const addr = data.address;
    if (!addr.street.trim()) newErrors.street = "Street is required";
    if (!addr.city.trim()) newErrors.city = "City is required";
    if (!addr.district.trim()) newErrors.district = "District is required";
    if (!addr.state.trim()) newErrors.state = "State is required";
    if (!addr.postalCode.trim()) newErrors.postalCode = "Postal Code is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const payload = { ...formData }; 
    dispatch(registerUser(payload));
  };

  useEffect(() => {
    if (user) {
      alert("Profile saved successfully!");
      navigate("/SignIn");
    }
  }, [user, navigate]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col px-4 md:px-0">
        <div className="pt-7 flex justify-center md:justify-start md:pl-36">
          
        </div>

        <div className="flex justify-center items-center pt-7 mb-16">
          <div className="w-full max-w-4xl bg-white border-2 border-gray-300 p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl flex  font-semibold text-blue-700 text-left mb-6">
            Sign Up
          </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Field
                    label="First Name"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>

                <div>
                  <Field
                    label="Last Name"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>

                <div>
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div>
                  <Field
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>

                <div>
                  <Field
                    label="Mobile Number"
                    name="mobileNo"
                    placeholder="Enter your mobile number"
                    value={formData.mobileNo}
                    onChange={handleChange}
                  />
                  {errors.mobileNo && <p className="text-red-500 text-sm">{errors.mobileNo}</p>}
                </div>

                <Selectfield
                  label="Gender"
                  name="gender"
                  options={["male", "female", "other"]}
                  value={formData.gender}
                  onChange={handleChange}
                />
                {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}

                <Selectfield
                  label="User Type"
                    name="userType"
                options={["tenant", "owner"]}
                value={formData.userType}
                onChange={handleChange}
                  />

                {errors.userType && <p className="text-red-500 text-sm">{errors.userType}</p>}

                {/* Address Fields */}
                <Field
                  label="Street"
                  name="street"
                  placeholder="Enter your street"
                  value={formData.address.street}
                  onChange={handleAddressChange}
                />
                {errors.street && <p className="text-red-500 text-sm">{errors.street}</p>}

                <Field
                  label="City"
                  name="city"
                  placeholder="Enter your city"
                  value={formData.address.city}
                  onChange={handleAddressChange}
                />
                {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}

                <Field
                  label="District"
                  name="district"
                  placeholder="Enter your district"
                  value={formData.address.district}
                  onChange={handleAddressChange}
                />
                {errors.district && <p className="text-red-500 text-sm">{errors.district}</p>}

                <Field
                  label="State"
                  name="state"
                  placeholder="Enter your state"
                  value={formData.address.state}
                  onChange={handleAddressChange}
                />
                {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}

                <Field
                  label="Postal Code"
                  name="postalCode"
                  placeholder="Enter your postal code"
                  value={formData.address.postalCode}
                  onChange={handleAddressChange}
                />
                {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode}</p>}
              </div>

              <div className="flex justify-center mt-6 gap-4">
                {/* <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      password: "",
                      mobileNo: "",
                      gender: "",
                      userType:"",
                      address: {
                        street: "",
                        city: "",
                        district: "",
                        state: "",
                        postalCode: "",
                      },
                    })
                  }
                  className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 transition"
                >
                  Reset
                </button> */}
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-900 text-white px-28 py-2 rounded-md hover:bg-blue-900 transition flex justify-center"
                >
                  {loading ? "Submitting..." : "Sign Up"}
                </button>
              </div>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
          </div>
        </div>

        <div className="flex-grow bg-gray-100" />
      </div>
      <Footer />
    </>
  );
};

export default Register;
