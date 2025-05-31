// import React, { useState } from "react";
// import InputField from "../components/Inputfield";
// import logo from "../assets/Signin/logo.png";
// import { useNavigate } from "react-router-dom";

// const SignIn1 = () => {
//   const [formData, setFormData] = useState({
//     password: "",
//     confirmPassword: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password === formData.confirmPassword) {
//       console.log("Password successfully reset");
//     } else {
//       console.log("Passwords do not match");
//     }
//     navigate("/Home");
//   };

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-white px-4">
//       {/* Logo */}
//       <img src={logo} alt="CampusNest Logo" className="w-24 sm:w-28 mb-4" />

//       {/* Form Container */}
//       <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md border-2 border-gray-500">
        
//       <h2 className="text-blue-800 text-center text-base sm:text-lg md:text-xl font-semibold mb-4 break-words w-full max-w-xs sm:max-w-sm md:max-w-md">
//   FORGOT PASSWORD
// </h2>


//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <InputField
//             label="Password"
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Enter your Password"
//           />

//           <InputField
//             label="Re-Type Password"
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             placeholder="Re-enter your Password"
//           />

// <button
//   type="submit"
//   className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition-all duration-300 text-sm sm:text-base"
// >
//   SUBMIT
// </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignIn1;

import React, { useState } from "react";
import InputField from "../components/Inputfield";
import logo from "../assets/Signin/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../Features/authSlics"; // Adjust path if needed

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error: apiError } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { password, confirmPassword } = formData;

    if (!password || !confirmPassword) {
      setError("Please fill in both fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const email = JSON.parse(localStorage.getItem("forgotpass_email"));
    const code = JSON.parse(localStorage.getItem("reset_code"));

    try {
      const resultAction = await dispatch(resetPassword({ email, code, password }));
      if (resetPassword.fulfilled.match(resultAction)) {
        localStorage.removeItem("forgotpass_email");
        localStorage.removeItem("reset_code");
        navigate("/Signin"); // or Home if preferred
      }
    } catch {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white px-4">
      {/* Logo */}
      <img src={logo} alt="CampusNest Logo" className="w-24 sm:w-28 mb-4" />

      {/* Form Container */}
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md border-2 border-gray-500">
        <h2 className="text-blue-800 text-center text-base sm:text-lg md:text-xl font-semibold mb-4 break-words">
          FORGOT PASSWORD
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your Password"
          />

          <InputField
            label="Re-Type Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your Password"
          />

          {(error || apiError) && (
            <p className="text-red-600 text-sm">{error || apiError}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300 text-sm sm:text-base"
          >
            {loading ? "Submitting..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
