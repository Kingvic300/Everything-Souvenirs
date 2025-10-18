import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Maximize2 } from "lucide-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {productData, relatedProducts, reviews} from "../libs/data.js";
import ImagePreview from "../components/ImagePreview.jsx";

const ProductDetail = () => {
    const { id } = useParams();
    const product = productData[id] || productData[1]; // Default to first product if ID not found

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[2]); // Default to M
    const [selectedBranding, setSelectedBranding] = useState(product.brandingOptions[0]);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [addedToCart, setAddedToCart] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1 && newQuantity <= 100) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = () => {
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 3000);
    };

    const totalPrice = product.price * quantity;
    const savings = (product.originalPrice - product.price) * quantity;

    return (
        <>
            {/* Image Preview Modal */}
            <ImagePreview
                selectedImage={previewImage}
                onClose={() => setPreviewImage(null)}
                altText="Product preview"
            />

            <div className="bg-slate-50 min-h-screen">
                {/* Breadcrumb */}
                <div className="bg-white border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <nav className="flex items-center space-x-2 text-sm text-slate-600">
                            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
                            <span>/</span>
                            <Link to="/shop" className="hover:text-purple-600 transition-colors">Shop</Link>
                            <span>/</span>
                            <span className="text-slate-900">{product.name}</span>
                        </nav>
                    </div>
                </div>

                {/* Product Hero Section */}
                <section className="py-12 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Product Images */}
                            <div className="space-y-4">
                                <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg relative group">
                                    <div
                                        className="relative cursor-zoom-in h-full"
                                        onClick={() => setPreviewImage(product.images[selectedImage])}
                                    >
                                        <img
                                            src={product.images[selectedImage]}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="bg-white/10 backdrop-blur-sm text-white rounded-full p-3">
                                                <Maximize2 className="w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-4">
                                    {product.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            onDoubleClick={() => setPreviewImage(image)}
                                            className={`group aspect-square bg-white rounded-lg overflow-hidden border-2 transition-all duration-200 relative ${
                                                selectedImage === index ? 'border-purple-500' : 'border-slate-200 hover:border-purple-300'
                                            }`}
                                        >
                                            <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <div className="bg-white/10 backdrop-blur-sm text-white rounded-full p-2">
                                                    <Maximize2 className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                      {product.availability}
                    </span>
                                    </div>
                                    <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>

                                    {/* Rating */}
                                    <div className="flex items-center space-x-2 mb-4">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-slate-300'}`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-slate-600">{product.rating} ({product.reviewCount} reviews)</span>
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-center space-x-4 mb-6">
                                                 <span className="text-4xl font-bold text-purple-600">
                                                      {product.currency}{totalPrice.toLocaleString()}
                                                 </span>
                                        {product.originalPrice > product.price && (
                                            <>
                                                          <span className="text-xl text-slate-500 line-through">
                                                               {product.currency}{(product.originalPrice * quantity).toLocaleString()}
                                                          </span>
                                                <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm font-medium">
                                                               Save {product.currency}{savings.toLocaleString()}
                                                          </span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Product Options */}
                                <div className="space-y-6">
                                    {/* Color Selection */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-900 mb-3">
                                            Color: <span className="font-normal text-slate-600">{selectedColor}</span>
                                        </label>
                                        <div className="flex space-x-3">
                                            {product.colors.map((color) => (
                                                <button
                                                    key={color}
                                                    onClick={() => setSelectedColor(color)}
                                                    className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                                                        selectedColor === color
                                                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                                                            : 'border-slate-300 hover:border-purple-300'
                                                    }`}
                                                >
                                                    {color}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Size Selection */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-900 mb-3">
                                            Size: <span className="font-normal text-slate-600">{selectedSize}</span>
                                        </label>
                                        <div className="flex space-x-3">
                                            {product.sizes.map((size) => (
                                                <button
                                                    key={size}
                                                    onClick={() => setSelectedSize(size)}
                                                    className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                                                        selectedSize === size
                                                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                                                            : 'border-slate-300 hover:border-purple-300'
                                                    }`}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Branding Options */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-900 mb-3">
                                            Branding Method: <span className="font-normal text-slate-600">{selectedBranding}</span>
                                        </label>
                                        <div className="flex space-x-3">
                                            {product.brandingOptions.map((option) => (
                                                <button
                                                    key={option}
                                                    onClick={() => setSelectedBranding(option)}
                                                    className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                                                        selectedBranding === option
                                                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                                                            : 'border-slate-300 hover:border-purple-300'
                                                    }`}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quantity */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-900 mb-3">Quantity</label>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center border border-slate-300 rounded-lg">
                                                <button
                                                    onClick={() => handleQuantityChange(-1)}
                                                    className="px-3 py-2 hover:bg-slate-100 transition-colors"
                                                >
                                                    -
                                                </button>
                                                <span className="px-4 py-2 border-x border-slate-300 min-w-[60px] text-center">
                                                                {quantity}
                                                           </span>
                                                <button
                                                    onClick={() => handleQuantityChange(1)}
                                                    className="px-3 py-2 hover:bg-slate-100 transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <span className="text-sm text-slate-600">
                                                           {quantity > 10 && "Bulk pricing available for 10+ items"}
                                                      </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Add to Cart */}
                                <div className="space-y-4">
                                    <button
                                        onClick={handleAddToCart}
                                        className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                                            addedToCart
                                                ? 'bg-green-500 text-white'
                                                : 'bg-purple-600 hover:bg-purple-700 text-white hover:shadow-lg transform hover:scale-105'
                                        }`}
                                    >
                                        {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
                                    </button>

                                    <div className="grid grid-cols-2 gap-4">
                                        <button className="py-3 px-6 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
                                            Add to Wishlist
                                        </button>
                                        <button className="py-3 px-6 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                                            Get Quote
                                        </button>
                                    </div>
                                </div>

                                {/* Key Features */}
                                <div className="bg-slate-100 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-4">Key Features</h3>
                                    <ul className="space-y-2">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="flex items-center text-slate-700">
                                                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Product Information Tabs */}
                <section className="py-12 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="border-b border-slate-200 mb-8">
                            <nav className="flex space-x-8">
                                {[
                                    { id: 'description', label: 'Description' },
                                    { id: 'specifications', label: 'Specifications' },
                                    { id: 'reviews', label: 'Reviews' },
                                    { id: 'shipping', label: 'Shipping' }
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                                            activeTab === tab.id
                                                ? 'border-purple-500 text-purple-600'
                                                : 'border-transparent text-slate-500 hover:text-slate-700'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <div className="min-h-[300px]">
                            {activeTab === 'description' && (
                                <div className="prose max-w-none">
                                    <p className="text-lg text-slate-700 leading-relaxed mb-6">{product.description}</p>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">Perfect For:</h3>
                                    <ul className="grid md:grid-cols-2 gap-2">
                                        <li>• Corporate events and conferences</li>
                                        <li>• Team building activities</li>
                                        <li>• Product launches and promotions</li>
                                        <li>• Employee appreciation gifts</li>
                                        <li>• Trade shows and exhibitions</li>
                                        <li>• Brand awareness campaigns</li>
                                    </ul>
                                </div>
                            )}

                            {activeTab === 'specifications' && (
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4">Product Specifications</h3>
                                        <dl className="space-y-3">
                                            {Object.entries(product.specifications).map(([key, value]) => (
                                                <div key={key} className="flex">
                                                    <dt className="font-medium text-slate-900 w-1/3">{key}:</dt>
                                                    <dd className="text-slate-700">{value}</dd>
                                                </div>
                                            ))}
                                        </dl>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4">Branding Information</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-medium text-slate-900">Print Area:</h4>
                                                <p className="text-slate-700">Front chest: 4" x 4" maximum</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900">File Requirements:</h4>
                                                <p className="text-slate-700">Vector files preferred (AI, EPS, PDF)</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900">Setup Time:</h4>
                                                <p className="text-slate-700">3-5 business days for custom orders</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'reviews' && (
                                <div className="space-y-8">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-slate-900">Customer Reviews</h3>
                                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                                            Write a Review
                                        </button>
                                    </div>

                                    <div className="space-y-6">
                                        {reviews.map((review) => (
                                            <div key={review.id} className="border-b border-slate-200 pb-6">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center space-x-2">
                                                        <span className="font-medium text-slate-900">{review.name}</span>
                                                        {review.verified && (
                                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                                                                            Verified Purchase
                                                                       </span>
                                                        )}
                                                    </div>
                                                    <span className="text-sm text-slate-500">{review.date}</span>
                                                </div>
                                                <div className="flex mb-2">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-slate-300'}`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <p className="text-slate-700">{review.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'shipping' && (
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4">Shipping Information</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-medium text-slate-900">Standard Delivery</h4>
                                                <p className="text-slate-700">5-7 business days • ₦2,000</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900">Express Delivery</h4>
                                                <p className="text-slate-700">2-3 business days • ₦5,000</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900">Free Shipping</h4>
                                                <p className="text-slate-700">Orders over ₦50,000</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4">Return Policy</h3>
                                        <div className="space-y-2">
                                            <p className="text-slate-700">• 30-day return window</p>
                                            <p className="text-slate-700">• Items must be unused and in original packaging</p>
                                            <p className="text-slate-700">• Custom branded items are non-returnable</p>
                                            <p className="text-slate-700">• Return shipping costs apply</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Related Products */}
                <section className="py-16 px-6 bg-slate-100">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">You Might Also Like</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {relatedProducts.map((relatedProduct) => (
                                <Link
                                    key={relatedProduct.id}
                                    to={`/product/${relatedProduct.id}`}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className="relative overflow-hidden">
                                        <div
                                            className="relative cursor-zoom-in"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setPreviewImage(relatedProduct.image);
                                            }}
                                        >
                                            <img
                                                src={relatedProduct.image}
                                                alt={relatedProduct.name}
                                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <div className="bg-white/10 backdrop-blur-sm text-white rounded-full p-3">
                                                    <Maximize2 className="w-6 h-6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                                            {relatedProduct.name}
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-bold text-purple-600">{relatedProduct.price}</span>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        className={`w-4 h-4 ${i < Math.floor(relatedProduct.rating) ? 'text-yellow-400' : 'text-slate-300'}`}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ProductDetail;