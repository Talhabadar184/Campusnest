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
import { createBooking, processPayment, clearBookingState } from "../Features/BookingSlice";

import InputField from "../components/Inputfield";
import SelectField from "../components/Selectfield";
import crossIcon from "../assets/Listing/cross.png";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Booking({ isOpen, onClose, hostelId: propHostelId, hostelPrice = 25000 }) {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  // Get the selected hostel from the store (adjust this selector to your store shape)
  const selectedHostel = useSelector((state) => state.hostel.selectedHostel);

  // Booking state from store
  const { bookingResult, loading, error } = useSelector((state) => state.booking);
  const user = useSelector((state) => state.auth.user);

  // Use hostel ID from store or fallback to prop
  const hostelId = selectedHostel?._id || propHostelId;

  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.mobileNo || user?.phone || "", // normalize your phone number here
    moveInDate: "",
    message: "",
    paymentMethod: "default", // for validation, values: "card", "Bkash", "Nagad", "Rocket"
  });

  const [isPaymentStep, setIsPaymentStep] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [paymentErrors, setPaymentErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isPaymentValid, setIsPaymentValid] = useState(false);

  // Stripe card element error state
  const [cardError, setCardError] = useState(null);

  // Update user info if user changes in store
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      phone: user?.mobileNo || user?.phone || "",
    }));
  }, [user]);

  // Validate on changes
  useEffect(() => {
    validateForm(formData);
    validatePayment(formData);
  }, [formData]);

  const handleClose = () => {
    dispatch(clearBookingState());
    setIsPaymentStep(false);
    setErrors({});
    setPaymentErrors({});
    setIsFormValid(false);
    setIsPaymentValid(false);
    setCardError(null);
    onClose();
  };

  // Booking form validation
  const validateForm = (data) => {
    const newErrors = {};
    if (!data.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!data.email.trim()) newErrors.email = "Email is required";
    if (!data.phone.trim()) newErrors.phone = "Phone is required";
    if (!data.moveInDate) newErrors.moveInDate = "Move-In Date is required";
    setErrors(newErrors);
    const valid = Object.keys(newErrors).length === 0;
    setIsFormValid(valid);
    return valid;
  };

  // Payment validation
  const validatePayment = (data) => {
    const newErrors = {};
    if (!data.paymentMethod || data.paymentMethod === "default") {
      newErrors.paymentMethod = "Payment method is required";
    }
    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (data.paymentMethod === "card" && cardError) {
      newErrors.card = cardError;
    }
    setPaymentErrors(newErrors);
    const valid = Object.keys(newErrors).length === 0;
    setIsPaymentValid(valid);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setPaymentErrors((prev) => ({ ...prev, [name]: "" }));
    // Reset card errors if payment method changes
    if (name === "paymentMethod") {
      setCardError(null);
    }
  };

  // Handle Stripe CardElement changes to capture errors
  const handleCardElementChange = (event) => {
    setCardError(event.error ? event.error.message : null);
  };

  // Create booking and move to payment step
  const handleSaveAndNext = async (e) => {
    e.preventDefault();
    if (!validateForm(formData)) return;

    if (!hostelId) {
      alert("Hostel ID is missing.");
      return;
    }

    const payload = {
      hostelId, // from store or prop
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      moveInDate: formData.moveInDate,
      message: formData.message.trim(),
    };

    try {
      const resultAction = await dispatch(createBooking(payload));
      if (createBooking.fulfilled.match(resultAction)) {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        setIsPaymentStep(true);
      }
    } catch (err) {
      console.error("Booking dispatch error", err);
    }
  };

  // Payment submission
  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    if (!validatePayment(formData)) return;

    const bookingId = bookingResult?.bookingId || bookingResult?._id;
    if (!bookingId) {
      alert("No booking found to pay for.");
      return;
    }

    // Handle Stripe Card payment method
    if (formData.paymentMethod === "card") {
      if (!stripe || !elements) {
        alert("Stripe has not loaded yet.");
        return;
      }

      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        alert("Card element not found.");
        return;
      }

      // Create payment method with Stripe
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

      try {
        const resultAction = await dispatch(
          processPayment({
            bookingId,
            paymentMethodId: paymentMethod.id,
            amount: hostelPrice,
            phone: formData.phone.trim(),
          })
        );

        if (processPayment.fulfilled.match(resultAction)) {
          alert("Payment successful!");
          dispatch(clearBookingState());
          setIsPaymentStep(false);
          onClose();
        } else {
          alert("Payment failed. Please try again.");
        }
      } catch (err) {
        console.error("Payment dispatch error", err);
      }
    } else {
      // Handle other payment methods (Bkash, Nagad, Rocket)
      try {
        const resultAction = await dispatch(
          processPayment({
            bookingId,
            paymentMethodId: formData.paymentMethod, // your token here (for now, just the string)
            amount: hostelPrice,
            phone: formData.phone.trim(),
          })
        );

        if (processPayment.fulfilled.match(resultAction)) {
          alert("Payment successful!");
          dispatch(clearBookingState());
          setIsPaymentStep(false);
          onClose();
        } else {
          alert("Payment failed. Please try again.");
        }
      } catch (err) {
        console.error("Payment dispatch error", err);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl shadow-lg relative">
        <img
          src={crossIcon}
          alt="Close"
          className="absolute top-3 right-3 cursor-pointer w-6 h-6"
          onClick={handleClose}
        />

        {!isPaymentStep ? (
          <>
            <h2 className="text-2xl font-semibold mb-4">Booking</h2>
            <form onSubmit={handleSaveAndNext} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="First Name *"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                />
                <InputField
                  label="Email *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <InputField
                  label="Phone *"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />
                <InputField
                  label="Move In Date *"
                  name="moveInDate"
                  type="date"
                  value={formData.moveInDate}
                  onChange={handleChange}
                  error={errors.moveInDate}
                />
                <InputField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                disabled={!isFormValid || loading}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                {loading ? "Processing..." : "Save & Next"}
              </button>
              {error && <p className="text-red-600 mt-2">{error}</p>}
              {isSubmitted && !error && (
                <p className="text-green-600 mt-2">Booking saved successfully!</p>
              )}
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4">Payment</h2>
            <form onSubmit={handlePaymentSubmit} noValidate>
              <InputField
                label="Phone *"
                name="phone"
                value={formData.phone}
                onChange={handlePaymentChange}
                error={paymentErrors.phone}
              />
              <SelectField
                label="Payment Method *"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handlePaymentChange}
                options={[
                  { value: "default", label: "-- Please Select --" },
                  { value: "card", label: "Credit/Debit Card (Stripe)" },
                  { value: "Bkash", label: "Bkash" },
                  { value: "Nagad", label: "Nagad" },
                  { value: "Rocket", label: "Rocket" },
                ]}
                error={paymentErrors.paymentMethod}
              />
              {formData.paymentMethod === "card" && (
                <div className="mb-4 p-3 border rounded">
                  <CardElement
                    options={{
                      style: {
                        base: {
                          fontSize: "16px",
                          color: "#32325d",
                          "::placeholder": {
                            color: "#aab7c4",
                          },
                        },
                        invalid: {
                          color: "#fa755a",
                        },
                      },
                    }}
                    onChange={handleCardElementChange}
                  />
                  {paymentErrors.card && (
                    <p className="text-red-600 mt-2">{paymentErrors.card}</p>
                  )}
                </div>
              )}
              <div className="mb-4">
                <p>
                  Total to pay: <strong>Rs. {hostelPrice.toLocaleString()}</strong>
                </p>
              </div>
              <button
                type="submit"
                disabled={!isPaymentValid || loading}
                className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                {loading ? "Processing..." : "Confirm Payment"}
              </button>
              {error && <p className="text-red-600 mt-2">{error}</p>}
              <button
                type="button"
                onClick={() => {
                  setIsPaymentStep(false);
                  setCardError(null);
                  setPaymentErrors({});
                }}
                className="text-blue-600 mt-4 underline"
              >
                ← Back to Booking Form
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Booking;









