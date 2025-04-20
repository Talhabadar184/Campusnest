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
    <div className="fixed inset-0 bg-black  opacity-95 flex items-center justify-center ">
      <div className="bg-white w-[42vw] max-h-[95vh] rounded-xl shadow-lg overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Add New Hostel</h2>
          <button onClick={onClose} className="text-gray-600 text-2xl font-bold hover:text-red-500">
            &times;
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mb-6">
          Please fill out the form below.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Hostel Information */}
          <div>
            <h3 className="text-md font-semibold text-gray-700 mb-3">Hostel Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Hostel Name</label>
                <input
                  type="text"
                  name="hostelName"
                  value={formData.hostelName}
                  onChange={handleChange}
                  className="input mt-1 bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
                {errors.hostelName && <p className="text-red-500 text-xs">{errors.hostelName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Admin Email</label>
                <input
                  type="email"
                  name="adminEmail"
                  value={formData.adminEmail}
                  onChange={handleChange}
                  className="input mt-1 bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
                {errors.adminEmail && <p className="text-red-500 text-xs">{errors.adminEmail}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="input mt-1 bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
                {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="input mt-1 bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
                {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">University</label>
                <select
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  className="input mt-1 bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                >
                  <option value="">-- Choose University --</option>
                  <option value="UCP">UCP</option>
                  <option value="PU">PU</option>
                </select>
                {errors.university && <p className="text-red-500 text-xs">{errors.university}</p>}
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="input mt-1 bg-gray-100 border border-gray-300 rounded-md p-2 w-full resize-none h-20"
                />
                {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}
              </div>
            </div>
          </div>

          {/* Hostel Details */}
          <div>
            <h3 className="text-md font-semibold text-gray-700 mb-3">Hostel Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">No. of Rooms</label>
                <select name="rooms" value={formData.rooms} onChange={handleChange}
                  className="input mt-1 bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                >
                  <option value="">-- No. of Rooms --</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
                {errors.rooms && <p className="text-red-500 text-xs">{errors.rooms}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Room Type</label>
                <select name="roomType" value={formData.roomType} onChange={handleChange}
                  className="input mt-1 bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                >
                  <option value="">-- Room Type --</option>
                  <option value="Single">Single</option>
                  <option value="Shared">Shared</option>
                </select>
                {errors.roomType && <p className="text-red-500 text-xs">{errors.roomType}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Room Price</label>
                <select name="roomPrice" value={formData.roomPrice} onChange={handleChange}
                  className="input mt-1 bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                >
                  <option value="">-- Room Price --</option>
                  <option value="5000">5000</option>
                  <option value="8000">8000</option>
                </select>
                {errors.roomPrice && <p className="text-red-500 text-xs">{errors.roomPrice}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Available Slots</label>
                <select name="slots" value={formData.slots} onChange={handleChange}
                  className="input mt-1 bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                >
                  <option value="">-- Available Slots --</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
                {errors.slots && <p className="text-red-500 text-xs">{errors.slots}</p>}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-md font-semibold text-gray-700 mb-3">Contact Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Owner Name</label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  className="input mt-1 bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
                {errors.ownerName && <p className="text-red-500 text-xs">{errors.ownerName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="input mt-1 bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
                {errors.contact && <p className="text-red-500 text-xs">{errors.contact}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input mt-1 bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>

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

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="reset"
              onClick={() => setFormData({ ...formData, photo: null })}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewHostel;
