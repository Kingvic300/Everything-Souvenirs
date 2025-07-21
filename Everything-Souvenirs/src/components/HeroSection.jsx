import React from "react";
import {Link} from "react-router-dom";

export const HeroSection = () => {
     return(
         <>
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
              <div className="max-w-4xl mx-auto">
                   <div className="grid md:grid-cols-3 gap-2 text-center text-sm font-medium">
                        <div className="bg-emerald-50 text-amber-700 py-2 px-3 border-l-2 border-emerald-300">
                             💰 20% Off Orders Over ₦75,000 — <span className="font-semibold">Use Code: NAIRA20</span>
                        </div>
                        <div className="bg-blue-50 text-blue-700 py-2 px-3 border-l-2 border-blue-300">
                             🚚 Free Delivery Across Nigeria for Orders Above ₦30,000!
                        </div>
                        <div className="bg-emerald-50 text-emerald-700 py-2 px-3 border-l-2 border-emerald-300">
                             🎁 Get 15% Off Gift Bundles — <span className="font-semibold">Use Code: GIFTNG</span>
                        </div>

                   </div>
              </div>
         </>
     )
}
export const HeroSection2 = () => {
     return (
         <>
              <div className="bg-gradient-to-br from-indigo-700 via-indigo-700 to-indigo-800 text-white py-20 px-6">
                   <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                             Get In <span className="text-emerald-300">Touch</span>
                        </h1>
                        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-indigo-100 mb-8">
                             Ready to start your next project? We'd love to hear from you. Reach out through any of the
                             methods below and let's create something amazing together.
                        </p>
                        <div className="flex justify-center">
                             <div className="animate-bounce">
                                  <svg className="w-8 h-8 text-emerald-300" fill="none" stroke="currentColor"
                                       viewBox="0 0 24 24">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                             d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                                  </svg>
                             </div>
                        </div>
                   </div>
              </div>
         </>
     )
}
