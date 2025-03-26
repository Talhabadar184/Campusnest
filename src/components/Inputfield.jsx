import React, { useState, forwardRef } from "react";

const Inputfield = forwardRef(({ label, placeholder, type = "text", name, value, onChange }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                ref={ref} 
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`mt-1 w-full px-3 py-2 border rounded-lg text-gray-700 bg-gray-100 focus:outline-none transition-all
                    ${isFocused ? "border-blue-500 shadow-lg bg-white" : "border-gray-300"}`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    );
});

export default Inputfield;
