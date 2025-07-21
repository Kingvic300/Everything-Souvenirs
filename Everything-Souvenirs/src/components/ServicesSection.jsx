import React from "react";

const ServicesSection = () => {
     return(
         <>
              <section className="py-20 px-6 bg-white">
                   <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Our
                                  Featured Services</h2>
                             <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">Comprehensive
                                  branding solutions tailored to your needs</p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3">
                             {[
                                  {
                                       title: 'Custom Gift Sets',
                                       description: 'Create curated branded packages for your team, partners or customers.',
                                       icon: '🎁'
                                  },
                                  {
                                       title: 'Corporate Branding',
                                       description: 'Put your logo on mugs, pens, flash drives, notebooks and more.',
                                       icon: '🏢'
                                  },
                                  {
                                       title: 'Event Giveaways',
                                       description: 'Stand out at weddings, product launches, and conferences with branded gifts.',
                                       icon: '🎉'
                                  }
                             ].map((service, index) => (
                                 <div key={index}
                                      className="group bg-slate-50 hover:bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-indigo-200">
                                      <div className="text-4xl mb-4">{service.icon}</div>
                                      <h3 className="text-2xl font-bold mb-4 text-indigo-700 group-hover:text-indigo-800 transition-colors">{service.title}</h3>
                                      <p className="text-slate-600 leading-relaxed">{service.description}</p>
                                 </div>
                             ))}
                        </div>
                   </div>
              </section>
         </>
     )
}
export default ServicesSection;