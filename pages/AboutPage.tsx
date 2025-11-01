import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchTeamMembers } from '../api/mockApi';
import { TeamMember } from '../types';
import { LogoPlaceholder } from '../components/common/Icons';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
    const [team, setTeam] = useState<TeamMember[]>([]);

    useEffect(() => {
        fetchTeamMembers().then(setTeam);
    }, []);

    return (
        <div className="space-y-20">
            <section className="text-center">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="text-5xl font-serif font-bold">Our Story</h1>
                    <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-400">
                        We believe that every object tells a story. Everything Souvenirs was founded in the bustling heart of Lagos, on the idea that a simple keepsake can hold a universe of memories, connecting us to the rich culture, vibrant people, and unforgettable moments of Nigeria.
                    </p>
                </motion.div>
            </section>
            
            <section className="flex flex-col md:flex-row items-center gap-12 bg-primary-light dark:bg-gray-800 p-12 rounded-lg">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                     <LogoPlaceholder className="w-64 h-64 mx-auto" />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 text-center md:text-left"
                >
                    <h2 className="text-3xl font-serif font-bold mb-4">Our Mission</h2>
                    <p className="mb-6">
                        Our mission is to celebrate and share the beauty of Nigerian heritage. We curate a collection of the country's most authentic and heartfelt souvenirs, empowering local artisans from Kano to Calabar. We bring their incredible craftsmanship to a global audience, ensuring every purchase supports a Nigerian story and a local community.
                    </p>
                </motion.div>
            </section>

            <section>
                <h2 className="text-4xl font-serif font-bold text-center mb-12">Meet the Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div 
                            key={member.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                        >
                            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary-light" />
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-primary font-semibold mb-2">{member.role}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{member.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="text-center bg-white dark:bg-gray-800 p-12 rounded-lg shadow-lg">
                <h2 className="text-3xl font-serif font-bold mb-4">Ready to Find Your Treasure?</h2>
                <p className="max-w-2xl mx-auto mb-6 text-gray-600 dark:text-gray-400">
                    Explore our curated collections and find a unique piece that tells your Nigerian story.
                </p>
                <Link to="/shop">
                    <Button>Explore Our Collection</Button>
                </Link>
            </section>
        </div>
    );
};

export default AboutPage;