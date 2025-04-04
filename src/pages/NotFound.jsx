import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center p-10 min-h-80 flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
