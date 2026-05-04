import React from 'react';
import styles from './Product.module.css';

const ProductCard = ({ product, onRemove }) => {
  return (
    <div 
      className={`${styles.productContainer} ${!product.inStock ? `${styles.outOfStockClass} outOfStockClass` : ''}`}
    >
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;
