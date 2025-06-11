import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchHostels } from "../Features/hostelSlice";

const amenitiesList = [
  "Air Conditioning", "Free Wi-Fi", "Private or Ensuite Bathrooms", "Laundry Services",
  "Luggage Storage", "Healthy & Organic Meals", "Kitchen Facilities",
  "24/7 Security", "UPS", "Nearby Restaurants", "Study Rooms"
];

const amenityKeyMap = {
  "Free Wi-Fi": "WiFi",
  "Laundry Services": "Laundry",
  "Healthy & Organic Meals": "Mess"
};

const FilterSidebar = ({ onApplyFilters }) => {
  const dispatch = useDispatch();

  const [price, setPrice] = useState(50000);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [radius, setRadius] = useState(5);
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [location, setLocation] = useState("");

  const handleAmenityChange = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  };

  const handleApplyFilters = async () => {
    let latitude = null;
    let longitude = null;

    if (location.trim() !== "") {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&limit=1`
        );
        const data = await response.json();
        if (data.length > 0) {
          latitude = parseFloat(data[0].lat);
          longitude = parseFloat(data[0].lon);
        } else {
          alert("Location not found. Please try another location.");
          return;
        }
      } catch {
        alert("Failed to fetch location coordinates.");
        return;
      }
    } else {
      // Default to Lahore city center
      latitude = 31.5497;
      longitude = 74.3436;
    }

    const transformedAmenities = selectedAmenities.map((a) => amenityKeyMap[a] || a);

    const filters = {
      latitude,
      longitude,
      radius: parseFloat(radius),
      priceMin: 1000,
      priceMax: parseInt(price),
      amenities: transformedAmenities,
      onlyAvailable,
      sortBy: "pricePerMonth",
      sortOrder: "asc",
    };

    // If you want to dispatch here directly, or pass to parent
    dispatch(fetchHostels(filters));

    if (onApplyFilters) onApplyFilters(filters);
  };

  return (
    <div className="w-[300px] bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4 text-blue-600">Filters</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Max Price (PKR):</label>
        <input
          type="range"
          className="w-full cursor-pointer"
          min={5000}
          max={50000}
          step={1000}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div className="text-sm mt-1 text-gray-500">Up to PKR {price}</div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Search Radius (km):</label>
        <input
          type="number"
          min={0}
          step={0.1}
          className="w-full p-2 border rounded-lg bg-gray-50"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Location Keyword:</label>
        <input
          type="text"
          placeholder="e.g. Johar Town"
          className="w-full p-2 border rounded-lg bg-gray-50"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700">Amenities</h3>
        <div className="flex flex-col space-y-1 text-sm text-gray-600 max-h-[150px] overflow-y-auto">
          {amenitiesList.map((amenity) => (
            <label key={amenity}>
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedAmenities.includes(amenity)}
                onChange={() => handleAmenityChange(amenity)}
              />
              {amenity}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="flex items-center text-sm text-gray-700">
          <input
            type="checkbox"
            className="mr-2"
            checked={onlyAvailable}
            onChange={() => setOnlyAvailable(!onlyAvailable)}
          />{" "}
          Only available hostels
        </label>
      </div>

      <button
        onClick={handleApplyFilters}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
