import React, { useState } from "react";
import InputField from "../components/Inputfield"; // Importing InputField Component
import logo from "../assets/Signin/logo.png"; // Importing logo
import Button from "../components/Button";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email ID:", email);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      {/* Logo */}
      <img src={logo} alt="CampusNest Logo" className="w-28 mb-4" />

      {/* Forgot Password Form */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-[37vw] border-2 border-gray-500 flex flex-col ">
        <h2 className="text-blue-800 text-xl font-semibold mb-2">
          FORGOT PASSWORD
        </h2>
        <p className="text-gray-600 text-sm mb-4 flex flex-col items-center">
          Please enter your Email ID below
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full flex  flex-col items-center"
        >
          <div className="w-[22vw] flex flex-col gap-4">
            <InputField
              label="Email ID"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your Email ID"
            />
            <button className=" w-[19vw] text-white bg-blue-900 px-4 py-2 rounded-md hover:cursor-pointer hover:text-[18px] ">
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
