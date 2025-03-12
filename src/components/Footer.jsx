import React from "react";
import logo from "../assets/Footer/logo.png";
import fb from "../assets/Footer/fb.png";
import insta from "../assets/Footer/insta.png";
import twitter from "../assets/Footer/twitter.png";
import linke from "../assets/Footer/linke.png";
import youtube from "../assets/Footer/youtube.png";

const Footer = () => {
  return (
    
    <footer className="bg-blue-800 text-white py-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Left Section (Logo + Copyright) */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="CampusNest Logo" className="h-12 mb-2" />
          <p className="text-xs">Copyright CompanyNext 2023. All Rights Reserved.</p>
        </div>

        {/* Right Section (Navigation Links + Social Icons) - Centered */}
        <div className="flex flex-col items-center">
          {/* Navigation Links */}
          <nav className="text-sm mb-3">
            <a href="#" className="mx-2 hover:underline">
              About Us
            </a>{" "}
            |
            <a href="#" className="mx-2 hover:underline">
              Contact Us
            </a>{" "}
            |
            <a href="#" className="mx-2 hover:underline">
              Terms of Use
            </a>{" "}
            |
            <a href="#" className="mx-2 hover:underline">
              Privacy Policy
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-3">
            <img src={linke} alt="LinkedIn" className="h-4 cursor-pointer hover:opacity-75" />
            <img src={insta} alt="Instagram" className="h-4 cursor-pointer hover:opacity-75" />
            <img src={youtube} alt="YouTube" className="h-4 cursor-pointer hover:opacity-75" />
            <img src={fb} alt="Facebook" className="h-4 cursor-pointer hover:opacity-75" />
            <img src={twitter} alt="Twitter" className="h-4 cursor-pointer hover:opacity-75" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
