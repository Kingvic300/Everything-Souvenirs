import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

     const navigationLinks = [
          { name: 'Home', href: '/' },
          { name: 'Shop', href: '/shop' },
          { name: 'Services', href: '/services' },
          { name: 'About', href: '/about' },
          { name: 'Contact', href: '/contact' }
     ];

     return (
         <header className="bg-white shadow-md sticky top-0 z-50">          

              {/* Main Header */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                   <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link to="/" className="flex items-center space-x-2 group">
                             <div className="bg-indigo-600 p-2 rounded-lg group-hover:bg-indigo-700 transition-colors duration-200">
                                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                  </svg>
                             </div>
                             <span className="text-xl font-bold text-indigo-700 group-hover:text-indigo-800 transition-colors duration-200">
                                   Everything Souvenirs
                                   </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center space-x-8">
                             {navigationLinks.map((link) => (
                                 <Link
                                     key={link.name}
                                     to={link.href}
                                     className="relative text-slate-700 hover:text-indigo-600 font-medium transition-colors duration-200 group"
                                 >
                                      {link.name}
                                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
                                 </Link>
                             ))}
                        </nav>

                        {/* Desktop Buttons */}
                        <div className="hidden md:flex items-center space-x-3">
                             <Link
                                 to="/quote"
                                 className="bg-emerald-500 text-indigo-900 px-6 py-2 rounded-lg font-semibold
                         hover:bg-emerald-600 active:bg-emerald-700 active:scale-95
                         transition duration-150 ease-in-out shadow hover:shadow-md transform"
                             >
                                  Get Quote
                             </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="md:hidden">
                             <button
                                 onClick={toggleMenu}
                                 className="text-slate-700 hover:text-indigo-600 transition duration-200"
                                 aria-label="Toggle menu"
                             >
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                       {isMenuOpen ? (
                                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                       ) : (
                                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                       )}
                                  </svg>
                             </button>
                        </div>
                   </div>
              </div>

              {/* Mobile Menu */}
              <div
                  className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white border-t border-slate-200 ${
                      isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                   <div className="px-4 py-4 space-y-3">
                        {navigationLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="block text-slate-700 hover:text-indigo-600 font-medium py-2 transition"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                 {link.name}
                            </Link>
                        ))}

                        {/* Auth Buttons */}
                        <div className="pt-3 border-t border-slate-200 space-y-2">
                             <Link
                                 to="/signin"
                                 className="block w-full text-center border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg font-medium
                         hover:bg-indigo-50 active:scale-95 transition duration-150 ease-in-out transform"
                                 onClick={() => setIsMenuOpen(false)}
                             >
                                  Sign In
                             </Link>
                             <Link
                                 to="/signup"
                                 className="block w-full text-center bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium
                         hover:bg-indigo-700 active:bg-indigo-800 active:scale-95 transition duration-150 ease-in-out transform"
                                 onClick={() => setIsMenuOpen(false)}
                             >
                                  Sign Up
                             </Link>
                        </div>

                        <div className="pt-4 border-t border-slate-200">
                             <Link
                                 to="/quote"
                                 className="block bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 active:scale-95
                         text-indigo-900 text-center px-6 py-3 rounded-lg font-semibold transition duration-150 ease-in-out transform"
                                 onClick={() => setIsMenuOpen(false)}
                             >
                                  Get Quote
                             </Link>
                        </div>
                   </div>
              </div>
         </header>
     );
};

export default Header;
