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
    if (!data.userId.trim()) newErrors.userId = "userId  is required";
    if (!data.password.trim()) newErrors.password = "password  is required";

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
      <img src={logo} alt="CampusNest Logo" className="w-24 sm:w-28 mb-4" />

      {/* Sign In Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md sm:max-w-lg border-2 border-gray-500 flex flex-col">
        <h2 className="text-blue-800 text-lg sm:text-xl font-semibold mb-6 text-center">SIGN IN</h2>

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
          
          <div className="w-full flex flex-col justify-center gap-4">
            <div>
            <InputField
              label="User ID"
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              placeholder="Enter your User ID"
            />
            {errors.userId && <p className="text-red-500 text-sm">{errors.userId}</p>}
            </div>
            
            
            <div>
            <InputField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            


            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full text-white bg-blue-900 px-4 py-2 rounded-md hover:cursor-pointer hover:text-[18px]"
            >
              SIGN IN
            </button>
          </div>
        </form>

        {/* Forgot Password & Signup Links */}
        <div className="text-center mt-4">
          <Link to="/ForgotPassword" className="text-blue-600 text-sm hover:underline">
            Forgot Password?
          </Link>
        </div>

        <p className="text-gray-700 text-sm mt-2 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 text-sm hover:underline">
            Sign up today!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
