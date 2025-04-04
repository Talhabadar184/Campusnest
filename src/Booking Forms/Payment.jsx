import React from "react";
import crossIcon from "../assets/Listing/cross.png";

const Payment = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] md:w-[50%] shadow-lg relative border border-blue-500">
        {/* Close Button */}
        <h1>Booking Form</h1>
        <img
          src={crossIcon}
          alt="Close"
          className="absolute top-2 right-2 mt-6 w-4 h-4 cursor-pointer"
          onClick={onClose}
        />

        {/* Title */}
        <h2 className="text-lg font-semibold text-blue-700">Booking Form</h2>
        <div className="w-16 h-1 bg-blue-500 rounded-full mt-1"></div>

        {/* Price */}
        <p className="text-center text-2xl font-semibold mt-4">Rs. 25,000</p>

        {/* Payment Dropdown */}
        <div className="mt-4">
          <label className="block text-gray-700 font-semibold">Pay Using</label>
          <select className="w-full p-2 border rounded mt-1 text-gray-700">
            <option>-- Please Select --</option>
            <option>Credit Card</option>
            <option>Bank Transfer</option>
          </select>
        </div>

        {/* Mobile Number Input */}
        <div className="mt-4">
          <label className="block text-gray-700 font-semibold">Add Your Number</label>
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="w-full p-2 border rounded mt-1 text-gray-500 bg-gray-100"
            disabled
          />
        </div>

        {/* Pay Button */}
        <button className="bg-blue-500 text-white w-full py-2 mt-4 rounded hover:bg-blue-600">
          Pay Rs. 25,000
        </button>
      </div>
    </div>
  );
};

export default Payment;
