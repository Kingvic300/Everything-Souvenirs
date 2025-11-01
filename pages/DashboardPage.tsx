
import React, { useState, useEffect } from 'react';
import { useAuthStore, useWishlistStore, useCartStore, useToastStore } from '../store';
import Button from '../components/common/Button';
import { Order, WishlistItem } from '../types';
import { fetchUserOrders } from '../api/mockApi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

type Tab = 'Profile' | 'Orders' | 'Wishlist' | 'Addresses';

const DashboardPage: React.FC = () => {
    const { user, logout } = useAuthStore();
    const [activeTab, setActiveTab] = useState<Tab>('Profile');
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const tabs: Tab[] = ['Profile', 'Orders', 'Wishlist', 'Addresses'];

    return (
        <div>
            <h1 className="text-4xl font-serif font-bold mb-8">My Dashboard</h1>
            <div className="flex flex-col md:flex-row gap-8">
                <aside className="md:w-1/4">
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <div className="text-center mb-4">
                            <div className="w-24 h-24 rounded-full bg-primary-light dark:bg-primary-dark mx-auto flex items-center justify-center text-4xl font-bold text-primary-dark dark:text-primary-light">
                                {user?.name.charAt(0)}
                            </div>
                            <h2 className="font-semibold mt-2">{user?.name}</h2>
                            <p className="text-sm text-gray-500">{user?.email}</p>
                        </div>
                        <nav className="flex flex-col space-y-2">
                            {tabs.map(tab => (
                                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-left rounded-md transition-colors ${activeTab === tab ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}>{tab}</button>
                            ))}
                            <button onClick={handleLogout} className="px-4 py-2 text-left rounded-md text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors">Logout</button>
                        </nav>
                    </div>
                </aside>
                <main className="md:w-3/4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {activeTab === 'Profile' && <ProfileTab />}
                            {activeTab === 'Orders' && <OrdersTab />}
                            {activeTab === 'Wishlist' && <WishlistTab />}
                            {activeTab === 'Addresses' && <AddressesTab />}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};

const ProfileTab = () => (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <h2 className="text-2xl font-serif font-bold mb-4">Profile Information</h2>
        {/* Mock profile form */}
        <form className="space-y-4">
             <div>
                <label>Full Name</label>
                <input defaultValue="Demo User" className="input-field"/>
             </div>
             <div>
                <label>Email</label>
                <input defaultValue="demo@example.com" className="input-field" readOnly/>
             </div>
             <Button>Update Profile</Button>
        </form>
    </div>
);

const OrdersTab = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    useEffect(() => {
        fetchUserOrders().then(setOrders);
    }, []);

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm space-y-4">
             <h2 className="text-2xl font-serif font-bold mb-4">My Orders</h2>
             {orders.map(order => (
                <div key={order.id} className="p-4 border dark:border-gray-700 rounded-md">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-bold">Order #{order.id}</p>
                            <p className="text-sm text-gray-500">Date: {order.date}</p>
                        </div>
                        <div className="text-right">
                            <p className={`font-semibold px-2 py-1 rounded-full text-sm ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{order.status}</p>
                            <p className="font-bold">₦{order.total.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
             ))}
        </div>
    );
};

const WishlistTab = () => {
    const { items, removeItem } = useWishlistStore();
    const { addItem: addToCart } = useCartStore();
    const { addToast } = useToastStore();

    const handleMoveToCart = (item: WishlistItem) => {
        addToCart(item);
        removeItem(item.id);
        addToast(<span><b>{item.name}</b> moved to cart!</span>, 'success');
    };

    return (
         <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
             <h2 className="text-2xl font-serif font-bold mb-4">My Wishlist</h2>
             {items.length > 0 ? (
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                     {items.map(item => (
                        <div key={item.id} className="border dark:border-gray-700 rounded-md p-2 text-center">
                            <img src={item.images[0]} alt={item.name} className="w-full h-32 object-cover rounded"/>
                            <h3 className="font-semibold mt-2 text-sm">{item.name}</h3>
                            <div className="flex gap-2 mt-2">
                               <Button onClick={() => handleMoveToCart(item)} className="text-xs flex-1 px-2 py-1">Move to Cart</Button>
                               <Button onClick={() => removeItem(item.id)} variant="secondary" className="text-xs flex-1 px-2 py-1">Remove</Button>
                            </div>
                        </div>
                     ))}
                 </div>
             ) : <p>Your wishlist is empty.</p>}
        </div>
    )
};

const AddressesTab = () => (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
         <h2 className="text-2xl font-serif font-bold mb-4">My Addresses</h2>
         <div className="p-4 border dark:border-gray-700 rounded-md">
            <h3 className="font-semibold">Default Shipping Address</h3>
            <p>123 Elegance Avenue,</p>
            <p>Lekki Phase 1, Lagos,</p>
            <p>Nigeria</p>
         </div>
         <Button className="mt-4">Add New Address</Button>
    </div>
);

export default DashboardPage;
