import React, { useState } from 'react';
import { FaQuoteLeft, FaPalette, FaShippingFast, FaAward, FaStar, FaHeart, FaEye } from 'react-icons/fa';
import { Maximize2 } from "lucide-react";
import {categories, reviews} from "../libs/data.js";
import Tshirt from "../assets/T-shirt.jpg"
import { useNavigate } from 'react-router-dom';
import powerBank from "../assets/powerBank.jpg"
import TestimonialsSection from "../components/TestimonialsSection.jsx"
import notebook from '../assets/notebook.jpg';
import mug from '../assets/mug.jpg';
import waterBottle from '../assets/water-bottle.jpg';
import tote from '../assets/tote.jpg';
import cap from "../assets/cap.avif"
import ImagePreview from "../components/ImagePreview.jsx";

const flashLink = "https://images.unsplash.com/photo-1642084962115-61172e7f8b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VVNCJTIwRmxhc2glMjBEcml2ZXxlbnwwfHwwfHx8MA%3D%3D"
const keyChainLink = "https://www.brandedgifts.ng/wp-content/uploads/2023/04/branded-metallic-keyholder-with-opener-400x400.jpg"

const products = [
    {
        id: 1,
        name: 'Branded T-Shirt',
        basePrice: '₦3,500',
        image: Tshirt,
        category: 'Apparel',
        description: 'Premium cotton t-shirt with custom branding',
        customizationOptions: ['Screen Printing', 'Embroidery', 'Heat Transfer'],
        minOrder: 50,
        leadTime: '7-10 days'
    },
    {
        id: 2,
        name: 'Custom Mug',
        basePrice: '₦3,000',
        image: mug,
        category: 'Drinkware',
        description: 'Ceramic mug perfect for office branding',
        customizationOptions: ['Logo Printing', 'Color Customization', 'Text Engraving'],
        minOrder: 25,
        leadTime: '5-7 days'
    },
    {
        id: 3,
        name: 'Key Holder',
        basePrice: '₦1,500',
        image: keyChainLink,
        category: 'Accessories',
        description: 'Durable key holder with logo engraving',
        customizationOptions: ['Laser Engraving', 'Color Options', 'Shape Customization'],
        minOrder: 100,
        leadTime: '3-5 days'
    },
    {
        id: 4,
        name: 'Custom Cap',
        basePrice: '₦5,000',
        image: cap,
        category: 'Apparel',
        description: 'Adjustable cap with embroidered logo',
        customizationOptions: ['Embroidery', 'Patch Application', 'Color Selection'],
        minOrder: 30,
        leadTime: '7-10 days'
    },
    {
        id: 5,
        name: 'Branded Notebook',
        basePrice: '₦4,000',
        image: notebook,
        category: 'Office',
        description: 'Professional notebook for corporate gifts',
        customizationOptions: ['Cover Printing', 'Foil Stamping', 'Custom Pages'],
        minOrder: 50,
        leadTime: '5-7 days'
    },
    {
        id: 6,
        name: 'USB Flash Drive',
        basePrice: '₦6,000',
        image: flashLink,
        category: 'Tech',
        description: '16GB USB drive with custom logo',
        customizationOptions: ['Laser Engraving', 'Color Options', 'Custom Shape'],
        minOrder: 25,
        leadTime: '7-10 days'
    },
    {
        id: 7,
        name: 'Tote Bag',
        basePrice: '₦8,000',
        image: tote,
        category: 'Bags',
        description: 'Eco-friendly tote bag with custom printing',
        customizationOptions: ['Screen Printing', 'Heat Transfer', 'Embroidery'],
        minOrder: 50,
        leadTime: '7-10 days'
    },
    {
        id: 8,
        name: 'Water Bottle',
        basePrice: '₦5,500',
        image: waterBottle,
        category: 'Drinkware',
        description: 'Stainless steel water bottle with logo',
        customizationOptions: ['Laser Engraving', 'Color Options', 'Custom Labels'],
        minOrder: 25,
        leadTime: '5-7 days'
    },
    {
        id: 9,
        name: 'Power Bank',
        basePrice: '₦12,000',
        image: powerBank,
        category: 'Tech',
        description: 'High-capacity power bank with branding',
        customizationOptions: ['Logo Printing', 'Color Selection', 'Custom Packaging'],
        minOrder: 20,
        leadTime: '10-14 days'
    },
];

const Shop = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterName, setNewsletterName] = useState('');
    const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter((product) => product.category === selectedCategory);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        setNewsletterSubmitted(true);
        setNewsletterEmail('');
        setNewsletterName('');
        setTimeout(() => setNewsletterSubmitted(false), 3000);
    };

    const handleRequestQuote = (product) => {
        // Navigate to quote page with product details
        console.log('Requesting quote for:', product.name);
    };

    const handleCustomizeOrder = (product) => {
        // Navigate to customization page
        console.log('Customizing order for:', product.name);
    };

    const handleScrollToProcess = () => {
        const processSection = navigate('/services#process');
        if (processSection) {
            processSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            {/* Image Preview Modal */}
            <ImagePreview
                selectedImage={selectedImage}
                onClose={() => setSelectedImage(null)}
                altText="Product preview"
            />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900 text-white py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-400">Branded Gifts</span>
                    </h1>
                    <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-indigo-100 mb-8">
                        Transform your brand into memorable experiences with our custom-designed promotional merchandise. Perfect for corporate gifts, events, and brand building.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <button className="bg-emerald-500 hover:bg-emerald-700 text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-xl transform hover:scale-105">
                            Request Custom Quote
                        </button>
                        <button
                            className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200"
                            onClick={handleScrollToProcess}
                        >
                            View Our Process
                        </button>
                    </div>
                    <div className="flex justify-center items-center gap-8 text-indigo-200">
                        <div className="flex items-center gap-2">
                            <FaShippingFast className="text-indigo-400" />
                            <span>Fast Turnaround</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaAward className="text-indigo-400" />
                            <span>Premium Quality</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPalette className="text-indigo-400" />
                            <span>Full Customization</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100">
                {/* Categories */}
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Browse Gift Categories</h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                Discover the perfect branded gifts for your business needs from our curated collection
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
                            {categories.map((category) => (
                                <div
                                    key={category.name}
                                    onClick={() => setSelectedCategory(category.name)}
                                    className={`group cursor-pointer bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 ${
                                        selectedCategory === category.name
                                            ? 'border-indigo-500 bg-indigo-50 shadow-indigo-200'
                                            : 'border-slate-200 hover:border-indigo-300'
                                    }`}
                                >
                                    <div className="text-center">
                                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{category.name}</h3>
                                        <p className="text-sm text-slate-600 mb-3">{category.description}</p>
                                        <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-bold">
                                                     {category.count} items
                                                </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => setSelectedCategory('All')}
                                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                                    selectedCategory === 'All'
                                        ? 'bg-indigo-500 text-white shadow-lg'
                                        : 'bg-white text-indigo-600 border-2 border-indigo-500 hover:bg-indigo-50'
                                }`}
                            >
                                Show All Products
                            </button>
                        </div>
                    </div>
                </section>

                {/* Value Proposition Banner */}
                <section className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-6 px-6">
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="text-lg md:text-xl font-semibold">
                            🎯 <strong>Custom Branding Specialists</strong> • Minimum Order Quantities Apply • Free Design Consultation •
                            <span className="font-bold ml-2">Get Your Quote Today!</span>
                        </p>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                                {selectedCategory === 'All' ? 'All Branded Gifts' : `${selectedCategory} Collection`}
                            </h2>
                            <p className="text-xl text-slate-600">{filteredProducts.length} customizable products available</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {filteredProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="group bg-white shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden transition-all duration-300 transform hover:-translate-y-3 border border-slate-200"
                                >
                                    <div className="relative overflow-hidden">
                                        <div
                                            className="relative cursor-zoom-in"
                                            onClick={() => setSelectedImage(product.image)}
                                        >
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <div className="bg-white/10 backdrop-blur-sm text-white rounded-full p-3">
                                                    <Maximize2 className="w-6 h-6" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute top-4 right-4">
                                                     <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-bold">
                                                          {product.category}
                                                     </span>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                                     <span className="text-xs bg-white/90 text-slate-700 px-3 py-1 rounded-full font-bold">
                                                          Min: {product.minOrder}

                                                     </span>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {/* Updated overlay gradient from from-black/50 to from-indigo-900/50 */}
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <div className="flex gap-2">
                                                    <button className="flex-1 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-all duration-200">
                                                        <FaEye className="inline mr-1" /> Preview
                                                    </button>
                                                    <button className="flex-1 bg-indigo-500/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-indigo-600/80 transition-all duration-200">
                                                        <FaHeart className="inline mr-1" /> Save
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-slate-600 mb-4 text-sm leading-relaxed">{product.description}</p>

                                        <div className="mb-4">
                                            <p className="text-xs text-slate-500 mb-2">Customization Options:</p>
                                            <div className="flex flex-wrap gap-1">
                                                {product.customizationOptions.slice(0, 2).map((option, index) => (
                                                    <span key={index} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                                                                   {option}
                                                              </span>
                                                ))}
                                                {product.customizationOptions.length > 2 && (
                                                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                                                                   +{product.customizationOptions.length - 2} more
                                                              </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between mb-4">
                                            <div className="text-right">
                                                <span className="text-xs text-slate-500">Lead Time</span>
                                                <div className="text-sm font-semibold text-slate-700">{product.leadTime}</div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <button
                                                onClick={() => handleRequestQuote(product)}
                                                className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-4 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                            >
                                                <FaQuoteLeft className="inline mr-2" />
                                                Request Quote
                                            </button>
                                            <button
                                                onClick={() => handleCustomizeOrder(product)}
                                                className="w-full border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50 px-4 py-3 rounded-xl font-bold transition-all duration-300"
                                            >
                                                <FaPalette className="inline mr-2" />
                                                Customize & Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Customer Reviews */}
                <TestimonialsSection/>

                {/* Call to Action */}
                <section className="bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900 text-white py-20 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
                        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                            Let's create memorable branded gifts that leave a lasting impression on your clients and employees.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-emerald-500 hover:bg-emerald-700 text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-xl transform hover:scale-105">
                                Get Custom Quote
                            </button>
                            <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200">
                                Schedule Consultation
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Shop;