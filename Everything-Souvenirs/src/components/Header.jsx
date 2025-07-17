import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
     };

     const navigationLinks = [
          { name: 'Home', href: '/' },
          { name: 'Shop', href: '/shop' },
          { name: 'Services', href: '/services' },
          { name: 'About', href: '/about' },
          { name: 'Contact', href: '/contact' }
     ];

     return (
         <header className="bg-white shadow-lg sticky top-0 z-50">
              {/* Top Promo Bar */}
              <div className="bg-indigo-600 text-white text-center py-2 px-4">
                   <p className="text-sm font-medium">
                        🎉 Special Offer: 20% off all custom gift sets! Use code: <span className="font-bold">GIFT20</span>
                   </p>
              </div>

              {/* Main Header */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                   <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                             <Link to="/" className="flex items-center space-x-2 group">
                                  <div className="bg-indigo-600 p-2 rounded-lg group-hover:bg-indigo-700 transition-colors duration-200">
                                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                       </svg>
                                  </div>
                                  <span className="text-2xl font-bold text-indigo-700 group-hover:text-indigo-800 transition-colors duration-200">
                                        Everything Souvenirs
                                   </span>
                             </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                             {navigationLinks.map((link) => (
                                 <Link
                                     key={link.name}
                                     to={link.href}
                                     className="text-slate-700 hover:text-indigo-600 font-medium transition-colors duration-200 relative group"
                                 >
                                      {link.name}
                                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
                                 </Link>
                             ))}
                        </nav>

                        {/* Desktop CTA Button */}
                        <div className="hidden md:flex items-center space-x-4">
                             <Link
                                 to="/quote"
                                 className="bg-emerald-500 hover:bg-emerald-600 text-indigo-900 px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                             >
                                  Get Quote
                             </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                             <button
                                 onClick={toggleMenu}
                                 className="text-slate-700 hover:text-indigo-600 focus:outline-none focus:text-indigo-600 transition-colors duration-200"
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
              <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-t border-slate-200`}>
                   <div className="px-4 py-4 space-y-3">
                        {navigationLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="block text-slate-700 hover:text-indigo-600 font-medium py-2 transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                 {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-slate-200">
                             <Link
                                 to="/quote"
                                 className="block bg-emerald-500 hover:bg-emerald-600 text-indigo-900 text-center px-6 py-3 rounded-lg font-semibold transition-all duration-200"
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
