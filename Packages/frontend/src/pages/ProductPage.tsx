import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '/workspace/E-commerce-Website/Packages/frontend/src/store/rootReducer.ts'; // Adjust the path based on your structure
import { Product } from '../features/products/types'; // Import the Product type

const ProductPage = () => {
    const { id } = useParams<{ id: string }>(); // Specify id is of type string
    const product = useSelector((state: RootState) =>
      state.product.products.find((p) => p.id === id)
    );
  
    // Check for the product being undefined
    if (!product) {
      return <p>Product not found</p>;
    }
  
    return (
      <div>
        <h1>{product.name}</h1>
        <p>Price: {product.price}</p>
        <p>Quantity: {product.quantity}</p>
      </div>
    );
  };
  
  export default ProductPage;