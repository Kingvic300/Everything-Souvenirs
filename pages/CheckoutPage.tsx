
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { useCartStore, useToastStore } from '../store';
import { submitOrder } from '../api/mockApi';
import { useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '../components/common/Icons';

type FormInputs = {
  fullName: string;
  email: string;
  address: string;
  city: string;
  country: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

const CheckoutPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { items, totalPrice, clearCart } = useCartStore();
  const { addToast } = useToastStore();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsLoading(true);
    const orderData = {
      ...data,
      items,
      total: totalPrice(),
    };
    try {
        const result = await submitOrder(orderData);
        if (result.success) {
            setIsSuccess(true);
            clearCart();
            setTimeout(() => {
                navigate('/dashboard');
                addToast('Your order has been placed!', 'success');
            }, 3000)
        } else {
            addToast('There was an error placing your order.', 'error');
        }
    } catch (error) {
        addToast('An unexpected error occurred.', 'error');
    } finally {
        setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
        >
            <CheckCircleIcon className="w-24 h-24 mx-auto text-green-500"/>
            <h2 className="text-3xl font-serif font-bold mt-6">Thank You!</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Your order has been placed successfully.</p>
            <p className="mt-4">Redirecting you to your dashboard...</p>
        </motion.div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif font-bold text-center mb-12">Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Shipping Information */}
        <div className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold mb-4">Shipping Information</h2>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input id="fullName" {...register('fullName', { required: true })} className="input-field" />
            {errors.fullName && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" {...register('email', { required: true })} className="input-field" />
            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input id="address" {...register('address', { required: true })} className="input-field" />
            {errors.address && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div>
                <label htmlFor="city">City</label>
                <input id="city" {...register('city', { required: true })} className="input-field" />
                {errors.city && <span className="text-red-500 text-sm">This field is required</span>}
             </div>
             <div>
                <label htmlFor="country">Country</label>
                <input id="country" {...register('country', { required: true })} className="input-field" />
                {errors.country && <span className="text-red-500 text-sm">This field is required</span>}
             </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold mb-4">Payment Details</h2>
           <div>
            <label htmlFor="cardNumber">Card Number</label>
            <input id="cardNumber" {...register('cardNumber', { required: true, pattern: /^\d{16}$/ })} placeholder="**** **** **** ****" className="input-field" />
            {errors.cardNumber && <span className="text-red-500 text-sm">Valid 16-digit card number is required</span>}
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div>
                <label htmlFor="expiryDate">Expiry Date</label>
                <input id="expiryDate" {...register('expiryDate', { required: true, pattern: /^(0[1-9]|1[0-2])\/\d{2}$/ })} placeholder="MM/YY" className="input-field" />
                {errors.expiryDate && <span className="text-red-500 text-sm">Valid MM/YY is required</span>}
             </div>
             <div>
                <label htmlFor="cvv">CVV</label>
                <input id="cvv" {...register('cvv', { required: true, pattern: /^\d{3}$/ })} placeholder="123" className="input-field" />
                {errors.cvv && <span className="text-red-500 text-sm">Valid 3-digit CVV is required</span>}
             </div>
          </div>
        </div>
        
        <div className="md:col-span-2 text-center mt-8">
            <Button type="submit" isLoading={isLoading} className="w-full max-w-sm">Complete Order</Button>
        </div>
      </form>
    </div>
  );
};

// Add a helper class to your CSS or a style tag if you don't have one
const style = document.createElement('style');
style.innerHTML = `
  .input-field {
    width: 100%;
    padding: 0.75rem 1rem;
    border-width: 1px;
    border-color: #D1D5DB; /* gray-300 */
    border-radius: 0.375rem; /* rounded-md */
    background-color: #F9FAFB; /* gray-50 */
  }
  .dark .input-field {
    border-color: #4B5563; /* dark:border-gray-600 */
    background-color: #374151; /* dark:bg-gray-700 */
  }
  .input-field:focus {
    outline: none;
    --tw-ring-color: #C8A2C8; /* ring-primary */
    box-shadow: 0 0 0 2px var(--tw-ring-color);
  }
`;
document.head.appendChild(style);


export default CheckoutPage;
