import React from 'react';

const Cart = () => {
  // Mock cart items
  const cartItems = [
    { id: 1, name: 'Product 1', price: 99.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 79.99, quantity: 1 },
    // Add more cart items here
  ];

  return (
    <div className="p-4">
      {cartItems.map(item => (
        <div key={item.id} className="flex justify-between mb-4">
          <div>{item.name}</div>
          <div>{item.quantity} x ${item.price}</div>
        </div>
      ))}
      <div className="mt-4 text-right">
        <strong>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</strong>
      </div>
    </div>
  );
};

export default Cart;
