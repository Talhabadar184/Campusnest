import React from 'react'

function Inquiry() {
    return (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
          {/* Dark overlay background */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-6 rounded-lg w-[90%] md:w-[50%] shadow-lg relative">
            {/* Close Button */}
            <img
              src={crossIcon}
              alt="Close"
              className="absolute top-2 right-2 mt-6 w-4 h-4 cursor-pointer"
              onClick={onClose}
            />
    
            {/* Switch between Booking Form and Payment Form */}
            {isPaymentStep ? (
              <>
                Payment Step
                <h2 className="text-xl font-semibold mb-4">Payment</h2>
                <div className="w-full h-0.5 bg-black rounded-full mt-1"></div>
    
                <p className="text-gray-600 mb-4">Complete your payment below.</p>
    
                <h3 className="text-2xl font-bold text-center">Rs. 25,000</h3>
    
                {/* Payment Method */}
                <label className="block mt-4">Pay Using</label>
                <SelectField options={["-- Please Select --", "Credit Card", "Bank Transfer", "JazzCash", "Easypaisa"]} />
    
                {/* Mobile Number */}
                <label className="block mt-4">Add Your Number</label>
                <InputField type="text" placeholder="Enter your mobile number" />
    
                {/* Buttons */}
                <div className="flex gap-3 justify-end mt-4">
                  <button type="button" onClick={handleBackToBooking} className="bg-gray-300 px-4 py-2 rounded">
                    Back
                  </button>
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Pay Rs. 25,000
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Booking Step */}
                <h2 className="text-xl font-semibold mb-4">Booking Form</h2>
                <div className="w-full h-0.5 bg-black rounded-full mt-1"></div>
    
                <p className="text-gray-600 mb-4">Please fill out the form below. All fields are mandatory!</p>
    
                <form className="space-y-3" onSubmit={handleSaveAndNext}>
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-2 gap-1">
                    <label>First Name</label>
                    <label>Last Name</label>
                    <InputField type="text" placeholder="Enter your First Name" />
                    <InputField type="text" placeholder="Enter your Last Name" />
                  </div>
    
                  {/* Email & Mobile No */}
                  <div className="grid grid-cols-2 gap-4">
                    <label>Email</label>
                    <label>Mobile No.</label>
                    <InputField type="email" placeholder="Enter your Email" />
                    <InputField type="text" placeholder="Enter your Mobile No." />
                  </div>
    
                  {/* Room Type & Move-in Date */}
                  <div className="grid grid-cols-2 gap-4">
                    <label>Room Type</label>
                    <label>Preferred Move-in Date</label>
                    <SelectField options={["-- Please Select Room Type --", "Single", "Shared"]} />
                    <InputField type="date" />
                  </div>
    
                  {/* Length of Stay & Number of Occupants */}
                  <div className="grid grid-cols-2 gap-4">
                    <label>Length of Stay</label>
                    <label>Number of Occupants</label>
                    <SelectField options={["-- Please Select Length of Stay --", "1 Month", "6 Months", "1 Year"]} />
                    <SelectField options={["-- Please Select Number of Occupants --", "1", "2", "3"]} />
                  </div>
    
                  {/* Message */}
                  <textarea
                    placeholder="Type your message (optional)"
                    className="border p-2 rounded w-full"
                  ></textarea>
    
                  {/* Buttons */}
                  <div className="flex gap-3 justify-end mt-4">
                    <button type="button" onClick={onClose} className="bg-gray-300 hover:cursor-pointer px-4 py-2 rounded">
                      Reset
                    </button>
                    <button type="submit" className="bg-blue-500 hover:cursor-pointer text-white px-4 py-2 rounded">
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

export default Inquiry