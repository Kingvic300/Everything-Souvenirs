import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TestimonialsSection from '../components/TestimonialsSection';

const services = [
  {
    id: 1,
    icon: "🎨",
    title: "Custom Branding & Design",
    description: "Professional logo design, brand guidelines, and marketing materials tailored to your business identity.",
    features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Strategy"]
  },
  {
    id: 2,
    icon: "📦",
    title: "Bulk Order Management",
    description: "Efficient handling of large quantity orders with special pricing and dedicated project management.",
    features: ["Volume Pricing", "Project Management", "Inventory Planning", "Timely Delivery"]
  },
  {
    id: 3,
    icon: "⚙️",
    title: "Product Customization",
    description: "Personalize products with your brand elements using various printing and engraving techniques.",
    features: ["Screen Printing", "Embroidery", "Laser Engraving", "Heat Transfer"]
  },
  {
    id: 4,
    icon: "💡",
    title: "Design Consultation",
    description: "Expert advice on product selection, design optimization, and brand strategy from our experienced team.",
    features: ["Product Selection", "Design Review", "Brand Strategy", "Trend Insights"]
  },
  {
    id: 5,
    icon: "✅",
    title: "Quality Assurance",
    description: "Rigorous quality control processes to ensure every product meets our high standards before delivery.",
    features: ["Quality Control", "Material Testing", "Print Inspection", "Final Review"]
  },
  {
    id: 6,
    icon: "🚚",
    title: "Fast Delivery & Logistics",
    description: "Reliable shipping and logistics solutions to get your branded merchandise delivered on time.",
    features: ["Express Shipping", "Tracking System", "Packaging", "Nationwide Delivery"]
  }
];

const processSteps = [
  {
    step: 1,
    title: "Consultation",
    description: "We discuss your needs, budget, and timeline to understand your project requirements.",
    icon: "💬"
  },
  {
    step: 2,
    title: "Design & Quote",
    description: "Our team creates mockups and provides detailed pricing for your approval.",
    icon: "📋"
  },
  {
    step: 3,
    title: "Production",
    description: "We manufacture your products with careful attention to quality and detail.",
    icon: "🏭"
  },
  {
    step: 4,
    title: "Quality Check",
    description: "Every item undergoes thorough inspection to ensure it meets our standards.",
    icon: "🔍"
  },
  {
    step: 5,
    title: "Delivery",
    description: "Your branded merchandise is carefully packaged and delivered to your location.",
    icon: "📦"
  }
];

const industries = [
  { name: "Technology", icon: "💻", description: "Tech companies and startups" },
  { name: "Healthcare", icon: "🏥", description: "Medical facilities and practices" },
  { name: "Education", icon: "🎓", description: "Schools and universities" },
  { name: "Finance", icon: "💰", description: "Banks and financial services" },
  { name: "Retail", icon: "🛍️", description: "Stores and e-commerce" },
  { name: "Non-Profit", icon: "❤️", description: "NGOs and charities" }
];

const testimonials = [
  {
    id: 1,
    name: "David Okonkwo",
    company: "TechStart Nigeria",
    text: "Exceptional service and quality! They helped us create a cohesive brand identity across all our promotional materials. The team was professional and delivered on time.",
    rating: 5,
    avatar: "https://via.placeholder.com/80?text=DO"
  },
  {
    id: 2,
    name: "Amina Hassan",
    company: "Green Earth Foundation",
    text: "Working with them was a game-changer for our fundraising events. The custom tote bags and t-shirts were perfect and helped increase our brand visibility significantly.",
    rating: 5,
    avatar: "https://via.placeholder.com/80?text=AH"
  },
  {
    id: 3,
    name: "James Adebayo",
    company: "Lagos Business Hub",
    text: "Their bulk order management is outstanding. We needed 500 branded notebooks for our conference, and they delivered everything perfectly on schedule.",
    rating: 5,
    avatar: "https://via.placeholder.com/80?text=JA"
  }
];

const Services = () => {
  const location = useLocation()
  const [selectedService, setSelectedService] = useState(null);
    useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Delay a bit to ensure rendering is done
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    phone: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const WHATSAPP_NUMBER = "2347053531269";

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const message = `*New Service Inquiry*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}
*Company:* ${formData.company || 'Not provided'}
*Service:* ${formData.service}
*Project Details:* ${formData.message}
--- Sent from Services Page`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');

    setFormSubmitted(true);
    setFormData({ name: '', email: '', company: '', service: '', message: '', phone: '' });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const scrollToProcess = () => {
    const processSection = document.getElementById('process');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-indigo-700 via-indigo-700 to-indigo-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Our <span className="text-emerald-300">Services</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-indigo-100 mb-8">
            From custom branding to bulk orders, we provide comprehensive solutions for all your promotional merchandise needs. Let us help bring your brand to life.
          </p>
          <button 
            onClick={scrollToProcess}
            className="bg-emerald-400 hover:bg-emerald-500 text-emerald-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-xl transform hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </div>

      <div className="bg-slate-50 min-h-screen">
        {/* Services Overview */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What We Offer</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive branding and merchandise solutions designed to elevate your business presence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-slate-200 cursor-pointer"
                  onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                >
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {selectedService === service.id && (
                    <div className="border-t border-slate-200 pt-6 mt-6">
                      <h4 className="font-bold text-slate-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-slate-700">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6">
                    <span className="text-indigo-600 font-medium group-hover:text-indigo-700">
                      {selectedService === service.id ? 'Click to collapse' : 'Click to learn more →'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section id="process" className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Process</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                A streamlined approach to deliver exceptional results every time
              </p>
            </div>

            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>

              {processSteps.map((step, index) => (
                <div key={step.step} className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <div className="text-4xl mr-4">{step.icon}</div>
                        <div>
                          <span className="text-indigo-600 font-bold text-lg">Step {step.step}</span>
                          <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex w-12 h-12 bg-indigo-600 rounded-full items-center justify-center text-white font-bold text-lg z-10">
                    {step.step}
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-indigo-600 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us?</h2>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                We combine expertise, quality, and exceptional service to deliver outstanding results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Happy Clients", icon: "😊" },
                { number: "10,000+", label: "Products Delivered", icon: "📦" },
                { number: "99%", label: "Satisfaction Rate", icon: "⭐" },
                { number: "24/7", label: "Customer Support", icon: "🎧" }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white/10 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-2 text-yellow-300">{stat.number}</div>
                  <div className="text-indigo-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Industries We Serve</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our expertise spans across various industries, delivering tailored solutions for each sector
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="group text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-slate-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection/>

        {/* Contact Form / CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-indigo-100 mb-8">
                Let's discuss your project via WhatsApp and create something amazing together
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-white/10 rounded-2xl p-12 text-center">
                <div className="text-6xl mb-6">📱</div>
                <h3 className="text-2xl font-bold mb-4">WhatsApp Opening!</h3>
                <p className="text-indigo-100 text-lg">
                  We've opened WhatsApp with your inquiry details. Send the message and we'll respond quickly!
                </p>
              </div>
            ) : (
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="+234 801 234 5678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Service Needed *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full appearance-none px-4 py-3 rounded-lg bg-black/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-black/20 transition duration-200"
                  >
                    <option value="" className="bg-white text-black">Select a service</option>
                    <option value="Custom Branding & Design" className="bg-white text-black">Custom Branding & Design</option>
                    <option value="Bulk Order Management" className="bg-white text-black">Bulk Order Management</option>
                    <option value="Product Customization" className="bg-white text-black">Product Customization</option>
                    <option value="Design Consultation" className="bg-white text-black">Design Consultation</option>
                    <option value="Quality Assurance" className="bg-white text-black">Quality Assurance</option>
                    <option value="Fast Delivery & Logistics" className="bg-white text-black">Fast Delivery & Logistics</option>
                    <option value="Other" className="bg-white text-black">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Tell us about your project, timeline, quantity needed, and any specific requirements..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    onClick={handleFormSubmit}
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 flex items-center justify-center mx-auto gap-3"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Send via WhatsApp
                  </button>
                  <p className="text-indigo-200 text-sm mt-3">
                    This will open WhatsApp with your message ready to send
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;