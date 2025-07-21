import React from 'react';
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import {HeroSection} from "../components/HeroSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import FeaturedProductsSection from "../components/FeaturedProductsSection.jsx";

const Dashboard = () => {
     return (
         <>
              <div className="text-slate-800">
                   <HeroSection/>
                   <FeaturedProductsSection/>
                   <ServicesSection/>
                   <WhyChooseUs/>
                   <TestimonialsSection/>
              </div>
         </>
     );
};

export default Dashboard;

