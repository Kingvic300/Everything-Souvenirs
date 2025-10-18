import React from "react";
import { Star, Zap, Palette } from "lucide-react"; // import icons from lucide-react

const WhyChooseUs = () => {
    const features = [
        {
            title: "Premium Quality",
            description: "High-quality materials and printing for lasting impressions.",
            icon: <Star className="w-12 h-12 text-indigo-600 group-hover:text-indigo-700 transition-colors" />,
        },
        {
            title: "Fast Turnaround",
            description: "Quick delivery to meet your event deadlines.",
            icon: <Zap className="w-12 h-12 text-indigo-600 group-hover:text-indigo-700 transition-colors" />,
        },
        {
            title: "Custom Designs",
            description: "Tailored solutions to match your brand's vision.",
            icon: <Palette className="w-12 h-12 text-indigo-600 group-hover:text-indigo-700 transition-colors" />,
        },
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-slate-100 to-slate-200">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Why Choose Everything Souvenirs?
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        The reasons our clients trust us with their most important branding needs
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3 text-center">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex justify-center mb-6">{feature.icon}</div>
                            <h3 className="text-2xl font-bold mb-4 text-indigo-700 group-hover:text-indigo-800 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
