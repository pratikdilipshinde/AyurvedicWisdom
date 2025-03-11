// import React from "react";

// const FloatingMenu = ({ menuItems }) => {
//   return (
//     <div className="sticky top-32 left-0 w-full bg-green-800 text-white shadow-lg rounded-lg p-4 border border-gray-200">
//       <h3 className="text-lg font-bold mb-2 text-center">Menu</h3>
//       <ul className="space-y-2">
//         {menuItems.map((item, index) => (
//           <li key={index} className="p-2 hover:bg-green-100 hover:text-green-950 cursor-pointer rounded">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FloatingMenu;

import React from "react";
import { Link } from "react-scroll";

const FloatingMenu = ({ menuItems, activeSection }) => {
  return (
    <div className="sticky top-32 left-0 w-full bg-green-800 text-white shadow-lg rounded-lg p-4 border border-gray-200">
      <h3 className="text-lg font-bold mb-2 text-center">Content</h3>
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item}
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className={`block p-2 rounded cursor-pointer transition-all ${
                activeSection === item ? "bg-[#c5e2b2] text-green-950 font-bold" : "hover:bg-green-100 hover:text-green-950"
              }`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FloatingMenu;
