import axios from 'axios';

// Create an instance of axios with default settings
const apiClient = axios.create({
  baseURL: 'https://codrjay-ecommercewebsit-p9gu1blo7rr.ws-eu116.gitpod.io/api', // Change this to your backend API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optionally, you can add interceptors for requests or responses here

export default apiClient; // Default export of the axios instance
