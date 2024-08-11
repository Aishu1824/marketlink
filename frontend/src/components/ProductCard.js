import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h2 className="mt-2 text-lg font-bold">{product.name}</h2>
      <p className="mt-1">${product.price}</p>
    </div>
  );
};

export default ProductCard;
