import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';

const initialProducts = [
  {id:1, name:"Laptop", price:"$999", inStock:true, image: 'https://via.placeholder.com/150'},
  {id:2, name:"Phone", price:"$699", inStock:false, image: 'https://via.placeholder.com/150'},
  {id:3, name:"Tablet", price:"$499", inStock:true, image: 'https://via.placeholder.com/150'}
]

const App = () => {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Requirement 2: Select by ID and update textContent
    const dashboardTitle = document.getElementById('header');
    if (dashboardTitle) {
      dashboardTitle.textContent = "Product Dashboard";
    }
  }, []);

  const filteredProducts = products.filter((product) => {
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true;
  });

  const handleRemove = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Ensure the ID exists for the useEffect and the Test */}
      <h1 id='header'></h1>
      
      <div className='filters' style={{ marginBottom: '20px' }}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('inStock')}>In Stock</button>
        <button onClick={() => setFilter('outOfStock')}>Out of Stock</button>
      </div>

      <ProductList products={filteredProducts} onRemove={handleRemove} />
    </div>
  );
};

export default App;
