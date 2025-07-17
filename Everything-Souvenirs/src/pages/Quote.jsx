import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Quote = () => {
     const [formData, setFormData] = useState({
          name: "",
          email: "",
          company: "",
          quantity: "",
          message: "",
     });
     const [submitted, setSubmitted] = useState(false);

     const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          // TODO: Integrate with backend/email service
          console.log("Quote submitted:", formData);
          setSubmitted(true);
          setFormData({
               name: "",
               email: "",
               company: "",
               quantity: "",
               message: "",
          });
          setTimeout(() => setSubmitted(false), 5000);
     };

     return (
         <>
              <Header/>
                   <div className="min-h-screen bg-slate-50 py-20 px-6">
                        <div className="max-w-4xl mx-auto">
                             {/* Page Title */}
                             <div className="text-center mb-12">
                                  <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
                                       Request a Custom Quote
                                  </h1>
                                  <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                       Tell us what you're looking for and we'll provide a custom quote within 24–48 hours.
                                  </p>
                             </div>

                             {/* Quote Form */}
                             <form
                                 onSubmit={handleSubmit}
                                 className="bg-white shadow-xl rounded-xl p-8 space-y-6 border"
                             >
                                  <div className="grid md:grid-cols-2 gap-6">
                                       <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                                 Name
                                            </label>
                                            <input
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                                placeholder="Jane Doe"
                                            />
                                       </div>
                                       <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                                 Email
                                            </label>
                                            <input
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                                placeholder="jane@example.com"
                                            />
                                       </div>
                                  </div>

                                  <div>
                                       <label className="block text-sm font-medium text-slate-700 mb-1">
                                            Company Name
                                       </label>
                                       <input
                                           name="company"
                                           value={formData.company}
                                           onChange={handleChange}
                                           className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                           placeholder="Everything Souvenirs Ltd."
                                       />
                                  </div>

                                  <div>
                                       <label className="block text-sm font-medium text-slate-700 mb-1">
                                            Estimated Quantity
                                       </label>
                                       <input
                                           name="quantity"
                                           type="number"
                                           required
                                           value={formData.quantity}
                                           onChange={handleChange}
                                           className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                           placeholder="E.g., 100"
                                       />
                                  </div>

                                  <div>
                                       <label className="block text-sm font-medium text-slate-700 mb-1">
                                            Describe Your Request
                                       </label>
                                       <textarea
                                           name="message"
                                           required
                                           rows="5"
                                           value={formData.message}
                                           onChange={handleChange}
                                           className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                           placeholder="Tell us about your gift needs, product type, branding details, etc."
                                       />
                                  </div>

                                  <button
                                      type="submit"
                                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition-all duration-200"
                                  >
                                       Submit Quote Request
                                  </button>

                                  {submitted && (
                                      <p className="text-center text-emerald-600 font-medium mt-4">
                                           ✅ Your request has been submitted! We'll get back to you shortly.
                                      </p>
                                  )}
                             </form>
                        </div>
                   </div>
              <Footer/>
         </>
     );
};

export default Quote;
