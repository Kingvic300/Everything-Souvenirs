
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/common/Button';
import { useAuthStore, useToastStore } from '../store';
import { useNavigate, Navigate } from 'react-router-dom';

type AuthMode = 'login' | 'register' | 'forgot';

type LoginFormInputs = {
  email: string;
  password:  string;
};

type RegisterFormInputs = {
  fullName: string;
  email: string;
  password:  string;
};


const AuthPage: React.FC = () => {
    const [mode, setMode] = useState<AuthMode>('login');
    const { isAuthenticated, login, register: registerUser } = useAuthStore();
    const [isLoading, setIsLoading] = useState(false);
    const { addToast } = useToastStore();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs & RegisterFormInputs>();
    
    if (isAuthenticated) {
        return <Navigate to="/dashboard" />;
    }

    const handleLogin: SubmitHandler<LoginFormInputs> = async ({email, password}) => {
        setIsLoading(true);
        await login(email, password);
        setIsLoading(false);
        addToast('Welcome back!', 'success');
        navigate('/dashboard');
    };

    const handleRegister: SubmitHandler<RegisterFormInputs> = async ({fullName, email, password}) => {
        setIsLoading(true);
        await registerUser(fullName, email, password);
        setIsLoading(false);
        addToast('Account created successfully!', 'success');
        navigate('/dashboard');
    };
    
    const handleForgot = () => {
        addToast('Password reset link sent to your email (mock).', 'info');
    };
    
    const currentSubmitHandler = mode === 'login' ? handleLogin : mode === 'register' ? handleRegister : handleForgot;
    
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 50 },
    };

    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <div className="max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-6">
                <AnimatePresence mode="wait">
                    {mode === 'login' && (
                        <motion.div key="login" variants={variants} initial="hidden" animate="visible" exit="exit">
                            <h2 className="text-3xl font-serif font-bold text-center">Sign In</h2>
                            <form onSubmit={handleSubmit(handleLogin)} className="mt-6 space-y-4">
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" {...register('email', { required: true })} className="input-field" />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input id="password" type="password" {...register('password', { required: true })} className="input-field" />
                                </div>
                                <Button type="submit" isLoading={isLoading} className="w-full">Sign In</Button>
                            </form>
                             <div className="text-center mt-4 text-sm">
                                <button onClick={() => setMode('forgot')} className="text-primary hover:underline">Forgot Password?</button>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                    Don't have an account? <button onClick={() => setMode('register')} className="font-semibold text-primary hover:underline">Create Account</button>
                                </p>
                            </div>
                        </motion.div>
                    )}
                    {mode === 'register' && (
                         <motion.div key="register" variants={variants} initial="hidden" animate="visible" exit="exit">
                             <h2 className="text-3xl font-serif font-bold text-center">Create Account</h2>
                            <form onSubmit={handleSubmit(handleRegister)} className="mt-6 space-y-4">
                                <div>
                                    <label htmlFor="fullName">Full Name</label>
                                    <input id="fullName" {...register('fullName', { required: true })} className="input-field" />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" {...register('email', { required: true })} className="input-field" />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input id="password" type="password" {...register('password', { required: true })} className="input-field" />
                                </div>
                                <Button type="submit" isLoading={isLoading} className="w-full">Create Account</Button>
                            </form>
                             <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                                Already have an account? <button onClick={() => setMode('login')} className="font-semibold text-primary hover:underline">Sign In</button>
                            </p>
                         </motion.div>
                    )}
                    {mode === 'forgot' && (
                        <motion.div key="forgot" variants={variants} initial="hidden" animate="visible" exit="exit">
                             <h2 className="text-3xl font-serif font-bold text-center">Reset Password</h2>
                             <p className="text-center text-sm text-gray-500 mt-2">Enter your email to receive a password reset link.</p>
                             <form onSubmit={handleSubmit(handleForgot)} className="mt-6 space-y-4">
                                 <div>
                                     <label htmlFor="email">Email</label>
                                     <input id="email" type="email" {...register('email', { required: true })} className="input-field" />
                                 </div>
                                 <Button type="submit" isLoading={isLoading} className="w-full">Reset Password</Button>
                             </form>
                             <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                                Remembered your password? <button onClick={() => setMode('login')} className="font-semibold text-primary hover:underline">Sign In</button>
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
};

export default AuthPage;
