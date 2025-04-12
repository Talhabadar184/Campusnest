import React, { useState } from "react";
import InputField from "../components/Inputfield";
import logo from "../assets/Signin/logo.png";
import { useNavigate } from "react-router-dom";

const SignIn1 = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      console.log("Password successfully reset");
    } else {
      console.log("Passwords do not match");
    }
    navigate("/Home");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white px-4">
      {/* Logo */}
      <img src={logo} alt="CampusNest Logo" className="w-24 sm:w-28 mb-4" />

      {/* Form Container */}
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md border-2 border-gray-500">
        
      <h2 className="text-blue-800 text-center text-base sm:text-lg md:text-xl font-semibold mb-4 break-words w-full max-w-xs sm:max-w-sm md:max-w-md">
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

<button
  type="submit"
  className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition-all duration-300 text-sm sm:text-base"
>
  SUBMIT
</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn1;
