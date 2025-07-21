import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
     return (
         <div className="h-screen flex flex-col items-center justify-center bg-white text-center px-4">
              <h1 className="text-6xl font-bold text-indigo-700 mb-4">404</h1>
              <p className="text-lg text-black mb-6">Oops! The page you're looking for doesn't exist.</p>
              <Link
                  to="/"
                  className="inline-block bg-indigo-700 text-white px-6 py-3 rounded hover:bg-indigo-800 transition"
              >
                   Go Back Home
              </Link>
         </div>
     );
};

export default NotFound;
