// import React, { useState } from "react";

// const NewHostel = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     hostelName: "",
//     location: "",
//     contact: "",
//     price: "",
//     amenities: "",
//     description: "",
//     photos: null,
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.hostelName.trim()) newErrors.hostelName = "Required";
//     if (!formData.location.trim()) newErrors.location = "Required";
//     if (!formData.contact.trim()) newErrors.contact = "Required";
//     if (!formData.price.trim()) newErrors.price = "Required";
//     if (!formData.amenities.trim()) newErrors.amenities = "Required";
//     if (!formData.description.trim()) newErrors.description = "Required";
//     if (!formData.photos) newErrors.photos = "Required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({ ...formData, [name]: files ? files[0] : value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log("Form submitted!", formData);
//       onClose();
//     }
//   };

//   const handleReset = () => {
//     setFormData({
//       hostelName: "",
//       location: "",
//       contact: "",
//       price: "",
//       amenities: "",
//       description: "",
//       photos: null,
//     });
//     setErrors({});
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
//       <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg overflow-y-auto p-6">
//         <div className="flex justify-between items-center border-b pb-2 mb-4">
//           <h2 className="text-lg font-semibold text-blue-600">
//             Add New Hostel
//           </h2>
//           <button
//             onClick={onClose}
//             className="text-3xl text-gray-600 hover:text-red-500"
//           >
//             &times;
//           </button>
//         </div>

//         <p className="text-sm text-center text-gray-500 mb-6">
//           Please fill out the form below.
//         </p>

//         <h3 className="text-blue-600 font-semibold text-sm mb-4">
//           Hostel Information
//         </h3>

//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           {/* Hostel Name */}
//           <div>
//             <label className="block text-sm text-black mb-1">Hostel Name</label>
//             <input
//               type="text"
//               name="hostelName"
//               value={formData.hostelName}
//               onChange={handleChange}
//               placeholder="Enter your hostel name"
//               className="bg-gray-100 rounded-md p-2 text-sm placeholder-gray-500 w-full"
//             />
//           </div>

//           {/* Location */}
//           <div>
//             <label className="block text-sm text-black mb-1">Location</label>
//             <input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               placeholder="Hostel location"
//               className="bg-gray-100 rounded-md p-2 text-sm placeholder-gray-500 w-full"
//             />
//           </div>

//           {/* Contact */}
//           <div>
//             <label className="block text-sm text-black mb-1">Contact Details</label>
//             <input
//               type="text"
//               name="contact"
//               value={formData.contact}
//               onChange={handleChange}
//               placeholder="Owner contact detail"
//               className="bg-gray-100 rounded-md p-2 text-sm placeholder-gray-500 w-full"
//             />
//           </div>

//           {/* Price */}
//           <div>
//             <label className="block text-sm text-black mb-1">Price/month</label>
//             <input
//               type="text"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               placeholder="Price"
//               className="bg-gray-100 rounded-md p-2 text-sm placeholder-gray-500 w-full"
//             />
//           </div>

//           {/* Amenities */}
//           <div>
//             <label className="block text-sm text-black mb-1">Amenities</label>
//             <input
//               type="text"
//               name="amenities"
//               value={formData.amenities}
//               onChange={handleChange}
//               placeholder="Amenities"
//               className="bg-gray-100 rounded-md p-2 text-sm placeholder-gray-500 w-full"
//             />
//           </div>

//           {/* Upload Photos */}
//           <div>
//             <label className="block text-sm text-black mb-1">Upload Photos</label>
//             <input
//               type="file"
//               name="photos"
//               onChange={handleChange}
//               className=" text-black w-full bg-gray-100 rounded-md p-2 text-sm placeholder-gray-500 "
//             />
//           </div>

//           {/* Description */}
//           <div className="md:col-span-2">
//             <label className="block text-sm text-black mb-1">Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Type your message (optional)"
//               className="bg-gray-100 rounded-md p-2 text-sm placeholder-gray-500 w-full h-24 resize-none"
//             />
//           </div>

//           {/* Buttons */}
//           <div className="col-span-1 md:col-span-2 flex justify-end gap-4 mt-4">
//             <button
//               type="button"
//               onClick={handleReset}
//               className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-100"
//             >
//               Reset
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NewHostel;
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerHostel, resetHostelState } from "../Features/registerhostelslice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewHostel = ({ onClose }) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.registerHostel);
  const accessToken = useSelector((state) => state.auth.accessToken);

  const [formData, setFormData] = useState({
    hostelName: "",
    location: "",
    contact: "",
    price: "",
    amenities: "",
    description: "",
    virtualTour: null,  // <-- changed from photos
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (success) {
      dispatch(resetHostelState());
      Navigate('/home');
    }
  }, [success, dispatch]);

  const validate = () => {
    const newErrors = {};
    if (!formData.hostelName.trim()) newErrors.hostelName = "Required";
    if (!formData.location.trim()) newErrors.location = "Required";
    if (!formData.contact.trim()) newErrors.contact = "Required";
    if (!formData.price.trim()) newErrors.price = "Required";
    if (!formData.amenities.trim()) newErrors.amenities = "Required";
    if (!formData.description.trim()) newErrors.description = "Required";
    if (!formData.virtualTour) newErrors.virtualTour = "Required";  // <-- validate virtualTour here
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!validate()) return;
    

  //   const data = new FormData();
  //   data.append("name", formData.hostelName);

  //   const locationObj = {
  //     latitude: 12.9716,
  //     longitude: 77.5946,
  //     address: formData.location,
  //     city: "Lahore",
  //     state: "Punjab",
  //     country: "Pakistan",
  //   };
  //   data.append("location", JSON.stringify(locationObj));
  //   data.append("contactNumber", formData.contact);
  //   data.append("pricePerMonth", formData.price);
  //   data.append("amenities", JSON.stringify(formData.amenities.split(",").map(item => item.trim())));
  //   data.append("description", formData.description);
  //   data.append("virtualTour", formData.virtualTour);

  //   dispatch(registerHostel({ formData: data, token: accessToken }));
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
  
    try {
      const geocodeRes = await axios.get(`http://localhost:8000/api/geocode`, {
        params: { address: formData.location },
      });
  
      console.log("GOOGLE GEOCODE RESPONSE:", geocodeRes.data);
      const { latitude, longitude, address, city, state, country } = geocodeRes.data;
  
      const data = new FormData();
      data.append("name", formData.hostelName);
      data.append(
        "location",
        JSON.stringify({
          latitude,
          longitude,
          address,
          city,   // ✅ now dynamic
          state,  // ✅ now dynamic
          country // ✅ now dynamic
        })
      );
      data.append("contactNumber", formData.contact);
      data.append("pricePerMonth", formData.price);
      data.append(
        "amenities",
        JSON.stringify(formData.amenities.split(",").map((item) => item.trim()))
      );
      data.append("description", formData.description);
      data.append("virtualTour", formData.virtualTour);
  
      dispatch(registerHostel({ formData: data, token: accessToken }));
    } catch (err) {
      console.error("Geocode error:", err);
      setErrors({ location: "Failed to fetch location coordinates." });
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
      virtualTour: null,
    });
    setErrors({});
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg overflow-y-auto p-6">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-semibold text-blue-600">Add New Hostel</h2>
          <button onClick={onClose} className="text-3xl text-gray-600 hover:text-red-500">&times;</button>
        </div>

        <p className="text-sm text-center text-gray-500 mb-4">Please fill out the form below.</p>

        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        {loading && <p className="text-blue-600 text-sm mb-2">Submitting...</p>}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">Hostel Name</label>
            <input
              type="text"
              name="hostelName"
              value={formData.hostelName}
              onChange={handleChange}
              className="bg-gray-100 rounded-md p-2 text-sm w-full"
            />
            {errors.hostelName && <p className="text-red-600 text-xs">{errors.hostelName}</p>}
          </div>

          <div>
            <label className="block text-sm">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="bg-gray-100 rounded-md p-2 text-sm w-full"
            />
            {errors.location && <p className="text-red-600 text-xs">{errors.location}</p>}
          </div>

          <div>
            <label className="block text-sm">Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="bg-gray-100 rounded-md p-2 text-sm w-full"
            />
            {errors.contact && <p className="text-red-600 text-xs">{errors.contact}</p>}
          </div>

          <div>
            <label className="block text-sm">Price / Month</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="bg-gray-100 rounded-md p-2 text-sm w-full"
            />
            {errors.price && <p className="text-red-600 text-xs">{errors.price}</p>}
          </div>

          <div>
            <label className="block text-sm">Amenities (comma separated)</label>
            <input
              type="text"
              name="amenities"
              value={formData.amenities}
              onChange={handleChange}
              className="bg-gray-100 rounded-md p-2 text-sm w-full"
            />
            {errors.amenities && <p className="text-red-600 text-xs">{errors.amenities}</p>}
          </div>

          <div>
            <label className="block text-sm">Upload Virtual Tour</label>
            <input
              type="file"
              name="virtualTour"
              onChange={handleChange}
              className="bg-gray-100 rounded-md p-2 text-sm w-full"
              accept="video/*"
            />
            {errors.virtualTour && <p className="text-red-600 text-xs">{errors.virtualTour}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="bg-gray-100 rounded-md p-2 text-sm w-full h-24 resize-none"
            />
            {errors.description && <p className="text-red-600 text-xs">{errors.description}</p>}
          </div>

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
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewHostel;



