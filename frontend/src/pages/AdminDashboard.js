import React from 'react';

const AdminDashboard = () => {
  // Mock product list
  const products = [
    { id: 1, name: 'Product 1', price: 99.99 },
    { id: 2, name: 'Product 2', price: 79.99 },
    // Add more products here
  ];

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Admin Dashboard</h2>
      <ul>
        {products.map(product => (
          <li key={product.id} className="mb-2">
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
