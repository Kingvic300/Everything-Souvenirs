
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore, useAuthStore } from '../store';
import useHydratedStore from '../hooks/useHydratedStore';
import ThemeToggle from './ThemeToggle';
import { CartIcon, UserIcon, HeartIcon, SearchIcon, LogoPlaceholder, XIcon } from './common/Icons';
import { products } from '../data/mockData';

const Header: React.FC = () => {
  const { isAuthenticated } = useAuthStore();
  // Fix: Explicitly type `state` as `any` to prevent TypeScript from inferring it as `unknown`.
  const totalItems = useHydratedStore(useCartStore, (state: any) => state.totalItems());

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = searchTerm ? products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 5) : [];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <LogoPlaceholder className="w-10 h-10" />
            <span className="font-serif text-2xl font-bold text-gray-800 dark:text-white hidden sm:block">Everything Souvenirs</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors ${isActive ? 'text-primary dark:text-primary-light font-semibold' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
                 <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light">
                    <SearchIcon className="w-6 h-6" />
                </button>
                <AnimatePresence>
                {isSearchOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-14 right-0 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
                    >
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for souvenirs..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                             <button onClick={() => setIsSearchOpen(false)} className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500">
                                <XIcon className="w-5 h-5"/>
                            </button>
                        </div>
                        {searchTerm && (
                            <ul className="mt-2">
                                {filteredProducts.length > 0 ? filteredProducts.map(p => (
                                    <li key={p.id}>
                                        <Link to={`/product/${p.id}`} onClick={() => setIsSearchOpen(false)} className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                                            <img src={p.images[0]} alt={p.name} className="w-10 h-10 rounded-md object-cover"/>
                                            <span className="text-sm text-gray-700 dark:text-gray-300">{p.name}</span>
                                        </Link>
                                    </li>
                                )) : <li className="p-2 text-sm text-gray-500">No results found.</li>}
                            </ul>
                        )}
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
            
            <Link to="/wishlist" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light">
              <HeartIcon className="w-6 h-6" />
            </Link>
            <Link to="/cart" className="relative text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light">
              <CartIcon className="w-6 h-6" />
              {totalItems !== undefined && totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link to={isAuthenticated ? '/dashboard' : '/auth'} className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light">
              <UserIcon className="w-6 h-6" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;