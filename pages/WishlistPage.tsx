
import React from 'react';
import { useWishlistStore, useCartStore, useToastStore } from '../store';
import useHydratedStore from '../hooks/useHydratedStore';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import { WishlistItem } from '../types';

const WishlistPage: React.FC = () => {
  const { removeItem } = useWishlistStore();
  // Fix: Explicitly type `state` as `any` to prevent TypeScript from inferring it as `unknown`.
  const items = useHydratedStore(useWishlistStore, (state: any) => state.items) || [];
  const { addItem: addToCart } = useCartStore();
  const { addToast } = useToastStore();
  
  const handleMoveToCart = (item: WishlistItem) => {
    addToCart(item);
    removeItem(item.id);
    addToast(<span><b>{item.name}</b> moved to cart!</span>, 'success');
  };

  return (
    <div>
      <h1 className="text-4xl font-serif font-bold text-center mb-12">My Wishlist</h1>
      {items.length === 0 ? (
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
        >
            <h2 className="text-2xl font-semibold">Your wishlist is empty.</h2>
            <p className="text-gray-500 my-4">Explore our collections and save your favorite items.</p>
            <Link to="/shop"><Button>Discover Souvenirs</Button></Link>
        </motion.div>
      ) : (
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {items.map(item => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden text-center"
              >
                <Link to={`/product/${item.id}`}>
                    <img src={item.images[0]} alt={item.name} className="w-full h-48 object-cover"/>
                </Link>
                <div className="p-4">
                  <h3 className="font-semibold truncate">{item.name}</h3>
                  <p className="text-primary font-bold my-2">₦{item.price.toLocaleString()}</p>
                  <div className="space-y-2">
                    <Button onClick={() => handleMoveToCart(item)} className="w-full text-sm">Move to Cart</Button>
                    <Button onClick={() => removeItem(item.id)} variant="ghost" className="w-full text-sm">Remove</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default WishlistPage;