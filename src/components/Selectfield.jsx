import React, { useState } from 'react'



function Selectfield({ label, options, name, onChange }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select 
        name={name}  
        onChange={onChange}  
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`mt-1 w-full px-3 py-2 border rounded-lg text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 ${isFocused ? "border-blue-500 shadow-md" : "border-gray-300"}`}
      >
        <option value="">-- Please Select --</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}


export default Selectfield