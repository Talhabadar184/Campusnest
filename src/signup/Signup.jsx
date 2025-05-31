// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Inputfield from "../components/Inputfield";
// import Selectfield from "../components/Selectfield";
// import signuplogo from "../assets/Signup/signuplogo.png";

// function Signup() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     gender: "",
//     tenantOwner: "",
//   });

//   const [errors, setErrors] = useState({});

//   const validateForm = (data) => {
//     let newErrors = {};
//     if (!data.firstName.trim()) newErrors.firstName = "First Name is required";
//     if (!data.lastName.trim()) newErrors.lastName = "Last Name is required";
//     if (!data.email.trim()) newErrors.email = "Email is required";
//     if (!data.mobile.trim()) newErrors.mobile = "Mobile Number is required";
//     if (!data.gender) newErrors.gender = "Gender is required";
//     if (!data.tenantOwner.trim()) newErrors.tenantOwner = "Tenant/Owner is required";

//     return newErrors;
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm(formData);

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     localStorage.setItem("Signupdata", JSON.stringify(formData));
//     alert("Profile saved successfully!");
//     navigate("/SignIn");
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100 px-4 sm:px-6">
//       <main className="flex-grow flex justify-center items-center py-6">
//         <div className="w-full max-w-md sm:max-w-2xl bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-300">
//           <div className="flex justify-center mb-6">
//             <img src={signuplogo} alt="Signup Logo" className="h-14 sm:h-16" />
//           </div>
//           <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-6 text-center">
//             SIGN UP
//           </h2>

//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <Inputfield
//                   label="First Name"
//                   placeholder="Enter your first name"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                 />
//                 {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
//               </div>

//               <div>
//                 <Inputfield
//                   label="Last Name"
//                   placeholder="Enter your last name"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                 />
//                 {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
//               </div>

//               <div>
//                 <Inputfield
//                   label="Email"
//                   placeholder="Enter your email address"
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//               </div>

//               <div>
//                 <Inputfield
//                   label="Mobile No."
//                   placeholder="Enter your mobile number"
//                   type="tel"
//                   name="mobile"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                 />
//                 {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
//               </div>

//               <div>
//                 <Selectfield
//                   label="Gender"
//                   options={["Male", "Female", "Other"]}
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                 />
//                 {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
//               </div>

//               <div>
//                 <Selectfield
//                   label="Tenant/Owner"
//                   options={["Tenant", "Owner"]}
//                   name="tenantOwner"
//                   value={formData.tenantOwner}
//                   onChange={handleChange}
//                 />
//                 {errors.tenantOwner && <p className="text-red-500 text-sm">{errors.tenantOwner}</p>}
//               </div>
//             </div>

//             <div className="pt-6 flex justify-center">
//               <button
//                 type="submit"
//                 className="w-full sm:w-1/2 bg-blue-900 text-white px-4 py-2 rounded-md text-base sm:text-lg hover:text-[18px] transition-all duration-200"
//               >
//                 SIGN UP
//               </button>
//             </div>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Signup;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Inputfield from "../components/Inputfield";
import Selectfield from "../components/Selectfield";
import signuplogo from "../assets/Signup/signuplogo.png";
import { registerUser } from "../Features/authSlics";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender: "",
    tenantOwner: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    let newErrors = {};
    if (!data.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!data.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!data.email.trim()) newErrors.email = "Email is required";
    if (!data.mobile.trim()) newErrors.mobile = "Mobile Number is required";
    if (!data.gender) newErrors.gender = "Gender is required";
    if (!data.tenantOwner.trim()) newErrors.tenantOwner = "Tenant/Owner is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    // Dispatch Redux thunk to register user
    dispatch(registerUser(formData));
  };

  // Navigate on successful registration
  useEffect(() => {
    if (user) {
      alert("Profile saved successfully!");
      navigate("/SignIn");
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 px-4 sm:px-6">
      <main className="flex-grow flex justify-center items-center py-6">
        <div className="w-full max-w-md sm:max-w-2xl bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-300">
          <div className="flex justify-center mb-6">
            <img src={signuplogo} alt="Signup Logo" className="h-14 sm:h-16" />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-6 text-center">
            SIGN UP
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Inputfield
                  label="First Name"
                  placeholder="Enter your first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>

              <div>
                <Inputfield
                  label="Last Name"
                  placeholder="Enter your last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>

              <div>
                <Inputfield
                  label="Email"
                  placeholder="Enter your email address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <Inputfield
                  label="Mobile No."
                  placeholder="Enter your mobile number"
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
              </div>

              <div>
                <Selectfield
                  label="Gender"
                  options={["Male", "Female", "Other"]}
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                />
                {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
              </div>

              <div>
                <Selectfield
                  label="Tenant/Owner"
                  options={["Tenant", "Owner"]}
                  name="tenantOwner"
                  value={formData.tenantOwner}
                  onChange={handleChange}
                />
                {errors.tenantOwner && <p className="text-red-500 text-sm">{errors.tenantOwner}</p>}
              </div>
            </div>

            {/* Show loading state */}
            {loading && <p className="text-blue-600 mt-4 text-center">Registering...</p>}
            {/* Show error message */}
            {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

            <div className="pt-6 flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-1/2 bg-blue-900 text-white px-4 py-2 rounded-md text-base sm:text-lg hover:text-[18px] transition-all duration-200"
                disabled={loading}
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Signup;
