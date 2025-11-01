import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchProductById } from '../api/mockApi';
import { Product } from '../types';
import Button from '../components/common/Button';
import { useCartStore, useToastStore, useWishlistStore } from '../store';
import useHydratedStore from '../hooks/useHydratedStore';
import { HeartIcon, PlusIcon, MinusIcon } from '../components/common/Icons';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mainImage, setMainImage] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const { addItem: addToCart } = useCartStore();
  const { addToast } = useToastStore();
  const { addItem: addToWishlist, removeItem: removeFromWishlist } = useWishlistStore();
  // Fix: Explicitly type `state` as `any` to prevent TypeScript from inferring it as `unknown`.
  const isInWishlist = useHydratedStore(useWishlistStore, (state: any) => product ? state.isInWishlist(product.id) : false);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      fetchProductById(parseInt(id, 10)).then(data => {
        if (data) {
          setProduct(data);
          setMainImage(data.images[0]);
        }
        setIsLoading(false);
      });
    }
  }, [id]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      addToast(<span><b>{quantity} x {product.name}</b> added to cart!</span>, 'success');
    }
  };

  const handleWishlistToggle = () => {
    if (product) {
        if (isInWishlist) {
          removeFromWishlist(product.id);
          addToast(<span><b>{product.name}</b> removed from wishlist.</span>, 'info');
        } else {
          addToWishlist(product);
          addToast(<span><b>{product.name}</b> added to wishlist!</span>, 'success');
        }
    }
  };

  if (isLoading) {
    return <div>Loading product details...</div>; // Replace with a skeleton loader
  }

  if (!product) {
    return <div className="text-center py-20">
        <h2 className="text-3xl font-serif">Product Not Found</h2>
        <p className="text-gray-500 mt-2">We couldn't find the product you're looking for.</p>
    </div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Image Gallery */}
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <div className="mb-4">
          <img src={mainImage} alt={product.name} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex gap-2">
          {product.images.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={`${product.name} thumbnail ${index + 1}`} 
              className={`w-24 h-24 object-cover rounded-md cursor-pointer border-2 ${mainImage === img ? 'border-primary' : 'border-transparent'}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </motion.div>

      {/* Product Info */}
      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <h1 className="text-4xl font-serif font-bold mb-2">{product.name}</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-4">{product.category}</p>
        <p className="text-3xl font-bold text-primary dark:text-primary-light mb-6">₦{product.price.toLocaleString()}</p>
        <p className="leading-relaxed mb-6">{product.description}</p>
        
        {product.category === 'Personalized Gifts' && (
            <div className="mb-6">
                <label htmlFor="personalization" className="block text-sm font-medium mb-2">Personalization (optional)</label>
                <input type="text" id="personalization" placeholder="Enter name or message" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
        )}

        <div className="flex items-center gap-4 mb-6">
            <h3 className="text-sm font-medium">Quantity:</h3>
            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2"><MinusIcon className="w-5 h-5"/></button>
                <span className="px-4">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="p-2"><PlusIcon className="w-5 h-5"/></button>
            </div>
        </div>

        <div className="flex items-center gap-4">
            <Button onClick={handleAddToCart} className="flex-grow">Add to Cart</Button>
            <button onClick={handleWishlistToggle} className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg">
                {/* Fix: Explicitly cast isInWishlist to boolean to handle initial undefined state. */}
                <HeartIcon className={`w-6 h-6 transition-colors ${isInWishlist ? 'text-red-500' : 'text-gray-500'}`} isFilled={!!isInWishlist} />
            </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetailsPage;