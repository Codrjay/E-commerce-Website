// src/features/product/productSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { Product } from './types';

interface ProductState {
  products: Product[]; // Ensure this is an array of Product
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload; // Make sure payload is of Product[]
    },
    // Add other reducers as needed
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
