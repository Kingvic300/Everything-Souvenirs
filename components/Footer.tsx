
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogoPlaceholder, FacebookIcon, InstagramIcon, TwitterIcon } from './common/Icons';
import { useToastStore } from '../store';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const { addToast } = useToastStore();

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim() === '' || !email.includes('@')) {
            addToast('Please enter a valid email.', 'error');
            return;
        }
        console.log(`Newsletter signup: ${email}`);
        addToast("Thank you for subscribing!", 'success');
        setEmail('');
    }

    const socialLinks = [
        { name: 'Facebook', icon: FacebookIcon, href: '#' },
        { name: 'Instagram', icon: InstagramIcon, href: '#' },
        { name: 'Twitter', icon: TwitterIcon, href: '#' },
    ];

  return (
    <footer className="bg-primary-light dark:bg-gray-800 text-gray-700 dark:text-gray-300 mt-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
             <Link to="/" className="flex items-center gap-2">
                <LogoPlaceholder className="w-12 h-12"/>
                <span className="font-serif text-2xl font-bold text-gray-800 dark:text-white">Everything Souvenirs</span>
             </Link>
            <p className="text-sm">Bringing the world's treasures to your doorstep. Curated with love, delivered with care.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Shop</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">My Account</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe for updates and special offers.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg sm:rounded-r-none border-0 text-gray-800 focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-gray-200" 
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-primary text-white px-4 py-2 mt-2 sm:mt-0 rounded-lg sm:rounded-l-none hover:bg-primary-dark transition-colors font-semibold"
              >
                Go
              </motion.button>
            </form>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <motion.a 
                    key={social.name}
                    href={social.href} 
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light"
                >
                    <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-8 pt-8 border-t border-primary-dark/20 dark:border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Everything Souvenirs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
