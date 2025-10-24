import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
     return (
         <div className="relative min-h-screen overflow-x-hidden flex flex-col transition-colors duration-300">

              {/* Fixed Header */}
              <div className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow-md transition-colors duration-300">
                   <Header />
              </div>

              {/* Main Content */}
              <main className="flex-grow relative z-10 pt-[80px]">
                   <div className="max-w-6xl mx-auto">
                        {/* Ensure last child has no bottom spacing */}
                        <div className="[&>*:last-child]:mb-0 [&>*:last-child]:pb-0">
                             <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-md transition-colors duration-300">
                                  {children}
                             </div>
                        </div>
                   </div>
              </main>

              {/* Footer */}
              <div className="relative z-10 m-0 p-0">
                   <Footer />
              </div>
         </div>
     );
};

export default Layout;
