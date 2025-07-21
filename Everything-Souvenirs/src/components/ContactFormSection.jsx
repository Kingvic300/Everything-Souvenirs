import React, {useState} from 'react';

const ContactFormSection = () => {
     const [formData, setFormData] = useState({
          name: '',
          email: '',
          phone: '',
          subject: '',
          service: '',
          message: ''
     });
     const [formSubmitted, setFormSubmitted] = useState(false);
     const [formErrors, setFormErrors] = useState({});

     const validateForm = () => {
          const errors = {};

          if (!formData.name.trim()) {
               errors.name = 'Name is required';
          }

          if (!formData.email.trim()) {
               errors.email = 'Email is required';
          } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
               errors.email = 'Please enter a valid email address';
          }

          if (!formData.subject.trim()) {
               errors.subject = 'Subject is required';
          }

          if (!formData.message.trim()) {
               errors.message = 'Message is required';
          } else if (formData.message.trim().length < 10) {
               errors.message = 'Message must be at least 10 characters long';
          }

          return errors;
     };

     const handleFormSubmit = (e) => {
          e.preventDefault();

          const errors = validateForm();
          if (Object.keys(errors).length > 0) {
               setFormErrors(errors);
               return;
          }

          setFormSubmitted(true);
          setFormData({ name: '', email: '', phone: '', subject: '', service: '', message: '' });
          setFormErrors({});
          setTimeout(() => setFormSubmitted(false), 5000);
     };
     const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData(prev => ({
               ...prev,
               [name]: value
          }));

          if (formErrors[name]) {
               setFormErrors(prev => ({
                    ...prev,
                    [name]: ''
               }));
          }
     };
     return (
         <>
              <section className="py-20 px-6 bg-white">
                   <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                             <p className="text-xl text-slate-600">
                                  Fill out the form below and we'll get back to you as soon as possible
                             </p>
                        </div>

                        {formSubmitted ? (
                            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                                 <div className="text-6xl mb-6">✅</div>
                                 <h3 className="text-3xl font-bold text-green-800 mb-4">Message Sent Successfully!</h3>
                                 <p className="text-green-700 text-lg mb-6">
                                      Thank you for contacting us. We've received your message and will respond within
                                      24 hours.
                                 </p>
                                 <div className="bg-green-100 rounded-lg p-4 inline-block">
                                      <p className="text-green-800 font-medium">
                                           📧 A confirmation email has been sent to your inbox
                                      </p>
                                 </div>
                            </div>
                        ) : (
                            <form onSubmit={handleFormSubmit} className="bg-slate-50 rounded-2xl p-8">
                                 <div className="grid md:grid-cols-2 gap-6 mb-6">
                                      <div>
                                           <label className="block text-sm font-bold text-slate-700 mb-2">
                                                Full Name *
                                           </label>
                                           <input
                                               type="text"
                                               name="name"
                                               value={formData.name}
                                               onChange={handleInputChange}
                                               className={`w-full px-4 py-3 rounded-lg border ${
                                                   formErrors.name ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white'
                                               } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
                                               placeholder="Your full name"
                                           />
                                           {formErrors.name && (
                                               <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                                           )}
                                      </div>

                                      <div>
                                           <label className="block text-sm font-bold text-slate-700 mb-2">
                                                Email Address *
                                           </label>
                                           <input
                                               type="email"
                                               name="email"
                                               value={formData.email}
                                               onChange={handleInputChange}
                                               className={`w-full px-4 py-3 rounded-lg border ${
                                                   formErrors.email ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white'
                                               } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
                                               placeholder="your@email.com"
                                           />
                                           {formErrors.email && (
                                               <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                                           )}
                                      </div>
                                 </div>

                                 <div className="grid md:grid-cols-2 gap-6 mb-6">
                                      <div>
                                           <label className="block text-sm font-bold text-slate-700 mb-2">
                                                Phone Number
                                           </label>
                                           <input
                                               type="tel"
                                               name="phone"
                                               value={formData.phone}
                                               onChange={handleInputChange}
                                               className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                                               placeholder="+234 (0) 123 456 7890"
                                           />
                                      </div>

                                      <div>
                                           <label className="block text-sm font-bold text-slate-700 mb-2">
                                                Service Interest
                                           </label>
                                           <select
                                               name="service"
                                               value={formData.service}
                                               onChange={handleInputChange}
                                               className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                                           >
                                                <option value="">Select a service</option>
                                                <option value="custom-branding">Custom Branding & Design</option>
                                                <option value="bulk-orders">Bulk Order Management</option>
                                                <option value="product-customization">Product Customization</option>
                                                <option value="design-consultation">Design Consultation</option>
                                                <option value="other">Other</option>
                                           </select>
                                      </div>
                                 </div>

                                 <div className="mb-6">
                                      <label className="block text-sm font-bold text-slate-700 mb-2">
                                           Subject *
                                      </label>
                                      <input
                                          type="text"
                                          name="subject"
                                          value={formData.subject}
                                          onChange={handleInputChange}
                                          className={`w-full px-4 py-3 rounded-lg border ${
                                              formErrors.subject ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white'
                                          } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
                                          placeholder="Brief subject of your inquiry"
                                      />
                                      {formErrors.subject && (
                                          <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>
                                      )}
                                 </div>

                                 <div className="mb-8">
                                      <label className="block text-sm font-bold text-slate-700 mb-2">
                                           Message *
                                      </label>
                                      <textarea
                                          name="message"
                                          value={formData.message}
                                          onChange={handleInputChange}
                                          rows="6"
                                          className={`w-full px-4 py-3 rounded-lg border ${
                                              formErrors.message ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white'
                                          } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none`}
                                          placeholder="Please provide details about your project, timeline, and any specific requirements..."
                                      ></textarea>
                                      {formErrors.message && (
                                          <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                                      )}
                                 </div>

                                 <div className="text-center">
                                      <button
                                          type="submit"
                                          className="bg-gradient-to-r from-indigo-600 to-indigo-600 hover:from-indigo-700 hover:to-indigo-700 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-xl transform hover:scale-105"
                                      >
                                           Send Message
                                      </button>
                                      <p className="text-slate-500 text-sm mt-4">
                                           We'll respond within 24 hours during business days
                                      </p>
                                 </div>
                            </form>
                        )}
                   </div>
              </section>
         </>
     )
}

export default ContactFormSection;