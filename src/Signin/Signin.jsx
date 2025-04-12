import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import InputField from "../components/Inputfield"; 
import logo from "../assets/Signin/logo.png"; 

const SignIn = () => {
  const [formData, setFormData] = useState({ userId: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

  const validateForm = (data) => {
    let newErrors = {};
    if (!data.userId.trim()) newErrors.userId = "User ID is required";
    if (!data.password.trim()) newErrors.password = "Password is required";
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
    localStorage.setItem("Signindata", JSON.stringify(formData));
    setErrors({});
    navigate("/home"); 
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white px-4 sm:px-6">
      
      {/* Logo */}
      <img src={logo} alt="CampusNest Logo" className="w-20 sm:w-24 md:w-28 mb-4" />

      {/* Sign In Form Container */}
      <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md border border-gray-300 flex flex-col">
        <h2 className="text-blue-800 text-xl sm:text-2xl font-semibold mb-6 text-center">SIGN IN</h2>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          
          {/* User ID */}
          <div>
            <InputField
              label="User ID"
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              placeholder="Enter your User ID"
            />
            {errors.userId && <p className="text-red-500 text-xs mt-1">{errors.userId}</p>}
          </div>

          {/* Password */}
          <div>
            <InputField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full text-white bg-blue-900 px-4 py-2 rounded-md hover:bg-blue-800 transition-all text-sm sm:text-base"
          >
            SIGN IN
          </button>
        </form>

        {/* Links */}
        <div className="text-center mt-4 space-y-1">
          <Link to="/ForgotPassword" className="text-blue-600 text-sm hover:underline block">
            Forgot Password?
          </Link>
          <p className="text-gray-700 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up today!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
