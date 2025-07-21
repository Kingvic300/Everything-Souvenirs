import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { FaUser, FaEnvelope, FaBuilding, FaBoxes, FaCommentDots, FaCheckCircle, FaQuoteLeft, FaClock, FaShieldAlt } from 'react-icons/fa';

const Quote = () => {
     const [formData, setFormData] = useState({
          name: "",
          email: "",
          company: "",
          quantity: "",
          message: "",
     });
     const [submitted, setSubmitted] = useState(false);
     const [isSubmitting, setIsSubmitting] = useState(false);

     const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          setIsSubmitting(true);

          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1500));

          console.log("Quote submitted:", formData);
          setSubmitted(true);
          setIsSubmitting(false);
          setFormData({
               name: "",
               email: "",
               company: "",
               quantity: "",
               message: "",
          });
          setTimeout(() => setSubmitted(false), 8000);
     };

     const benefits = [
          {
               icon: <FaClock className="text-emerald-500 text-2xl" />,
               title: "Quick Response",
               description: "Get your custom quote within 24-48 hours"
          },
          {
               icon: <FaShieldAlt className="text-emerald-500 text-2xl" />,
               title: "Quality Guarantee",
               description: "Premium materials and craftsmanship assured"
          },
          {
               icon: <FaQuoteLeft className="text-emerald-500 text-2xl" />,
               title: "No Obligation",
               description: "Free quotes with no commitment required"
          }
     ];

     return (
         <>
              {/* Hero Section */}
              <div className="bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900 text-white py-20 px-6">
                   <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                             Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-400">Custom Quote</span>
                        </h1>
                        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-indigo-100 mb-8">
                             Transform your brand vision into memorable gifts. Tell us about your project and receive a detailed, personalized quote tailored to your needs.
                        </p>
                        <div className="flex justify-center items-center gap-8 text-indigo-200">
                             <div className="flex items-center gap-2">
                                  <FaClock className="text-emerald-400" />
                                  <span>24-48 Hour Response</span>
                             </div>
                             <div className="flex items-center gap-2">
                                  <FaShieldAlt className="text-emerald-400" />
                                  <span>No Obligation</span>
                             </div>
                        </div>
                   </div>
              </div>

              <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20 px-6">
                   <div className="max-w-6xl mx-auto">

                        {/* Benefits Section */}
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                             {benefits.map((benefit, index) => (
                                 <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200">
                                      <div className="flex items-center gap-4 mb-4">
                                           <div className="p-3 bg-emerald-50 rounded-xl">
                                                {benefit.icon}
                                           </div>
                                           <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                                      </div>
                                      <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                                 </div>
                             ))}
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-start">

                             {/* Quote Form */}
                             <div className="bg-white shadow-2xl rounded-3xl p-8 lg:p-10 border border-slate-200">
                                  <div className="text-center mb-8">
                                       <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                            Request Your Quote
                                       </h2>
                                       <p className="text-slate-600 text-lg">
                                            Fill out the form below and we'll get back to you with a detailed quote
                                       </p>
                                  </div>

                                  {submitted ? (
                                      <div className="text-center py-12">
                                           <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
                                                <FaCheckCircle className="text-emerald-500 text-4xl" />
                                           </div>
                                           <h3 className="text-2xl font-bold text-slate-900 mb-4">Quote Request Submitted!</h3>
                                           <p className="text-slate-600 text-lg mb-6">
                                                Thank you for your interest! Our team will review your request and get back to you within 24-48 hours with a detailed quote.
                                           </p>
                                           <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                                                <p className="text-emerald-700 font-medium">
                                                     📧 You'll receive a confirmation email shortly with your request details.
                                                </p>
                                           </div>
                                      </div>
                                  ) : (
                                      <form onSubmit={handleSubmit} className="space-y-6">
                                           <div className="grid md:grid-cols-2 gap-6">
                                                <div className="group">
                                                     <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                                          <FaUser className="text-indigo-500" />
                                                          Full Name *
                                                     </label>
                                                     <input
                                                         name="name"
                                                         required
                                                         value={formData.name}
                                                         onChange={handleChange}
                                                         className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 group-hover:border-slate-300"
                                                         placeholder="Enter your full name"
                                                     />
                                                </div>
                                                <div className="group">
                                                     <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                                          <FaEnvelope className="text-indigo-500" />
                                                          Email Address *
                                                     </label>
                                                     <input
                                                         name="email"
                                                         type="email"
                                                         required
                                                         value={formData.email}
                                                         onChange={handleChange}
                                                         className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 group-hover:border-slate-300"
                                                         placeholder="your.email@company.com"
                                                     />
                                                </div>
                                           </div>

                                           <div className="group">
                                                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                                     <FaBuilding className="text-indigo-500" />
                                                     Company Name
                                                </label>
                                                <input
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 group-hover:border-slate-300"
                                                    placeholder="Your company or organization name"
                                                />
                                           </div>

                                           <div className="group">
                                                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                                     <FaBoxes className="text-indigo-500" />
                                                     Estimated Quantity *
                                                </label>
                                                <input
                                                    name="quantity"
                                                    type="number"
                                                    required
                                                    min="1"
                                                    value={formData.quantity}
                                                    onChange={handleChange}
                                                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 group-hover:border-slate-300"
                                                    placeholder="e.g., 100, 500, 1000"
                                                />
                                           </div>

                                           <div className="group">
                                                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                                     <FaCommentDots className="text-indigo-500" />
                                                     Project Details *
                                                </label>
                                                <textarea
                                                    name="message"
                                                    required
                                                    rows="5"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 group-hover:border-slate-300 resize-none"
                                                    placeholder="Please describe your project in detail:&#10;• Product type (t-shirts, mugs, bags, etc.)&#10;• Branding requirements (logo, colors, text)&#10;• Timeline and delivery preferences&#10;• Any special requirements or questions"
                                                />
                                           </div>

                                           <button
                                               type="submit"
                                               disabled={isSubmitting}
                                               className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                           >
                                                {isSubmitting ? (
                                                    <div className="flex items-center justify-center gap-3">
                                                         <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                                         <span>Submitting Request...</span>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center justify-center gap-3">
                                                         <FaQuoteLeft />
                                                         <span>Get My Custom Quote</span>
                                                    </div>
                                                )}
                                           </button>

                                           <p className="text-center text-sm text-slate-500 mt-4">
                                                By submitting this form, you agree to our privacy policy. We'll only use your information to provide your quote.
                                           </p>
                                      </form>
                                  )}
                             </div>

                             {/* Information Panel */}
                             <div className="space-y-8">

                                  {/* What to Expect */}
                                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
                                       <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                            <div className="p-2 bg-indigo-100 rounded-lg">
                                                 <FaClock className="text-indigo-600" />
                                            </div>
                                            What to Expect
                                       </h3>
                                       <div className="space-y-4">
                                            <div className="flex items-start gap-4">
                                                 <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm">1</div>
                                                 <div>
                                                      <h4 className="font-semibold text-slate-900">Instant Confirmation</h4>
                                                      <p className="text-slate-600 text-sm">You'll receive an email confirmation immediately after submission.</p>
                                                 </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                 <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm">2</div>
                                                 <div>
                                                      <h4 className="font-semibold text-slate-900">Expert Review</h4>
                                                      <p className="text-slate-600 text-sm">Our team will carefully review your requirements and specifications.</p>
                                                 </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                 <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm">3</div>
                                                 <div>
                                                      <h4 className="font-semibold text-slate-900">Detailed Quote</h4>
                                                      <p className="text-slate-600 text-sm">Receive a comprehensive quote with pricing, timeline, and product options.</p>
                                                 </div>
                                            </div>
                                       </div>
                                  </div>

                                  {/* Contact Information */}
                                  <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl p-8 text-white">
                                       <h3 className="text-2xl font-bold mb-6">Need Help?</h3>
                                       <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                 <FaEnvelope className="text-emerald-300" />
                                                 <div>
                                                      <p className="font-semibold">Email Us</p>
                                                      <p className="text-indigo-200 text-sm">quotes@giftbranding.com</p>
                                                 </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                 <FaUser className="text-emerald-300" />
                                                 <div>
                                                      <p className="font-semibold">Call Our Experts</p>
                                                      <p className="text-indigo-200 text-sm">+234 (0) 123 456 7890</p>
                                                 </div>
                                            </div>
                                       </div>
                                       <div className="mt-6 p-4 bg-white/10 rounded-xl">
                                            <p className="text-sm text-indigo-100">
                                                 💡 <strong>Pro Tip:</strong> The more details you provide, the more accurate your quote will be!
                                            </p>
                                       </div>
                                  </div>

                             </div>
                        </div>
                   </div>
              </div>
         </>
     );
};

export default Quote;

