import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/Inputfield";
import logo from "../assets/Signin/logo.png";

const VerifyCode = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCode(e.target.value);
    setError(""); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!code) {
      setError("Verification code is required.");
      return;
    }

    if (!/^\d{6}$/.test(code)) {
      setError("Please enter a valid 6-digit code.");
      return;
    }

    console.log("Entered Code:", code);
    navigate("/ResetPassword");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white px-4">
      {/* Logo */}
      <img src={logo} alt="CampusNest Logo" className="w-20 sm:w-24 md:w-28 mb-4" />

      {/* Forgot Password Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full sm:w-[80%] md:w-[60%] lg:w-[37vw] border-2 border-gray-500 flex flex-col">
        <h2 className="text-blue-800 text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-center">
          FORGOT PASSWORD
        </h2>
        <p className="text-gray-700 text-sm sm:text-base text-center mb-4">
          A 6-digit verification code has been sent to your email address.
          Please check your inbox and enter the code below.
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
          <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[22vw] flex flex-col gap-4">
            <InputField
              label="Code"
              type="text"
              name="code"
              value={code}
              onChange={handleChange}
              placeholder="Enter your Code"
            />

            {/* Show error if any */}
            {error && <p className="text-red-600 text-sm">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full text-white bg-blue-900 px-4 py-2 rounded-md hover:cursor-pointer transition-all hover:text-[17px] sm:hover:text-[18px]"
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
