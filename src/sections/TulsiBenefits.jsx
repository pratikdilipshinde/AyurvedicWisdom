import React from "react";

import tulsi1 from "../assets/images/intro-img1.jpg";
import tulsi2 from "../assets/images/diabetes.jpg";
import tulsi3 from "../assets/images/protectheart.jpg";
import tulsi4 from "../assets/images/stressheadache.jpg";
import tulsi5 from "../assets/images/kidneystone.jpg";
import tulsi6 from "../assets/images/curecancer.jpg";
import tulsi7 from "../assets/images/quitsmoking.jpg";
import tulsi8 from "../assets/images/skinandhair.jpg";
import tulsi9 from "../assets/images/respiratory.jpg";
import tulsibg from '../assets/images/green-bg.jpg';
import neemImage from "../assets/images/neem-leaf.png"; // Replace with Neem image
import ashwagandhaImage from "../assets/images/Ashwagandha.png"; // Replace with Ashwagandha image

const TulsiBenefits = () => {
  const benefits = [
    { title: "Cures Fever", img: tulsi1, description: "Tulsi has very potent germicidal, fungicidal, anti-bacterial and antibiotic properties that are great for resolving fevers – common infections – even Malaria." },
    { title: "Regulates Blood Sugar", img: tulsi2, description: "Essential oils that produce Eugenol, Methyl and Caryophyllene that help the pancreatic beta cells function properly. This in turn helps to lower one’s blood sugar and treat diabetes effectively." },
    { title: "Protects the Heart", img: tulsi3, description: "Eugenol in Tulsi helps maintain heart health by controlling blood pressure and cholesterol. Chewing Tulsi leaves daily on an empty stomach aids in preventing heart issues." },
    { title: "Reduces Stress & Cures Headaches", img: tulsi4, description: "Tulsi regulates cortisol levels, soothes nerves, and relieves headaches from sinusitis, allergies, colds, or migraines. Apply a Tulsi-infused warm towel to the forehead for relief." },
    { title: "Dissolves Kidney Stones", img: tulsi5, description: "Tulsi supports kidney health by reducing uric acid, breaking down kidney stones, and easing pain. Drinking Tulsi juice with honey daily for six months aids in kidney stone relief." },
    { title: "Fights Cancer", img: tulsi6, description: "Helps stop the progression of breast cancer and oral cancer. This is because its compounds restrict the flow of blood to the tumor by attacking the blood vessels." },
    { title: "Helps Quit Smoking", img: tulsi7, description: "It helps by lowering stress that leads to the urge to smoke. It also has a cooling effect on the throat just like menthol drops." },
    { title: "Healthy Skin & Hair", img: tulsi8, description: "When eaten raw, it purifies the blood giving the skin a beautiful glow, and prevents the appearance of acne and blemishes. Mix the powder in coconut oil and apply regularly to the scalp to prevent hair fall." },
    
  ];

  const benefit_last = [
    { title: "Relieves Respiratory Issues", img: tulsi9, description: "Tulsi boosts immunity, suppresses cough, and expels phlegm, providing relief from colds, bronchitis, and respiratory issues. Its essential oils, including camphene, Eugenol, and Cineole, help treat allergic respiratory disorders." },
  ];

  return (
    <div className="font-messiri bg-[#c5e2b2] pb-2 pt-1 px-2 md:px-4 lg:px-4">
      <h2 className="text-5xl font-bold text-center text-gray-900 mb-8">Health Benefits of Tulsi</h2>

      {/* Card Grid */}
      <div className="grid md:grid-cols-4 gap-4 px-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-green-800 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105">
            {/* <div className="overflow-hidden rounded-t-3xl">
              <img src={benefit.img} alt={benefit.title} className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110" />
            </div> */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white text-center">{benefit.title}</h3>
              <h4 className="text-white mt-2 text-base">{benefit.description}</h4>
              {/* <a href="#" className="mt-4 block text-indigo-600 font-semibold hover:text-indigo-800">Read More</a> */}
            </div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-2 mt-10 px-4 md:px-32">
        <div className="flex-col justify-center m-auto">
          <img
              src={neemImage}
              alt="Neem Leaf"
              className="rounded-xl shadow-2xl w-96 md:w-52 md:h-52 bg-green-200 bg-opacity-40 overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105"
            />
          <h4 className='text-green-800 text-center text-3xl md:text-2xl font-bold mt-4'>Neem Leaf</h4>
        </div>
        <div className="flex-col justify-center m-auto">
          {benefit_last.map((benefit, index) => (
            <div key={index} className="bg-green-800 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105">
              {/* <div className="overflow-hidden rounded-t-3xl">
                <img src={benefit.img} alt={benefit.title} className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110" />
              </div> */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white text-center">{benefit.title}</h3>
                <h4 className="text-white mt-2 text-base">{benefit.description}</h4>
                {/* <a href="#" className="mt-4 block text-indigo-600 font-semibold hover:text-indigo-800">Read More</a> */}
              </div>
            </div>
          ))}
        </div>
        <div className="flex-col justify-center m-auto">
          <img
              src={ashwagandhaImage}
              alt="Ashwagandha"
              className="rounded-xl shadow-2xl w-96 md:w-52 md:h-52 bg-green-200 bg-opacity-40 overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105"
            />
          <h4 className='text-green-800 text-center text-3xl md:text-2xl font-bold mt-4'>Ashwagandha</h4>
        </div>
      </div>
      <div>
        <h3 className="p-4 font-messiri text-base md:text-sm text-green-800 font-normal mt-8 rounded-2xl text-center"><b>Disclaimer:</b> This web site is a collection of material I have received over the years from loved ones, friends, well-wishers and like-minded people who believe in life as a wonderful gift of God. A gift we need to honor and preserve with health, happiness and self respect. If any material infringes on your copyright, please inform us through Email mentioned below and we will remove it.</h3>
      </div>
    </div>
  );
};

export default TulsiBenefits;


// import React from 'react';
// import {
//   ExclamationCircleIcon,
//   AdjustmentsHorizontalIcon,
//   HeartIcon,
//   FaceSmileIcon,
//   CloudIcon,
//   ShieldCheckIcon,
//   NoSymbolIcon,
//   SparklesIcon,
//   ExclamationTriangleIcon
// } from "@heroicons/react/24/outline";
// import tulsiBackground from '../assets/images/tulsi.png';

// const TulsiBenefits = () => {
//   const benefits = [
//     { title: "Cures Fever", description: "Fights infections & Malaria with antibacterial properties.", icon: <ExclamationCircleIcon className="w-16 h-16 text-red-500" /> },
//     { title: "Regulates Blood Sugar", description: "Supports insulin production for diabetes management.", icon: <AdjustmentsHorizontalIcon className="w-16 h-16 text-blue-500" /> },
//     { title: "Protects the Heart", description: "Lowers blood pressure & cholesterol levels.", icon: <HeartIcon className="w-16 h-16 text-red-600" /> },
//     { title: "Reduces Stress", description: "Balances cortisol levels, promoting relaxation.", icon: <FaceSmileIcon className="w-16 h-16 text-yellow-500" /> },
//     { title: "Dissolves Kidney Stones", description: "Acts as a diuretic and detoxifier for kidney health.", icon: <CloudIcon className="w-16 h-16 text-blue-400" /> },
//     // { title: "Fights Cancer", description: "Restricts tumor growth by blocking blood supply.", icon: <ShieldCheckIcon className="w-16 h-16 text-green-500" /> },
//     { title: "Helps Quit Smoking", description: "Reduces stress-induced smoking urges & soothes the throat.", icon: <NoSymbolIcon className="w-16 h-16 text-gray-500" /> },
//     { title: "Healthy Skin & Hair", description: "Purifies blood for glowing skin & prevents hair loss.", icon: <SparklesIcon className="w-16 h-16 text-pink-400" /> },
//     { title: "Respiratory Relief", description: "Eases cough, bronchitis & other respiratory conditions.", icon: <CloudIcon className="w-16 h-16 text-blue-500" /> },
//     { title: "Relieves Headaches", description: "Treats migraines, sinus headaches, and cold symptoms.", icon: <ExclamationTriangleIcon className="w-16 h-16 text-orange-400" /> },
//   ];

//   return (
//     <div 
//       className="font-messiri relative py-16 px-6 md:px-16 lg:px-32 bg-gray-100" 
//       style={{ backgroundImage: `url(${tulsiBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//     >
//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-30"></div>

//       <div className="relative z-10">
//         <h2 className="text-4xl font-bold text-center text-white mb-8">
//           Medicinal Benefits of Tulsi
//         </h2>

//         {/* Benefits Grid */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {benefits.map((benefit, index) => (
//             <div 
//               key={index} 
//               className="flex items-start bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105"
//             >
//               {/* Heroicons Instead of Images */}
//               <div className="mr-4">{benefit.icon}</div>
//               <div>
//                 <h3 className="text-xl font-semibold">{benefit.title}</h3>
//                 <p className="text-gray-600">{benefit.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TulsiBenefits;
