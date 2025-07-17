import React from "react";

const Loading = () => {
     return (
         <div className="flex flex-col items-center justify-center h-screen text-gray-700">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-700 border-solid mb-4"></div>
              <p className="text-xl font-semibold">Loading...</p>
         </div>
     );
};

export default Loading;
