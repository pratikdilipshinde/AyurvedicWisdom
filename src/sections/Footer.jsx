import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="font-messiri bg-green-800 text-white py-10 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-100">📍 Los Angeles, California, USA</p>
          <p className="text-gray-100">📧 contact@ayurvedicwisdom.com</p>
          {/* <p className="text-gray-100">📞 Phone: +91 98765 43210</p> */}
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-green-600 p-3 rounded-full hover:bg-indigo-500 transition">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" className="bg-green-600 p-3 rounded-full hover:bg-blue-500 transition">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="bg-green-600 p-3 rounded-full hover:bg-pink-500 transition">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="bg-green-600 p-3 rounded-full hover:bg-blue-700 transition">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex items-center justify-center md:justify-end">
          <p className="text-gray-100 text-center md:text-right">
            © 2015 Ayurvedic Wisdom | All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
