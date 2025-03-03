import React from "react";
import neemImage from "../assets/images/neem-leaf.png"; // Replace with Neem image
import ashwagandhaImage from "../assets/images/Ashwagandha.png"; // Replace with Ashwagandha image
import tulsiImage from "../assets/images/tulsi.png"; // Replace with Tulsi image

const Contact = () => {
  return (
    <div className="font-messiri bg-[#f5ffcc] py-14 px-6 md:px-10 lg:px-20 flex flex-col items-center">
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-5">Get in Touch</h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full max-w-6xl">
        
        {/* Left Side - Neem & Ashwagandha */}
        <div className="flex flex-col items-center space-y-6 w-full h-full">
          <div className="bg-white shadow-lg rounded-3xl p-1 w-full h-full flex items-center justify-center">
            <img src={neemImage} alt="Neem" className="w-full h-full object-contain p-1" />
          </div>
          <div className="bg-white shadow-lg rounded-3xl p-1 w-full h-full flex items-center justify-center">
            <img src={ashwagandhaImage} alt="Ashwagandha" className="w-full h-full object-contain p-1" />
          </div>
        </div>

        {/* Contact Form (60%) */}
        <div className="bg-white p-8 shadow-lg rounded-3xl w-full md:col-span-3 h-full flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">Send Us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Name</label>
              <input 
                type="text" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200" 
                placeholder="John Doe" 
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Email</label>
              <input 
                type="email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200" 
                placeholder="john@example.com" 
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Message</label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200" 
                rows="3" 
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-green-800 text-white py-3 rounded-lg font-semibold hover:bg-orange-500 transition duration-200 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Tulsi */}
        <div className="flex flex-col items-center w-full h-full">
          <div className="bg-white shadow-lg rounded-3xl p-1 w-full h-full flex items-center justify-center">
            <img src={tulsiImage} alt="Tulsi" className="w-full h-full object-contain p-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
