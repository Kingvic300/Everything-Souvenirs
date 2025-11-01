import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { useCartStore, useWishlistStore, useToastStore } from '../store';
import useHydratedStore from '../hooks/useHydratedStore';
import { HeartIcon } from './common/Icons';
import Button from './common/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem: addToCart } = useCartStore();
  const { addItem: addToWishlist, removeItem: removeFromWishlist } = useWishlistStore();
  const { addToast } = useToastStore();
  // Fix: Explicitly type `state` as `any` to prevent TypeScript from inferring it as `unknown`.
  const isInWishlist = useHydratedStore(useWishlistStore, (state: any) => state.isInWishlist(product.id));

  const handleAddToCart = () => {
    addToCart(product);
    addToast(
      <span><b>{product.name}</b> added to cart!</span>,
      'success'
    );
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
      addToast(<span><b>{product.name}</b> removed from wishlist.</span>, 'info');
    } else {
      addToWishlist(product);
      addToast(<span><b>{product.name}</b> added to wishlist!</span>, 'success');
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <motion.img
            src={product.images[0]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
          />
          <motion.img
            src={product.images[1]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
          />
        </Link>
        <button onClick={handleWishlistToggle} className="absolute top-3 right-3 p-2 bg-white/70 dark:bg-gray-900/70 rounded-full backdrop-blur-sm">
          {/* Fix: Explicitly cast isInWishlist to boolean to handle initial undefined state. */}
          <HeartIcon className={`w-6 h-6 transition-colors ${isInWishlist ? 'text-red-500' : 'text-gray-500'}`} isFilled={!!isInWishlist} />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-serif font-semibold text-gray-800 dark:text-white truncate">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-bold text-primary dark:text-primary-light">₦{product.price.toLocaleString()}</p>
           <Button onClick={handleAddToCart} variant="primary" className="px-4 py-2 text-sm">Add to Cart</Button>
        </div>
        <Link to={`/product/${product.id}`}>
            <Button variant="ghost" className="w-full mt-2 text-sm">View Product Details</Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;