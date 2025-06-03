import React, { useState } from "react";

const NewHostel = ({ onClose }) => {
  const [formData, setFormData] = useState({
    hostelName: "",
    location: "",
    contact: "",
    price: "",
    amenities: "",
    description: "",
    photos: null,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.hostelName.trim()) newErrors.hostelName = "Required";
    if (!formData.location.trim()) newErrors.location = "Required";
    if (!formData.contact.trim()) newErrors.contact = "Required";
    if (!formData.price.trim()) newErrors.price = "Required";
    if (!formData.amenities.trim()) newErrors.amenities = "Required";
    if (!formData.description.trim()) newErrors.description = "Required";
    if (!formData.photos) newErrors.photos = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted!", formData);
      onClose();
    }
  };

  const handleReset = () => {
    setFormData({
      hostelName: "",
      location: "",
      contact: "",
      price: "",
      amenities: "",
      description: "",
      photos: null,
    });
    setErrors({});
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg overflow-y-auto p-6">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-semibold text-blue-600">
            Add New Hostel
          </h2>
          <button
            onClick={onClose}
            className="text-3xl text-gray-600 hover:text-red-500"
          >
            &times;
          </button>
        </div>

        <p className="text-sm text-center text-gray-500 mb-6">
          Please fill out the form below.
        </p>

        <h3 className="text-blue-600 font-semibold text-sm mb-4">
          Hostel Information
        </h3>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Hostel Name */}
          <div>
            <label className="block text-sm text-black mb-1">Hostel Name</label>
            <input
              type="text"
              name="hostelName"
              value={formData.hostelName}
              onChange={handleChange}
              placeholder="Enter your hostel name"
              className="bg-gray-100 rounded-md p-2 text-sm placeholder-gray-500 w-full"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm text-black mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Hostel location"
              className="bg-gray-100 rounded-md p-2 text-sm placeholder-gray-500 w-full"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm text-black mb-1">Contact Details</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Owner contact detail"
              className="bg-gray-100 rounded-md p-2 text-sm placeholder-gray-500 w-full"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm text-black mb-1">Price/month</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="bg-gray-100 rounded-md p-2 text-sm placeholder-gray-500 w-full"
            />
          </div>

          {/* Amenities */}
          <div>
            <label className="block text-sm text-black mb-1">Amenities</label>
            <input
              type="text"
              name="amenities"
              value={formData.amenities}
              onChange={handleChange}
              placeholder="Amenities"
              className="bg-gray-100 rounded-md p-2 text-sm placeholder-gray-500 w-full"
            />
          </div>

          {/* Upload Photos */}
          <div>
            <label className="block text-sm text-black mb-1">Upload Photos</label>
            <input
              type="file"
              name="photos"
              onChange={handleChange}
              className="text-sm text-black w-full"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm text-black mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Type your message (optional)"
              className="bg-gray-100 rounded-md p-2 text-sm placeholder-gray-500 w-full h-24 resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="col-span-1 md:col-span-2 flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={handleReset}
              className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-100"
            >
              Reset
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewHostel;
