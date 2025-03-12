import React from 'react';
import introbg from '../assets/images/intro-bg.jpg';
import basilimg from '../assets/images/basil.webp';
import basilplantimg from '../assets/images/basilplant.webp';
import teaimg from '../assets/images/tea.jpg';
import tulsiimg from '../assets/images/tulsi.png';
import tulsiImage from "../assets/images/tulsi.png"; // Replace with Tulsi image

const Introduction = () => {
  return (
    <div className="relative bg-[#c5e2b2] py-8 md:pb-12 px-6 md:px-12 lg:px-32 font-messiri md:mt-2">
      
      {/* Background Overlay with Opacity */}
      {/* <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${introbg})` }}
      ></div> */}

      {/* Content Wrapper to Ensure Visibility */}
      <div className="relative z-10">
        <h2 className="md:text-4xl text-4xl font-bold text-center text-gray-900 mb-6 md:pt-4">
          Ayurveda is the healing science of India
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Main Text */}
          <div className="md:col-span-3 text-gray-800 text-xl space-y-4">
            <p>
              Ayurvedic Wisdom is the healing science of ancient India. Ayurveda is more than healing; it is a way of life, a lifetime maintenance of the wonderful body you have been blessed with. It is only when you abuse this nature’s blessing that you are compelled to run to the doctors, further harming the body with drugs that may have side effects.
            </p>
            <p>
              The best part of Natural Healing (Ayurveda) is that there are no side effects, no unknown aftermath, or one part suffering to heal another. If there is no Positive Action the Ayurvedic way, there will never be any Negative Reaction.
            </p>
            <p>
              Ayurvedic wisdom helps you to be happy, laugh with love, be beautiful inside and out, be at peace, and maintain a healthy lifestyle. Ayurveda is the oldest known healing science from India.
            </p>
          </div>

          {/* Image 1 */}
          {/* <div className="flex-col justify-center m-auto">
            <img
              src={neemImage}
              alt="Ayurvedic Herbs"
              className="rounded-xl shadow-2xl w-full md:w-48 md:h-48"
            />
            <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4>
            <img
              src={ashwagandhaImage}
              alt="Ayurvedic Herbs"
              className="rounded-xl shadow-2xl w-full md:w-48 md:h-48"
            />
            <h4 className='text-green-800 text-center text-2xl font-bold'>Ashwagandha</h4>
          </div> */}
          
        </div>

        {/* Holy Basil Section */}
        <div className="grid md:grid-cols-3 gap-6 items-center mt-10">
          {/* Image 2 */}
          <div className="flex justify-center order-2 md:order-1">
            <img
              src={tulsiImage}
              alt="Holy Basil Tea"
              className="rounded-xl shadow-2xl w-full md:w-44 md:h-80"
            />
          </div>

          {/* Text Content */}
          <div className="md:col-span-2 text-gray-800 text-lg order-1 md:order-2 space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">HOLY BASIL (Tulsi)</h3>
            <p className='text-gray-900'>
              Holy Basil, or “Tulsi,” is a hero for diabetes or prediabetes conditions. Two to three leaves steeped in tea early in the morning can improve the functioning of beta cells in your pancreas, helping you produce more insulin and reduce fasting blood glucose levels.
            </p>
            <p className="font-semibold text-gray-800">
              Anti-inflammatory – Antidepressant – Lower blood pressure – Lower cholesterol – Help the heart – Heartburn/bloating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
