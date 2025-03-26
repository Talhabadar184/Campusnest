import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Inputfield from "../components/Inputfield";
import Selectfield from "../components/Selectfield";
import signuplogo from "../assets/Signup/signuplogo.png";

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
    navigate("/register");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main Content (Signup Form) */}
      <main className="flex-grow flex justify-center items-center p-4 sm:p-8">
        <div className="w-full max-w-2xl bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-300">
          <div className="flex justify-center mb-6">
            <img src={signuplogo} alt="Signup Logo" className="h-14 sm:h-16" />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-6 text-center">
            SIGN UP
          </h2>

          {/* Input Fields */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

            <div className="pt-6 flex justify-center">
              {/* Button */}
              <Button className="w-full sm:w-auto px-6 py-2 text-lg hover:text-[18px]" text={"SIGN UP"} />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Signup;