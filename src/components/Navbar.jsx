import React, { useState, useEffect } from "react";
import logo from "../assets/Signup/signuplogo.png";
import hamburger from "../assets/Register/hamburgericon.png";
import search from "../assets/Register/searchicon.png";
import notification from "../assets/Register/notificationicon.png";
import profile from "../assets/Register/profileicon.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [userName, setUserName] = useState("User");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      const profileData = JSON.parse(storedProfile);
      setUserName(profileData.firstName || "User"); 
    }
  }, []);

  return (
    <nav className="flex items-center h-16 justify-between shadow-md px-4 md:px-6 py-3">
      {/* Left Side */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Signup Logo" className="h-10 md:h-16" />
      </div>

      {/* Center (Search Bar + Hamburger) */}
      <div
        className={`flex items-center justify-center bg-gray-100 rounded-full transition-all duration-300 px-2 py-1 ${
          showSearch ? "w-2/3 md:w-1/3" : "w-[2.5rem] md:w-1/3"
        }`}
      >
        {/* Hamburger Icon */}
        <img
          src={hamburger}
          alt="Hamburger Menu"
          className="h-4 md:h-3 m-1 cursor-pointer"
        />

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search"
          className={`bg-transparent outline-none text-gray-600 transition-all duration-300 ${
            showSearch ? "w-full px-2" : "w-0 hidden"
          } md:w-full md:block`}
        />

        {/* Search Icon */}
        <img
          src={search}
          alt="Search Icon"
          className="h-4 md:h-6 cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 md:gap-2 sm:gap-1">
        {/* Notification Icon */}
        <div className="relative ml-7 cursor-pointer">
          <Link to={"/Notifications"}><img src={notification} alt="Notification" className="h-5" /></Link>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
        </div>
        <div className="h-1 w-1 caret-neutral-800"></div>

        {/* User Profile */}
      <div 
        className="flex items-center cursor-pointer gap-1" 
        onClick={toggleDropdown}
      >
        <img src={profile} alt="Profile" className="h-4" />
        <span className="hidden md:block text-gray-700 font-medium">{userName}</span>
        <span className="ml-1">▼</span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-44 bg-white shadow-md rounded-md w-40">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer"><Link to={"/Myprofile"}>My Profile</Link></li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
      </div>
    </nav>
  );
}

export default Navbar;
