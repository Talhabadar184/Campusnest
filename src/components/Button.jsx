import React from "react";

function Button({ text }) {
  return (
    <div className="flex justify-center">
      <button className="w-[100%] hover:cursor-pointer hover:text-[17px] flex justify-center bg-blue-950 text-white py-2 rounded-lg font-semibold ">
        {text}
      </button>
    </div>
  );
}

export default Button;
