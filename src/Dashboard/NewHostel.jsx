import React, { useState } from 'react';

const NewHostel = ({ onClose }) => {
  const [formData, setFormData] = useState({
    hostelName: '',
    adminEmail: '',
    address: '',
    city: '',
    university: '',
    description: '',
    rooms: '',
    roomType: '',
    roomPrice: '',
    slots: '',
    ownerName: '',
    contact: '',
    email: '',
    photo: null,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.hostelName.trim()) newErrors.hostelName = "Hostel name is required";
    if (!formData.adminEmail.trim()) {
      newErrors.adminEmail = "Admin email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.adminEmail)) {
      newErrors.adminEmail = "Invalid email format";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.university) newErrors.university = "Select a university";
    if (!formData.description.trim()) newErrors.description = "Description is required";

    if (!formData.rooms) newErrors.rooms = "Select number of rooms";
    if (!formData.roomType) newErrors.roomType = "Select room type";
    if (!formData.roomPrice) newErrors.roomPrice = "Select room price";
    if (!formData.slots) newErrors.slots = "Select slots";

    if (!formData.ownerName.trim()) newErrors.ownerName = "Owner name is required";
    if (!formData.contact.trim()) newErrors.contact = "Contact number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.photo) newErrors.photo = "Upload a photo";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully!", formData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black opacity-97 flex items-center justify-center  p-4">
      <div className="bg-white w-full max-w-4xl max-h-[95vh] rounded-xl shadow-lg overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Add New Hostel</h2>
          <button onClick={onClose} className="text-gray-600 text-2xl font-bold hover:text-red-500">
            &times;
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mb-6">
          Please fill out the form below.
        </p>

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Hostel Information */}
          <div>
            <h3 className="text-md font-semibold text-gray-700 mb-3">Hostel Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Hostel Name", name: "hostelName", placeholder: "enter hostel name" },
                { label: "Admin Email", name: "adminEmail", type: "email", placeholder: "enter your email" },
                { label: "Address", name: "address", placeholder: "enter your address" },
                { label: "City", name: "city" ,placeholder: "enter your city" },
              ].map(({ label, name, type = "text",placeholder }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700">{label}</label>
                  <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleChange}
                    className="mt-1 bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                  />
                  {errors[name] && <p className="text-red-500 text-xs">{errors[name]}</p>}
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700">University</label>
                <select
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  className="mt-1 bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                >
                  <option value="">-- Choose University --</option>
                  <option value="UCP">UCP</option>
                  <option value="PU">PU</option>
                </select>
                {errors.university && <p className="text-red-500 text-xs">{errors.university}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 bg-gray-100 border border-gray-300 rounded-md p-2 w-full resize-none h-20"
                />
                {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}
              </div>
            </div>
          </div>

          {/* Hostel Details */}
          <div>
            <h3 className="text-md font-semibold text-gray-700 mb-3">Hostel Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "No. of Rooms", name: "rooms", options: ["5", "10"] },
                { label: "Room Type", name: "roomType", options: ["Single", "Shared"] },
                { label: "Room Price", name: "roomPrice", options: ["5000", "8000"] },
                { label: "Available Slots", name: "slots", options: ["5", "10"] },
              ].map(({ label, name, options }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700">{label}</label>
                  <select
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="mt-1 bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                  >
                    <option value="">{`-- ${label} --`}</option>
                    {options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors[name] && <p className="text-red-500 text-xs">{errors[name]}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-md font-semibold text-gray-700 mb-3">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Owner Name", name: "ownerName",placeholder: "enter owner name" },
                { label: "Contact Number", name: "contact",placeholder: "enter contact number" },
                { label: "Email", name: "email", type: "email",placeholder: "enter your email" },
              ].map(({ label, name, type = "text",placeholder }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700">{label}</label>
                  <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleChange}
                    className="mt-1 bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                  />
                  {errors[name] && <p className="text-red-500 text-xs">{errors[name]}</p>}
                </div>
              ))}

<div>
                <label className="block text-sm font-medium text-gray-700">Upload Photo</label>
                <input
                  type="file"
                  name="photo"
                  onChange={handleChange}
                  className="input mt-1 bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
                {errors.photo && <p className="text-red-500 text-xs">{errors.photo}</p>}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
            >
              Submit Hostel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewHostel;
