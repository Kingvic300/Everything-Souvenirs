
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'Travel Souvenirs' | 'Personalized Gifts' | 'Handmade Crafts' | 'Seasonal Collections';
  color: string;
  images: string[];
  video?: string;
  rating: number;
  reviewCount: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface WishlistItem extends Product {}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered';
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  avatar: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}
