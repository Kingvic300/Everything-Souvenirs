import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { businessHours } from "../libs/data.js";

const BusinessHoursSection = () => {
     return (
         <>
              <section className="py-20 px-6 bg-slate-100">
                   <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                             <div>
                                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Business Hours</h2>
                                  <p className="text-xl text-slate-600 mb-8">
                                       We're here to help during these hours. For urgent matters outside business hours,
                                       please send an email and we'll respond as soon as possible.
                                  </p>

                                  <div className="bg-white rounded-2xl p-8 shadow-sm">
                                       {businessHours.map((schedule, index) => (
                                           <div key={index} className={`flex justify-between items-center py-3 ${
                                               index !== businessHours.length - 1 ? 'border-b border-slate-200' : ''
                                           }`}>
                                                <span className="font-medium text-slate-900">{schedule.day}</span>
                                                <span className={`font-semibold ${
                                                    schedule.open ? 'text-green-600' : 'text-slate-500'
                                                }`}>
                                                  {schedule.hours}
                                                  </span>
                                           </div>
                                       ))}
                                  </div>
                             </div>

                             <div className="bg-gradient-to-br from-indigo-600 to-indigo-600 text-white p-8 rounded-2xl">
                                  <h3 className="text-3xl font-bold mb-6">Emergency Contact</h3>
                                  <p className="text-indigo-100 mb-6">
                                       For urgent matters that can't wait, use these emergency contact options:
                                  </p>

                                  <div className="space-y-4">
                                       <div className="flex items-center">
                                            <FaPhoneAlt className="text-2xl mr-4" />
                                            <div>
                                                 <p className="font-bold">Emergency Hotline</p>
                                                 <p className="text-indigo-200">+234 (0) 705 3531 269</p>
                                            </div>
                                       </div>

                                       <div className="flex items-center">
                                            <FaEnvelope className="text-2xl mr-4" />
                                            <div>
                                                 <p className="font-bold">Priority Email</p>
                                                 <p className="text-indigo-200">urgent@company.com</p>
                                            </div>
                                       </div>

                                       <div className="flex items-center">
                                            <FaWhatsapp className="text-2xl mr-4" />
                                            <div>
                                                 <p className="font-bold">WhatsApp</p>
                                                 <p className="text-indigo-200">+234 (0) 705 3531 269</p>
                                            </div>
                                       </div>
                                  </div>
                             </div>
                        </div>
                   </div>
              </section>
         </>
     );
};

export default BusinessHoursSection;
