
import React from 'react';
import { useToastStore } from '../../store';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, XIcon } from './Icons';

const Toast: React.FC<{ message: React.ReactNode; type: 'success' | 'error' | 'info'; onDismiss: () => void }> = ({ message, type, onDismiss }) => {
  const typeStyles = {
    success: 'bg-green-100 border-green-400 text-green-700 dark:bg-green-900 dark:border-green-600 dark:text-green-200',
    error: 'bg-red-100 border-red-400 text-red-700 dark:bg-red-900 dark:border-red-600 dark:text-red-200',
    info: 'bg-blue-100 border-blue-400 text-blue-700 dark:bg-blue-900 dark:border-blue-600 dark:text-blue-200',
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.5 }}
      className={`relative flex items-center w-full max-w-sm p-4 mb-4 border-l-4 rounded-md shadow-lg ${typeStyles[type]}`}
    >
        <div className="flex-shrink-0">
            {type === 'success' && <CheckCircleIcon className="w-6 h-6 text-green-500" />}
        </div>
        <div className="ml-3 text-sm font-medium">{message}</div>
        <button onClick={onDismiss} className="ml-auto -mx-1.5 -my-1.5 p-1.5 rounded-lg focus:ring-2 focus:ring-gray-400">
            <XIcon className="w-5 h-5" />
        </button>
    </motion.div>
  );
};


export const ToastProvider: React.FC = () => {
    const { toasts, removeToast } = useToastStore();

    return (
        <div className="fixed bottom-0 right-0 z-50 p-4 w-full max-w-sm">
            <AnimatePresence>
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        message={toast.message}
                        type={toast.type}
                        onDismiss={() => removeToast(toast.id)}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}

