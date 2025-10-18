import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Palette,
    Package,
    Settings2,
    Lightbulb,
    ShieldCheck,
    Truck,
    MessageSquare,
    FileText,
    Factory,
    SearchCheck,
    Monitor,
    HeartPulse,
    GraduationCap,
    Banknote,
    ShoppingBag,
    HandHeart,
    Smile,
    PackageCheck,
    Star,
    Headphones
} from "lucide-react";

import TestimonialsSection from '../components/TestimonialsSection';

// 1. Update the services array with Lucide icons
const services = [
    {
        id: 1,
        icon: <Palette className="w-12 h-12 text-indigo-600 mx-auto" />,
        title: "Custom Branding & Design",
        description: "Professional logo design, brand guidelines, and marketing materials tailored to your business identity.",
        features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Strategy"]
    },
    {
        id: 2,
        icon: <Package className="w-12 h-12 text-indigo-600 mx-auto" />,
        title: "Bulk Order Management",
        description: "Efficient handling of large quantity orders with special pricing and dedicated project management.",
        features: ["Volume Pricing", "Project Management", "Inventory Planning", "Timely Delivery"]
    },
    {
        id: 3,
        icon: <Settings2 className="w-12 h-12 text-indigo-600 mx-auto" />,
        title: "Product Customization",
        description: "Personalize products with your brand elements using various printing and engraving techniques.",
        features: ["Screen Printing", "Embroidery", "Laser Engraving", "Heat Transfer"]
    },
    {
        id: 4,
        icon: <Lightbulb className="w-12 h-12 text-indigo-600 mx-auto" />,
        title: "Design Consultation",
        description: "Expert advice on product selection, design optimization, and brand strategy from our experienced team.",
        features: ["Product Selection", "Design Review", "Brand Strategy", "Trend Insights"]
    },
    {
        id: 5,
        icon: <ShieldCheck className="w-12 h-12 text-indigo-600 mx-auto" />,
        title: "Quality Assurance",
        description: "Rigorous quality control processes to ensure every product meets our high standards before delivery.",
        features: ["Quality Control", "Material Testing", "Print Inspection", "Final Review"]
    },
    {
        id: 6,
        icon: <Truck className="w-12 h-12 text-indigo-600 mx-auto" />,
        title: "Fast Delivery & Logistics",
        description: "Reliable shipping and logistics solutions to get your branded merchandise delivered on time.",
        features: ["Express Shipping", "Tracking System", "Packaging", "Nationwide Delivery"]
    }
];

// 2. Update the process steps with Lucide icons
const processSteps = [
    {
        step: 1,
        title: "Consultation",
        description: "We discuss your needs, budget, and timeline to understand your project requirements.",
        icon: <MessageSquare className="w-10 h-10 text-indigo-600" />
    },
    {
        step: 2,
        title: "Design & Quote",
        description: "Our team creates mockups and provides detailed pricing for your approval.",
        icon: <FileText className="w-10 h-10 text-indigo-600" />
    },
    {
        step: 3,
        title: "Production",
        description: "We manufacture your products with careful attention to quality and detail.",
        icon: <Factory className="w-10 h-10 text-indigo-600" />
    },
    {
        step: 4,
        title: "Quality Check",
        description: "Every item undergoes thorough inspection to ensure it meets our standards.",
        icon: <SearchCheck className="w-10 h-10 text-indigo-600" />
    },
    {
        step: 5,
        title: "Delivery",
        description: "Your branded merchandise is carefully packaged and delivered to your location.",
        icon: <Truck className="w-10 h-10 text-indigo-600" />
    }
];

const industries = [
    { name: "Technology", icon: <Monitor className="w-10 h-10 text-indigo-600 mx-auto" />, description: "Tech companies and startups" },
    { name: "Healthcare", icon: <HeartPulse className="w-10 h-10 text-indigo-600 mx-auto" />, description: "Medical facilities and practices" },
    { name: "Education", icon: <GraduationCap className="w-10 h-10 text-indigo-600 mx-auto" />, description: "Schools and universities" },
    { name: "Finance", icon: <Banknote className="w-10 h-10 text-indigo-600 mx-auto" />, description: "Banks and financial services" },
    { name: "Retail", icon: <ShoppingBag className="w-10 h-10 text-indigo-600 mx-auto" />, description: "Stores and e-commerce" },
    { name: "Non-Profit", icon: <HandHeart className="w-10 h-10 text-indigo-600 mx-auto" />, description: "NGOs and charities" }
];

// 4. Update the stats section with Lucide icons
const stats = [
    { number: "500+", label: "Happy Clients", icon: <Smile className="w-10 h-10 text-yellow-300 mx-auto" /> },
    { number: "10,000+", label: "Products Delivered", icon: <PackageCheck className="w-10 h-10 text-yellow-300 mx-auto" /> },
    { number: "99%", label: "Satisfaction Rate", icon: <Star className="w-10 h-10 text-yellow-300 mx-auto" /> },
    { number: "24/7", label: "Customer Support", icon: <Headphones className="w-10 h-10 text-yellow-300 mx-auto" /> }
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
                  {stats.map((stat, index) => (
                      <div key={index} className="text-center bg-white/10 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
                          <div className="flex justify-center mb-4">
                              {stat.icon}
                          </div>
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
                        <MessageSquare className="w-6 h-6" />
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