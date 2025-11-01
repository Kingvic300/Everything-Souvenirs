
import { products, testimonials, teamMembers, userOrders } from '../data/mockData';
import { Product, Testimonial, TeamMember, Order } from '../types';

const LATENCY = 500; // Simulate network latency

export const fetchProducts = (filters?: { category?: string; maxPrice?: number; color?: string; }): Promise<Product[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      let filteredProducts = products;
      if (filters) {
        if (filters.category) {
          filteredProducts = filteredProducts.filter(p => p.category === filters.category);
        }
        if (filters.maxPrice) {
          filteredProducts = filteredProducts.filter(p => p.price <= filters.maxPrice!);
        }
        if (filters.color) {
          filteredProducts = filteredProducts.filter(p => p.color === filters.color);
        }
      }
      resolve(filteredProducts);
    }, LATENCY);
  });
};

export const fetchProductById = (id: number): Promise<Product | undefined> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.find(p => p.id === id));
    }, LATENCY);
  });
};

export const fetchTestimonials = (): Promise<Testimonial[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(testimonials);
    }, LATENCY);
  });
};

export const fetchTeamMembers = (): Promise<TeamMember[]> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(teamMembers);
      }, LATENCY);
    });
};

export const fetchUserOrders = (): Promise<Order[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(userOrders);
        }, LATENCY)
    })
}

export const submitOrder = (orderData: any): Promise<{ success: boolean; orderId: string }> => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Order submitted:', orderData);
      resolve({ success: true, orderId: `ES${Math.floor(Math.random() * 90000) + 10000}` });
    }, LATENCY * 2);
  });
}
