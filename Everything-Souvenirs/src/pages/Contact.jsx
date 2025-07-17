import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {businessHours, contactMethods, faqs, mapContainerStyle, mapOptions, socialMedia, center} from "../libs/data.js";
import ContactFormSection from "../components/ContactFormSection.jsx";
import BusinessHoursSection from "../components/BusinessHoursSection.jsx";
import SocialMediaSection from "../components/SocialMediaSection.jsx";
import FAQSection from "../components/FAQSection.jsx";
import MapSection from "../components/MapSection.jsx";
import ContactMethodSection from "../components/ContactMethodSection.jsx";

const Contact = () => {
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
     const [expandedFaq, setExpandedFaq] = useState(null);
     const [map, setMap] = useState(null);
     const [showInfoWindow, setShowInfoWindow] = useState(false);



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

     const toggleFaq = (faqId) => {
          setExpandedFaq(expandedFaq === faqId ? null : faqId);
     };

     const onLoad = useCallback(function callback(map) {
          setMap(map);
     }, []);

     const onUnmount = useCallback(function callback(map) {
          setMap(null);
     }, []);

     const handleMarkerClick = () => {
          setShowInfoWindow(!showInfoWindow);
     };

     return (
         <>
              <Header />

              {/* Hero Section */}
              <div className="bg-gradient-to-br from-indigo-700 via-purple-700 to-purple-800 text-white py-20 px-6">
                   <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                             Get In <span className="text-emerald-300">Touch</span>
                        </h1>
                        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-purple-100 mb-8">
                             Ready to start your next project? We'd love to hear from you. Reach out through any of the methods below and let's create something amazing together.
                        </p>
                        <div className="flex justify-center">
                             <div className="animate-bounce">
                                  <svg className="w-8 h-8 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                  </svg>
                             </div>
                        </div>
                   </div>
              </div>

              <div className="bg-slate-50 min-h-screen">
                   {/* Contact Methods Section */}
                   <ContactMethodSection/>

                   {/* Contact Form Section */}
                   <ContactFormSection/>

                   {/* Business Hours Section */}
                  <BusinessHoursSection/>

                   {/* Social Media Section */}
                   <SocialMediaSection/>
>
                   {/* FAQ Section */}
                  <FAQSection/>

                   {/* Interactive Map Section */}
                   <MapSection/>
              </div>

              <Footer />
         </>
     );
};

export default Contact;

