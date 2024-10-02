// src/components/ProductList.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '/workspace/E-commerce-Website/Packages/frontend/src/store/store.ts'; // Adjust the import according to your project structure

const ProductList = () => {
  // Specify the state type using RootState
  const products = useSelector((state: RootState) => state.product.products);

  return (
    <div>
      <h2>Products:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
