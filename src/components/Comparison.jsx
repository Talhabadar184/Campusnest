import React from "react";
import crossIcon from "../assets/Listing/cross.png"; // Adjust path if necessary

const Comparison = ({ open, onClose, hostels }) => {
  if (!open) return null;

  return (
    <div className="fixed  top-0 left-0 w-full h-full bg-transparent bg-opacity-50 flex justify-center items-center p-4">
      {/* Dark overlay background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow-lg text-center relative">
        {/* Close Icon */}
        <img
          src={crossIcon}
          alt="Close"
          className="absolute top-4 right-4 w-4 h-4 cursor-pointer"
          onClick={onClose}
        />

        <h2 className="text-xl font-bold mb-4">Hostel Comparison</h2>

        <div className="max-h-[70vh] overflow-y-auto p-2">
          {hostels.length === 2 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hostels.map((hostel, index) => (
                <div
                  key={index}
                  className="border border-gray-300 p-4 rounded-lg w-full"
                >
                  <h2 className="text-center text-blue-700">{hostel.name}</h2>
                  <div className="w-full h-40 bg-gray-200 flex justify-center items-center mb-2">
                    <img
                      src={hostel.image || "placeholder.jpg"}
                      alt="Hostel"
                      className="max-w-full max-h-full object-cover"
                    />
                  </div>
                  <p>
                    <strong>Location:</strong> {hostel.location}
                  </p>
                  <p>
                    <strong>Price:</strong> {hostel.price} per person
                  </p>
                  <p>
                    <strong>Rating:</strong> {hostel.ratings}
                  </p>
                  <h3 className="mt-2 font-semibold text-blue-700">Amenities</h3>
                  <div className="border border-gray-400 w-full mt-2">
                    {hostel.amenities.map((amenity, i) => (
                      <div
                        key={i}
                        className="flex justify-between border-b py-1 px-3"
                      >
                        <span className="text-left">{amenity}</span>
                        <span className="text-right font-semibold">
                          {amenity.available ? "Yes" : "No"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Select two hostels to compare.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comparison;
