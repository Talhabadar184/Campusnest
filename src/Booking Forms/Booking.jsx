// import React, { useState, useEffect } from "react";
// import InputField from "../components/Inputfield";
// import SelectField from "../components/Selectfield";
// import crossIcon from "../assets/Listing/cross.png";

// function Booking({ isOpen, onClose, hostelPrice = 0 }) {
//   const [isPaymentStep, setIsPaymentStep] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [isFormValid, setIsFormValid] = useState(false);
//   const [paymentErrors, setPaymentErrors] = useState({});
//   const [isPaymentValid, setIsPaymentValid] = useState(false);
//   const [hPrice, setHPrice] = useState(0);

//   const [formData, setFormData] = useState(() => {
//     const savedData = localStorage.getItem("bookingFormData");
//     return savedData
//       ? JSON.parse(savedData)
//       : {
//           firstName: "",
//           lastName: "",
//           email: "",
//           mobileNo: "",
//           roomType: "",
//           moveInDate: "",
//           lengthOfStay: "",
//           occupants: "",
//           message: "",
//         };
//   });

//   useEffect(() => {
//     console.log("Payment step changed:", isPaymentStep);
//     if (isPaymentStep) {
//       calculatePrice();
//     }
//   }, [isPaymentStep]);

//   const validateForm = (data) => {
//     let newErrors = {};
//     if (!data.firstName.trim()) newErrors.firstName = "First Name is mandatory";
//     if (!data.email.trim()) newErrors.email = "Email is mandatory";
//     if (!data.mobileNo.trim()) newErrors.mobileNo = "Mobile No. is mandatory";
//     if (!data.roomType) newErrors.roomType = "Please select a Room Type";

//     setErrors(newErrors);
//     const isValid = Object.keys(newErrors).length === 0;
//     setIsFormValid(isValid);
//     return isValid;
//   };

//   const handleSaveAndNext = (e) => {
//     e.preventDefault();
//     if (!validateForm(formData)) {
//       console.log("Form validation failed!", errors);
//       return;
//     }

//     localStorage.setItem("bookingFormData", JSON.stringify(formData));
//     console.log("Form submitted successfully!", formData);
//     setIsSubmitted(true);
//     setTimeout(() => setIsSubmitted(false), 5000);

//     setIsPaymentStep(true);
//   };

//   const calculatePrice = () => {
//     const stayMapping = {
//       "1 Month": 30,
//       "6 Months": 180,
//       "1 Year": 365,
//     };

//     const basePricePerDay = Number(hostelPrice) || 0;
//     const days = stayMapping[formData.lengthOfStay] || 0;
//     const people = Number(formData.occupants) || 0;

//     if (days === 0 || people === 0 || basePricePerDay === 0) {
//       setHPrice(0);
//       return;
//     }

//     const totalPrice = days * people * basePricePerDay;
//     setHPrice(totalPrice);
//     console.log("Calculated Price:", totalPrice);
//   };

//   const validatePayment = (data) => {
//     let newPaymentErrors = {};
//     if (!data.paymentMethod || data.paymentMethod === "-- Please Select --") {
//       newPaymentErrors.paymentMethod = "Payment method is required";
//     }
//     if (!data.mobileNo.trim()) {
//       newPaymentErrors.mobileNo = "Mobile number is required";
//     }

//     setPaymentErrors(newPaymentErrors);
//     const isValid = Object.keys(newPaymentErrors).length === 0;
//     setIsPaymentValid(isValid);
//     return isValid;
//   };

//   const handlePaymentChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setPaymentErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

//     validatePayment({ ...formData, [name]: value });
//   };

//   const handlePaymentSubmit = (e) => {
//     e.preventDefault();
//     if (!validatePayment(formData)) {
//       console.log("Payment validation failed!", paymentErrors);
//       return;
//     }

//     console.log("Payment successfully processed!");
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

//     validateForm({ ...formData, [name]: value });
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex justify-center items-center z-50 px-4 sm:px-6 md:px-8 lg:px-10">
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="bg-white p-6 rounded-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl shadow-lg relative">
//         <img
//           src={crossIcon}
//           alt="Close"
//           className="absolute top-4 right-4 w-3 h-3 cursor-pointer"
//           onClick={onClose}
//         />

//         {isSubmitted && (
//           <div className="bg-green-100 text-green-700 p-2 rounded flex items-center mb-4">
//             ✅ Your inquiry has been successfully submitted
//           </div>
//         )}

//         {isPaymentStep ? (
//           <>
//           <h2 className="text-xl font-semibold mb-4">Payment</h2>
//           <div className="h-0.5 w-full bg-black"></div>
//           <h3 className="text-2xl font-bold text-center mt-2">Rs. {hPrice}</h3>

//           <label className="block mt-4">Pay Using</label>
//           <SelectField
//             name="paymentMethod"
//             value={formData.paymentMethod}
//             options={[
//               "-- Please Select --",
//               "Credit Card",
//               "Bank Transfer",
//               "JazzCash",
//               "Easypaisa",
//             ]}
//             onChange={handlePaymentChange}
//           />
//           {paymentErrors.paymentMethod && (
//             <p className="text-red-500 text-sm">{paymentErrors.paymentMethod}</p>
//           )}

//           <label className="block mt-6">Add Your Number</label>

//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
//             <div className="flex-1">
//               <InputField
//                 type="text"
//                 name="mobileNo"
//                 placeholder="Enter your Mobile No."
//                 value={formData.mobileNo}
//                 onChange={handlePaymentChange}
//                 className={`w-full ${paymentErrors.mobileNo ? "border-red-500" : ""}`}
//               />
//               {paymentErrors.mobileNo && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {paymentErrors.mobileNo}
//                 </p>
//               )}
//             </div>

//             <button
//               type="submit"
//               onClick={handlePaymentSubmit}
//               className="bg-blue-500 text-white w-full sm:w-auto px-6 h-12 rounded hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
//               disabled={!isPaymentValid}
//             >
//               Pay Rs. {hPrice}
//             </button>
//           </div>
//         </>

//         ) : (
//           <>
//             <h2 className="text-xl font-semibold mb-4">Booking Form</h2>
//             <div className="h-0.5 w-full bg-black"></div>
//             <p className="text-gray-600 mb-4">
//               Please fill out the form below. All fields are mandatory!
//             </p>

//             <form
//               className="space-y-3 max-h-[70vh] overflow-y-auto p-2"
//               onSubmit={handleSaveAndNext}
//             >
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label>First Name</label>
//                   <InputField
//                     type="text"
//                     name="firstName"
//                     placeholder="Enter your First Name"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className={errors.firstName ? "border-red-500" : ""}
//                   />
//                   {errors.firstName && (
//                     <p className="text-red-500 text-sm">{errors.firstName}</p>
//                   )}
//                 </div>
//                 <div>
//                   <label>Last Name</label>
//                   <InputField
//                     type="text"
//                     name="lastName"
//                     placeholder="Enter your Last Name"
//                     onChange={handleChange}
//                     className={errors.lastName ? "border-red-500" : ""}
//                   />
//                   {errors.lastName && (
//                     <p className="text-red-500 text-sm">{errors.lastName}</p>
//                   )}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <label>Email</label>
//                 <label>Mobile no.</label>
//                 <InputField
//                   type="email"
//                   name="email"
//                   placeholder="Enter your Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={errors.email ? "border-red-500" : ""}
//                 />

//                 <InputField
//                   type="text"
//                   name="mobileNo"
//                   placeholder="Enter your Mobile No."
//                   value={formData.mobileNo}
//                   onChange={handleChange}
//                   className={errors.mobileNo ? "border-red-500" : ""}
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm">{errors.email}</p>
//                 )}

//                 {errors.mobileNo && (
//                   <p className="text-red-500 text-sm">{errors.mobileNo}</p>
//                 )}
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <label>Room type</label>
//                 <label>Preferred Move-in Date</label>
//                 <SelectField
//                   name="roomType"
//                   value={formData.roomType}
//                   options={[
//                     "-- Please Select   value={formData.roomType} Type --",
//                     "Single",
//                     "Shared",
//                   ]}
//                   onChange={handleChange}
//                 />
//                 <InputField
//                   type="date"
//                   name="moveInDate"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <label>Length of stay</label>
//                 <label>Number of Occupants</label>
//                 <SelectField
//                   name="lengthOfStay"
//                   value={formData.lengthOfStay}
//                   options={[
//                     "-- Please Select Length of Stay --",
//                     "1 Month",
//                     "6 Months",
//                     "1 Year",
//                   ]}
//                   onChange={handleChange}
//                 />
//                 <SelectField
//                   name="occupants"
//                   value={formData.occupants}
//                   options={[
//                     "-- Please Select Number of Occupants --",
//                     "1",
//                     "2",
//                     "3",
//                   ]}
//                   onChange={handleChange}
//                 />
//               </div>

//               <textarea
//                 placeholder="Type your message (optional)"
//                 className="border p-2 rounded w-full"
//                 name="message"
//                 onChange={handleChange}
//               ></textarea>

//               <div className="flex flex-col sm:flex-row gap-3 justify-end mt-4">
//                 <button
//                   type="button"
//                   onClick={onClose}
//                   className="bg-gray-300 px-4 py-2 rounded"
//                 >
//                   Reset
//                 </button>
//                 <button
//                   onClick={calculatePrice}
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer"
//                 >
//                   Save & Next
//                 </button>
//               </div>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Booking;
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createBooking,
  processPayment,
  clearBookingState,
} from "../Features/BookingSlice";
import InputField from "../components/Inputfield";
import crossIcon from "../assets/Listing/cross.png";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Booking({
  isOpen,
  onClose,
  hostelId: propHostelId,
  hostelPrice = 25000,
}) {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const selectedHostel = useSelector((state) => state.hostel.selectedHostel);
  const { bookingResult, loading, error } = useSelector(
    (state) => state.booking
  );
  const user = useSelector((state) => state.auth.user);

  const hostelId = selectedHostel?._id || propHostelId;

  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.mobileNo || "",
    moveInDate: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [cardError, setCardError] = useState(null);
  const [isPaymentStep, setIsPaymentStep] = useState(false);
  // const cardElement = elements.getElement(CardElement);
  // console.log("CardElement:", cardElement); // should not be null

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.mobileNo || "",
      }));
    }
  }, [user]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Required";
    if (!formData.email.trim()) newErrors.email = "Required";
    if (!formData.phone.trim()) newErrors.phone = "Required";
    if (!formData.moveInDate) newErrors.moveInDate = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCardChange = (e) => {
    setCardError(e.error ? e.error.message : null);
  };

  // const handleBookingSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!validateForm() || !hostelId) return;

  //   const payload = {
  //     hostelId,
  //     firstName: formData.firstName,
  //     lastName: formData.lastName,
  //     email: formData.email,
  //     phone: formData.phone,
  //     moveInDate: formData.moveInDate,
  //     message: formData.message,
  //   };

  //   const result = await dispatch(createBooking(payload));
  //   if (createBooking.fulfilled.match(result)) {
  //     setIsPaymentStep(true);
  //   }
  // };
  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    // Validate form and required values
    if (!validateForm()) return;
    if (!hostelId) {
      console.error("Hostel ID is missing");
      return;
    }

    // Build payload
    const payload = {
      hostelId,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      moveInDate: formData.moveInDate,
      message: formData.message,
    };

    try {
      const result = await dispatch(createBooking(payload));

      if (createBooking.fulfilled.match(result)) {
        console.log("Booking successful:", result.payload);
        setIsPaymentStep(true); // Proceed to next step
      } else {
        console.error("Booking failed:", result.payload);
        alert(result.payload?.message || "Booking failed. Please try again.");
      }
    } catch (err) {
      console.error("Unexpected error during booking:", err);
      alert("Something went wrong. Please try again later.");
    }
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    if (cardError) return alert("Fix card error before submitting");

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
      },
    });

    if (error) {
      setCardError(error.message);
      return;
    }

    const bookingId = bookingResult?.bookingId || bookingResult?._id;
    const paymentData = {
      bookingId,
      paymentMethodId: paymentMethod.id,
    };

    const result = await dispatch(processPayment(paymentData));
    if (processPayment.fulfilled.match(result)) {
      alert("Payment successful!");
      dispatch(clearBookingState());
      onClose();
    } else {
      alert("Payment failed. Please try again.");
    }
  };

  const handleClose = () => {
    dispatch(clearBookingState());
    onClose();
    setIsPaymentStep(false);
    setErrors({});
    setCardError(null);
  };
  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      moveInDate: "",
      message: "",
    });

    setErrors({});
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 px-4">
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="bg-white p-6 rounded-lg w-full max-w-3xl relative shadow-lg">
        <img
          src={crossIcon}
          alt="Close"
          className="absolute top-3 right-3 w-4 h-4 cursor-pointer"
          onClick={handleClose}
        />

        {!isPaymentStep ? (
          <>
            <h2 className="text-xl font-semibold text-center mb-1">
              Booking Form
            </h2>
            <div className="h-0.5 w-full bg-black mb-4"></div>
            <p className="text-sm text-center text-gray-500 mb-6">
              Please fill out the form below, all fields are mandatory!
            </p>

            <form
              onSubmit={handleBookingSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <InputField
                label="First Name *"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                error={errors.firstName}
              />
              <InputField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <InputField
                label="Email *"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
              />
              <InputField
                label="Mobile No."
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                error={errors.phone}
              />
              <InputField
                label="Preferred Move-In Date"
                name="moveInDate"
                type="date"
                value={formData.moveInDate}
                onChange={handleInputChange}
                error={errors.moveInDate}
                className="md:col-span-2"
              />
              <InputField
                label="Message (optional)"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                textarea
                className="md:col-span-2 h-40" // Increased height here
              />

              {/* Buttons */}
              <div className="md:col-span-2 flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 text-sm"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-900 text-sm"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save & Next"}
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4">Payment</h2>
            <form onSubmit={handlePaymentSubmit}>
              <div className="mb-4 p-3 border rounded">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#32325d",
                        "::placeholder": { color: "#aab7c4" },
                      },
                      invalid: { color: "#fa755a" },
                    },
                  }}
                  onChange={handleCardChange}
                />
                {cardError && <p className="text-red-600 mt-2">{cardError}</p>}
              </div>
              <p className="mb-4">
                Amount to pay:{" "}
                <strong>Rs. {hostelPrice.toLocaleString()}</strong>
              </p>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Processing..." : "Pay Now"}
              </button>
              {error && <p className="text-red-600 mt-2">{error}</p>}
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Booking;
