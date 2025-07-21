import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import backgroundSignUpAndSignInImage from '../assets/backgroundSignUpAndSignInImage.jpg';

const SignUpPage = () => {
     const [fullName, setFullName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [showPassword, setShowPassword] = useState(false);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState('');

     const togglePasswordVisibility = () => {
          setShowPassword(prev => !prev);
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          setLoading(true);
          setError('');

          try {
               const response = await fetch('/api/auth/signup', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ fullName, email, password }),
               });

               const data = await response.json();

               if (!response.ok) {
                    throw new Error(data.message || 'Something went wrong');
               }

               console.log('Signup success:', data);
          } catch (err) {
               setError(err.message);
          } finally {
               setLoading(false);
          }
     };

     const handleGoogleSignup = () => {
          alert('Google sign-up not implemented yet');
     };

     return (
         <div
             className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 relative"
             style={{ backgroundImage: `url(${backgroundSignUpAndSignInImage})` }}
         >
              <div className="absolute inset-0 bg-black/50 z-0" />

              <div className="relative z-10 w-full max-w-2xl sm:max-w-xl backdrop-blur-md bg-black/40 shadow-2xl rounded-3xl p-10 sm:p-12 border border-white/20 text-white">
                   <h2 className="text-4xl font-bold text-center mb-2">Join Us Today</h2>
                   <p className="text-base text-center text-gray-200 mb-6">Sign up to start your journey</p>

                   {error && (
                       <div className="mb-4 text-sm text-red-300 text-center bg-red-900/30 px-4 py-2 rounded">
                            {error}
                       </div>
                   )}

                   {/* Google Signup Button */}
                   <button
                       onClick={handleGoogleSignup}
                       className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 py-2 rounded-md transition">
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        Continue with Google
                   </button>

                   {/* Divider */}
                   <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                             <div className="w-full border-t border-white/20" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                             <span className="bg-black/40 px-3 text-gray-300">or sign up with email</span>
                        </div>
                   </div>

                   {/* Signup Form */}
                   <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                             <label className="block text-sm font-medium mb-1">Full Name</label>
                             <input
                                 type="text"
                                 value={fullName}
                                 onChange={(e) => setFullName(e.target.value)}
                                 placeholder="John Doe"
                                 className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-black/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                                 required
                             />
                        </div>

                        <div>
                             <label className="block text-sm font-medium mb-1">Email Address</label>
                             <input
                                 type="email"
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 placeholder="you@example.com"
                                 className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-black/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                                 required
                             />
                        </div>

                        <div className="relative">
                             <label className="block text-sm font-medium mb-1">Password</label>
                             <input
                                 type={showPassword ? 'text' : 'password'}
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                                 placeholder="Enter your password"
                                 className="w-full px-4 py-2 pr-10 border border-gray-400 rounded-lg bg-black/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                                 required
                             />
                             <div
                                 className="absolute top-[68%] right-3 -translate-y-1/2 flex items-center cursor-pointer text-gray-300 hover:text-white"
                                 onClick={togglePasswordVisibility}
                             >
                                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                             </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 px-4 font-semibold rounded-lg transition duration-300 text-white shadow-lg ${
                                loading
                                    ? 'bg-pink-300 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-indigo-500 to-indigo-500 hover:from-indigo-600 hover:to-indigo-600'
                            }`}
                        >
                             {loading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                   </form>

                   <p className="mt-6 text-sm text-center text-gray-200">
                        Already have an account?{' '}
                        <Link to="/signin" className="text-indigo-300 hover:underline font-medium">
                             Sign In
                        </Link>
                   </p>
              </div>
         </div>
     );
};

export default SignUpPage;
