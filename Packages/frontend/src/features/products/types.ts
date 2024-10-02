// src/features/auth/types.ts

export interface User {
    id: string; // This should match the expected type in your application
    username: string;
    email: string;
    role: string; // Adjust according to your needs
  }
  
 // src/features/auth/types.ts

export interface UserResponse {
    token: string;  // Assuming your API response includes a token
    userId: string; // Ensure this matches your backend response
    username: string;
    email: string;
    role: string;   // Adjust according to your needs
  }
  
  export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
  }
  
  export interface LogOutResponse {
    message: string; // Example response structure
  }
  
  // src/features/product/types.ts
export interface Product {
    id: string; // or number, depending on your use case
    name: string;
    price: number;
    quantity: number; 
  }
  
export interface Product {
    id: string; 
    name: string;
    price: number;
    quantity: number; 
  }
  
  