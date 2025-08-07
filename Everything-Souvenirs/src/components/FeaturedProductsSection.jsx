import React from 'react';
import {products} from "../libs/data.js";
import {Link} from "react-router-dom";

const FeaturedProductsSection = () => {
     return(
         <>
              <section className="py-20 px-6">
                   <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Featured
                                  Products</h2>
                             <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">Discover our
                                  most popular branded gifts that make lasting impressions</p>
                        </div>
                        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                             {products.map((product) => (
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
                                           <h3 className="text-xl font-bold text-indigo-700 mb-2 group-hover:text-indigo-800 transition-colors">
                                             {product.name}</h3>
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
         </>
     )
}
export default FeaturedProductsSection;