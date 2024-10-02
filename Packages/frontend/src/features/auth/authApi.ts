import apiClient from '/workspace/E-commerce-Website/Packages/frontend/src/services/apiClient.ts';
import { UserResponse, LoginRequest, RegisterRequest, LogOutResponse } from '../products/types';

export const authApi = {
  login: async (credentials: LoginRequest): Promise<UserResponse> => {
    const response = await apiClient.post<UserResponse>('/auth/login', credentials); // Specify the type here
    return response.data; // Return only the data part of the response
  },
  register: async (userInfo: RegisterRequest): Promise<UserResponse> => {
    const response = await apiClient.post<UserResponse>('/auth/register', userInfo); // Specify the type here
    return response.data; // Return only the data part of the response
  },
  logout: async (): Promise<LogOutResponse> => {
    const response = await apiClient.post<LogOutResponse>('/auth/logout'); // Specify the type here
    return response.data; // Return only the data part of the response
  },
};
