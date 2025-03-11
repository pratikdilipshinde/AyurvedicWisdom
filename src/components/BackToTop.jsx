import React, { useState, useEffect } from "react";
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-orange-500 text-white p-3 rounded-full shadow-2xl ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } hover:bg-orange-500 hover:shadow-2xl transition-transform transform hover:scale-125`}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
