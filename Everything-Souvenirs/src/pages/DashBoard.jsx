import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, testimonials } from '../libs/data.js';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Dashboard = () => {
     const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

     const handleNewsletterSubmit = (e) => {
          e.preventDefault();
          setNewsletterSubmitted(true);
          setTimeout(() => setNewsletterSubmitted(false), 3000);
     };

     const extendedProducts = [
          ...products,
          {
               id: 9,
               name: 'Branded Wireless Charger',
               price: '$29.99',
               image: 'https://via.placeholder.com/300x200?text=Wireless+Charger',
               description: 'Sleek wireless charger with custom logo.',
          },
          {
               id: 10,
               name: 'Custom Hoodie',
               price: '$39.99',
               image: 'https://via.placeholder.com/300x200?text=Hoodie',
               description: 'Cozy hoodie with embroidered branding.',
          },
     ];

     const extendedTestimonials = [
          ...testimonials,
          {
               id: 7,
               name: 'Lisa Taylor',
               company: 'CreativeCo',
               text: 'The branded water bottles were a fantastic addition to our team retreat. Everyone loved the eco-friendly design!',
               date: 'Jul 15, 2025',
               rating: 5,
               avatar: 'https://via.placeholder.com/40?text=Lisa',
          },
          {
               id: 8,
               name: 'Robert Chen',
               company: 'InnovateTech',
               text: 'The desk organizers added a professional touch to our office gifts. Excellent quality and service!',
               date: 'Jul 8, 2025',
               rating: 4,
               avatar: 'https://via.placeholder.com/40?text=Robert',
          },
     ];

     return (
         <>
              <Header/>
              <div className="bg-slate-50 text-slate-800 min-h-screen">
                   {/* Hero Section */}
                   <section
                       className="bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900 text-white py-24 px-6 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10 max-w-6xl mx-auto">
                             <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                                  Welcome to <span className="text-emerald-300">Everything Souvenirs</span>
                             </h1>
                             <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed text-indigo-100">
                                  Premium gift branding for corporate events, weddings, product launches, and more.
                             </p>
                             <Link
                                 to="/shop"
                                 className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-indigo-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                             >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                             d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                                  </svg>
                                  Shop Now
                             </Link>
                        </div>
                   </section>

                   {/* Promo Banners */}
                   <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-2 text-center text-sm font-medium">
                             <div className="bg-emerald-50 text-amber-700 py-2 px-3 border-l-2 border-emerald-300">
                                  💰 20% off $100+ — <span className="font-semibold">Use: BRAND20</span>
                             </div>
                             <div className="bg-blue-50 text-blue-700 py-2 px-3 border-l-2 border-blue-300">
                                  🚚 Free Shipping over $50!
                             </div>
                             <div className="bg-emerald-50 text-emerald-700 py-2 px-3 border-l-2 border-emerald-300">
                                  🎁 15% Off Gift Sets — <span className="font-semibold">Use: GIFT15</span>
                             </div>
                        </div>
                   </div>


                   {/* Featured Products */}
                   <section className="py-20 px-6">
                        <div className="max-w-7xl mx-auto">
                             <div className="text-center mb-16">
                                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Featured
                                       Products</h2>
                                  <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">Discover our
                                       most popular branded gifts that make lasting impressions</p>
                             </div>
                             <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                                  {extendedProducts.map((product) => (
                                      <div key={product.id}
                                           className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200">
                                           <div className="relative overflow-hidden">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div
                                                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                           </div>
                                           <div className="p-6">
                                                <h3 className="text-xl font-bold text-indigo-700 mb-2 group-hover:text-indigo-800 transition-colors">{product.name}</h3>
                                                <p className="text-2xl font-bold text-slate-900 mb-2">{product.price}</p>
                                                <p className="text-slate-600 mb-4 leading-relaxed">{product.description}</p>
                                                <Link
                                                    to={`/product/${product.id}`}
                                                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
                                                >
                                                     View Details
                                                     <svg className="w-4 h-4" fill="none" stroke="currentColor"
                                                          viewBox="0 0 24 24">
                                                          <path strokeLinecap="round" strokeLinejoin="round"
                                                                strokeWidth={2} d="M9 5l7 7-7 7"/>
                                                     </svg>
                                                </Link>
                                           </div>
                                      </div>
                                  ))}
                             </div>
                        </div>
                   </section>

                   {/* Services Section */}
                   <section className="py-20 px-6 bg-white">
                        <div className="max-w-6xl mx-auto">
                             <div className="text-center mb-16">
                                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Our
                                       Featured Services</h2>
                                  <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">Comprehensive
                                       branding solutions tailored to your needs</p>
                             </div>
                             <div className="grid gap-8 md:grid-cols-3">
                                  {[
                                       {
                                            title: 'Custom Gift Sets',
                                            description: 'Create curated branded packages for your team, partners or customers.',
                                            icon: '🎁'
                                       },
                                       {
                                            title: 'Corporate Branding',
                                            description: 'Put your logo on mugs, pens, flash drives, notebooks and more.',
                                            icon: '🏢'
                                       },
                                       {
                                            title: 'Event Giveaways',
                                            description: 'Stand out at weddings, product launches, and conferences with branded gifts.',
                                            icon: '🎉'
                                       }
                                  ].map((service, index) => (
                                      <div key={index}
                                           className="group bg-slate-50 hover:bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-indigo-200">
                                           <div className="text-4xl mb-4">{service.icon}</div>
                                           <h3 className="text-2xl font-bold mb-4 text-indigo-700 group-hover:text-indigo-800 transition-colors">{service.title}</h3>
                                           <p className="text-slate-600 leading-relaxed">{service.description}</p>
                                      </div>
                                  ))}
                             </div>
                        </div>
                   </section>

                   {/* Why Choose Us */}
                   <section className="py-20 px-6 bg-gradient-to-br from-slate-100 to-slate-200">
                        <div className="max-w-6xl mx-auto">
                             <div className="text-center mb-16">
                                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Why
                                       Choose Everything Souvenirs?</h2>
                                  <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">The reasons
                                       our clients trust us with their most important branding needs</p>
                             </div>
                             <div className="grid gap-8 md:grid-cols-3 text-center">
                                  {[
                                       {
                                            title: "Premium Quality",
                                            description: "High-quality materials and printing for lasting impressions.",
                                            icon: "⭐"
                                       },
                                       {
                                            title: "Fast Turnaround",
                                            description: "Quick delivery to meet your event deadlines.",
                                            icon: "⚡"
                                       },
                                       {
                                            title: "Custom Designs",
                                            description: "Tailored solutions to match your brand's vision.",
                                            icon: "🎨"
                                       }
                                  ].map((feature, i) => (
                                      <div key={i}
                                           className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                           <div className="text-5xl mb-6">{feature.icon}</div>
                                           <h3 className="text-2xl font-bold mb-4 text-indigo-700 group-hover:text-indigo-800 transition-colors">{feature.title}</h3>
                                           <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                      </div>
                                  ))}
                             </div>
                        </div>
                   </section>

                   {/* Testimonials */}
                   <section className="bg-white py-20 px-6">
                        <div className="max-w-7xl mx-auto">
                             <div className="text-center mb-16">
                                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">What
                                       Our Customers Say</h2>
                                  <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">Real feedback
                                       from satisfied clients who chose Everything Souvenirs</p>
                             </div>
                             <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
                                  {extendedTestimonials.map((t) => (
                                      <div key={t.id}
                                           className="group bg-slate-50 hover:bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-indigo-200">
                                           <div className="flex items-center mb-6">
                                                <img src={t.avatar} alt={t.name}
                                                     className="w-12 h-12 rounded-full mr-4 ring-2 ring-indigo-100"/>
                                                <div className="flex">
                                                     {[...Array(t.rating)].map((_, i) => (
                                                         <svg key={i} className="w-5 h-5 text-amber-400"
                                                              fill="currentColor" viewBox="0 0 20 20">
                                                              <path
                                                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                         </svg>
                                                     ))}
                                                </div>
                                           </div>
                                           <blockquote
                                               className="text-slate-700 italic mb-6 text-lg leading-relaxed">"{t.text}"
                                           </blockquote>
                                           <div className="border-t border-slate-200 pt-4">
                                                <p className="font-bold text-indigo-700 text-lg">{t.name}</p>
                                                <p className="text-slate-500">{t.company} • {t.date}</p>
                                           </div>
                                      </div>
                                  ))}
                             </div>
                        </div>
                   </section>

                   {/* Newsletter Signup */}
                   <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-indigo-100">
                        <div className="max-w-4xl mx-auto text-center">
                             <div className="mb-12">
                                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Join
                                       Our Newsletter</h2>
                                  <p className="text-xl text-slate-600 leading-relaxed">Subscribe to get the latest
                                       updates, exclusive offers, and gift branding tips!</p>
                             </div>
                             <div className="max-w-md mx-auto">
                                  {newsletterSubmitted ? (
                                      <div className="bg-emerald-100 border border-emerald-200 rounded-2xl p-8">
                                           <div className="text-4xl mb-4">✅</div>
                                           <p className="text-emerald-700 font-semibold text-lg">Thank you for
                                                subscribing! Check your inbox for exclusive offers!</p>
                                      </div>
                                  ) : (
                                      <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                                           <div className="space-y-4">
                                                <input
                                                    type="text"
                                                    placeholder="Enter your name"
                                                    className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-lg"
                                                    required
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-lg"
                                                    required
                                                />
                                           </div>
                                           <button
                                               type="submit"
                                               className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                           >
                                                Subscribe Now
                                           </button>
                                      </form>
                                  )}
                             </div>
                        </div>
                   </section>

                   {/* Call to Action */}
                   <section className="bg-slate-900 py-20 text-center px-6">
                        <div className="max-w-4xl mx-auto">
                             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Need
                                  Something Unique?</h2>
                             <p className="mb-8 text-xl text-slate-300 leading-relaxed">We create completely custom
                                  packages for brands that want to stand out from the competition.</p>
                             <Link
                                 to="/contact"
                                 className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                             >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                             d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                  </svg>
                                  Contact Us Today
                             </Link>
                        </div>
                   </section>
              </div>
              <Footer/>
         </>
     );
};

export default Dashboard;

