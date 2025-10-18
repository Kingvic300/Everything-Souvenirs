import React, { useState, useEffect } from "react";
import { products } from "../libs/data.js";
import { Link } from "react-router-dom";
import { X, Maximize2 } from "lucide-react";

const FeaturedProductsSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        document.body.style.overflow = selectedImage ? "hidden" : "";
    }, [selectedImage]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setSelectedImage(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <section className="py-20 px-6 bg-slate-50">
            {/* Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative flex items-center justify-center w-full max-w-5xl px-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white hover:text-indigo-300 transition-colors z-10"
                            aria-label="Close image preview"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <img
                            src={selectedImage}
                            alt="Product preview"
                            className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-slate-700 transition-transform duration-300"
                        />
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Featured Products
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Discover our most popular branded gifts that make lasting impressions
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 flex flex-col h-full"
                        >
                            {/* Image */}
                            <div
                                className="relative overflow-hidden cursor-zoom-in"
                                onClick={() => setSelectedImage(product.image)}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-white/10 backdrop-blur-sm text-white rounded-full p-3">
                                        <Maximize2 className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-indigo-700 mb-2 group-hover:text-indigo-800 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                                    {product.description}
                                </p>
                                <Link
                                    to={`/product/${product.id}`}
                                    className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg mt-auto"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    View Details
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProductsSection;
