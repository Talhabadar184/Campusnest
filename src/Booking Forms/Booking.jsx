import React, { useState } from "react";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import crossIcon from "../assets/Listing/cross.png";

function Booking({ isOpen, onClose }) {
  const [isPaymentStep, setIsPaymentStep] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    roomType: "",
    moveInDate: "",
    lengthOfStay: "",
    occupants: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is mandatory";
    if (!formData.email) newErrors.email = "Email is mandatory";
    if (!formData.mobileNo) newErrors.mobileNo = "Mobile No. is mandatory";
    if (!formData.roomType) newErrors.roomType = "Please select a Room Type";
    if (!formData.lengthOfStay) newErrors.lengthOfStay = "Please select Length of Stay";
    if (!formData.occupants) newErrors.occupants = "Please select Number of Occupants";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveAndNext = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setIsPaymentStep(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl shadow-lg relative">
        <img
          src={crossIcon}
          alt="Close"
          className="absolute top-4 right-4 w-3 h-3 cursor-pointer"
          onClick={onClose}
        />

        {isSubmitted && (
          <div className="bg-green-100 text-green-700 p-2 rounded flex items-center mb-4">
            ✅ Your inquiry has been successfully submitted
          </div>
        )}

        {isPaymentStep ? (
          <>
            <h2 className="text-xl font-semibold mb-4">Payment</h2>
            <p className="text-gray-600 mb-4">Complete your payment below.</p>
            <h3 className="text-2xl font-bold text-center">Rs. 25,000</h3>

            <label className="block mt-4">Pay Using</label>
            <SelectField
              name="paymentMethod"
              options={["-- Please Select --", "Credit Card", "Bank Transfer", "JazzCash", "Easypaisa"]}
              onChange={handleChange}
            />

            <label className="block mt-4">Add Your Number</label>
            <InputField type="text" placeholder="Enter your mobile number" />

            <div className="flex flex-col sm:flex-row gap-3 justify-end mt-4">
              <button type="button" onClick={() => setIsPaymentStep(false)} className="bg-gray-300 px-4 py-2 rounded">
                Back
              </button>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Pay Rs. 25,000
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">Booking Form</h2>
            <p className="text-gray-600 mb-4">Please fill out the form below. All fields are mandatory!</p>

            <form className="space-y-3" onSubmit={handleSaveAndNext}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label>First Name</label>
                  <InputField
                    type="text"
                    name="firstName"
                    placeholder="Enter your First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>
                <div>
                  <label>Last Name</label>
                  <InputField type="text" name="lastName" placeholder="Enter your Last Name" onChange={handleChange} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField type="email" name="email" placeholder="Enter your Email" value={formData.email} onChange={handleChange} className={errors.email ? "border-red-500" : ""} />
                <InputField type="text" name="mobileNo" placeholder="Enter your Mobile No." value={formData.mobileNo} onChange={handleChange} className={errors.mobileNo ? "border-red-500" : ""} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SelectField name="roomType" options={["-- Please Select Room Type --", "Single", "Shared"]} onChange={handleChange} />
                <InputField type="date" name="moveInDate" onChange={handleChange} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SelectField name="lengthOfStay" options={["-- Please Select Length of Stay --", "1 Month", "6 Months", "1 Year"]} onChange={handleChange} />
                <SelectField name="occupants" options={["-- Please Select Number of Occupants --", "1", "2", "3"]} onChange={handleChange} />
              </div>

              <textarea placeholder="Type your message (optional)" className="border p-2 rounded w-full" name="message" onChange={handleChange}></textarea>

              <div className="flex flex-col sm:flex-row gap-3 justify-end mt-4">
                <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Reset</button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save & Next</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Booking;
