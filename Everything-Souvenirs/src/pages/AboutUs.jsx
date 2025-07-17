import React, { useState } from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const values = [
     {
          id: 1,
          icon: "⭐",
          title: "Excellence",
          description: "We strive for perfection in every product and service we deliver, ensuring the highest quality standards."
     },
     {
          id: 2,
          icon: "🤝",
          title: "Partnership",
          description: "We build lasting relationships with our clients, working together to achieve their branding goals."
     },
     {
          id: 3,
          icon: "💡",
          title: "Innovation",
          description: "We embrace new technologies and creative solutions to stay ahead in the promotional merchandise industry."
     },
     {
          id: 4,
          icon: "🎯",
          title: "Reliability",
          description: "Our clients can count on us to deliver on time, every time, with consistent quality and service."
     },
     {
          id: 5,
          icon: "🌱",
          title: "Sustainability",
          description: "We're committed to eco-friendly practices and sustainable materials in our production processes."
     },
     {
          id: 6,
          icon: "❤️",
          title: "Passion",
          description: "We love what we do and it shows in our dedication to helping brands make a lasting impression."
     }
];

const team = [
     {
          id: 1,
          name: "Adebayo Ogundimu",
          role: "Founder & CEO",
          bio: "With over 15 years in branding and marketing, Adebayo founded the company with a vision to help Nigerian businesses build stronger brand identities.",
          image: "https://via.placeholder.com/300x300?text=AO",
          expertise: ["Brand Strategy", "Business Development", "Client Relations"]
     },
     {
          id: 2,
          name: "Fatima Al-Hassan",
          role: "Creative Director",
          bio: "Fatima leads our design team with her exceptional eye for detail and innovative approach to brand visualization and product customization.",
          image: "https://via.placeholder.com/300x300?text=FA",
          expertise: ["Graphic Design", "Brand Identity", "Creative Strategy"]
     },
     {
          id: 3,
          name: "Chinedu Okoro",
          role: "Operations Manager",
          bio: "Chinedu ensures smooth operations and timely delivery of all orders, managing our supply chain and quality control processes.",
          image: "https://via.placeholder.com/300x300?text=CO",
          expertise: ["Operations", "Supply Chain", "Quality Control"]
     },
     {
          id: 4,
          name: "Aisha Bello",
          role: "Customer Success Manager",
          bio: "Aisha is dedicated to ensuring every client has an exceptional experience, from initial consultation to final delivery.",
          image: "https://via.placeholder.com/300x300?text=AB",
          expertise: ["Customer Service", "Project Management", "Client Relations"]
     }
];

const milestones = [
     {
          year: "2018",
          title: "Company Founded",
          description: "Started with a small team and big dreams to revolutionize promotional merchandise in Nigeria.",
          icon: "🚀"
     },
     {
          year: "2019",
          title: "First 100 Clients",
          description: "Reached our first major milestone by serving 100 satisfied clients across various industries.",
          icon: "🎯"
     },
     {
          year: "2020",
          title: "Digital Transformation",
          description: "Launched our online platform and expanded our digital capabilities during the pandemic.",
          icon: "💻"
     },
     {
          year: "2021",
          title: "Award Recognition",
          description: "Received the 'Best Promotional Products Company' award from the Nigerian Marketing Association.",
          icon: "🏆"
     },
     {
          year: "2022",
          title: "Expansion",
          description: "Opened new facilities and expanded our team to serve clients across West Africa.",
          icon: "🌍"
     },
     {
          year: "2023",
          title: "Sustainability Initiative",
          description: "Launched our eco-friendly product line and committed to sustainable business practices.",
          icon: "🌱"
     }
];

const achievements = [
     { number: "500+", label: "Happy Clients", icon: "😊" },
     { number: "50,000+", label: "Products Delivered", icon: "📦" },
     { number: "6", label: "Years of Excellence", icon: "⭐" },
     { number: "15+", label: "Industry Awards", icon: "🏆" }
];

const AboutUs = () => {
     const [selectedTeamMember, setSelectedTeamMember] = useState(null);

     return (
         <>
              <Header />

              {/* Hero Section */}
              <div className="bg-gradient-to-br from-indigo-700 via-indigo-700 to-indigo-800 text-white py-20 px-6">
                   <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                             About <span className="text-emerald-300">Our Story</span>
                        </h1>
                        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-indigo-100 mb-8">
                             We're passionate about helping businesses create lasting impressions through high-quality promotional merchandise and custom branding solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                             <button className="bg-emerald-400 hover:bg-emerald-500 text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-xl transform hover:scale-105">
                                  Our Services
                             </button>
                             <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-800 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200">
                                  Contact Us
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
                                       <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Journey</h2>
                                       <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                                            <p>
                                                 Founded in 2018, our company began with a simple yet powerful vision: to help Nigerian businesses
                                                 build stronger brand identities through high-quality promotional merchandise and custom branding solutions.
                                            </p>
                                            <p>
                                                 What started as a small team with big dreams has grown into one of Nigeria's leading promotional
                                                 products companies, serving over 500 clients across various industries including technology,
                                                 healthcare, education, and finance.
                                            </p>
                                            <p>
                                                 Our commitment to excellence, innovation, and customer satisfaction has been the driving force
                                                 behind our growth. We believe that every brand has a unique story to tell, and we're here to
                                                 help you tell yours through carefully crafted promotional products.
                                            </p>
                                       </div>
                                  </div>
                                  <div className="relative">
                                       <img
                                           src="https://via.placeholder.com/600x400?text=Our+Journey"
                                           alt="Our Journey"
                                           className="rounded-2xl shadow-2xl"
                                       />
                                       <div className="absolute -bottom-6 -right-6 bg-emerald-400 text-indigo-900 p-6 rounded-2xl font-bold text-center">
                                            <div className="text-3xl font-bold">6+</div>
                                            <div className="text-sm">Years of Excellence</div>
                                       </div>
                                  </div>
                             </div>
                        </div>
                   </section>

                   {/* Mission & Vision Section */}
                   <section className="py-20 px-6 bg-white">
                        <div className="max-w-6xl mx-auto">
                             <div className="text-center mb-16">
                                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Mission & Vision</h2>
                                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                       Our purpose and aspirations guide everything we do
                                  </p>
                             </div>

                             <div className="grid md:grid-cols-2 gap-12">
                                  <div className="bg-gradient-to-br from-indigo-600 to-indigo-600 text-white p-8 rounded-2xl">
                                       <div className="text-5xl mb-6">🎯</div>
                                       <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                                       <p className="text-lg leading-relaxed text-indigo-100">
                                            To empower businesses across Nigeria and West Africa with exceptional promotional merchandise
                                            and branding solutions that help them build stronger connections with their audiences and
                                            achieve their marketing goals.
                                       </p>
                                  </div>

                                  <div className="bg-emerald-400 text-indigo-900 p-8 rounded-2xl">
                                       <div className="text-5xl mb-6">🌟</div>
                                       <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                                       <p className="text-lg leading-relaxed">
                                            To become the leading promotional products company in Africa, known for innovation, quality,
                                            and exceptional customer service, while contributing to the growth of local businesses and
                                            the broader economy.
                                       </p>
                                  </div>
                             </div>
                        </div>
                   </section>

                   {/* Our Values Section */}
                   <section className="py-20 px-6 bg-slate-100">
                        <div className="max-w-7xl mx-auto">
                             <div className="text-center mb-16">
                                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Values</h2>
                                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                       The principles that guide our decisions and shape our culture
                                  </p>
                             </div>

                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                  {values.map((value) => (
                                      <div key={value.id} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                           <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                                {value.icon}
                                           </div>
                                           <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                                                {value.title}
                                           </h3>
                                           <p className="text-slate-600 leading-relaxed">
                                                {value.description}
                                           </p>
                                      </div>
                                  ))}
                             </div>
                        </div>
                   </section>

                   {/* Meet the Team Section */}
                   <section className="py-20 px-6 bg-white">
                        <div className="max-w-7xl mx-auto">
                             <div className="text-center mb-16">
                                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Meet Our Team</h2>
                                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                       The passionate professionals behind our success
                                  </p>
                             </div>

                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                  {team.map((member) => (
                                      <div
                                          key={member.id}
                                          className="group bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                                          onClick={() => setSelectedTeamMember(selectedTeamMember === member.id ? null : member.id)}
                                      >
                                           <div className="relative overflow-hidden">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                           </div>

                                           <div className="p-6">
                                                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                                                     {member.name}
                                                </h3>
                                                <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                                     {member.bio}
                                                </p>

                                                {selectedTeamMember === member.id && (
                                                    <div className="border-t border-slate-200 pt-4">
                                                         <h4 className="font-bold text-slate-900 mb-2">Expertise:</h4>
                                                         <div className="flex flex-wrap gap-2">
                                                              {member.expertise.map((skill, index) => (
                                                                  <span key={index} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs">
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
                                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Achievements</h2>
                                  <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                                       Milestones that reflect our commitment to excellence
                                  </p>
                             </div>

                             <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                                  {achievements.map((achievement, index) => (
                                      <div key={index} className="text-center bg-white/10 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
                                           <div className="text-5xl mb-4">{achievement.icon}</div>
                                           <div className="text-4xl font-bold mb-2 text-indigo-900">{achievement.number}</div>
                                           <div className="text-indigo-900 font-medium">{achievement.label}</div>
                                      </div>
                                  ))}
                             </div>
                        </div>
                   </section>

                   {/* Timeline Section */}
                   <section className="py-20 px-6 bg-white">
                        <div className="max-w-6xl mx-auto">
                             <div className="text-center mb-16">
                                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Journey</h2>
                                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                       Key milestones in our growth story
                                  </p>
                             </div>

                             <div className="relative">
                                  {/* Timeline line */}
                                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>

                                  {milestones.map((milestone, index) => (
                                      <div key={milestone.year} className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                           <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                                <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                                                     <div className="flex items-center mb-4">
                                                          <div className="text-4xl mr-4">{milestone.icon}</div>
                                                          <div>
                                                               <span className="text-indigo-600 font-bold text-lg">{milestone.year}</span>
                                                               <h3 className="text-2xl font-bold text-slate-900">{milestone.title}</h3>
                                                          </div>
                                                     </div>
                                                     <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                                                </div>
                                           </div>

                                           {/* Timeline dot */}
                                           <div className="hidden md:flex w-12 h-12 bg-indigo-600 rounded-full items-center justify-center text-white font-bold z-10">
                                                {milestone.year.slice(-2)}
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
                             <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work Together?</h2>
                             <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                                  Let's create something amazing for your brand. Get in touch with our team to discuss your next project.
                             </p>

                             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                                  <button className="bg-emerald-400 hover:bg-emerald-500 text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-xl transform hover:scale-105">
                                       Start Your Project
                                  </button>
                                  <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-800 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200">
                                       View Our Work
                                  </button>
                             </div>

                             <div className="grid md:grid-cols-3 gap-8 text-center">
                                  <div>
                                       <div className="text-3xl mb-2">📧</div>
                                       <h3 className="font-bold mb-1">Email Us</h3>
                                       <p className="text-indigo-100">hello@company.com</p>
                                  </div>
                                  <div>
                                       <div className="text-3xl mb-2">📞</div>
                                       <h3 className="font-bold mb-1">Call Us</h3>
                                       <p className="text-indigo-100">+234 (0) 123 456 7890</p>
                                  </div>
                                  <div>
                                       <div className="text-3xl mb-2">📍</div>
                                       <h3 className="font-bold mb-1">Visit Us</h3>
                                       <p className="text-indigo-100">Lagos, Nigeria</p>
                                  </div>
                             </div>
                        </div>
                   </section>
              </div>

              <Footer />
         </>
     );
};

export default AboutUs;

