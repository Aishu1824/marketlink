import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const products = [
    // Mock product data
    { id: 1, name: 'Product 1', price: 99.99, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 79.99, image: 'product2.jpg' },
    // Add more products here
  ];

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
