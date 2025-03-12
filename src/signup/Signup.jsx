import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Inputfield from "../components/Inputfield";
import Selectfield from "../components/Selectfield";
import signuplogo from "../assets/Signup/signuplogo.png";
import Footer from "../components/Footer"; // Import the footer

function Signup() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender: "",
    tenantOwner: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
  
    localStorage.setItem("userName", fullName);
    localStorage.setItem("signupData", JSON.stringify(formData));
  
    navigate("/signup/register");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content (Signup Form) */}
      <main className="flex-grow flex justify-center items-center bg-white">
        <div className="relative p-8 rounded-lg shadow-xl">
          <div className="flex justify-center mb-4">
            <img src={signuplogo} alt="Signup Logo" className="h-16" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[100%] relative z-10 border border-gray-300">
            <h2 className="text-xl font-semibold text-blue-700 mb-14 ">
              SIGN UP
            </h2>

            {/* Input Fields */}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Inputfield
                  label="First Name"
                  placeholder="Enter your first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Inputfield
                  label="Last Name"
                  placeholder="Enter your last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <Inputfield
                  label="Email"
                  placeholder="Enter your email address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Inputfield
                  label="Mobile No."
                  placeholder="Enter your mobile number"
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                <Selectfield
                  label="Gender"
                  options={["Male", "Female", "Other"]}
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                />
                <Selectfield
                  label="Tenant/Owner"
                  options={["Tenant", "Owner"]}
                  name="tenantOwner"
                  value={formData.tenantOwner}
                  onChange={handleChange}
                />
              </div>

              <div className="pt-6">
                {/* Button */}
                <Button className="hover:text-[18px]" text={"SIGN UP"} />
              </div>
            </form>
          </div>
        </div>
      </main>

      
    </div>
  );
}

export default Signup;
