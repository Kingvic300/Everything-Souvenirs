import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem, Product, User, WishlistItem } from '../types';
import { ReactNode } from 'react';

// Theme Store
type ThemeState = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// Cart Store
type CartState = {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        const existingItem = get().items.find((item) => item.id === product.id);
        if (existingItem) {
          set((state) => ({
            items: state.items.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            ),
          }));
        } else {
          set((state) => ({ items: [...state.items, { ...product, quantity }] }));
        }
      },
      removeItem: (productId) =>
        set((state) => ({ items: state.items.filter((item) => item.id !== productId) })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
          ).filter(item => item.quantity > 0),
        })),
      clearCart: () => set({ items: [] }),
      totalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
      totalPrice: () => get().items.reduce((total, item) => total + item.price * item.quantity, 0),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);


// Wishlist Store
type WishlistState = {
  items: WishlistItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
};

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        if (!get().isInWishlist(product.id)) {
          set((state) => ({ items: [...state.items, product] }));
        }
      },
      removeItem: (productId) =>
        set((state) => ({ items: state.items.filter((item) => item.id !== productId) })),
      isInWishlist: (productId) => get().items.some(item => item.id === productId),
    }),
    {
      name: 'wishlist-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);


// Auth Store
type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, pass: string) => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (email, pass) => {
    // Mock login
    console.log(`Logging in with ${email}/${pass}`);
    // Fix: Explicitly type Promise as Promise<void>
    return new Promise<void>(resolve => {
        setTimeout(() => {
            set({ isAuthenticated: true, user: { id: 1, name: 'Demo User', email: email } });
            resolve();
        }, 1000);
    });
  },
  logout: () => set({ isAuthenticated: false, user: null }),
  register: async (name, email, pass) => {
    // Mock register
    console.log(`Registering ${name} with ${email}/${pass}`);
    // Fix: Explicitly type Promise as Promise<void>
    return new Promise<void>(resolve => {
        setTimeout(() => {
            set({ isAuthenticated: true, user: { id: 1, name: name, email: email } });
            resolve();
        }, 1000);
    });
  },
}));

// Toast Store
type ToastMessage = {
  id: number;
  message: ReactNode;
  type: 'success' | 'error' | 'info';
};

type ToastState = {
  toasts: ToastMessage[];
  addToast: (message: ReactNode, type?: ToastMessage['type']) => void;
  removeToast: (id: number) => void;
};

let toastId = 0;

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  addToast: (message, type = 'info') => {
    const id = toastId++;
    set((state) => ({ toasts: [...state.toasts, { id, message, type }] }));
    setTimeout(() => {
      set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
    }, 3000);
  },
  removeToast: (id) => {
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
  },
}));