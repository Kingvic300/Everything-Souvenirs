import React from "react";
import {socialMedia} from "../libs/data.js";

const SocialMediaSection = () => {
     return(
         <>
              <section className="py-20 px-6 bg-white">
                   <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Connect With Us</h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
                             Follow us on social media for the latest updates, behind-the-scenes content, and
                             inspiration
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                             {socialMedia.map((social, index) => (
                                 <a
                                     key={index}
                                     href={social.url}
                                     className="group bg-slate-50 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                                 >
                                      <div
                                          className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                           {social.icon}
                                      </div>
                                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-2 transition-colors">
                                           {social.name}
                                      </h3>
                                      <p className="text-slate-600 group-hover:text-purple-100 transition-colors">
                                           {social.followers} followers
                                      </p>
                                 </a>
                             ))}
                        </div>
                   </div>
              </section>
         </>
     )
}

export default SocialMediaSection;