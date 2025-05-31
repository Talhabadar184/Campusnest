// import React, { useState } from "react";
// import InputField from "../components/Inputfield";
// import logo from "../assets/Signin/logo.png";
// import { useNavigate } from "react-router-dom";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validateForm = (email) => {
//     let newErrors = {};
//     if (!email.trim()) newErrors.email = "Email is required";
//     return newErrors;
//   };

//   const handleChange = (e) => {
//     setEmail(e.target.value);
//     setErrors({});
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationErrors = validateForm(email);
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     localStorage.setItem("forgotpass_email", JSON.stringify(email));
//     setErrors({});
//     navigate("/VerifyCode");
//   };

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-white px-4">
//       <img src={logo} alt="CampusNest Logo" className="w-20 sm:w-24 md:w-28 mb-4" />

//       <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md border border-gray-400">
//         <div className="flex justify-center items-center mb-4">
//           <h2 className="text-blue-800 text-lg sm:text-xl md:text-2xl font-semibold text-center">
//             FORGOT PASSWORD
//           </h2>
//         </div>

//         <p className="text-gray-600 text-sm text-center mb-6">
//           Please enter your Email ID below
//         </p>

//         <form onSubmit={handleSubmit} className="w-full">
//           <div className="flex flex-col gap-4">
//             <div>
//               <InputField
//                 label="Email ID"
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={handleChange}
//                 placeholder="Enter your Email ID"
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300 text-sm sm:text-base"
//             >
//               SUBMIT
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../Features/authSlics"; // adjust path if needed
import InputField from "../components/Inputfield";
import logo from "../assets/Signin/logo.png";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, resetStatus } = useSelector((state) => state.auth);

  const validateForm = (email) => {
    let newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(email);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const resultAction = await dispatch(forgotPassword(email));
      if (forgotPassword.fulfilled.match(resultAction)) {
        localStorage.setItem("forgotpass_email", JSON.stringify(email));
        navigate("/VerifyCode");
      }
    } catch (err) {
      console.error("Forgot password error:", err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white px-4">
      <img src={logo} alt="CampusNest Logo" className="w-20 sm:w-24 md:w-28 mb-4" />

      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md border border-gray-400">
        <div className="flex justify-center items-center mb-4">
          <h2 className="text-blue-800 text-lg sm:text-xl md:text-2xl font-semibold text-center">
            FORGOT PASSWORD
          </h2>
        </div>

        <p className="text-gray-600 text-sm text-center mb-6">
          Please enter your Email ID below
        </p>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col gap-4">
            <div>
              <InputField
                label="Email ID"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your Email ID"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
              {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300 text-sm sm:text-base"
            >
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
