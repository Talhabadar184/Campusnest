import React, { useState } from "react";
import logo from "../assets/Signup/signuplogo.png";
import hamburger from "../assets/Register/hamburgericon.png";
import search from "../assets/Register/searchicon.png";
import { Link } from "react-router-dom";

function HomeNavbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="flex items-center justify-between shadow-md px-6 py-4 bg-white  border-b border-gray-100">
      {/* Left Side - Logo */}
      <div className="flex items-center">
        <img src={logo} alt="CampusNest Logo" className="h-12 md:h-14" />
      </div>

      {/* Center (Search Bar + Hamburger) */}
      <div
        className={`flex items-center justify-center bg-gray-100 rounded-full transition-all duration-300 px-2 py-1 ${
          showSearch ? "w-2/3 md:w-1/3" : "w-[2.5rem] md:w-1/3"
        }`}
      >
        {/* Hamburger Icon  */}
        <img
          src={hamburger}
          alt="Menu"
          className="h-4 md:h-3 m-1 cursor-pointer"
        />

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search"
          className={`bg-transparent outline-none text-gray-700 transition-all duration-300 ${
            showSearch ? "w-full px-3" : "w-0 hidden"
          } md:w-full md:block`}
        />

        {/* Search Icon */}
        <img
          src={search}
          alt="Search"
          className="h-6 md:h-7 cursor-pointer ml-2"
          onClick={() => setShowSearch(!showSearch)}
        />
      </div>

      {/* Right Side - Buttons */}
<div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
 
<Link to={"/Listing"} className="bg-blue-600 text-white px-3 py-2 sm:px-5 sm:py-2 rounded-md sm:rounded-lg text-sm sm:text-base font-medium hover:cursor-pointer hover:bg-blue-700 transition-all w-auto">
  List your Hostel
</Link>

  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
    <Link to="/Signup" className="text-blue-600 text-base font-semibold hover:underline">
      Sign Up
    </Link>
    <Link to="/Signin" className="text-blue-600 text-base font-semibold hover:underline">
      Sign In
    </Link>
  </div>
</div>

    </nav>
  );
}

export default HomeNavbar;
