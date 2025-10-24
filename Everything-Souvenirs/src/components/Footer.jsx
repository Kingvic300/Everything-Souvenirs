import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../libs/data.js";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 dark:from-gray-950 dark:to-black text-white mt-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto pt-6 px-4 sm:px-5 lg:pt-8 py-9">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Everything Souvenirs</h3>
            <p className="text-slate-400 dark:text-slate-500 text-sm leading-relaxed">
              Discover unique, customizable souvenirs for every occasion.
              Thoughtfully crafted with love and creativity to make every gift special.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-slate-300 dark:text-slate-400 text-sm">
              {["Home", "About", "Products", "Contact"].map((label) => (
                <li key={label}>
                 <Link
                    to={label.toLowerCase() === "home" ? "/" : `/${label.toLowerCase()}`}
                    className="hover:text-emerald-400 dark:hover:text-emerald-300 transition duration-200"
               >
                    {label}
               </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <p className="text-slate-400 dark:text-slate-500 text-sm mb-4">
              Subscribe to get the latest updates, promotions, and exclusive deals.
            </p>
            <form className="flex flex-col sm:flex-row w-full max-w-sm mx-auto md:mx-0">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-4 py-2 rounded-t-md sm:rounded-t-none sm:rounded-l-md bg-slate-800 dark:bg-gray-900 text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-emerald-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 px-4 py-2 rounded-b-md sm:rounded-b-none sm:rounded-r-md text-white text-sm font-semibold transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 dark:text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Everything Souvenirs. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 dark:text-slate-500 hover:text-emerald-400 dark:hover:text-emerald-300 transition transform hover:scale-110"
                aria-label={name}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center space-x-4 text-sm text-slate-400 dark:text-slate-500">
            {["Privacy", "Terms", "Cookies"].map((label) => (
              <Link
                key={label}
                to={`/${label.toLowerCase()}`}
                className="hover:text-emerald-400 dark:hover:text-emerald-300 transition"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
