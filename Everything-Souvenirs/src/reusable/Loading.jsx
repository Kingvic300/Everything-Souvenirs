import React from "react";
import { FaGift } from "react-icons/fa";

const Loading = () => {
     return (
         <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 text-purple-800">
              <div className="relative flex items-center justify-center mb-6">
                   <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500 border-solid"></div>
                   <FaGift className="absolute text-3xl text-pink-500" />
              </div>
              <p className="text-2xl font-bold tracking-wide">Wrapping up your gift...</p>
         </div>
     );
};

export default Loading;
