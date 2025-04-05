import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import crossIcon from "../assets/Listing/cross.png";

function Booking({ isOpen, onClose, hostelPrice =0 }) {

  const [isPaymentStep, setIsPaymentStep] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false); // ✅ Move this to the top
  const [paymentErrors, setPaymentErrors] = useState({});
  const [isPaymentValid, setIsPaymentValid] = useState(false); // To track payment validation
  const [hPrice, setHPrice] = useState(0);


  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("bookingFormData");
    return savedData
      ? JSON.parse(savedData)
      : {
          firstName: "",
          lastName: "",
          email: "",
          mobileNo: "",
          roomType: "",
          moveInDate: "",
          lengthOfStay: "",
          occupants: "",
          message: "",
        };
        
  });

  useEffect(() => {
    console.log("Payment step changed:", isPaymentStep);
  }, [isPaymentStep]);


  const validateForm = (data) => {
    let newErrors = {};
    if (!data.firstName.trim()) newErrors.firstName = "First Name is mandatory";
    if (!data.email.trim()) newErrors.email = "Email is mandatory";
    if (!data.mobileNo.trim()) newErrors.mobileNo = "Mobile No. is mandatory";
    if (!data.roomType) newErrors.roomType = "Please select a Room Type";

    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
    setIsFormValid(isValid);
    return isValid;
  };
  console.log(hostelPrice);

  const handleSaveAndNext = (e) => {
    e.preventDefault();
    if (!validateForm(formData)) {
      console.log("Form validation failed!", errors);
      return;
    }

    localStorage.setItem("bookingFormData", JSON.stringify(formData));
    console.log("Form submitted successfully!", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setIsPaymentStep(true);
    calculatePrice();
  };


  useEffect(() => {
    if (formData.lengthOfStay && formData.occupants) {
      calculatePrice();
    }
  }, [formData.lengthOfStay, formData.occupants, hostelPrice]);
  
  

  const calculatePrice = () => {
    const stayMapping = {
      "1 Month": 30,
      "6 Months": 180,
      "1 Year": 365,
    };
  
    const basePricePerDay = Number(hostelPrice) || 0;
    const days = stayMapping[formData.lengthOfStay] || 0;
    const people = Number(formData.occupants) || 0;
  
    if (days === 0 || people === 0 || basePricePerDay === 0) {
      setHPrice(0); // Ensure it never becomes NaN
      return;
    }
  
    const totalPrice = days * people * basePricePerDay;
    setHPrice(totalPrice);
    console.log("Calculated Price:", totalPrice);
  };
  
  


  const validatePayment = (data) => {
    let newPaymentErrors = {};
    if (!data.paymentMethod || data.paymentMethod === "-- Please Select --") {
      newPaymentErrors.paymentMethod = "Payment method is required";
    }
    if (!data.mobileNo.trim()) {
      newPaymentErrors.mobileNo = "Mobile number is required";
    }
  
    setPaymentErrors(newPaymentErrors);
    const isValid = Object.keys(newPaymentErrors).length === 0;
    setIsPaymentValid(isValid);
    return isValid;
  };
  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setPaymentErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  
    validatePayment({ ...formData, [name]: value });
  };
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!validatePayment(formData)) {
      console.log("Payment validation failed!", paymentErrors);
      return;
    }
  
    console.log("Payment successfully processed!");
  };
      

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

    validateForm({ ...formData, [name]: value });
  };

  
  if (!isOpen) return null; 

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
          <div className="h-0.5 w-full bg-black"></div>
          <h3 className="text-2xl font-bold text-center">
  Rs. {isNaN(hPrice) || hPrice === 0 ? "N/A" : hPrice}
</h3>

          <label className="block mt-4">Pay Using</label>
          <SelectField
            name="paymentMethod"
            value={formData.paymentMethod}
            options={["-- Please Select --", "Credit Card", "Bank Transfer", "JazzCash", "Easypaisa"]}
            onChange={handlePaymentChange}
          />
          {paymentErrors.paymentMethod && (
            <p className="text-red-500 text-sm">{paymentErrors.paymentMethod}</p>
          )}
    
          <label className="block mt-4 ml-5">Add Your Number</label>
          <div className="flex justify-between m-6">
            <div className="flex flex-col align-baseline">
              <InputField
                type="text"
                name="mobileNo"
                placeholder="Enter your Mobile No."
                value={formData.mobileNo}
                onChange={handlePaymentChange}
                className={paymentErrors.mobileNo ? "border-red-500" : ""}
              />
              {paymentErrors.mobileNo && (
                <p className="text-red-500 text-sm">{paymentErrors.mobileNo}</p>
              )}
            </div>
    
            <div className="flex flex-col sm:flex-row gap-3 justify-end ">
              <button
                type="submit"
                onClick={handlePaymentSubmit}
                className="bg-blue-500 text-white px-10 h-12 rounded hover:cursor-pointer"
                disabled={!isPaymentValid} // Disable button until valid
              >
                Pay Rs. {hPrice}
              </button>
            </div>
          </div>
        </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">Booking Form</h2>
            <div className="h-0.5 w-full bg-black"></div>
            <p className="text-gray-600 mb-4">
              Please fill out the form below. All fields are mandatory!
            </p>

            <form
              className="space-y-3 max-h-[70vh] overflow-y-auto p-2"
              onSubmit={handleSaveAndNext}
            >
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
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label>Last Name</label>
                  <InputField
                    type="text"
                    name="lastName"
                    placeholder="Enter your Last Name"
                    onChange={handleChange}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label>Email</label>
                <label>Mobile no.</label>
                <InputField
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-red-500" : ""}
                />

                <InputField
                  type="text"
                  name="mobileNo"
                  placeholder="Enter your Mobile No."
                  value={formData.mobileNo}
                  onChange={handleChange}
                  className={errors.mobileNo ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}

                {errors.mobileNo && (
                  <p className="text-red-500 text-sm">{errors.mobileNo}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label>Room type</label>
                <label>Preferred Move-in Date</label>
                <SelectField
                  name="roomType"
                  value={formData.roomType}
                  options={[
                    "-- Please Select   value={formData.roomType} Type --",
                    "Single",
                    "Shared",
                  ]}
                  onChange={handleChange}
                />
                <InputField
                  type="date"
                  name="moveInDate"
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label>Length of stay</label>
                <label>Number of Occupants</label>
                <SelectField
                  name="lengthOfStay"
                  value={formData.lengthOfStay}
                  options={[
                    "-- Please Select Length of Stay --",
                    "1 Month",
                    "6 Months",
                    "1 Year",
                  ]}
                  onChange={handleChange}
                />
                <SelectField
                  name="occupants"
                  value={formData.occupants}
                  options={[
                    "-- Please Select Number of Occupants --",
                    "1",
                    "2",
                    "3",
                  ]}
                  onChange={handleChange}
                />
              </div>

              <textarea
                placeholder="Type your message (optional)"
                className="border p-2 rounded w-full"
                name="message"
                onChange={handleChange}
              ></textarea>

              <div className="flex flex-col sm:flex-row gap-3 justify-end mt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer"
                >
                  Save & Next
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Booking;
