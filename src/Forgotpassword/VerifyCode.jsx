import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import InputField from "../components/Inputfield"; // Importing InputField Component
import logo from "../assets/Signin/logo.png"; // Importing logo

const VerifyCode = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entered Code:", code);

    // Navigate to ResetPassword page after submission
    navigate("/ResetPassword");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      {/* Logo */}
      <img src={logo} alt="CampusNest Logo" className="w-28 mb-4" />

      {/* Forgot Password Form */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-[37vw] border-2 border-gray-500 flex flex-col">
        <h2 className="text-blue-800 text-xl font-semibold mb-2">FORGOT PASSWORD</h2>
        <p className="text-gray-700 text-sm text-center mb-4">
          A 6-digit verification code has been sent to your email address.
          Please check your inbox and enter the code below.
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
          {/* Input Field */}
          <div className="w-[22vw] flex flex-col gap-4">
            <InputField
              label="Code"
              type="text"
              name="code"
              value={code}
              onChange={handleChange}
              placeholder="Enter your Code"
            />
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-[22vw] text-white bg-blue-900 px-4 py-2 rounded-md hover:cursor-pointer hover:text-[18px]"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyCode;
