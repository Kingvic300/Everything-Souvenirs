import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/common/Button';
import { useToastStore } from '../store';

type ContactFormInputs = {
    name: string;
    email: string;
    message: string;
};

const ContactPage: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>();
    const { addToast } = useToastStore();

    const onSubmit = (data: ContactFormInputs) => {
        console.log(data); // Mock submission
        addToast('Your message has been sent!', 'success');
        reset();
    };

    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl font-serif font-bold">Get In Touch</h1>
                <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Have a question, a suggestion, or just want to say hello? We'd love to hear from you.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input id="name" {...register('name', { required: true })} className="input-field" />
                            {errors.name && <span className="text-red-500 text-sm">Name is required.</span>}
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" {...register('email', { required: true })} className="input-field" />
                             {errors.email && <span className="text-red-500 text-sm">A valid email is required.</span>}
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows={5} {...register('message', { required: true })} className="input-field"></textarea>
                            {errors.message && <span className="text-red-500 text-sm">Message cannot be empty.</span>}
                        </div>
                        <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                </div>
                <div className="space-y-8">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                         <h3 className="text-xl font-serif font-bold mb-4">Contact Information</h3>
                         <p><strong>Email:</strong> support@everythingsouvenirs.com</p>
                         <p><strong>Phone:</strong> +234 800 123 4567</p>
                         <p><strong>Address:</strong> 123 Souvenir Lane, Lagos, Nigeria</p>
                    </div>
                     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-64">
                        {/* Map Placeholder */}
                        <img src="https://placehold.co/800x400/E6D9E6/333333/png?text=Map+of+Lagos,+Nigeria" alt="Map of Lagos, Nigeria" className="w-full h-full object-cover rounded-lg"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
