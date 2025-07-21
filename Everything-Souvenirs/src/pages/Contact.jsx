import React from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ContactFormSection from "../components/ContactFormSection.jsx";
import BusinessHoursSection from "../components/BusinessHoursSection.jsx";
import SocialMediaSection from "../components/SocialMediaSection.jsx";
import FAQSection from "../components/FAQSection.jsx";
import MapSection from "../components/MapSection.jsx";
import ContactMethodSection from "../components/ContactMethodSection.jsx";
import {HeroSection2} from "../components/HeroSection.jsx";

const Contact = () => {
     return (
         <>
              <HeroSection2/>
              <div className="bg-slate-50 min-h-screen">
                   <ContactMethodSection/>
                   <ContactFormSection/>
                   <BusinessHoursSection/>
                   <SocialMediaSection/>
                   <FAQSection/>
                   <MapSection/>
              </div>
         </>
     );
};

export default Contact;

