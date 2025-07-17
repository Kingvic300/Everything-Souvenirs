import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const products = [
     {
          id: 1,
          name: 'Branded T-Shirt',
          price: '₦7,500',
          image: 'https://via.placeholder.com/300x200?text=T-Shirt',
          category: 'Apparel',
          description: 'Premium cotton t-shirt with custom branding',
     },
     {
          id: 2,
          name: 'Custom Mug',
          price: '₦3,000',
          image: 'https://via.placeholder.com/300x200?text=Mug',
          category: 'Drinkware',
          description: 'Ceramic mug perfect for office branding',
     },
     {
          id: 3,
          name: 'Key Holder',
          price: '₦1,500',
          image: 'https://via.placeholder.com/300x200?text=Key+Holder',
          category: 'Accessories',
          description: 'Durable key holder with logo engraving',
     },
     {
          id: 4,
          name: 'Custom Cap',
          price: '₦5,000',
          image: 'https://via.placeholder.com/300x200?text=Cap',
          category: 'Apparel',
          description: 'Adjustable cap with embroidered logo',
     },
     {
          id: 5,
          name: 'Branded Notebook',
          price: '₦4,000',
          image: 'https://via.placeholder.com/300x200?text=Notebook',
          category: 'Office',
          description: 'Professional notebook for corporate gifts',
     },
     {
          id: 6,
          name: 'USB Flash Drive',
          price: '₦6,000',
          image: 'https://via.placeholder.com/300x200?text=USB',
          category: 'Tech',
          description: '16GB USB drive with custom logo',
     },
     {
          id: 7,
          name: 'Tote Bag',
          price: '₦8,000',
          image: 'https://via.placeholder.com/300x200?text=Tote+Bag',
          category: 'Bags',
          descriptionOOT: 'Bag',
          description: 'Eco-friendly tote bag with custom printing',
     },
     {
          id: 8,
          name: 'Water Bottle',
          price: '₦5,500',
          image: 'https://via.placeholder.com/300x200?text=Water+Bottle',
          category: 'Drinkware',
          description: 'Stainless steel water bottle with logo',
     },
     {
          id: 9,
          name: 'Power Bank',
          price: '₦12,000',
          image: 'https://via.placeholder.com/300x200?text=Power+Bank',
          category: 'Tech',
          description: 'High-capacity power bank with branding',
     },
     {
          id: 10,
          name: 'Lanyard',
          price: '₦2,500',
          image: 'https://via.placeholder.com/300x200?text=Lanyard',
          category: 'Accessories',
          description: 'Custom lanyard with logo for events',
     },
     {
          id: 11,
          name: 'Branded Hoodie',
          price: '₦15,000',
          image: 'https://via.placeholder.com/300x200?text=Hoodie',
          category: 'Apparel',
          description: 'Cozy hoodie with embroidered logo',
     },
     {
          id: 12,
          name: 'Desk Organizer',
          price: '₦10,000',
          image: 'https://via.placeholder.com/300x200?text=Desk+Organizer',
          category: 'Office',
          description: 'Stylish desk organizer with custom branding',
     },
];

const categories = [
     { name: 'Apparel', icon: '👕', count: 15, description: 'T-shirts, caps, and clothing' },
     { name: 'Drinkware', icon: '☕', count: 10, description: 'Mugs, bottles, and tumblers' },
     { name: 'Tech', icon: '💻', count: 18, description: 'USB drives, power banks, accessories' },
     { name: 'Office', icon: '📝', count: 22, description: 'Notebooks, pens, desk accessories' },
     { name: 'Bags', icon: '🎒', count: 12, description: 'Tote bags, backpacks, pouches' },
     { name: 'Accessories', icon: '🔑', count: 20, description: 'Keychains, lanyards, badges' },
];

const reviews = [
     {
          id: 1,
          name: 'Sarah Johnson',
          company: 'TechCorp Ltd',
          rating: 5,
          text: 'Amazing quality branded merchandise! Our employees love the custom t-shirts and mugs. Fast delivery and excellent customer service.',
          avatar: 'https://via.placeholder.com/60?text=SJ',
          date: 'Jul 17, 2025',
     },
     {
          id: 2,
          name: 'Michael Chen',
          company: 'StartupHub',
          rating: 5,
          text: 'Perfect for our company event giveaways. The USB drives were a huge hit with attendees. Will definitely order again!',
          avatar: 'https://via.placeholder.com/60?text=MC',
          date: 'Jul 10, 2025',
     },
     {
          id: 3,
          name: 'Emily Rodriguez',
          company: 'Creative Agency',
          rating: 4,
          text: 'Great selection of products and customization options. The tote bags turned out exactly as we envisioned for our brand.',
          avatar: 'https://via.placeholder.com/60?text=ER',
          date: 'Jul 12, 2025',
     },
     {
          id: 4,
          name: 'David Okeke',
          company: 'EventMasters',
          rating: 5,
          text: 'The branded caps were a hit at our conference. High-quality and beautifully designed!',
          avatar: 'https://via.placeholder.com/60?text=DO',
          date: 'Jul 15, 2025',
     },
     {
          id: 5,
          name: 'Aisha Bello',
          company: 'WeddingPlanners',
          rating: 4,
          text: 'The water bottles made perfect wedding favors. The customization process was seamless!',
          avatar: 'https://via.placeholder.com/60?text=AB',
          date: 'Jul 11, 2025',
     },
     {
          id: 6,
          name: 'Chidi Nwosu',
          company: 'MarketPros',
          rating: 5,
          text: 'Outstanding service and quality. The notebooks elevated our corporate gifts!',
          avatar: 'https://via.placeholder.com/60?text=CN',
          date: 'Jul 9, 2025',
     },
];

const Shop = () => {
     const [selectedCategory, setSelectedCategory] = useState('All');
     const [newsletterEmail, setNewsletterEmail] = useState('');
     const [newsletterName, setNewsletterName] = useState('');
     const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

     const filteredProducts = selectedCategory === 'All'
         ? products
         : products.filter((product) => product.category === selectedCategory);

     const handleNewsletterSubmit = (e) => {
          e.preventDefault();
          setNewsletterSubmitted(true);
          setNewsletterEmail('');
          setNewsletterName('');
          setTimeout(() => setNewsletterSubmitted(false), 3000);
     };

     return (
         <>
              <Header />

              {/* Hero Section */}
              <div className="bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900 text-white py-16 px-6">
                   <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                             Welcome to Our <span className="text-emerald-300">Shop</span>
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-blue-100">
                             Browse our premium branded gift items. Perfect for giveaways, souvenirs, and loyalty rewards.
                        </p>
                   </div>
              </div>

              <div className="bg-slate-50">
                   {/* Categories */}
                   <section className="py-16 px-6">
                        <div className="max-w-7xl mx-auto">
                             <div className="text-center mb-12">
                                  <h2 className="text-4xl font-bold text-slate-900 mb-4">Shop by Category</h2>
                                  <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                                       Find exactly what you need from our organized product categories
                                  </p>
                             </div>

                             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
                                  {categories.map((category) => (
                                      <div
                                          key={category.name}
                                          onClick={() => setSelectedCategory(category.name)}
                                          className={`group cursor-pointer bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                                              selectedCategory === category.name
                                                  ? 'border-blue-500 bg-blue-50'
                                                  : 'border-slate-200 hover:border-blue-300'
                                          }`}
                                      >
                                           <div className="text-center">
                                                <div className="text-4xl mb-3">{category.icon}</div>
                                                <h3 className="font-bold text-slate-900 mb-1">{category.name}</h3>
                                                <p className="text-sm text-slate-600 mb-2">{category.description}</p>
                                                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                                     {category.count} items
                                                </span>
                                           </div>
                                      </div>
                                  ))}
                             </div>

                             <div className="text-center">
                                  <button
                                      onClick={() => setSelectedCategory('All')}
                                      className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                                          selectedCategory === 'All'
                                              ? 'bg-blue-600 text-white'
                                              : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                                      }`}
                                  >
                                       Show All Products
                                  </button>
                             </div>
                        </div>
                   </section>

                   {/* Promo Banner */}
                   <section className="bg-emerald-400 text-gray-800 py-4 px-6 text-center">
                        <p className="text-lg font-semibold">
                             Limited Offer: Get 20% off on orders over ₦100,000! Use code <span className="font-bold">BRAND20</span>
                        </p>
                   </section>

                   {/* Products Grid */}
                   <section className="py-16 px-6">
                        <div className="max-w-7xl mx-auto">
                             <div className="text-center mb-12">
                                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                                       {selectedCategory === 'All' ? 'All Products' : `${selectedCategory} Products`}
                                  </h2>
                                  <p className="text-xl text-slate-600">{filteredProducts.length} products available</p>
                             </div>

                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                  {filteredProducts.map((product) => (
                                      <div
                                          key={product.id}
                                          className="group bg-white shadow-sm hover:shadow-xl rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
                                      >
                                           <div className="relative overflow-hidden">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute top-4 right-4">
                                                     <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold">
                                                          {product.category}
                                                     </span>
                                                </div>
                                           </div>
                                           <div className="p-6">
                                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                     {product.name}
                                                </h3>
                                                <p className="text-slate-600 mb-3 text-sm">{product.description}</p>
                                                <div className="flex items-center justify-between">
                                                     <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                                                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105">
                                                          Add to Cart
                                                     </button>
                                                </div>
                                           </div>
                                      </div>
                                  ))}
                             </div>
                        </div>
                   </section>

                   {/* Second Promo */}
                   <section className="bg-blue-600 text-white py-4 px-6 text-center">
                        <p className="text-lg font-semibold">Free Shipping on Orders Over ₦50,000! Shop Now and Save!</p>
                   </section>
              </div>

              <Footer />
         </>
     );
};

     export default Shop;