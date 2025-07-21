import React, { useRef } from 'react';
import Slider from 'react-slick';
import { testimonials } from "../libs/data.js";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from "framer-motion";
import {
     slideLeft,
     bounceIn,
     fadeDelayed
} from "../libs/motion.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection = () => {
     const sliderRef = useRef(null);

     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          responsive: [
               {
                    breakpoint: 1024,
                    settings: {
                         slidesToShow: 1,
                    },
               },
          ],
     };

     return (
         <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                   {/* Heading */}
                   <motion.h2
                       className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center"
                       variants={slideLeft}
                       initial="hidden"
                       whileInView="show"
                       viewport={{ once: true }}
                   >
                        What Our Customers Say
                   </motion.h2>

                   <motion.p
                       className="text-slate-500 text-center mb-10"
                       variants={fadeDelayed}
                       initial="hidden"
                       whileInView="show"
                       viewport={{ once: true }}
                   >
                        Real stories from real users
                   </motion.p>

                   {/* Arrows */}
                   <div className="flex justify-center mb-8 gap-6">
                        <button
                            onClick={() => sliderRef.current.slickPrev()}
                            className="text-indigo-600 hover:text-indigo-800 transition"
                        >
                             <FaChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => sliderRef.current.slickNext()}
                            className="text-indigo-600 hover:text-indigo-800 transition"
                        >
                             <FaChevronRight size={24} />
                        </button>
                   </div>

                   {/* Testimonials */}
                   <Slider ref={sliderRef} {...settings}>
                        {testimonials.map((t) => (
                            <motion.div
                                key={t.id}
                                className="px-4"
                                variants={bounceIn}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                 <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-md text-center transition-all duration-300">
                                      <p className="font-bold text-indigo-700 text-xl mb-3">{t.name}</p>
                                      <blockquote className="italic text-slate-700 mb-4 text-lg leading-relaxed">
                                           "{t.text}"
                                      </blockquote>
                                      <p className="text-slate-500 text-sm">Company – {t.company}</p>
                                 </div>
                            </motion.div>
                        ))}
                   </Slider>
              </div>
         </section>
     );
};

export default TestimonialsSection;
