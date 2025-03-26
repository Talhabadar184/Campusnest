import React from "react";
import logo from "../assets/Footer/logo.png";
import fb from "../assets/Footer/fb.png";
import insta from "../assets/Footer/insta.png";
import twitter from "../assets/Footer/twitter.png";
import linke from "../assets/Footer/linke.png";
import youtube from "../assets/Footer/youtube.png";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16">
        {/* Left Section: Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
          <img src={logo} alt="CampusNest Logo" className="h-12 mb-2" />
          <p className="text-xs">Copyright CompanyNext 2023. All Rights Reserved.</p>
        </div>

        {/* Centered Section: Navigation Links */}
        <nav className="text-sm flex flex-wrap justify-center mb-4 md:mb-0 gap-2">
          <a href="#" className="mx-2 hover:underline">About Us</a> |
          <a href="#" className="mx-2 hover:underline">Contact Us</a> |
          <a href="#" className="mx-2 hover:underline">Terms of Use</a> |
          <a href="#" className="mx-2 hover:underline">Privacy Policy</a>
        </nav>

        {/* Right Section: Social Media Icons */}
        <div className="flex gap-4">
          <img src={linke} alt="LinkedIn" className="h-5 cursor-pointer hover:opacity-75" />
          <img src={insta} alt="Instagram" className="h-5 cursor-pointer hover:opacity-75" />
          <img src={youtube} alt="YouTube" className="h-5 cursor-pointer hover:opacity-75" />
          <img src={fb} alt="Facebook" className="h-5 cursor-pointer hover:opacity-75" />
          <img src={twitter} alt="Twitter" className="h-5 cursor-pointer hover:opacity-75" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;