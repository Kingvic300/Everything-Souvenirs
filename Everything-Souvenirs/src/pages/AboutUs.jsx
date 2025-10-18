import React, { useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Maximize2 } from "lucide-react";
import journeyImage from "../assets/journeyImage.jpg"
import { achievements, milestones, team, values } from "../libs/data.js";
import ImagePreview from "../components/ImagePreview.jsx";

const AboutUs = () => {
    const [selectedTeamMember, setSelectedTeamMember] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            {/* Image Preview Modal */}
            <ImagePreview
                selectedImage={selectedImage}
                onClose={() => setSelectedImage(null)}
                altText="Preview image"
            />

            <div className="bg-gradient-to-br from-indigo-700 via-indigo-700 to-indigo-800 text-white py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Crafting Connections, One <span className="text-emerald-300">Branded Gift</span> at a Time
                    </h1>
                    <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-indigo-100 mb-8">
                        We specialize in transforming your brand into unforgettable experiences through thoughtfully designed and meticulously crafted corporate gifts and promotional merchandise.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-emerald-400 hover:bg-emerald-500 text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-xl transform hover:scale-105">
                            Explore Our Gift Collections
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-800 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200">
                            <Link to="/quote">
                                Request a Custom Quote
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-slate-50 min-h-screen">
                {/* Our Story Section */}
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Gifting Journey</h2>
                                <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                                    <p>
                                        Established in 2018, our company was founded on a singular belief: that a well-chosen branded gift can transcend mere promotion, becoming a powerful tool for connection and appreciation.
                                    </p>
                                    <p>
                                        What began as a dedicated team with a vision for elevating corporate gifting has blossomed into a leading provider of premium branded merchandise across Nigeria and beyond, serving hundreds of businesses in diverse sectors.
                                    </p>
                                    <p>
                                        Our unwavering commitment to creative excellence, meticulous craftsmanship, and unparalleled client satisfaction has been the cornerstone of our growth. We believe every brand has a unique story, and we are passionate about helping you tell yours through bespoke, impactful branded gifts that resonate deeply with your audience.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div
                                    className="relative overflow-hidden cursor-zoom-in group"
                                    onClick={() => setSelectedImage(journeyImage)}
                                >
                                    <img
                                        src={journeyImage}
                                        alt="Our Gifting Journey"
                                        className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                                        <div className="bg-white/10 backdrop-blur-sm text-white rounded-full p-3">
                                            <Maximize2 className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-emerald-400 text-indigo-900 p-6 rounded-2xl font-bold text-center">
                                    <div className="text-3xl font-bold">6+</div>
                                    <div className="text-sm">Years of Gifting Excellence</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Purpose in Gifting</h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                Our core beliefs and aspirations drive every personalized gift we create
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="bg-gradient-to-br from-indigo-600 to-indigo-600 text-white p-8 rounded-2xl">
                                <div className="text-5xl mb-6">🎯</div>
                                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                                <p className="text-lg leading-relaxed text-indigo-100">
                                    To empower businesses across Africa to build stronger relationships and enhance brand loyalty through expertly curated, high-quality branded gifts and innovative corporate gifting solutions.
                                </p>
                            </div>

                            <div className="bg-emerald-400 text-indigo-900 p-8 rounded-2xl">
                                <div className="text-5xl mb-6">🌟</div>
                                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                                <p className="text-lg leading-relaxed">
                                    To be the foremost authority in branded gifting across Africa, celebrated for our creativity, exceptional product quality, and seamless client experiences, fostering meaningful connections between brands and their communities.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values Section */}
                <section className="py-20 px-6 bg-slate-100">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Core Gifting Principles</h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                The values that inspire every thoughtful gift and successful campaign
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {values.map(({ id, icon: Icon, color, title, description }) => (
                                <div key={id} className="text-center">
                                    <Icon className={`text-4xl mx-auto ${color}`} />
                                    <h3 className="font-semibold mt-2">{title}</h3>
                                    <p className="text-sm text-gray-600">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Meet the Team Section */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Meet Our Gifting Experts</h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                The passionate professionals who bring your branded gift ideas to life
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map(({ id, image, name, role, bio, expertise }) => (
                                <div
                                    key={id}
                                    className="group bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                                    onClick={() =>
                                        setSelectedTeamMember(selectedTeamMember === id ? null : id)
                                    }
                                >
                                    <div className="relative overflow-hidden">
                                        <div
                                            className="relative cursor-zoom-in"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedImage(image);
                                            }}
                                        >
                                            <img
                                                src={image}
                                                alt={name}
                                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <div className="bg-white/10 backdrop-blur-sm text-white rounded-full p-3">
                                                    <Maximize2 className="w-6 h-6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                                            {name}
                                        </h3>
                                        <p className="text-indigo-600 font-medium mb-3">{role}</p>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{bio}</p>

                                        {selectedTeamMember === id && (
                                            <div className="border-t border-slate-200 pt-4">
                                                <h4 className="font-bold text-slate-900 mb-2">Expertise:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {expertise?.map((skill, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Achievements Section */}
                <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-indigo-600 text-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Gifting Milestones</h2>
                            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                                Key achievements in delivering impactful branded gift solutions
                            </p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {achievements.map(({ icon: Icon, number, label }, index) => (
                                <div key={index} className="text-center bg-white/10 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
                                    <div className="text-5xl mb-4">
                                        <Icon className="text-yellow-400 text-5xl mx-auto" />
                                    </div>
                                    <div className="text-4xl font-bold mb-2 text-indigo-900">{number}</div>
                                    <div className="text-indigo-900 font-medium">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Growth Story in Gifting</h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                A timeline of our journey in creating memorable branded experiences
                            </p>
                        </div>

                        <div className="relative">
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>
                            {milestones.map(({ year, title, description, icon: Icon }, index) => (
                                <div
                                    key={year}
                                    className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <div className="bg-slate-50 p-8 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="text-4xl text-indigo-600">
                                                    <Icon />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-indigo-600 font-semibold">{year}</p>
                                                    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 leading-relaxed">{description}</p>
                                        </div>
                                    </div>

                                    <div className="hidden md:flex flex-col items-center justify-center z-10">
                                        <div className="w-12 h-12 bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold">
                                            {year.slice(-2)}
                                        </div>
                                        {index < milestones.length - 1 && (
                                            <div className="w-1 h-24 bg-indigo-300 mt-1"></div>
                                        )}
                                    </div>

                                    <div className="flex-1"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-indigo-600 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Memorable Branded Gifts?</h2>
                        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                            Let's collaborate to design and deliver exceptional branded gifts that leave a lasting impression. Get in touch with our gifting specialists today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <button
                                className="bg-emerald-400 hover:bg-emerald-500 text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-xl transform hover:scale-105">
                                Start Your Gifting Project
                            </button>
                            <button
                                className="border-2 border-white text-white hover:bg-white hover:text-indigo-800 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200">
                                View Our Branded Gift Portfolio
                            </button>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <FaEnvelope className="text-3xl mb-2 mx-auto text-brown-400"/>
                                <h3 className="font-bold mb-1">Email Our Gifting Team</h3>
                                <p className="text-indigo-100">gifts@company.com</p>
                            </div>
                            <div>
                                <FaPhone className="text-3xl mb-2 mx-auto text-green-400"/>
                                <h3 className="font-bold mb-1">Call for Gifting Consultation</h3>
                                <p className="text-indigo-100">+234 (0) 123 456 7890</p>
                            </div>
                            <div>
                                <MdLocationOn className="text-3xl mb-2 mx-auto text-red-500"/>
                                <h3 className="font-bold mb-1">Visit Our Gifting Showroom</h3>
                                <p className="text-indigo-100">Lagos, Nigeria</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutUs;