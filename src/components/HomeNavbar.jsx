// import React, { useState } from "react";
// import logo from "../assets/Signup/signuplogo.png";
// import hamburger from "../assets/Register/hamburgericon.png";
// import search from "../assets/Register/searchicon.png";
// import { Link } from "react-router-dom";

// function HomeNavbar() {
//   const [showSearch, setShowSearch] = useState(false);

//   return (
//     <nav className="flex items-center justify-between shadow-md px-4 sm:px-6 py-3 sm:py-4 bg-white border-b border-gray-100">
//       {/* Left Side - Logo */}
//       <div className="flex items-center">
//         <img src={logo} alt="CampusNest Logo" className="h-10 sm:h-12 md:h-14" />
//       </div>

//       {/* Center (Search Bar + Hamburger) */}
//       <div
//         className={`flex items-center justify-center bg-gray-100 rounded-full transition-all duration-300 px-2 py-1 ${
//           showSearch ? "w-2/3 md:w-1/3" : "w-[2.2rem] md:w-1/3"
//         }`}
//       >
//         {/* Hamburger Icon */}
//         <img
//           src={hamburger}
//           alt="Menu"
//           className="h-3 sm:h-3 md:h-3 m-1 cursor-pointer"
//         />

//         {/* Search Input */}
//         <input
//           type="text"
//           placeholder="Search"
//           className={`bg-transparent outline-none text-gray-700 transition-all duration-300 ${
//             showSearch ? "w-full px-3" : "w-0 hidden"
//           } md:w-full md:block`}
//         />

//         {/* Search Icon */}
//         <img
//           src={search}
//           alt="Search"
//           className="h-5 sm:h-6 md:h-7 cursor-pointer ml-2"
//           onClick={() => setShowSearch(!showSearch)}
//         />
//       </div>

//       {/* Right Side - Buttons */}
//       <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
//       <Link
//   to="/Listing"
//   className="bg-blue-600 text-white px-2 py-1 sm:px-2 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium hover:cursor-pointer hover:bg-blue-700 transition-all w-auto w-xs-button"
// >
//   List your Hostel
// </Link>

//         <div className="flex flex-col sm:flex-row gap-1 sm:gap-3">
//           <Link to="/register" className="text-blue-600 text-sm sm:text-base font-semibold hover:underline">
//             Sign Up
//           </Link>
//           <Link to="/Signin" className="text-blue-600 text-sm sm:text-base font-semibold hover:underline">
//             Sign In
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default HomeNavbar;

import React, { useState } from "react";
import logo from "../assets/Signup/signuplogo.png";
import hamburger from "../assets/Register/hamburgericon.png";
import search from "../assets/Register/searchicon.png";
import profileIcon from "../assets/Register/profileicon.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Features/authSlics";
import { useNavigate } from "react-router-dom";

function HomeNavbar() {
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
    <nav className="flex items-center justify-between shadow-md px-4 sm:px-6 py-3 sm:py-4 bg-white border-b border-gray-100 relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="CampusNest Logo" className="h-10 sm:h-12 md:h-14" />
      </div>

      {/* Search */}
      <div className={`flex items-center justify-center bg-gray-100 rounded-full px-2 py-1 transition-all duration-300 ${showSearch ? "w-2/3 md:w-1/3" : "w-[2.2rem] md:w-1/3"}`}>
        <img src={hamburger} alt="Menu" className="h-3 m-1 cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          className={`bg-transparent outline-none text-gray-700 transition-all duration-300 ${showSearch ? "w-full px-3" : "w-0 hidden"} md:w-full md:block`}
        />
        <img
          src={search}
          alt="Search"
          className="h-5 ml-2 cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <Link to="/Listing" className="bg-blue-600 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-blue-700">
          List your Hostel
        </Link>

        {/* Auth UI */}
        {!user ? (
          <div className="flex gap-3">
            <Link to="/register" className="text-blue-600 font-semibold hover:underline">Sign Up</Link>
            <Link to="/Signin" className="text-blue-600 font-semibold hover:underline">Sign In</Link>
          </div>
        ) : (
          <div className="relative">
            <div className="flex items-center cursor-pointer gap-2" onClick={toggleDropdown}>
              <img src={profileIcon} alt="Profile" className="h-4" />
              <span className="text-gray-700 font-medium hidden sm:block">{user.firstName}</span>
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
         <div className="w-full bg-blue-900 text-white  text-xl pl-16 h-10">
                  <p className="hover:cursor-pointer">   <Link to={"/Home"}>Home</Link> | <span onClick={handleDashboardClick} >Dashboard</span> |  <Link to="/Myprofile" className="ml-2">My Profile</Link> </p>
                </div>
    </>
  );
}

export default HomeNavbar;

