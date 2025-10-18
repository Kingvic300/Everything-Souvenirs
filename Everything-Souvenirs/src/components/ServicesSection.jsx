import React from "react";
import { Gift, Building2, Target } from "lucide-react";

const ServicesSection = () => {
    return(
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Our Featured Services
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Comprehensive branding solutions tailored to your needs
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {[
                        {
                            title: 'Custom Gift Sets',
                            description: 'Create curated branded packages for your team, partners, or customers.',
                            icon: <Gift className="w-10 h-10 text-indigo-600 mb-4" />
                        },
                        {
                            title: 'Corporate Branding',
                            description: 'Put your logo on mugs, pens, flash drives, notebooks, and more.',
                            icon: <Building2 className="w-10 h-10 text-indigo-600 mb-4" />
                        },
                        {
                            title: 'Event Giveaways',
                            description: 'Stand out at weddings, product launches, and conferences with branded gifts.',
                            icon: <Target className="w-10 h-10 text-indigo-600 mb-4" />
                        }
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="group bg-slate-50 hover:bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-indigo-200"
                        >
                            <div className="flex justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-indigo-700 group-hover:text-indigo-800 transition-colors text-center">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-center">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;