import React, { useEffect, useState } from 'react';
import './ProductList.css';
import ProductItem from './ProductItem';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products');
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
