// import React, { useState, useEffect } from "react";
// import logo from "../assets/Signup/signuplogo.png";
// import hamburger from "../assets/Register/hamburgericon.png";
// import search from "../assets/Register/searchicon.png";
// import notification from "../assets/Register/notificationicon.png";
// import profile from "../assets/Register/profileicon.png";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [showSearch, setShowSearch] = useState(false);
//   const [userName, setUserName] = useState("User");
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const storedProfile = localStorage.getItem("userProfile");
//     if (storedProfile) {
//       const profileData = JSON.parse(storedProfile);
//       setUserName(profileData.firstName || "User"); 
//     }
//   }, []);

//   return (
//     <nav className="flex items-center h-16 justify-between shadow-md px-4 md:px-6 py-3">
//       {/* Left Side */}
//       <div className="flex items-center gap-2">
//         <img src={logo} alt="Signup Logo" className="h-10 md:h-16" />
//       </div>

//       {/* Center (Search Bar + Hamburger) */}
//       <div
//         className={`flex items-center justify-center bg-gray-100 rounded-full transition-all duration-300 px-2 py-1 ${
//           showSearch ? "w-2/3 md:w-1/3" : "w-[2.5rem] md:w-1/3"
//         }`}
//       >
//         {/* Hamburger Icon */}
//         <img
//           src={hamburger}
//           alt="Hamburger Menu"
//           className="h-4 md:h-3 m-1 cursor-pointer"
//         />

//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search"
//           className={`bg-transparent outline-none text-gray-600 transition-all duration-300 ${
//             showSearch ? "w-full px-2" : "w-0 hidden"
//           } md:w-full md:block`}
//         />

//         {/* Search Icon */}
//         <img
//           src={search}
//           alt="Search Icon"
//           className="h-4 md:h-6 cursor-pointer"
//           onClick={() => setShowSearch(!showSearch)}
//         />
//       </div>

//       {/* Right Side */}
//       <div className="flex items-center gap-2 md:gap-2 sm:gap-1">
//         {/* Notification Icon */}
//         <div className="relative ml-7 cursor-pointer">
//           <Link to={"/Notifications"}><img src={notification} alt="Notification" className="h-5" /></Link>
//           <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
//         </div>
//         <div className="h-1 w-1 caret-neutral-800"></div>

//         {/* User Profile */}
//       <div 
//         className="flex items-center cursor-pointer gap-1" 
//         onClick={toggleDropdown}
//       >
//         <img src={profile} alt="Profile" className="h-4" />
//         <span className="hidden md:block text-gray-700 font-medium">{userName}</span>
//         <span className="ml-1">▼</span>
//       </div>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <div className="absolute right-0 mt-44 bg-white shadow-md rounded-md w-40">
//           <ul>
//             <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer"><Link to={"/Myprofile"}>My Profile</Link></li>
//             <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Settings</li>
//             <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Logout</li>
//           </ul>
//         </div>
//       )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";//updated
import logo from "../assets/Signup/signuplogo.png";
import hamburger from "../assets/Register/hamburgericon.png";
import search from "../assets/Register/searchicon.png";
import notification from "../assets/Register/notificationicon.png";
import profileIcon from "../assets/Register/profileicon.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Features/authSlics";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
    const navigate = useNavigate();
  


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsOpen(false);
  };
 const handleDashboardClick = () => {
    if (user?.userType === 'owner') {
      navigate('/Owner'); // adjust this path to your actual owner dashboard route
      
    } else if (user?.userType === 'tenant') {
      navigate('/Tennet'); // adjust this path to your actual tenant dashboard route
    } else {
      navigate('/'); // fallback if userType is missing or unrecognized
    }
  };
  return (
    <>
    <nav className="flex items-center h-16 justify-between shadow-md px-4 md:px-6 py-3 relative">
      {/* Left */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-10 md:h-16" />
      </div>

      {/* Search */}
      <div className={`flex items-center justify-center bg-gray-100 rounded-full px-2 py-1 transition-all duration-300 ${showSearch ? "w-2/3 md:w-1/3" : "w-[2.5rem] md:w-1/3"}`}>
        <img src={hamburger} alt="Menu" className="h-4 m-1 cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          className={`bg-transparent outline-none text-gray-600 transition-all duration-300 ${showSearch ? "w-full px-2" : "w-0 hidden"} md:w-full md:block`}
        />
        <img
          src={search}
          alt="Search Icon"
          className="h-4 md:h-6 cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <div className="relative cursor-pointer">
          <Link to="/Notifications">
            <img src={notification} alt="Notification" className="h-5" />
          </Link>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
        </div>

        {/* User Dropdown or Auth Buttons */}
        {!user ? (
          <div className="flex gap-3">
            <Link to="/register" className="text-blue-600 font-semibold hover:underline">Sign Up</Link>
            <Link to="/Signin" className="text-blue-600 font-semibold hover:underline">Sign In</Link>
          </div>
        ) : (
          <div className="relative">
            <div className="flex items-center cursor-pointer gap-2" onClick={toggleDropdown}>
              <img src={profileIcon} alt="Profile" className="h-4" />
              <span className="text-gray-700 font-medium hidden md:block">{user.firstName}</span>
              <span>▼</span>
            </div>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md z-50">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Myprofile">My Profile</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Settings">Settings</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>Logout</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
    <div className="w-full bg-blue-900 text-white   text-xl pl-16 h-10">
                      <p className="hover:cursor-pointer pt-1 ">   <Link to={"/Home"}>Home</Link> | <span onClick={handleDashboardClick} >Dashboard</span> |  <Link to="/Myprofile" className="ml-2">My Profile</Link> </p>
                    </div>
    </>
  );
}

export default Navbar;
