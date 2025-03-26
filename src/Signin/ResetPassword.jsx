import React, { useState } from "react";
import InputField from "../components/Inputfield"; 
import logo from "../assets/Signin/logo.png"; 
import Button from "../components/Button";
import { Navigate, useNavigate } from "react-router-dom";

const SignIn1 = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
const navigate=useNavigate();
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
    navigate("/Home")
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      {/* Logo */}
      <img src={logo} alt="CampusNest Logo" className="w-28 mb-4" />

      {/* Sign In Form */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-[37vw] border-2 border-gray-500 flex flex-col ">
        <h2 className="text-blue-800 text-xl font-semibold mb-2">
          FORGOT PASSWORD
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center"
        >
          <div className="w-[22vw] flex flex-col gap-4">
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

            <button className=" w-[19vw] text-white bg-blue-900 px-4 py-2 rounded-md hover:cursor-pointer hover:text-[18px] ">
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn1;
