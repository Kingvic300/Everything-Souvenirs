import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/common/Button';
import { fetchTestimonials } from '../api/mockApi';
import { Testimonial } from '../types';
import { LogoPlaceholder, InstagramIcon } from '../components/common/Icons';
import { products } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const slides = [
  { image: 'https://placehold.co/1600x800/C8A2C8/FFFFFF/png?text=Discover+Authentic\nNigerian+Treasures', title: 'Discover Authentic Nigerian Treasures', subtitle: 'Handcrafted with love from the heart of West Africa.' },
  { image: 'https://placehold.co/1600x800/C8A2C8/FFFFFF/png?text=Gifts+That+Tell\na+Nigerian+Story', title: 'Gifts That Tell a Nigerian Story', subtitle: 'Create lasting memories with custom Ankara and Adire pieces.' },
  { image: 'https://placehold.co/1600x800/C8A2C8/FFFFFF/png?text=Explore+Our\nVibrant+Collections', title: 'Explore Our Vibrant Collections', subtitle: "Find the perfect item to celebrate Nigeria's rich culture." },
];

const categories = [
  { name: 'Travel Souvenirs', image: 'https://placehold.co/400x400/E6D9E6/333333/png?text=Travel\nSouvenirs' },
  { name: 'Personalized Gifts', image: 'https://placehold.co/400x400/E6D9E6/333333/png?text=Personalized\nGifts' },
  { name: 'Handmade Crafts', image: 'https://placehold.co/400x400/E6D9E6/333333/png?text=Handmade\nCrafts' },
  { name: 'Seasonal Collections', image: 'https://placehold.co/400x400/E6D9E6/333333/png?text=Seasonal\nCollections' },
];

const galleryImages = [
    'https://placehold.co/500x500/E6D9E6/333333/png?text=Nigerian+Wedding',
    'https://placehold.co/500x500/E6D9E6/333333/png?text=Jollof+Rice',
    'https://placehold.co/500x500/E6D9E6/333333/png?text=Aso+Ebi',
    'https://placehold.co/500x500/E6D9E6/333333/png?text=Lagos+Fashion',
    'https://placehold.co/500x500/E6D9E6/333333/png?text=Naija+Style',
    'https://placehold.co/500x500/E6D9E6/333333/png?text=African+Print',
    'https://placehold.co/500x500/E6D9E6/333333/png?text=Owambe+Party',
    'https://placehold.co/500x500/E6D9E6/333333/png?text=Traditional+Attire'
];

const HomePage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const featuredProducts = products.slice(0, 4);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        fetchTestimonials().then(setTestimonials);
    }, []);

    return (
        <div className="space-y-24">
            {/* Hero Section */}
            <section className="relative h-[60vh] -mt-8 -mx-4 sm:-mx-6 lg:-mx-8 rounded-b-2xl overflow-hidden flex items-center justify-center text-white text-center">
                <AnimatePresence>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/50" />
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10 p-4"
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">{slides[currentSlide].title}</h1>
                    <p className="text-lg md:text-2xl mb-8">{slides[currentSlide].subtitle}</p>
                    <Link to="/shop">
                        <Button variant="primary" className="text-lg px-8 py-4">Shop Souvenirs Now</Button>
                    </Link>
                </motion.div>
            </section>

            {/* Featured Categories */}
            <section>
                <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Collections</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, index) => (
                        <motion.div 
                            key={cat.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link to={`/shop?category=${encodeURIComponent(cat.name)}`} className="group block text-center">
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <img src={cat.image} alt={cat.name} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                                </div>
                                <h3 className="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">{cat.name}</h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section>
                <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Featured Souvenirs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link to="/shop">
                        <Button variant="secondary">View All Products</Button>
                    </Link>
                </div>
            </section>


            {/* About Us Preview */}
            <section className="flex flex-col md:flex-row items-center gap-12 bg-primary-light dark:bg-gray-800 p-12 rounded-lg">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                     <LogoPlaceholder className="w-48 h-48 mx-auto mb-4" />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 text-center md:text-left"
                >
                    <h2 className="text-3xl font-serif font-bold mb-4">Our Story</h2>
                    <p className="mb-6">Everything Souvenirs was born from a love for Nigeria and the stories our crafts can tell. We partner with artisans from across the country to bring you authentic, handcrafted pieces that carry a piece of our culture and soul.</p>
                    <Link to="/about">
                        <Button variant="secondary">Learn More About Us</Button>
                    </Link>
                </motion.div>
            </section>
            
             {/* Behind the Crafts Section */}
            <section className="relative bg-cover bg-center bg-fixed rounded-lg py-24 text-white text-center" style={{backgroundImage: "url('https://placehold.co/1600x800/C8A2C8/FFFFFF/png?text=Artisan+Hands')"}}>
                <div className="absolute inset-0 bg-black/60 rounded-lg" />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <h2 className="text-4xl font-serif font-bold mb-4">From Our Hands to Yours</h2>
                    <p className="max-w-3xl mx-auto mb-8 text-lg">
                        We journey through Nigeria, from the ancient city of Benin to the bustling markets of Kano, to partner with skilled artisans. Each product is a piece of their story, a testament to generations of craftsmanship, and a way to preserve our rich cultural heritage.
                    </p>
                    <Link to="/about">
                        <Button variant="primary">Meet the Artisans</Button>
                    </Link>
                </motion.div>
            </section>

            {/* Testimonials */}
            <section>
                <h2 className="text-3xl font-serif font-bold text-center mb-12">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div 
                            key={t.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center"
                        >
                            <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mx-auto -mt-16 border-4 border-white dark:border-gray-800" />
                            <p className="italic my-4">"{t.quote}"</p>
                            <h4 className="font-bold">{t.name}</h4>
                            <p className="text-sm text-gray-500">{t.location}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Social Proof / Instagram Gallery */}
            <section>
                <div className="text-center mb-12">
                    <InstagramIcon className="w-12 h-12 mx-auto text-primary mb-2" />
                    <h2 className="text-3xl font-serif font-bold">Share Your Moments</h2>
                    <p className="text-lg text-gray-500">Join our community and show us how you celebrate with #EverythingSouvenirsNG</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryImages.map((imageUrl, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative aspect-square overflow-hidden rounded-lg"
                        >
                            <img src={imageUrl} alt={`Social media post ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </section>

             {/* Newsletter */}
            <section className="bg-primary text-white p-12 rounded-lg text-center">
                 <h2 className="text-3xl font-serif font-bold mb-4">Join Our Journey</h2>
                 <p className="max-w-xl mx-auto mb-8">Sign up for our newsletter to receive exclusive offers, stories from Nigeria, and a first look at our new collections.</p>
                 <form className="max-w-md mx-auto flex">
                    <input type="email" placeholder="Enter your email address" className="w-full px-4 py-3 rounded-l-lg border-0 text-gray-800 focus:ring-2 focus:ring-white" />
                    <button type="submit" className="bg-accent text-white font-semibold px-6 py-3 rounded-r-lg hover:bg-gray-700 transition-colors">Subscribe</button>
                 </form>
            </section>
        </div>
    );
};

export default HomePage;
