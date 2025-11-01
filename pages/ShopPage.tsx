
import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchProducts } from '../api/mockApi';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

const categories = ['Travel Souvenirs', 'Personalized Gifts', 'Handmade Crafts', 'Seasonal Collections'];
const colors = ['Blue', 'Brown', 'Gray', 'Multicolor', 'Beige', 'Red', 'Sepia', 'White', 'Natural', 'Orange', 'Black', 'Gold'];

const ProductCardSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden animate-pulse">
    <div className="h-64 bg-gray-300 dark:bg-gray-700"></div>
    <div className="p-4 space-y-3">
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
      <div className="flex justify-between items-center pt-2">
        <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
      </div>
    </div>
  </div>
);


const ShopPage: React.FC = () => {
  const location = useLocation();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    maxPrice: 100000,
    color: '',
    sort: 'name-asc'
  });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
        setFilters(f => ({ ...f, category }));
    }
  }, [location.search]);

  useEffect(() => {
    setIsLoading(true);
    fetchProducts().then(data => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = products
      .filter(p => filters.category ? p.category === filters.category : true)
      .filter(p => p.price <= filters.maxPrice)
      .filter(p => filters.color ? p.color === filters.color : true);

    switch (filters.sort) {
        case 'name-asc': result.sort((a, b) => a.name.localeCompare(b.name)); break;
        case 'name-desc': result.sort((a, b) => b.name.localeCompare(a.name)); break;
        case 'price-asc': result.sort((a, b) => a.price - b.price); break;
        case 'price-desc': result.sort((a, b) => b.price - a.price); break;
    }
    return result;
  }, [products, filters]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);
  const paginatedProducts = filteredAndSortedProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Filters Sidebar */}
      <aside className="lg:w-1/4 space-y-6">
        <h2 className="text-2xl font-serif font-bold">Filters</h2>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
          <select id="category" name="category" value={filters.category} onChange={handleFilterChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600">
            <option value="">All</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Price: ₦{filters.maxPrice.toLocaleString()}</label>
          <input type="range" id="maxPrice" name="maxPrice" min="1000" max="100000" step="1000" value={filters.maxPrice} onChange={handleFilterChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Color</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {colors.map(color => (
                <button key={color} onClick={() => { setFilters(f => ({...f, color})); setCurrentPage(1); }} className={`w-8 h-8 rounded-full border-2 ${filters.color === color ? 'border-primary' : 'border-transparent'}`} style={{ backgroundColor: color.toLowerCase() }} title={color}></button>
            ))}
             <button onClick={() => { setFilters(f => ({...f, color: ''})); setCurrentPage(1); }} className={`w-8 h-8 rounded-full border-2 ${filters.color === '' ? 'border-primary' : 'border-transparent'} flex items-center justify-center text-red-500`}>X</button>
          </div>
        </div>
      </aside>

      {/* Products Grid */}
      <main className="lg:w-3/4">
        <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">{filteredAndSortedProducts.length} products found</p>
            <select name="sort" value={filters.sort} onChange={handleFilterChange} className="pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600">
                <option value="name-asc">Sort by Name (A-Z)</option>
                <option value="name-desc">Sort by Name (Z-A)</option>
                <option value="price-asc">Sort by Price (Low to High)</option>
                <option value="price-desc">Sort by Price (High to Low)</option>
            </select>
        </div>
        
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence>
                {isLoading ? (
                    Array.from({ length: 6 }).map((_, i) => <ProductCardSkeleton key={i} />)
                ) : paginatedProducts.length > 0 ? (
                    paginatedProducts.map(product => <ProductCard key={product.id} product={product} />)
                ) : (
                    <div className="col-span-full text-center py-12">
                        <h3 className="text-2xl font-serif">No Products Found</h3>
                        <p className="text-gray-500 mt-2">Try adjusting your filters.</p>
                    </div>
                )}
            </AnimatePresence>
        </motion.div>
        
        {/* Pagination */}
        {totalPages > 1 && (
            <div className="flex justify-center mt-12 space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button key={page} onClick={() => setCurrentPage(page)} className={`px-4 py-2 rounded-md ${currentPage === page ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800'}`}>{page}</button>
                ))}
            </div>
        )}
      </main>
    </div>
  );
};

export default ShopPage;
