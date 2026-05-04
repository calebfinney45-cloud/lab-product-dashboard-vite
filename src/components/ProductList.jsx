import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onRemove }) => {
  return (
    <div id="product-list">
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          product={product}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default ProductList;