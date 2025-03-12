import React, { useState } from 'react';

function Inputfield({ label, placeholder, type = "text" }) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className={`mt-1 w-[85%] px-3 py-2 border rounded-lg text-gray-700 bg-gray-100 focus:outline-none transition-all 
                    ${isFocused ? "border-blue-500 shadow-md" : "border-gray-300"}`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    );
}

export default Inputfield;
