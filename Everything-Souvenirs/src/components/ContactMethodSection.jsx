import React from "react";
import {contactMethods} from "../libs/data.js";

const ContactMethodSection = () => {
     return (
         <section className="py-20 px-6">
              <div className="max-w-7xl mx-auto">
                   <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How to Reach Us</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                             Choose the method that works best for you. We're here to help!
                        </p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactMethods.map((method) => (
                            <div key={method.id}
                                 className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                                 <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                      {method.icon}
                                 </div>
                                 <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
                                      {method.title}
                                 </h3>
                                 <p className="text-lg font-semibold text-purple-600 mb-2">{method.primary}</p>
                                 <p className="text-slate-600 mb-4">{method.secondary}</p>
                                 <p className="text-sm text-slate-500 leading-relaxed">{method.description}</p>
                            </div>
                        ))}
                   </div>
              </div>
         </section>
     )
}
export default ContactMethodSection;