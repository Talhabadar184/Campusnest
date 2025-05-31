// import React, { useState } from 'react'



// function Selectfield({ label, options, name, onChange }) {
//   const [isFocused, setIsFocused] = useState(false);
//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700">{label}</label>
//       <select 
//         name={name}  
//         onChange={onChange}  
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//         className={`mt-1 w-full px-3 py-2 border rounded-lg text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 ${isFocused ? "border-blue-500 shadow-md" : "border-gray-300"}`}
//       >
//         <option value="">-- Please Select --</option>
//         {options.map((option, index) => (
//           <option key={index} value={option}>{option}</option>
//         ))}
//       </select>
//     </div>
//   );
// }



// export default Selectfield

// SelectField.js
import React from "react";

function SelectField({ label, name, value, onChange, options, error }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold mb-1">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        {options.map(({ value: optValue, label: optLabel }) => (
          <option key={optValue} value={optValue}>
            {optLabel}
          </option>
        ))}
      </select>
      {error && <p className="text-red-600 mt-1">{error}</p>}
    </div>
  );
}

export default SelectField;
