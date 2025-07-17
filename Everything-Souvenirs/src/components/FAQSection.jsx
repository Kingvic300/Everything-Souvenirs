import React, {useState} from "react";
import {faqs} from "../libs/data.js";

const FAQSection = () => {
     const [expandedFaq, setExpandedFaq] = useState(null);

     const toggleFaq = (faqId) => {
          setExpandedFaq(expandedFaq === faqId ? null : faqId);
     };

     return (
         <section className="py-20 px-6 bg-slate-100">
              <div className="max-w-4xl mx-auto">
                   <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked
                             Questions</h2>
                        <p className="text-xl text-slate-600">
                             Quick answers to common questions. Can't find what you're looking for? Contact us directly!
                        </p>
                   </div>

                   <div className="space-y-4">
                        {faqs.map((faq) => (
                            <div key={faq.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                                 <button
                                     onClick={() => toggleFaq(faq.id)}
                                     className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors duration-200"
                                 >
                                      <h3 className="text-lg font-bold text-slate-900 pr-4">{faq.question}</h3>
                                      <div className={`text-2xl transition-transform duration-300 ${
                                          expandedFaq === faq.id ? 'rotate-180' : ''
                                      }`}>
                                           ⌄
                                      </div>
                                 </button>

                                 {expandedFaq === faq.id && (
                                     <div className="px-8 pb-6">
                                          <div className="border-t border-slate-200 pt-6">
                                               <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                                          </div>
                                     </div>
                                 )}
                            </div>
                        ))}
                   </div>
              </div>
         </section>
     )
}
export default FAQSection;