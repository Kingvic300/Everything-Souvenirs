
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../store';
import useHydratedStore from '../hooks/useHydratedStore';
import Button from '../components/common/Button';
import { PlusIcon, MinusIcon, XIcon } from '../components/common/Icons';

const CartPage: React.FC = () => {
  const { updateQuantity, removeItem } = useCartStore();
  // Fix: Explicitly type `state` as `any` to prevent TypeScript from inferring it as `unknown`.
  const items = useHydratedStore(useCartStore, (state: any) => state.items) || [];
  const totalPrice = useHydratedStore(useCartStore, (state: any) => state.totalPrice()) || 0;
  
  const taxRate = 0.075; // 7.5% VAT
  const tax = totalPrice * taxRate;
  const grandTotal = totalPrice + tax;

  return (
    <div>
      <h1 className="text-4xl font-serif font-bold text-center mb-12">Your Shopping Cart</h1>
      {items.length === 0 ? (
        <div className="text-center py-20">
            <h2 className="text-2xl font-semibold">Your cart is empty.</h2>
            <p className="text-gray-500 my-4">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/shop"><Button>Continue Shopping</Button></Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.ul layout className="space-y-4">
              <AnimatePresence>
                {items.map(item => (
                  <motion.li
                    layout
                    key={item.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50, transition: { duration: 0.3 } }}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                  >
                    <img src={item.images[0]} alt={item.name} className="w-24 h-24 rounded-md object-cover" />
                    <div className="flex-grow">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">₦{item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2"><MinusIcon className="w-5 h-5"/></button>
                      <span className="px-4">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2"><PlusIcon className="w-5 h-5"/></button>
                    </div>
                    <p className="font-semibold w-24 text-right">₦{(item.price * item.quantity).toLocaleString()}</p>
                    <button onClick={() => removeItem(item.id)} className="text-gray-500 hover:text-red-500">
                        <XIcon className="w-6 h-6" />
                    </button>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-primary-light dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
                <h2 className="text-2xl font-serif font-bold">Order Summary</h2>
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₦{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax (7.5%)</span>
                    <span>₦{tax.toLocaleString()}</span>
                </div>
                <div className="border-t border-gray-400/50 dark:border-gray-600 my-2"></div>
                <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₦{grandTotal.toLocaleString()}</span>
                </div>
                <Link to="/checkout" className="block">
                    <Button className="w-full mt-4">Proceed to Checkout</Button>
                </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;